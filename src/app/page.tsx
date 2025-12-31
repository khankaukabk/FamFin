
"use client";

import * as React from "react";
import { useMemo } from "react";
import { useFirestore, useCollection, useMemoFirebase, useUser } from "@/firebase";
import { collection } from "firebase/firestore";
import type { TaskMonth } from "@/lib/task-service";
import { toggleTaskCompletion, initializeTasks } from "@/lib/task-service";
import * as LucideIcons from "lucide-react";

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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Archive, Crown, Star } from "lucide-react";

// --- CSS UTILITIES ---
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
  .font-serif { font-family: 'Playfair Display', serif; }
  .no-scrollbar::-webkit-scrollbar { display: none; }
  .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  
  /* Gold Gradient Text */
  .text-gold {
    background: linear-gradient(to right, #bf953f, #fcf6ba, #b38728, #fbf5b7, #aa771c);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  
  /* Gold Border Gradient */
  .border-gold {
    border-image: linear-gradient(to right, #bf953f, #fcf6ba, #b38728, #fbf5b7, #aa771c) 1;
  }
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

  const { decemberData, novemberData } = useMemo(() => {
    if (!taskMonths) return { decemberData: null, novemberData: null };
    return {
      decemberData: taskMonths.find(m => m.id === "december-2024"),
      novemberData: taskMonths.find(m => m.id === "november-2024")
    };
  }, [taskMonths]);

  // --- LUXURY COMPONENT: TASK ROW ---
  const TaskRow = ({ task, monthId, weekIndex }: { task: any, monthId: string, weekIndex: number }) => {
    const TaskIcon = getIcon(task.icon);
    return (
      <div className="group relative">
        <div className={`
          absolute inset-0 bg-gradient-to-r from-[#bf953f]/10 to-transparent opacity-0 transition-opacity duration-500
          ${task.completed ? 'opacity-0' : 'group-hover:opacity-100'}
        `} />
        
        <div className="relative flex items-center gap-6 py-6 px-4 border-b border-white/5 transition-all duration-300 hover:pl-6">
          {/* Checkbox Area */}
          <div className="flex-none">
            <Checkbox 
              id={`task-${task.id}`}
              checked={task.completed}
              onCheckedChange={() => openConfirmationDialog(monthId, weekIndex, task.id)}
              className={`
                h-6 w-6 border-2 transition-all duration-500 rounded-full
                ${task.completed ? 'border-[#bf953f] bg-[#bf953f] text-black' : 'border-white/30 hover:border-[#bf953f]'}
              `}
            />
          </div>

          {/* Icon Area - Like a Coin */}
          <div className={`
            flex-none w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-500
            ${task.completed 
              ? 'border-[#bf953f]/20 bg-[#bf953f]/10 text-[#bf953f]' 
              : 'border-white/10 bg-white/5 text-neutral-400 group-hover:border-[#bf953f]/50 group-hover:text-[#fcf6ba]'}
          `}>
             <TaskIcon className="w-5 h-5" />
          </div>

          {/* Text Area */}
          <div className="flex-grow min-w-0">
            <h4 className={`
              font-serif text-lg tracking-wide transition-all duration-300
              ${task.completed ? 'text-[#bf953f] line-through decoration-[#bf953f]/50' : 'text-neutral-100'}
            `}>
              {task.title}
            </h4>
            <p className="text-sm text-neutral-500 font-light mt-1 truncate">
              {task.description}
            </p>
          </div>
        </div>
      </div>
    );
  };

  // --- LUXURY COMPONENT: MONTH RENDERER ---
  const renderMonthTasks = (monthData: TaskMonth) => (
    <div className="space-y-12">
      {monthData.weeks.map((weekData, weekIndex) => (
        <div key={weekData.week} className="relative">
          
          {/* Week Header - Sticky & Elegant */}
          <div className="sticky top-0 z-10 bg-black/95 backdrop-blur-xl border-b border-[#bf953f]/30 py-4 mb-4 flex justify-between items-end">
            <div>
              <h3 className="font-serif text-2xl text-[#fcf6ba] tracking-wider">{weekData.week}</h3>
              <p className="text-xs text-[#bf953f] uppercase tracking-[0.2em] font-medium mt-1">{weekData.dates}</p>
            </div>
            <Crown className="w-5 h-5 text-[#bf953f] opacity-50" />
          </div>

          {/* Task List - Clean & Spacious */}
          <div className="bg-neutral-900/20 rounded-none border-l border-white/5 pl-4">
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
      <style>{styles}</style>
      <div className="min-h-screen bg-black text-neutral-200 font-sans selection:bg-[#bf953f] selection:text-black">
        
        {/* TOP BAR */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
          <div className="max-w-3xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#bf953f] to-[#aa771c] flex items-center justify-center text-black font-serif font-bold">
                K
              </div>
              <span className="font-serif text-lg text-white tracking-widest">CONCIERGE</span>
            </div>
            <div className="text-xs text-[#bf953f] border border-[#bf953f]/30 px-3 py-1 rounded-full uppercase tracking-widest">
              Platinum
            </div>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main className="pt-24 pb-20 px-6 max-w-3xl mx-auto">
          
          {/* PAGE TITLE */}
          <div className="text-center mb-16 space-y-4">
            <Star className="w-6 h-6 text-[#bf953f] mx-auto mb-4 animate-pulse" />
            <h1 className="font-serif text-5xl md:text-6xl text-white">December</h1>
            <div className="h-0.5 w-24 mx-auto bg-gradient-to-r from-transparent via-[#bf953f] to-transparent" />
            <p className="text-neutral-500 uppercase tracking-[0.3em] text-sm">Exclusive Itinerary</p>
          </div>

          {/* SKELETON LOADING */}
          {isLoadingMonths || isUserLoading ? (
             <div className="space-y-8 opacity-20 animate-pulse">
               <div className="h-40 bg-white/10 rounded-lg"></div>
               <div className="h-40 bg-white/10 rounded-lg"></div>
             </div>
          ) : (
            <>
                {/* CURRENT MONTH */}
                {decemberData ? renderMonthTasks(decemberData) : (
                  <div className="text-center py-20 border border-dashed border-white/10 rounded-xl">
                    <p className="font-serif text-2xl text-neutral-600">No scheduled tasks.</p>
                  </div>
                )}

                {/* ARCHIVE ACCORDION */}
                {novemberData && (
                    <Accordion type="single" collapsible className="w-full mt-16 border-t border-white/10">
                        <AccordionItem value="november" className="border-none">
                            <AccordionTrigger className="hover:no-underline py-8 group">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-white/5 rounded-full group-hover:bg-[#bf953f]/10 transition-colors">
                                      <Archive className="h-5 w-5 text-neutral-500 group-hover:text-[#bf953f]" />
                                    </div>
                                    <div className="text-left">
                                      <span className="block font-serif text-xl text-neutral-400 group-hover:text-white transition-colors">November Archives</span>
                                      <span className="text-xs text-neutral-600 uppercase tracking-widest">Past Itinerary</span>
                                    </div>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="pt-4 pb-12">
                                {renderMonthTasks(novemberData)}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                )}
            </>
          )}
        </main>

        {/* FOOTER */}
        <footer className="text-center py-12 border-t border-white/5">
          <p className="font-serif text-[#bf953f] text-sm italic">"Excellence is not an act, but a habit."</p>
        </footer>
      </div>
      
      {/* LUXURY ALERT DIALOG */}
      <AlertDialog open={alertState.isOpen} onOpenChange={(isOpen) => !isOpen && handleConfirmToggle()}>
        <AlertDialogContent className="bg-[#0a0a0a] border border-[#bf953f]/30 rounded-none shadow-[0_0_50px_rgba(191,149,63,0.1)]">
          <AlertDialogHeader>
            <AlertDialogTitle className="font-serif text-2xl text-[#fcf6ba] text-center">Update Status</AlertDialogTitle>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#bf953f]/50 to-transparent my-4" />
            <AlertDialogDescription className="text-center text-neutral-400">
              Confirm change for: <br/>
              <span className="block mt-2 font-serif text-lg text-white">"{currentTaskForAlert?.title}"</span>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="sm:justify-center gap-4 mt-6">
            <AlertDialogCancel 
              onClick={() => setAlertState({ isOpen: false, monthId: null, weekIndex: null, taskId: null })}
              className="rounded-none border-white/10 hover:bg-white/5 hover:text-white"
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleConfirmToggle}
              className="bg-[#bf953f] text-black hover:bg-[#aa771c] rounded-none font-medium px-8"
            >
              Confirm
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

    