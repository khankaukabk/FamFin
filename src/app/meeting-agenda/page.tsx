
"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Users, User, Mic, ListChecks, CheckSquare, Briefcase, UserCheck, CalendarClock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function MeetingAgendaPage() {
  const attendees = [
    { name: "Kausain", initials: "K", role: "Project Lead" },
    { name: "Ammu", initials: "A", role: "Finance Advisor" },
    { name: "Musaab", initials: "M", role: "Operations" },
    { name: "Kaukab", initials: "K", role: "Community Outreach" },
    { name: "Abbu", initials: "A", role: "Technical Advisor" },
    { name: "Usman", initials: "U", role: "Potential Director" },
    { name: "Mansur", initials: "M", role: "CFO" },
  ];

  const agendaItems = [
    { time: "15 min", topic: "New Directorship: Should Usman be a director?", presenter: "Kausain", icon: Briefcase },
    { time: "15 min", topic: "Confirm Mansur as CFO & Finance Team Structure", presenter: "Ammu", icon: UserCheck },
    { time: "10 min", topic: "Review Tomorrow's Meeting Schedule", presenter: "Kausain", icon: CalendarClock },
  ];

  const actionItems = [
      { task: "Finalize decision on Usman's directorship.", owner: "All", status: "Not Started" },
      { task: "Send official confirmation to Mansur regarding CFO role.", owner: "Kausain", status: "Not Started" },
      { task: "Confirm attendance for investor and Selim meetings.", owner: "Musaab", status: "Not Started" },
  ];

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
                        <span>October 29, 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5" />
                        <span>8:00 PM - 8:45 PM</span>
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
                        <CardTitle className="font-headline text-xl">Agenda</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[80px]">Time</TableHead>
                                <TableHead>Topic</TableHead>
                                <TableHead>Presenter</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {agendaItems.map((item) => (
                                <TableRow key={item.topic}>
                                    <TableCell className="font-medium text-muted-foreground">{item.time}</TableCell>
                                    <TableCell className="font-semibold flex items-center gap-3">
                                        <item.icon className="h-5 w-5 text-primary/80" />
                                        {item.topic}
                                    </TableCell>
                                    <TableCell className="flex items-center gap-2">
                                      <Mic className="h-4 w-4 text-muted-foreground" />
                                      {item.presenter}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
                 <div className="flex items-center gap-3">
                    <CheckSquare className="h-8 w-8 text-primary" />
                    <CardTitle className="font-headline text-xl">Action Items</CardTitle>
                </div>
                <CardDescription>Tasks and responsibilities assigned during the meeting.</CardDescription>
            </CardHeader>
            <CardContent>
               <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Task Description</TableHead>
                            <TableHead className="w-[150px]">Owner</TableHead>
                            <TableHead className="w-[120px] text-right">Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {actionItems.map((item) => (
                             <TableRow key={item.task}>
                                <TableCell className="font-medium">{item.task}</TableCell>
                                <TableCell>{item.owner}</TableCell>
                                <TableCell className="text-right">
                                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                                        item.status === 'Completed' ? 'bg-green-100 text-green-800' :
                                        item.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                                        'bg-red-100 text-red-800'
                                    }`}>
                                        {item.status}
                                    </span>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
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
