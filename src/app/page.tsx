
"use client";

import * as React from "react";
import { Phone, Mail, ShieldCheck, Briefcase, Wallet, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Navigation } from "@/components/ui/navigation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const weeklyTasks = [
  {
    week: "Week 1",
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
    ],
  },
  {
    week: "Week 2",
    tasks: [
      {
        icon: ShieldCheck,
        title: "Complete Medicare Enrollment",
        description: "Finalize the paperwork for Medicare.",
      },
    ],
  },
  {
    week: "Week 3",
    tasks: [
      {
        icon: Briefcase,
        title: "Complete Unemployment Benefits",
        description: "Certify for weekly benefits online.",
      },
    ],
  },
  {
    week: "Week 4",
    tasks: [
       {
        icon: Wallet,
        title: "Pay Amazon Monthly",
        description: "Ensure the monthly payment is made on time.",
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
        <div className="mx-auto max-w-2xl space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-xl">November Task List</CardTitle>
                    <CardDescription>A weekly breakdown of your monthly priorities.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible defaultValue="Week 1" className="w-full">
                    {weeklyTasks.map(({ week, tasks }) => (
                      <AccordionItem key={week} value={week}>
                        <AccordionTrigger>
                          <div className="flex items-center gap-3">
                            <Calendar className="h-5 w-5 text-primary/80"/>
                            <span className="text-lg font-semibold">{week}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-6 pt-4 pl-2">
                              {tasks.map((task, index) => (
                                  <div key={index} className="flex items-start gap-4">
                                      <task.icon className="h-6 w-6 text-muted-foreground mt-1 flex-shrink-0" />
                                      <div>
                                          <p className="font-semibold">{task.title}</p>
                                          <p className="text-sm text-muted-foreground">{task.description}</p>
                                      </div>
                                  </div>
                              ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
            </Card>
        </div>
      </main>
      <footer className="text-center p-4 text-muted-foreground text-xs">
        Stay focused and productive.
      </footer>
    </div>
  );
}
