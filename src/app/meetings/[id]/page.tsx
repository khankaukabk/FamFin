
"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, Users, Mic, ListChecks, Bot, Sparkles, PlusCircle, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { useDoc, useFirestore, useUser } from "@/firebase";
import { doc, updateDoc } from "firebase/firestore";
import type { Meeting, AgendaItem } from "@/lib/types";
import { summarizeDecisions, type AgendaItemDecision } from "@/ai/flows/summarize-meeting-flow";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { nanoid } from 'nanoid';
import { format } from "date-fns";
import { useRouter } from 'next/navigation';

export default function MeetingPage({ params }: { params: { id: string } }) {
  const firestore = useFirestore();
  const { user, isUserLoading } = useUser();
  const router = useRouter();

  const meetingRef = React.useMemo(() => {
    if (!firestore || !params.id) return null;
    return doc(firestore, "meetings", params.id);
  }, [firestore, params.id]);

  const { data: meeting, isLoading: loading, error } = useDoc<Meeting>(meetingRef);
  const [isGenerating, setIsGenerating] = React.useState(false);

  React.useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/login');
    }
     if (!loading && meeting && user && meeting.userId !== user.uid) {
      router.push('/meetings');
    }
  }, [user, isUserLoading, router, meeting, loading]);

  const updateMeeting = async (updatedData: Partial<Meeting>) => {
    if (!meetingRef) return;
    await updateDoc(meetingRef, updatedData);
  };

  const handleVote = (itemId: string, decision: 'yes' | 'no') => {
    if (!meeting) return;
    const updatedAgenda = meeting.agenda.map(item =>
      item.id === itemId ? { ...item, vote: decision } : item
    );
    updateMeeting({ agenda: updatedAgenda });
  };
  
  const addAgendaItem = () => {
    if (!meeting) return;
    const newItem: AgendaItem = {
      id: nanoid(),
      topic: 'New Topic',
      description: '',
      presenter: '',
      time: '5 min',
      vote: 'pending',
    };
    updateMeeting({ agenda: [...meeting.agenda, newItem] });
  };
  
  const removeAgendaItem = (itemId: string) => {
    if (!meeting) return;
    const updatedAgenda = meeting.agenda.filter(item => item.id !== itemId);
    updateMeeting({ agenda: updatedAgenda });
  };
  
  const handleAgendaChange = (itemId: string, field: keyof AgendaItem, value: string) => {
      if (!meeting) return;
      const updatedAgenda = meeting.agenda.map(item =>
          item.id === itemId ? { ...item, [field]: value } : item
      );
      updateMeeting({ agenda: updatedAgenda });
  };

  const allVotesMade = React.useMemo(() => {
    return meeting?.agenda?.every(item => item.vote !== 'pending');
  }, [meeting?.agenda]);

  const handleGenerateSummary = async () => {
    if (!meeting || !allVotesMade) return;
    setIsGenerating(true);

    const decisions: AgendaItemDecision[] = meeting.agenda.map(item => ({
      topic: item.topic,
      description: item.description,
      outcome: item.vote,
    }));

    try {
      const result = await summarizeDecisions({ decisions });
      updateMeeting({ summary: result.summary });
    } catch (error) {
      console.error("Error generating summary:", error);
      updateMeeting({ summary: "There was an error generating the summary. Please try again." });
    } finally {
      setIsGenerating(false);
    }
  };

  if (loading || isUserLoading) {
    return <div>Loading...</div>;
  }
  
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  
  if (!meeting) {
    return <div>Meeting not found.</div>
  }

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-30 flex h-auto items-center justify-between gap-4 border-b bg-background/80 px-4 py-4 backdrop-blur-sm sm:h-16 sm:px-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
          <Link href="/meetings" passHref>
            <Button variant="outline" size="icon" className="h-8 w-8 flex-shrink-0 sm:h-10 sm:w-10">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <Input
            className="font-headline text-xl font-bold tracking-tight text-primary sm:text-2xl bg-transparent border-none focus-visible:ring-0"
            value={meeting?.title}
            onChange={(e) => updateMeeting({ title: e.target.value })}
            />
        </div>
      </header>
      <main className="flex-1 p-4 sm:px-6 md:p-8">
        <div className="mx-auto max-w-5xl space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Meeting Details</CardTitle>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-muted-foreground pt-2">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>{meeting?.date && meeting.date.toDate ? format(meeting.date.toDate(), 'MMMM d, yyyy') : 'Date not set'}</span>
                </div>
              </div>
            </CardHeader>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="md:col-span-1">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Users className="h-8 w-8 text-primary" />
                  <CardTitle className="font-headline text-xl">Attendees</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {meeting?.attendees?.map((attendee, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={`https://placehold.co/40x40/FFF/333?text=${attendee.charAt(0)}`} />
                      <AvatarFallback>{attendee.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <p className="font-semibold">{attendee}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <ListChecks className="h-8 w-8 text-primary" />
                        <CardTitle className="font-headline text-xl">Agenda & Voting</CardTitle>
                    </div>
                    <Button variant="outline" size="sm" onClick={addAgendaItem}>
                        <PlusCircle className="h-4 w-4 mr-2" />
                        Add Item
                    </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {meeting?.agenda?.map((item) => (
                  <div key={item.id} className="border rounded-md p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <Input 
                        value={item.topic}
                        onChange={(e) => handleAgendaChange(item.id, 'topic', e.target.value)}
                        className="text-lg font-semibold border-none focus-visible:ring-0 p-0"
                      />
                      <Button variant="ghost" size="icon" onClick={() => removeAgendaItem(item.id)}>
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                    <Textarea
                      value={item.description}
                      onChange={(e) => handleAgendaChange(item.id, 'description', e.target.value)}
                      placeholder="Description"
                      className="text-sm text-muted-foreground"
                    />
                    <div className="flex items-center gap-4 text-xs text-muted-foreground/80">
                      <Mic className="h-3 w-3"/>
                      <Input
                        value={item.presenter}
                        onChange={(e) => handleAgendaChange(item.id, 'presenter', e.target.value)}
                        placeholder="Presenter"
                        className="w-24 h-6"
                        />
                      <span>•</span>
                      <Input
                        value={item.time}
                        onChange={(e) => handleAgendaChange(item.id, 'time', e.target.value)}
                        placeholder="Time"
                        className="w-16 h-6"
                       />
                    </div>
                    <div className="flex justify-end space-x-2 pt-2">
                      <Button
                          size="sm"
                          variant={item.vote === 'yes' ? 'default' : 'outline'}
                          onClick={() => handleVote(item.id, 'yes')}
                          className={`transition-all w-20 ${item.vote === 'yes' ? 'bg-green-600 hover:bg-green-700' : ''}`}
                      >
                          Yes
                      </Button>
                      <Button
                          size="sm"
                          variant={item.vote === 'no' ? 'destructive' : 'outline'}
                          onClick={() => handleVote(item.id, 'no')}
                          className="w-20"
                      >
                          No
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Bot className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle className="font-headline text-xl">AI-Powered Summary</CardTitle>
                  <CardDescription>Once all items are voted on, generate a meeting summary.</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button
                  onClick={handleGenerateSummary}
                  disabled={!allVotesMade || isGenerating}
                >
                  {isGenerating ? "Generating..." : "Generate Summary"}
                  {!isGenerating && <Sparkles className="ml-2 h-4 w-4" />}
                </Button>
                {isGenerating && (
                  <div className="space-y-2 pt-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                )}
                {meeting?.summary && (
                  <div className="prose prose-sm max-w-none text-muted-foreground rounded-md border bg-muted/50 p-4">
                    <p>{meeting.summary}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
