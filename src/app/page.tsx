
"use client";

import * as React from "react";
import { Phone, Mail, ShieldCheck, Briefcase, Wallet, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Navigation } from "@/components/ui/navigation";
import { Separator } from "@/components/ui/separator";

const weeklyTasks = [
  {
    week: "Week 1",
    dates: "November 1-7",
    tasks: [
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
    ],
  },
  {
    week: "Week 2",
    dates: "November 8-14",
    tasks: [
      {
        icon: ShieldCheck,
        title: "Complete Medicare Enrollment",
        description: "Finalize the paperwork for Medicare.",
      },
       {
        icon: Briefcase,
        title: "Complete Unemployment Benefits",
        description: "Certify for weekly benefits online.",
      },
    ],
  },
  {
    week: "Week 3",
    dates: "November 15-21",
    tasks: [
      {
        icon: Calendar,
        title: "Atlanta visit on 15th for masturaat tallim",
        description: "Travel for the educational gathering.",
      },
      {
        icon: Briefcase,
        title: "Complete Unemployment Benefits",
        description: "Certify for weekly benefits online.",
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
        title: "Apple Pay monthly",
        description: "Ensure the monthly payment is made on time.",
      },
       {
        icon: Briefcase,
        title: "Complete Unemployment Benefits",
        description: "Certify for weekly benefits online.",
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
