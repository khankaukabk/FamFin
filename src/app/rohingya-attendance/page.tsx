
'use client';

import * as React from 'react';
import { useMemo } from 'react';
import {
  useFirestore,
  useCollection,
  useDoc,
  type WithId,
  useMemoFirebase,
} from '@/firebase';
import {
  createSession,
  updateAttendance,
  sanitizeMemberName,
  deleteSession,
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
import { PlusCircle, CalendarIcon, MoreVertical, Trash2, Users } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useToast } from '@/hooks/use-toast';


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
  const { toast } = useToast();
  const [selectedSessionId, setSelectedSessionId] = React.useState<string | null>(null);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = React.useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = React.useState(false);
  const [sessionToDelete, setSessionToDelete] = React.useState<WithId<AttendanceSession> | null>(null);
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
  const { data: sessions, isLoading: isLoadingSessions, error: sessionsError } = useCollection<AttendanceSession>(sessionsQuery);

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
  const { data: latestSession } = useCollection<AttendanceSession>(latestSessionQuery);


  const sessionDocRef = useMemoFirebase(
    () =>
      firestore && selectedSessionId
        ? doc(firestore, 'attendanceSessions', selectedSessionId)
        : null,
    [firestore, selectedSessionId]
  );
  const { data: activeSession, isLoading: isLoadingActiveSession } = useDoc<AttendanceSession>(sessionDocRef);

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
    setIsCreateDialogOpen(false);
    toast({ title: "Success", description: "New session has been created." });
  };
  
  const openDeleteDialog = (session: WithId<AttendanceSession>) => {
    setSessionToDelete(session);
    setIsDeleteDialogOpen(true);
  };
  
  const handleDeleteSession = async () => {
    if (!firestore || !sessionToDelete) return;
    await deleteSession(firestore, sessionToDelete.id);
    toast({ title: "Success", description: `Session for ${new Date(sessionToDelete.date).toLocaleDateString()} has been deleted.` });

    if(selectedSessionId === sessionToDelete.id) {
       const nextSession = sessions?.find(s => s.id !== sessionToDelete.id);
       setSelectedSessionId(nextSession?.id || null);
    }

    setSessionToDelete(null);
    setIsDeleteDialogOpen(false);
  }

  const attendanceData = activeSession?.attendance || {};

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navigation title="Rohingya Wellness Group" />
      <main className="flex-1 p-4 sm:px-6 md:p-8">
        <div className="mx-auto max-w-4xl space-y-8">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="font-headline text-2xl">
                      Rohingya Wellness Group
                    </CardTitle>
                    <CardDescription className="mt-1">
                      Manage and track attendance for wellness group sessions.
                    </CardDescription>
                  </div>
                  <Button onClick={() => setIsCreateDialogOpen(true)}>
                      <PlusCircle className="mr-2 h-4 w-4" />
                      New Session
                  </Button>
              </div>
            </CardHeader>
            <CardContent>
              {sessionsError && (
                <Alert variant="destructive" className="mb-6">
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    Could not load session data. Please check your connection or permissions.
                  </AlertDescription>
                </Alert>
              )}
              <div className="space-y-2">
                <Label htmlFor="session-select">Select a Session</Label>
                {isLoadingSessions ? (
                   <Skeleton className="h-10 w-full" />
                ) : (
                  <div className="flex items-center gap-2">
                    <Select
                      value={selectedSessionId || ''}
                      onValueChange={setSelectedSessionId}
                      disabled={!sessions || sessions.length === 0}
                    >
                      <SelectTrigger id="session-select" className="flex-grow">
                        <SelectValue placeholder="No sessions found. Create one to begin." />
                      </SelectTrigger>
                      <SelectContent>
                        {sessions?.map((session) => (
                          <SelectItem key={session.id} value={session.id}>
                            Session #{session.sessionNumber} - {new Date(session.date).toLocaleDateString()}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {activeSession && (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem onClick={() => openDeleteDialog(activeSession)} className="text-red-500">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete Session
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    )}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
          
          <Card>
              <CardHeader>
                <CardTitle className="font-headline text-xl">
                    {activeSession ? `Attendance for Session #${activeSession.sessionNumber}` : "Attendance"}
                </CardTitle>
                <CardDescription>
                    {activeSession ? `Date: ${new Date(activeSession.date).toLocaleDateString()}` : "No session selected."}
                </CardDescription>
              </CardHeader>
              <CardContent>
                  {isLoadingActiveSession && selectedSessionId && (
                    <div className="space-y-4">
                      {[...Array(5)].map((_, i) => <Skeleton key={i} className="h-12 w-full" />)}
                    </div>
                  )}
                  
                  {!isLoadingActiveSession && activeSession && (
                    <div className="border rounded-lg">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-[70%]">Name</TableHead>
                            <TableHead className="text-center">Present</TableHead>
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

                  {!isLoadingActiveSession && !activeSession && (
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
      
      {/* Create Session Dialog */}
      <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogContent>
              <DialogHeader>
                  <DialogTitle className="font-headline">Create New Session</DialogTitle>
                  <DialogDescription>
                      Select a date for the new attendance session.
                  </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                  <Label>Session Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal mt-2",
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
              </div>
              <DialogFooter>
                  <DialogClose asChild><Button variant="ghost">Cancel</Button></DialogClose>
                  <Button onClick={handleCreateNewSession} disabled={!newSessionDate}>Create Session</Button>
              </DialogFooter>
          </DialogContent>
      </Dialog>
      
      {/* Delete Confirmation Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the session for{' '}
              <strong>{sessionToDelete ? new Date(sessionToDelete.date).toLocaleDateString() : ''}</strong>.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteSession}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
