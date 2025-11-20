
"use client";

import * as React from "react";
import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { User, HeartHandshake, ClipboardList, Clock, Info, CheckSquare } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";

const dailyTasks = [
  "Assist with personal care (dressing, grooming)",
  "Provide medication reminders",
  "Prepare light meals and assist with feeding if needed",
  "Perform light housekeeping (tidying up, laundry)",
  "Offer companionship and engage in conversation",
  "Accompany to appointments or social outings",
];

const hourLog = [
  { date: "Monday, Nov 18", hours: "4.5", notes: "Assisted with morning routine and prepared lunch." },
  { date: "Tuesday, Nov 19", hours: "5.0", notes: "Doctor's appointment in the afternoon." },
  { date: "Wednesday, Nov 20", hours: "4.0", notes: "Light housekeeping and companionship." },
];

export default function RumaPersonalChoicePage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navigation title="Ruma's Personal Choice Job" />
      <main className="flex-1 p-4 sm:px-6 md:p-8">
        <div className="mx-auto max-w-4xl space-y-8">
          
          <Card>
            <CardHeader>
              <div className="flex items-start gap-4">
                <Info className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                <div>
                  <CardTitle className="font-headline text-xl">Job Overview</CardTitle>
                  <CardDescription>Providing compassionate in-home care and support.</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <User className="h-6 w-6 text-accent" />
                  <div>
                    <h4 className="font-semibold">Client</h4>
                    <p className="text-muted-foreground">John Doe</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <HeartHandshake className="h-6 w-6 text-accent" />
                  <div>
                    <h4 className="font-semibold">Role</h4>
                    <p className="text-muted-foreground">Personal Care Assistant</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-start gap-4">
                <ClipboardList className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                <div>
                  <CardTitle className="font-headline text-xl">Key Responsibilities & Daily Tasks</CardTitle>
                  <CardDescription>A checklist of typical duties and activities.</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {dailyTasks.map((task, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckSquare className="h-5 w-5 text-green-500" />
                    <span className="text-muted-foreground">{task}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-start gap-4">
                <Clock className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                <div>
                  <CardTitle className="font-headline text-xl">Weekly Hour Log</CardTitle>
                  <CardDescription>A record of hours worked for the current week.</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-center">Hours</TableHead>
                    <TableHead>Notes</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {hourLog.map((log, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{log.date}</TableCell>
                      <TableCell className="text-center font-semibold">{log.hours}</TableCell>
                      <TableCell className="text-muted-foreground">{log.notes}</TableCell>
                    </TableRow>
                  ))}
                   <TableRow className="border-t-2 border-primary/20">
                      <TableCell className="font-bold">Total</TableCell>
                      <TableCell className="text-center font-bold text-lg text-primary">
                        {hourLog.reduce((acc, log) => acc + parseFloat(log.hours), 0).toFixed(1)}
                      </TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

        </div>
      </main>
      <footer className="text-center p-4 text-muted-foreground text-xs">
        Personal Choice Program - Caregiver Portal
      </footer>
    </div>
  );
}
