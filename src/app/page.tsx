
"use client";

import * as React from "react";
import { Phone, Mail, ShieldCheck, Briefcase, Wallet, Calendar, Users, Car, ArchiveRestore } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Navigation } from "@/components/ui/navigation";
import { Separator } from "@/components/ui/separator";

const weeklyTasks = [
  {
    week: "Week 1",
    dates: "November 1-7",
    tasks: [
      {
        icon: ArchiveRestore,
        title: "Return Shein Package",
        description: "Process the return for the recent order.",
      },
      {
        icon: Phone,
        title: "Call EBT for Mom",
        description: "Follow up on the status of the application.",
      },
      {
        icon: Mail,
        title: "Check Mail for EBT Letter",
        description: "Look for the official confirmation letter.",
      },
      {
        icon: Briefcase,
        title: "Complete Unemployment Benefits",
        description: "Certify for weekly benefits online.",
      },
      {
        icon: Users,
        title: "Rohingya Class Orientation",
        description: "Lead the orientation session for new members every Wednesday.",
      },
      {
        icon: Users,
        title: "Rohingya Class & Babysitting",
        description: "Attend the weekly educational session and provide childcare support every Friday.",
      },
    ],
  },
  {
    week: "Week 2",
    dates: "November 8-14",
    tasks: [
      {
        icon: ShieldCheck,
        title: "Medicare Meeting",
        description: "Attend the meeting at 12:30 PM this Thursday.",
      },
      {
        icon: Car,
        title: "Tire Replacement on 11/11",
        description: "Appointment to replace all four tires.",
      },
       {
        icon: Briefcase,
        title: "Complete Unemployment Benefits",
        description: "Certify for weekly benefits online.",
      },
      {
        icon: Users,
        title: "Rohingya Class Orientation",
        description: "Lead the orientation session for new members every Wednesday.",
      },
      {
        icon: Users,
        title: "Rohingya Class & Babysitting",
        description: "Attend the weekly educational session and provide childcare support every Friday.",
      },
    ],
  },
  {
    week: "Week 3",
    dates: "November 15-21",
    tasks: [
      {
        icon: Calendar,
        title: "Atlanta Visit for Masturaat Ta'lim",
        description: "Travel for the educational gathering on the 15th.",
      },
      {
        icon: Briefcase,
        title: "Complete Unemployment Benefits",
        description: "Certify for weekly benefits online.",
      },
      {
        icon: Users,
        title: "Rohingya Class Orientation",
        description: "Lead the orientation session for new members every Wednesday.",
      },
      {
        icon: Users,
        title: "Rohingya Class & Babysitting",
        description: "Attend the weekly educational session and provide childcare support every Friday.",
      },
    ],
  },
  {
    week: "Week 4",
    dates: "November 22-30",
    tasks: [
       {
        icon: Wallet,
        title: "Pay Amazon Monthly",
        description: "Ensure the monthly payment is made on time.",
      },
       {
        icon: Wallet,
        title: "Apple Pay Monthly",
        description: "Ensure the monthly payment is made on time.",
      },
       {
        icon: Briefcase,
        title: "Complete Unemployment Benefits",
        description: "Certify for weekly benefits online.",
      },
      {
        icon: Users,
        title: "Rohingya Class Orientation",
        description: "Lead the orientation session for new members every Wednesday.",
      },
      {
        icon: Users,
        title: "Rohingya Class & Babysitting",
        description: "Attend the weekly educational session and provide childcare support every Friday.",
      },
    ],
  },
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navigation />
      <header className="sticky top-0 z-10 flex h-auto items-center justify-center gap-4 border-b bg-background/80 px-4 py-4 backdrop-blur-sm sm:h-16 sm:px-6">
          <h1 className="font-headline text-xl font-bold tracking-tight text-primary sm:text-2xl">
            November Tasks
          </h1>
      </header>
      <main className="flex-1 p-4 sm:px-6 md:p-8">
        <div className="mx-auto max-w-2xl space-y-8">
            <div className="grid grid-cols-1 gap-8">
              {weeklyTasks.map(({ week, dates, tasks }) => (
                <Card key={week} className="w-full">
                  <CardHeader>
                    <CardTitle>{week}</CardTitle>
                    <CardDescription>{dates}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {tasks.map((task, index) => (
                        <div key={index}>
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                                <task.icon className="h-5 w-5 text-muted-foreground" />
                            </div>
                            <div>
                                <p className="font-semibold">{task.title}</p>
                                <p className="text-sm text-muted-foreground">{task.description}</p>
                            </div>
                          </div>
                           {index < tasks.length - 1 && <Separator className="mt-6" />}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
        </div>
      </main>
      <footer className="text-center p-4 text-muted-foreground text-xs">
        Stay focused and productive.
      </footer>
    </div>
  );
}
