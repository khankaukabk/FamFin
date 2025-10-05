
"use client";

import * as React from 'react';
import { PlusCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { format } from 'date-fns';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useCollection, useFirestore } from '@/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { type Meeting } from '@/lib/types';
import { useRouter } from 'next/navigation';

export default function MeetingsPage() {
  const router = useRouter();
  const firestore = useFirestore();
  const meetingsCollection = React.useMemo(() => {
    if (!firestore) return null;
    return collection(firestore, 'meetings');
  }, [firestore]);

  const { data: meetings, loading } = useCollection<Meeting>(meetingsCollection);

  const createNewMeeting = async () => {
    if (!meetingsCollection) return;

    const newMeeting: Omit<Meeting, 'id'> = {
      title: 'New Meeting',
      date: serverTimestamp() as any,
      attendees: [],
      agenda: [],
    };
    const docRef = await addDoc(meetingsCollection, newMeeting);
    router.push(`/meetings/${docRef.id}`);
  };

  return (
    <div className="flex min-h-screen w-full flex-col">
       <header className="sticky top-0 z-30 flex h-auto items-center justify-between gap-4 border-b bg-background/80 px-4 py-4 backdrop-blur-sm sm:h-16 sm:flex-row sm:px-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
          <Link href="/" passHref>
            <Button variant="outline" className="w-full sm:w-auto">
              Back to Dashboard
            </Button>
          </Link>
          <h1 className="font-headline text-xl font-bold tracking-tight text-primary sm:text-2xl">
            Meetings
          </h1>
        </div>
        <Button onClick={createNewMeeting}>
          <PlusCircle className="mr-2 h-4 w-4" />
          New Meeting
        </Button>
      </header>
      <main className="flex-1 p-4 sm:px-6 md:p-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {loading && Array.from({ length: 3 }).map((_, i) => (
            <Card key={i}>
              <CardHeader>
                <div className="h-6 w-3/4 rounded bg-muted animate-pulse" />
                <div className="h-4 w-1/2 rounded bg-muted animate-pulse" />
              </CardHeader>
              <CardContent>
                <div className="h-4 w-full rounded bg-muted animate-pulse" />
              </CardContent>
            </Card>
          ))}
          {meetings?.map((meeting) => (
            <Card key={meeting.id}>
              <CardHeader>
                <CardTitle>{meeting.title}</CardTitle>
                <CardDescription>
                  {meeting.date ? format(meeting.date.toDate(), 'MMMM d, yyyy') : 'Date not set'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={`/meetings/${meeting.id}`} passHref>
                  <Button variant="outline" className="w-full">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
