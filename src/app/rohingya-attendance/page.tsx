
'use client';

import * as React from 'react';
import { useMemo } from 'react';
import {
  useFirestore,
  useCollection,
  useDoc,
  WithId,
  useMemoFirebase,
} from '@/firebase';
import {
  createSession,
  updateAttendance,
  sanitizeMemberName,
} from '@/lib/attendance-service';
import {
  collection,
  doc,
  query,
  orderBy,
  limit,
} from 'firebase/firestore';
import { Navigation } from '@/components/ui/navigation';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PlusCircle, CalendarIcon } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';


const members = [
  'Shom M.',
  'Mohammed A.',
  'Somuda B.',
  'Abu J.',
  'Mohammed S.',
  'Roziya B.',
  'Anowar S.',
  'Mohammed S.',
  'Jamal H.',
  'Ramida B.',
  'Mohammed Nur H.',
  'Noor A.',
  'Noor K.',
];

type AttendanceSession = {
  date: string;
  sessionNumber: number;
  attendance: Record<string, boolean>;
};

export default function RohingyaAttendancePage() {
  const firestore = useFirestore();
  const [selectedSessionId, setSelectedSessionId] = React.useState<
    string | null
  >(null);
  const [newSessionDate, setNewSessionDate] = React.useState<Date | undefined>(new Date());

  const sessionsQuery = useMemoFirebase(
    () =>
      firestore
        ? query(
            collection(firestore, 'attendanceSessions'),
            orderBy('date', 'desc')
          )
        : null,
    [firestore]
  );
  const {
    data: sessions,
    isLoading: isLoadingSessions,
    error: sessionsError,
  } = useCollection<AttendanceSession>(sessionsQuery);

  const latestSessionQuery = useMemoFirebase(
    () =>
      firestore
        ? query(
            collection(firestore, 'attendanceSessions'),
            orderBy('date', 'desc'),
            limit(1)
          )
        : null,
    [firestore]
  );

  const { data: latestSession, isLoading: isLoadingLatest } = useCollection<AttendanceSession>(latestSessionQuery);


  const sessionDocRef = useMemoFirebase(
    () =>
      firestore && selectedSessionId
        ? doc(firestore, 'attendanceSessions', selectedSessionId)
        : null,
    [firestore, selectedSessionId]
  );

  const {
    data: activeSession,
    isLoading: isLoadingActiveSession,
  } = useDoc<AttendanceSession>(sessionDocRef);

  React.useEffect(() => {
    if (!selectedSessionId && latestSession && latestSession.length > 0) {
      setSelectedSessionId(latestSession[0].id);
    }
  }, [latestSession, selectedSessionId]);

  const handleCheckChange = (name: string) => {
    if (!activeSession || !firestore) return;
    updateAttendance(firestore, activeSession.id, name, !activeSession.attendance[sanitizeMemberName(name)]);
  };

  const handleCreateNewSession = async () => {
    if (!firestore || !newSessionDate) return;
    const newSessionId = await createSession(firestore, members, newSessionDate);
    setSelectedSessionId(newSessionId);
  };

  const attendanceData = activeSession?.attendance || {};

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navigation title="Rohingya Wellness Group Attendance" />
      <main className="flex-1 p-4 sm:px-6 md:p-8">
        <div className="mx-auto max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">
                Attendance Sheet
              </CardTitle>
              <CardDescription>
                Mark attendance for the wellness group session.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {sessionsError && (
                <Alert variant="destructive">
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    Could not load session data. Please check your connection or permissions.
                  </AlertDescription>
                </Alert>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="space-y-2">
                  <Label htmlFor="session-select">Select Existing Session</Label>
                  {isLoadingSessions ? (
                     <Skeleton className="h-10 w-full" />
                  ) : (
                    <Select
                      value={selectedSessionId || ''}
                      onValueChange={setSelectedSessionId}
                    >
                      <SelectTrigger id="session-select">
                        <SelectValue placeholder="Select a session" />
                      </SelectTrigger>
                      <SelectContent>
                        {sessions?.map((session) => (
                          <SelectItem key={session.id} value={session.id}>
                            Session #{session.sessionNumber} - {new Date(session.date).toLocaleDateString()}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-session-date">Or Create New Session</Label>
                   <div className="flex flex-col sm:flex-row gap-2">
                     <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            id="new-session-date"
                            variant={"outline"}
                            className={cn(
                              "w-full sm:w-[240px] justify-start text-left font-normal",
                              !newSessionDate && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {newSessionDate ? format(newSessionDate, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={newSessionDate}
                            onSelect={setNewSessionDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    <Button onClick={handleCreateNewSession} className="w-full sm:w-auto flex-grow">
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Create
                    </Button>
                   </div>
                </div>
              </div>

              {isLoadingActiveSession && selectedSessionId && (
                <div className="space-y-4">
                  <Skeleton className="h-12 w-full" />
                  <Skeleton className="h-12 w-full" />
                  <Skeleton className="h-12 w-full" />
                </div>
              )}
              
              {!isLoadingActiveSession && activeSession && (
                <div className="border rounded-lg">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[70%]">Name</TableHead>
                        <TableHead className="text-center">
                          Attendance (mark with check)
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {members.map((name, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{name}</TableCell>
                          <TableCell className="text-center">
                            <Checkbox
                              id={`attendance-${index}`}
                              checked={!!attendanceData[sanitizeMemberName(name)]}
                              onCheckedChange={() => handleCheckChange(name)}
                              aria-label={`Mark ${name} as present`}
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}

              {!isLoadingActiveSession && !activeSession && !isLoadingSessions && (
                <div className="text-center py-10">
                  <p className="text-muted-foreground">Select a session or create a new one to begin.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      <footer className="text-center p-4 text-muted-foreground text-xs">
        Attendance tracking for Rohingya Wellness Group.
      </footer>
    </div>
  );
}
