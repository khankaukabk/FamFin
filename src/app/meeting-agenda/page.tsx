
"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Users, Mic, ListChecks, Briefcase, UserCheck, CalendarClock, Target, Landmark, FileText, Bot, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { summarizeDecisions, type AgendaItemDecision } from "@/ai/flows/summarize-meeting-flow";
import { Skeleton } from "@/components/ui/skeleton";

type AgendaItem = {
  time: string;
  topic: string;
  description: string;
  presenter: string;
  icon: React.ElementType;
  vote: 'yes' | 'no' | 'pending';
};

export default function MeetingAgendaPage() {
  const attendees = [
    { name: "Aminuddin Khan", initials: "AK", role: "Project Lead" },
    { name: "Abul Mansur", initials: "AM", role: "Head of Finance" },
    { name: "Abid Abdullah", initials: "AA", role: "Operations" },
    { name: "Ashif Jahan", initials: "AJ", role: "Community Outreach" },
    { name: "Usman Niwaz", initials: "UN", role: "Potential Director" },
  ];

  const initialAgendaItems: AgendaItem[] = [
    { time: "10 min", topic: "New Directorship Proposal", description: "Discuss and vote on Usman Niwaz joining the board. Crucially, we need to clarify the nature of his $1,000,000 payment—is it for the directorship or a separate contribution?", presenter: "Aminuddin", icon: Briefcase, vote: 'pending' },
    { time: "5 min", topic: "Confirm Head of Finance & Team Structure", description: "Officially confirm Abul Mansur as Head of the Finance Team and outline the team's roles and responsibilities.", presenter: "Aminuddin", icon: UserCheck, vote: 'pending' },
    { time: "5 min", topic: "Investment Strategy: TN & AL Projects", description: "Discuss plan to have Tennessee investors prioritize funding for the Alabama project first, then circle back to the Tennessee project.", presenter: "Abul M", icon: Landmark, vote: 'pending' },
    { time: "5 min", topic: "Tax Preparation Strategy", description: "Discuss who will be responsible for preparing taxes and the overall strategy for the upcoming tax season.", presenter: "Abul M", icon: FileText, vote: 'pending' },
    { time: "5 min", topic: "Review Tomorrow's Investor Meeting Schedule", description: "Final run-through of the schedule and roles for the 9:30 AM investor meeting and the 10:30 AM meeting with Selim.", presenter: "Aminuddin", icon: CalendarClock, vote: 'pending' },
  ];

  const [agendaItems, setAgendaItems] = React.useState<AgendaItem[]>(initialAgendaItems);
  const [summary, setSummary] = React.useState<string | null>(null);
  const [isGenerating, setIsGenerating] = React.useState(false);

  const handleVote = (topic: string, decision: 'yes' | 'no') => {
    setAgendaItems(prevItems =>
      prevItems.map(item =>
        item.topic === topic ? { ...item, vote: decision } : item
      )
    );
  };

  const allVotesMade = React.useMemo(() => {
    return agendaItems.every(item => item.vote !== 'pending');
  }, [agendaItems]);

  const handleGenerateSummary = async () => {
    if (!allVotesMade) return;
    setIsGenerating(true);
    setSummary(null);

    const decisions: AgendaItemDecision[] = agendaItems.map(item => ({
      topic: item.topic,
      description: item.description,
      outcome: item.vote,
    }));
    
    try {
        const result = await summarizeDecisions({ decisions });
        setSummary(result.summary);
    } catch (error) {
        console.error("Error generating summary:", error);
        setSummary("There was an error generating the summary. Please try again.");
    } finally {
        setIsGenerating(false);
    }
  };


  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-30 flex h-auto items-center justify-between gap-4 border-b bg-background/80 px-4 py-4 backdrop-blur-sm sm:h-16 sm:px-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
          <Link href="/" passHref>
            <Button variant="outline" size="icon" className="h-8 w-8 flex-shrink-0 sm:h-10 sm:w-10">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="font-headline text-xl font-bold tracking-tight text-primary sm:text-2xl">
            Family Project Sync
          </h1>
        </div>
      </header>
      <main className="flex-1 p-4 sm:px-6 md:p-8">
        <div className="mx-auto max-w-5xl space-y-8">
          
          <Card>
            <CardHeader>
                <CardTitle className="font-headline text-2xl">Board & Strategy Meeting</CardTitle>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-muted-foreground pt-2">
                    <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        <span>Weekly on Saturday</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5" />
                        <span>11:00 AM - 11:30 AM</span>
                    </div>
                </div>
            </CardHeader>
             <CardContent>
                <div className="flex items-start gap-4">
                    <Target className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-headline text-xl">Meeting Summary</h3>
                        <p className="text-muted-foreground">This meeting will finalize key leadership roles, align on a critical investment strategy for cross-state funding, and prepare for upcoming high-stakes investor meetings.</p>
                    </div>
                </div>
            </CardContent>
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
                    {attendees.map((attendee) => (
                        <div key={attendee.name} className="flex items-center gap-3">
                            <Avatar>
                                <AvatarImage src={`https://placehold.co/40x40/FFF/333?text=${attendee.initials}`} />
                                <AvatarFallback>{attendee.initials}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-semibold">{attendee.name}</p>
                                <p className="text-sm text-muted-foreground">{attendee.role}</p>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>

            <Card className="md:col-span-2">
                <CardHeader>
                     <div className="flex items-center gap-3">
                        <ListChecks className="h-8 w-8 text-primary" />
                        <CardTitle className="font-headline text-xl">Agenda & Voting</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    {/* Desktop Table */}
                    <Table className="hidden md:table">
                        <TableHeader>
                            <TableRow>
                                <TableHead>Topic</TableHead>
                                <TableHead className="text-right w-[150px]">Decision</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {agendaItems.map((item) => (
                                <TableRow key={item.topic}>
                                    <TableCell className="font-semibold">
                                        <div className="flex items-start gap-3">
                                            <item.icon className="h-5 w-5 text-primary/80 mt-1 flex-shrink-0" />
                                            <div>
                                              {item.topic}
                                              <p className="text-sm font-normal text-muted-foreground mt-1">{item.description}</p>
                                              <p className="text-xs text-muted-foreground/80 mt-2 flex items-center gap-1.5"><Mic className="h-3 w-3"/>{item.presenter} • {item.time}</p>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-right space-x-2">
                                        <Button
                                            size="sm"
                                            variant={item.vote === 'yes' ? 'default' : 'outline'}
                                            onClick={() => handleVote(item.topic, 'yes')}
                                            className={`transition-all ${item.vote === 'yes' ? 'bg-green-600 hover:bg-green-700' : ''}`}
                                        >
                                            Yes
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant={item.vote === 'no' ? 'destructive' : 'outline'}
                                            onClick={() => handleVote(item.topic, 'no')}
                                        >
                                            No
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                     {/* Mobile List */}
                    <div className="space-y-6 md:hidden">
                        {agendaItems.map((item) => (
                            <div key={item.topic} className="border-b pb-4 last:border-b-0">
                                <div className="flex items-start gap-3">
                                    <item.icon className="h-5 w-5 text-primary/80 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold">{item.topic}</p>
                                        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                                        <p className="text-xs text-muted-foreground/80 mt-2 flex items-center gap-1.5"><Mic className="h-3 w-3"/>{item.presenter} • {item.time}</p>
                                    </div>
                                </div>
                                <div className="mt-4 flex justify-end space-x-2">
                                     <Button
                                        size="sm"
                                        variant={item.vote === 'yes' ? 'default' : 'outline'}
                                        onClick={() => handleVote(item.topic, 'yes')}
                                        className={`transition-all w-20 ${item.vote === 'yes' ? 'bg-green-600 hover:bg-green-700' : ''}`}
                                    >
                                        Yes
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant={item.vote === 'no' ? 'destructive' : 'outline'}
                                        onClick={() => handleVote(item.topic, 'no')}
                                        className="w-20"
                                    >
                                        No
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
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
                    {summary && (
                        <div className="prose prose-sm max-w-none text-muted-foreground rounded-md border bg-muted/50 p-4">
                            <p>{summary}</p>
                        </div>
                    )}
                </div>
            </CardContent>
          </Card>
          
        </div>
      </main>
       <footer className="text-center p-4 text-muted-foreground text-xs">
        Meeting agenda generated for the project team
      </footer>
    </div>
  );
}

    