
"use client";

import * as React from "react";
import { Phone, Mail, ShieldCheck, Briefcase, Wallet, Calendar, Users, Car, ArchiveRestore, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Navigation } from "@/components/ui/navigation";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

const initialWeeklyTasks = [
  {
    week: "Week 1",
    dates: "November 1-7",
    tasks: [
      {
        id: "1-1",
        icon: Phone,
        title: "Call EBT for Mom",
        description: "Follow up on the status of the application.",
        completed: true,
      },
      {
        id: "1-2",
        icon: Mail,
        title: "Check Mail for EBT Letter",
        description: "Look for the official confirmation letter.",
        completed: true,
      },
      {
        id: "1-3",
        icon: Briefcase,
        title: "Complete Unemployment Benefits",
        description: "Certify for weekly benefits online.",
        completed: true,
      },
       {
        id: "1-4",
        icon: Briefcase,
        title: "Schedule Alabama Investors Meeting",
        description: "Every Tuesday.",
        completed: false,
      },
      {
        id: "1-5",
        icon: Briefcase,
        title: "Schedule Directors Meeting",
        description: "Every Tuesday.",
        completed: false,
      },
      {
        id: "1-6",
        icon: Users,
        title: "Rohingya Class Orientation",
        description: "Lead the orientation session for new members every Wednesday.",
        completed: true,
      },
      {
        id: "1-7",
        icon: Users,
        title: "Rohingya Class & Babysitting",
        description: "Attend the weekly educational session and provide childcare support every Friday.",
        completed: true,
      },
    ],
  },
  {
    week: "Week 2",
    dates: "November 8-14",
    tasks: [
      {
        id: "2-1",
        icon: ArchiveRestore,
        title: "Return Shein Package",
        description: "Process the return for the recent order.",
        completed: false,
      },
      {
        id: "2-2",
        icon: ShieldCheck,
        title: "Medicare Meeting",
        description: "Attend the meeting at 12:30 PM this Thursday.",
        completed: true,
      },
      {
        id: "2-3",
        icon: Car,
        title: "Tire Replacement on 11/11",
        description: "Appointment to replace all four tires.",
        completed: true,
      },
       {
        id: "2-4",
        icon: Briefcase,
        title: "Complete Unemployment Benefits",
        description: "Certify for weekly benefits online.",
        completed: true,
      },
       {
        id: "2-5",
        icon: Briefcase,
        title: "Schedule Alabama Investors Meeting",
        description: "Every Tuesday.",
        completed: false,
      },
      {
        id: "2-6",
        icon: Briefcase,
        title: "Schedule Directors Meeting",
        description: "Every Tuesday.",
        completed: false,
      },
      {
        id: "2-7",
        icon: Users,
        title: "Rohingya Class Orientation",
        description: "Lead the orientation session for new members every Wednesday.",
        completed: true,
      },
      {
        id: "2-8",
        icon: Users,
        title: "Rohingya Class & Babysitting",
        description: "Attend the weekly educational session and provide childcare support every Friday.",
        completed: true,
      },
    ],
  },
  {
    week: "Week 3",
    dates: "November 15-21",
    tasks: [
      {
        id: "3-1",
        icon: Calendar,
        title: "Atlanta Visit for Masturaat Ta'lim",
        description: "Travel for the educational gathering on the 15th.",
        completed: false,
      },
      {
        id: "3-2",
        icon: Briefcase,
        title: "Complete Unemployment Benefits",
        description: "Certify for weekly benefits online.",
        completed: false,
      },
       {
        id: "3-3",
        icon: Briefcase,
        title: "Schedule Alabama Investors Meeting",
        description: "Every Tuesday.",
        completed: false,
      },
      {
        id: "3-4",
        icon: Briefcase,
        title: "Schedule Directors Meeting",
        description: "Every Tuesday.",
        completed: false,
      },
      {
        id: "3-5",
        icon: Users,
        title: "Rohingya Class Orientation",
        description: "Lead the orientation session for new members every Wednesday.",
        completed: false,
      },
      {
        id: "3-6",
        icon: Users,
        title: "Rohingya Class & Babysitting",
        description: "Attend the weekly educational session and provide childcare support every Friday.",
        completed: false,
      },
    ],
  },
  {
    week: "Week 4",
    dates: "November 22-30",
    tasks: [
       {
        id: "4-1",
        icon: Wallet,
        title: "Pay Amazon Monthly",
        description: "Ensure the monthly payment is made on time.",
        completed: false,
      },
       {
        id: "4-2",
        icon: Wallet,
        title: "Apple Pay Monthly",
        description: "Ensure the monthly payment is made on time.",
        completed: false,
      },
       {
        id: "4-3",
        icon: Briefcase,
        title: "Complete Unemployment Benefits",
        description: "Certify for weekly benefits online.",
        completed: false,
      },
       {
        id: "4-4",
        icon: Briefcase,
        title: "Schedule Alabama Investors Meeting",
        description: "Every Tuesday.",
        completed: false,
      },
      {
        id: "4-5",
        icon: Briefcase,
        title: "Schedule Directors Meeting",
        description: "Every Tuesday.",
        completed: false,
      },
      {
        id: "4-6",
        icon: Users,
        title: "Rohingya Class Orientation",
        description: "Lead the orientation session for new members every Wednesday.",
        completed: false,
      },
      {
        id: "4-7",
        icon: Users,
        title: "Rohingya Class & Babysitting",
        description: "Attend the weekly educational session and provide childcare support every Friday.",
        completed: false,
      },
    ],
  },
];

export default function HomePage() {
  const [weeklyTasks, setWeeklyTasks] = React.useState(initialWeeklyTasks);

  const handleTaskToggle = (weekIndex: number, taskId: string) => {
    const updatedWeeks = [...weeklyTasks];
    const task = updatedWeeks[weekIndex].tasks.find(t => t.id === taskId);
    if (task) {
      task.completed = !task.completed;
      setWeeklyTasks(updatedWeeks);
    }
  };


  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navigation title="November Tasks" />
      <main className="flex-1 p-4 sm:px-6 md:p-8">
        <div className="mx-auto max-w-2xl space-y-8">
            <div className="grid grid-cols-1 gap-8">
              {weeklyTasks.map((weekData, weekIndex) => (
                <Card key={weekData.week} className="w-full">
                  <CardHeader>
                    <CardTitle>{weekData.week}</CardTitle>
                    <CardDescription>{weekData.dates}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {weekData.tasks.map((task, taskIndex) => (
                        <div key={task.id}>
                          <div className="flex items-start gap-4">
                            <div className="flex items-center h-10">
                              <Checkbox 
                                id={`task-${task.id}`}
                                checked={task.completed}
                                onCheckedChange={() => handleTaskToggle(weekIndex, task.id)}
                                className="h-5 w-5"
                              />
                            </div>
                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                                <task.icon className={cn("h-5 w-5 text-muted-foreground", task.completed && "text-green-500")} />
                            </div>
                            <div className="flex-grow">
                                <p className={cn("font-semibold", task.completed && "line-through text-muted-foreground")}>{task.title}</p>
                                <p className={cn("text-sm text-muted-foreground", task.completed && "line-through")}>{task.description}</p>
                            </div>
                          </div>
                           {taskIndex < weekData.tasks.length - 1 && <Separator className="mt-6" />}
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
