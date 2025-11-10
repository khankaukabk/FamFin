"use client";

import * as React from "react";
import { Phone, Mail, ShieldCheck, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Navigation } from "@/components/ui/navigation";

const tasks = [
  {
    icon: Phone,
    title: "Call EBT for Mom",
    description: "Follow up on the status of the application.",
  },
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
  {
    icon: Mail,
    title: "Check Mail for EBT Letter",
    description: "Look for the official confirmation letter.",
  },
];

export default function DailyTasksPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navigation />
      <header className="sticky top-0 z-10 flex h-auto items-center justify-center gap-4 border-b bg-background/80 px-4 py-4 backdrop-blur-sm sm:h-16 sm:px-6">
          <h1 className="font-headline text-xl font-bold tracking-tight text-primary sm:text-2xl">
            Daily Tasks
          </h1>
      </header>
      <main className="flex-1 p-4 sm:px-6 md:p-8">
        <div className="mx-auto max-w-2xl space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-xl">Today's To-Do List</CardTitle>
                    <CardDescription>A simple, non-editable checklist of your daily priorities.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        {tasks.map((task, index) => (
                            <div key={index} className="flex items-start gap-4 p-4 border-b last:border-b-0">
                                <task.icon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <p className="font-semibold">{task.title}</p>
                                    <p className="text-sm text-muted-foreground">{task.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
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
