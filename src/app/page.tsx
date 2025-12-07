
"use client";

import * as React from "react";
import { useMemo } from "react";
import { useFirestore, useCollection, useMemoFirebase } from "@/firebase";
import { collection, doc, getDoc } from "firebase/firestore";
import type { Task, WeeklyTasks, TaskMonth } from "@/lib/task-service";
import { toggleTaskCompletion, initializeTasks } from "@/lib/task-service";
import * as LucideIcons from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Navigation } from "@/components/ui/navigation";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Helper to get a specific icon from lucide-react
const getIcon = (name: string) => {
  const Icon = (LucideIcons as any)[name];
  if (Icon) {
    return Icon;
  }
  return LucideIcons.HelpCircle; // Fallback icon
};


export default function HomePage() {
  const firestore = useFirestore();
  const [alertState, setAlertState] = React.useState<{
    isOpen: boolean;
    monthId: string | null;
    weekIndex: number | null;
    taskId: string | null;
  }>({ isOpen: false, monthId: null, weekIndex: null, taskId: null });
  const [activeTab, setActiveTab] = React.useState("december");

  // Initialize tasks in Firestore if they don't exist
  React.useEffect(() => {
    if (firestore) {
      initializeTasks(firestore);
    }
  }, [firestore]);

  const taskMonthsQuery = useMemoFirebase(
    () => (firestore ? collection(firestore, "taskMonths") : null),
    [firestore]
  );
  const { data: taskMonths, isLoading: isLoadingMonths } =
    useCollection<TaskMonth>(taskMonthsQuery);

  const openConfirmationDialog = (monthId: string, weekIndex: number, taskId: string) => {
    setAlertState({ isOpen: true, monthId, weekIndex, taskId });
  };
  
  const handleConfirmToggle = () => {
    if (firestore && alertState.monthId && alertState.weekIndex !== null && alertState.taskId) {
      const { monthId, weekIndex, taskId } = alertState;
      toggleTaskCompletion(firestore, monthId, weekIndex, taskId);
    }
    setAlertState({ isOpen: false, monthId: null, weekIndex: null, taskId: null });
  };

  const handleCancelToggle = () => {
    setAlertState({ isOpen: false, monthId: null, weekIndex: null, taskId: null });
  };

  const currentTaskForAlert = useMemo(() => {
    if (!taskMonths || alertState.monthId === null || alertState.weekIndex === null || alertState.taskId === null) {
      return null;
    }
    const month = taskMonths.find(m => m.id === alertState.monthId);
    if (!month) return null;
    const week = month.weeks[alertState.weekIndex];
    if (!week) return null;
    return week.tasks.find(t => t.id === alertState.taskId);
  }, [taskMonths, alertState]);

  const sortedTaskMonths = useMemo(() => {
    if (!taskMonths) return [];
    return [...taskMonths].sort((a, b) => {
      // Assuming id is "month-year", e.g., "november-2024"
      const aDate = new Date(a.id.split('-').reverse().join('-'));
      const bDate = new Date(b.id.split('-').reverse().join('-'));
      return aDate.getTime() - bDate.getTime();
    });
  }, [taskMonths]);


  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navigation title="Family Tasks" />
      <main className="flex-1 p-4 sm:px-6 md:p-8">
        <div className="mx-auto max-w-2xl space-y-8">
          {isLoadingMonths ? (
             <div className="grid grid-cols-1 gap-8">
               <Skeleton className="h-96 w-full" />
               <Skeleton className="h-96 w-full" />
             </div>
          ) : (
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="november">November</TabsTrigger>
                <TabsTrigger value="december">December</TabsTrigger>
              </TabsList>
              
              {sortedTaskMonths.map(monthData => (
                <TabsContent key={monthData.id} value={monthData.id.split('-')[0]} className="mt-6">
                    <div className="grid grid-cols-1 gap-8">
                      {monthData.weeks.map((weekData, weekIndex) => (
                        <Card key={weekData.week} className="w-full">
                          <CardHeader>
                            <CardTitle className="text-lg sm:text-xl">{weekData.week}</CardTitle>
                            <CardDescription>{weekData.dates}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-6">
                              {weekData.tasks.map((task, taskIndex) => {
                                const TaskIcon = getIcon(task.icon);
                                return (
                                  <div key={task.id}>
                                    <div className="flex items-start gap-4">
                                      <div className="flex items-center h-10">
                                        <Checkbox 
                                          id={`task-${task.id}`}
                                          checked={task.completed}
                                          onCheckedChange={() => openConfirmationDialog(monthData.id, weekIndex, task.id)}
                                          className="h-5 w-5"
                                        />
                                      </div>
                                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                                          <TaskIcon className={cn("h-5 w-5 text-muted-foreground", task.completed && "text-primary")} />
                                      </div>
                                      <div className="flex-grow">
                                          <p className={cn("font-semibold text-sm sm:text-base", task.completed && "line-through text-muted-foreground")}>{task.title}</p>
                                          <p className={cn("text-xs sm:text-sm text-muted-foreground", task.completed && "line-through")}>{task.description}</p>
                                      </div>
                                    </div>
                                    {taskIndex < weekData.tasks.length - 1 && <Separator className="mt-6" />}
                                  </div>
                                );
                              })}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                </TabsContent>
              ))}
            </Tabs>
          )}
        </div>
      </main>
      
      <AlertDialog open={alertState.isOpen} onOpenChange={(isOpen) => !isOpen && handleCancelToggle()}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will change the completion status of the task: <br/>
              <strong className="text-foreground">{currentTaskForAlert?.title}</strong>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleCancelToggle}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmToggle}>
              {currentTaskForAlert?.completed ? "Mark as Incomplete" : "Mark as Complete"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <footer className="text-center p-4 text-muted-foreground text-xs">
        Stay focused and productive.
      </footer>
    </div>
  );
}
