
'use client';

import * as React from 'react';
import { useMemo } from 'react';
import {
  useFirestore,
  useCollection,
  useDoc,
  WithId,
} from '@/firebase';
import {
  createSession,
  updateAttendance,
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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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
import { PlusCircle } from 'lucide-react';

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

  const sessionsQuery = useMemo(
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

  const latestSessionQuery = useMemo(
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


  const sessionDocRef = useMemo(
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
    if (!activeSession) return;
    const currentStatus = activeSession.attendance[name] || false;
    updateAttendance(firestore, activeSession.id, name, !currentStatus);
  };

  const handleCreateNewSession = async () => {
    const newSessionId = await createSession(firestore, members);
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
                  <Label htmlFor="session-select">Select Session</Label>
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
                <div className="space-y-2 flex items-end">
                    <Button onClick={handleCreateNewSession} className="w-full sm:w-auto">
                        <PlusCircle className="mr-2" />
                        Create New Session
                    </Button>
                </div>
              </div>

              {isLoadingActiveSession && (
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
                              checked={!!attendanceData[name]}
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

