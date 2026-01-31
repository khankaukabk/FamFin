"use client";

import * as React from "react";
import { useMemo } from "react";
import { useFirestore, useCollection, useMemoFirebase, useUser } from "@/firebase";
import { collection } from "firebase/firestore";
import type { TaskMonth } from "@/lib/task-service";
import { toggleTaskCompletion, initializeTasks } from "@/lib/task-service";
import * as LucideIcons from "lucide-react";

import { Navigation } from "@/components/ui/navigation"; 
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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Archive, Crown } from "lucide-react";

// --- CSS UTILITIES ---
const styles = `
  .font-serif { font-family: 'Playfair Display', serif; }
  .no-scrollbar::-webkit-scrollbar { display: none; }
  .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
`;

// Helper to get a specific icon
const getIcon = (name: string) => {
  const Icon = (LucideIcons as any)[name];
  return Icon || LucideIcons.HelpCircle;
};

export default function HomePage() {
  const firestore = useFirestore();
  const { user, isUserLoading } = useUser();
  const [alertState, setAlertState] = React.useState<{
    isOpen: boolean;
    monthId: string | null;
    weekIndex: number | null;
    taskId: string | null;
  }>({ isOpen: false, monthId: null, weekIndex: null, taskId: null });

  // Data fetching
  const taskMonthsQuery = useMemoFirebase(
    () => (firestore && user ? collection(firestore, "taskMonths") : null),
    [firestore, user]
  );
  
  React.useEffect(() => {
    if (firestore && user) initializeTasks(firestore);
  }, [firestore, user]);

  const { data: taskMonths, isLoading: isLoadingMonths } = useCollection<TaskMonth>(taskMonthsQuery);

  // Logic
  const openConfirmationDialog = (monthId: string, weekIndex: number, taskId: string) => {
    setAlertState({ isOpen: true, monthId, weekIndex, taskId });
  };
  
  const handleConfirmToggle = () => {
    if (firestore && alertState.monthId && alertState.weekIndex !== null && alertState.taskId) {
      toggleTaskCompletion(firestore, alertState.monthId, alertState.weekIndex, alertState.taskId);
    }
    setAlertState({ isOpen: false, monthId: null, weekIndex: null, taskId: null });
  };

  const currentTaskForAlert = useMemo(() => {
    if (!taskMonths || !alertState.monthId || alertState.weekIndex === null || !alertState.taskId) return null;
    return taskMonths.find(m => m.id === alertState.monthId)?.weeks[alertState.weekIndex]?.tasks.find(t => t.id === alertState.taskId);
  }, [taskMonths, alertState]);

  // --- CHANGED: Updated Month Selection for FEB 2026 ---
  const { currentMonth, historyMonths } = useMemo(() => {
    if (!taskMonths) return { currentMonth: null, historyMonths: [] };
    
    return {
      // 1. Current Focus: February 2026
      currentMonth: taskMonths.find(m => m.id === "february-2026"),
      
      // 2. History: January 2026 + December 2025
      historyMonths: [
        taskMonths.find(m => m.id === "january-2026"),
        taskMonths.find(m => m.id === "december-2025")
      ].filter(Boolean) // Removes nulls if a month is missing
    };
  }, [taskMonths]);

  // --- MOBILE COMPONENT: TASK ROW ---
  const TaskRow = ({ task, monthId, weekIndex }: { task: any, monthId: string, weekIndex: number }) => {
    const TaskIcon = getIcon(task.icon);
    return (
      <div 
        onClick={() => openConfirmationDialog(monthId, weekIndex, task.id)}
        className="group relative active:scale-[0.98] transition-transform duration-200"
      >
        <div className={`
          absolute inset-0 bg-gradient-to-r from-[#bf953f]/20 to-transparent opacity-0 transition-opacity duration-300 active:opacity-100 rounded-xl
          ${task.completed ? 'opacity-0' : ''}
        `} />
        
        <div className="relative flex items-center gap-4 py-5 px-3 border-b border-white/5">
          <div className="flex-none pt-1">
            <div className={`
                h-6 w-6 border-2 transition-all duration-500 rounded-full flex items-center justify-center
                ${task.completed ? 'border-[#bf953f] bg-[#bf953f]' : 'border-white/30'}
              `}>
               {task.completed && <LucideIcons.Check className="w-4 h-4 text-black" />} 
            </div>
          </div>

          <div className="flex-grow min-w-0">
            <div className="flex justify-between items-start mb-1">
               <h4 className={`
                 font-serif text-lg leading-tight transition-all duration-300
                 ${task.completed ? 'text-[#bf953f] line-through decoration-[#bf953f]/50' : 'text-neutral-100'}
               `}>
                 {task.title}
               </h4>
               <TaskIcon className={`w-4 h-4 flex-none mt-1 ${task.completed ? 'text-[#bf953f]' : 'text-neutral-600'}`} />
            </div>
            
            <p className="text-sm text-neutral-500 font-light leading-snug line-clamp-2">
              {task.description}
            </p>
          </div>
        </div>
      </div>
    );
  };

  // --- MOBILE COMPONENT: MONTH RENDERER ---
  const renderMonthTasks = (monthData: TaskMonth) => (
    <div className="space-y-8 pb-4">
      {monthData.weeks.map((weekData, weekIndex) => (
        <div key={weekData.week} className="relative">
          <div className="sticky top-[80px] z-30 bg-black/90 backdrop-blur-xl border-b border-[#bf953f]/30 py-3 px-1 mb-2 flex justify-between items-center shadow-lg">
            <div>
              <h3 className="font-serif text-xl text-[#fcf6ba] tracking-wide">{weekData.week}</h3>
            </div>
            <span className="text-[10px] text-[#bf953f] bg-[#bf953f]/10 border border-[#bf953f]/20 px-2 py-1 rounded-full uppercase tracking-widest font-bold">
                {weekData.dates}
            </span>
          </div>
          <div className="px-1">
            {weekData.tasks.map((task) => (
              <TaskRow key={task.id} task={task} monthId={monthData.id} weekIndex={weekIndex} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      
      <div className="flex min-h-screen w-full flex-col bg-black text-neutral-200 font-sans selection:bg-[#bf953f] selection:text-black pb-safe">
        
        {/* --- NAVIGATION --- */}
        <div className="sticky top-0 z-40">
             <Navigation title="Concierge" /> 
        </div>

        {/* MAIN CONTENT */}
        <main className="flex-1 p-4 w-full max-w-md mx-auto">
          
          {/* PAGE TITLE CARD */}
          <div className="relative overflow-hidden bg-gradient-to-br from-neutral-900 to-black border border-white/10 rounded-2xl p-6 text-center mb-8 shadow-2xl">
            <div className="absolute top-0 right-0 p-16 bg-[#bf953f]/10 blur-[50px] rounded-full pointer-events-none" />
            <Crown className="w-8 h-8 text-[#bf953f] mx-auto mb-3" />
            <h1 className="font-serif text-4xl text-white mb-2">February '26</h1>
            <p className="text-neutral-500 uppercase tracking-[0.2em] text-xs font-medium">Platinum Itinerary</p>
          </div>

          {/* LOADING STATE */}
          {isLoadingMonths || isUserLoading ? (
             <div className="space-y-6 opacity-20 animate-pulse">
               <div className="h-24 bg-white/10 rounded-xl"></div>
               <div className="h-24 bg-white/10 rounded-xl"></div>
             </div>
          ) : (
            <>
                {/* CURRENT MONTH (FEBRUARY) */}
                {currentMonth ? renderMonthTasks(currentMonth) : (
                  <div className="text-center py-12 border border-dashed border-white/10 rounded-xl bg-white/5">
                    <p className="font-serif text-lg text-neutral-400">February schedule is clearing...</p>
                  </div>
                )}

                {/* HISTORY ACCORDION (Jan + Dec) */}
                {historyMonths.length > 0 && (
                    <div className="mt-12 pt-8 border-t border-white/10">
                        <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4 px-2">
                            Archive
                        </h3>
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {historyMonths.map((month: any) => (
                                <AccordionItem key={month.id} value={month.id} className="border border-white/5 rounded-xl bg-white/[0.02] overflow-hidden">
                                    <AccordionTrigger className="hover:no-underline py-4 px-4 group active:bg-white/5 transition-colors">
                                        <div className="flex items-center gap-3 w-full">
                                            <div className="p-2 bg-[#bf953f]/10 rounded-full">
                                              <Archive className="h-4 w-4 text-[#bf953f]" />
                                            </div>
                                            <div className="text-left flex-grow">
                                              <span className="block font-serif text-lg text-neutral-300">
                                                {month.month} '{month.year.toString().slice(-2)}
                                              </span>
                                            </div>
                                            <div className="text-[10px] text-neutral-500 uppercase tracking-widest mr-2">View</div>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="px-2 pb-6 pt-0 bg-black/20">
                                        {renderMonthTasks(month)}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                )}
            </>
          )}
        </main>

        <footer className="text-center py-8 border-t border-white/5 bg-black">
          <p className="font-serif text-[#bf953f]/60 text-xs italic">"At your service, always."</p>
        </footer>
      </div>
      
      {/* ALERT DIALOG */}
      <AlertDialog open={alertState.isOpen} onOpenChange={(isOpen) => !isOpen && React.startTransition(() => handleConfirmToggle())}>
        <AlertDialogContent className="bg-[#111] border-t border-[#bf953f]/30 rounded-t-[20px] rounded-b-none bottom-0 top-auto translate-y-0 shadow-[0_-10px_40px_rgba(0,0,0,0.8)] fixed max-w-full w-full mx-0 p-6">
          <AlertDialogHeader>
            <div className="w-12 h-1 bg-white/20 rounded-full mx-auto mb-4" />
            <AlertDialogTitle className="font-serif text-xl text-[#fcf6ba] text-center">Update Task Status</AlertDialogTitle>
            <AlertDialogDescription className="text-center text-neutral-400 pt-2 pb-4">
              <span className="block font-serif text-lg text-white leading-relaxed">"{currentTaskForAlert?.title}"</span>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex-col gap-3 sm:flex-col space-y-2">
            <AlertDialogAction onClick={handleConfirmToggle} className="w-full bg-[#bf953f] text-black hover:bg-[#aa771c] rounded-xl font-bold py-6 text-lg">
              {currentTaskForAlert?.completed ? "Mark Incomplete" : "Complete Task"}
            </AlertDialogAction>
            <AlertDialogCancel onClick={() => setAlertState({ isOpen: false, monthId: null, weekIndex: null, taskId: null })} className="w-full rounded-xl border-white/10 hover:bg-white/10 hover:text-white py-6 text-base">
              Cancel
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}