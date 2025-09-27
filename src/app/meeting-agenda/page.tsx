
"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Users, User, Mic, ListChecks, CheckSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function MeetingAgendaPage() {
  const attendees = [
    { name: "Kausain Khan", initials: "KK", role: "Project Lead" },
    { name: "Ammu Khan", initials: "AK", role: "Finance Advisor" },
    { name: "Musaab Khan", initials: "MK", role: "Operations" },
    { name: "Kaukab Khan", initials: "KK", role: "Community Outreach" },
    { name: "Abbu Khan", initials: "AK", role: "Technical Advisor" },
  ];

  const agendaItems = [
    { time: "10 min", topic: "Review of Q3 Financials & Performance", presenter: "Ammu Khan" },
    { time: "15 min", topic: "Poultry Farm Project: Final Budget Review", presenter: "Kausain Khan" },
    { time: "10 min", topic: "Community Labor Exchange: Program Update", presenter: "Kaukab Khan" },
    { time: "15 min", topic: "Infrastructure Plan & Timeline for Coops", presenter: "Abbu & Musaab Khan" },
    { time: "10 min", topic: "Next Steps & Action Item Assignments", presenter: "Kausain Khan" },
  ];

  const actionItems = [
      { task: "Finalize and approve the Q4 startup budget for the poultry farm.", owner: "Ammu Khan", status: "Completed" },
      { task: "Purchase materials for the two chicken coops and fencing.", owner: "Abbu Khan", status: "In Progress" },
      { task: "Coordinate with the two community members for the labor exchange shifts.", owner: "Kaukab Khan", status: "Not Started" },
      { task: "Draft a one-page summary of the business plan for grant applications.", owner: "Kausain Khan", status: "Not Started" },
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
                <CardTitle className="font-headline text-2xl">Quarterly Planning Meeting</CardTitle>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-muted-foreground pt-2">
                    <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        <span>October 28, 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5" />
                        <span>7:00 PM - 8:00 PM</span>
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
                                    <TableCell className="font-semibold">{item.topic}</TableCell>
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
        Meeting agenda generated for the Khan Family
      </footer>
    </div>
  );
}
