
'use client';

import {
  Firestore,
  collection,
  doc,
  getDoc,
  updateDoc,
  setDoc,
} from 'firebase/firestore';
import { updateDocumentNonBlocking } from '@/firebase/non-blocking-updates';
import { nanoid } from 'nanoid';

export type Task = {
  id: string;
  icon: string;
  title: string;
  description: string;
  completed: boolean;
};

export type WeeklyTasks = {
  week: string;
  dates: string;
  tasks: Task[];
};

export type TaskMonth = {
  id: string;
  title: string;
  weeks: WeeklyTasks[];
};

const initialTaskData: TaskMonth[] = [
  {
    id: "november-2024",
    title: "November Tasks",
    weeks: [
      {
        week: "Week 1",
        dates: "November 1-7",
        tasks: [
          { id: nanoid(), icon: "Phone", title: "Call EBT for Mom", description: "Follow up on the status of the application.", completed: true },
          { id: nanoid(), icon: "Mail", title: "Check Mail for EBT Letter", description: "Look for the official confirmation letter.", completed: true },
          { id: nanoid(), icon: "Briefcase", title: "Complete Unemployment Benefits", description: "Certify for weekly benefits online.", completed: true },
        ],
      },
      {
        week: "Week 2",
        dates: "November 8-14",
        tasks: [
          { id: nanoid(), icon: "ArchiveRestore", title: "Return Shein Package", description: "Process the return for the recent order.", completed: false },
          { id: nanoid(), icon: "ShieldCheck", title: "Medicare Meeting", description: "Attend the meeting at 12:30 PM this Thursday.", completed: true },
          { id: nanoid(), icon: "Car", title: "Tire Replacement on 11/11", description: "Appointment to replace all four tires.", completed: true },
          { id: nanoid(), icon: "Briefcase", title: "Complete Unemployment Benefits", description: "Certify for weekly benefits online.", completed: true },
          { id: nanoid(), icon: "Briefcase", title: "Schedule Alabama Investors Meeting", description: "Every Tuesday.", completed: false },
          { id: nanoid(), icon: "Briefcase", title: "Schedule Directors Meeting", description: "Every Tuesday.", completed: false },
          { id: nanoid(), icon: "Users", title: "Rohingya Class Orientation", description: "Lead the orientation session for new members every Wednesday.", completed: true },
          { id: nanoid(), icon: "Users", title: "Rohingya Class & Babysitting", description: "Attend the weekly educational session and provide childcare support every Friday.", completed: true },
        ],
      },
      {
        week: "Week 3",
        dates: "November 15-21",
        tasks: [
          { id: nanoid(), icon: "Calendar", title: "Atlanta Visit for Masturaat Ta'lim", description: "Travel for the educational gathering on the 15th.", completed: false },
          { id: nanoid(), icon: "Briefcase", title: "Complete Unemployment Benefits", description: "Certify for weekly benefits online.", completed: false },
          { id: nanoid(), icon: "Briefcase", title: "Schedule Alabama Investors Meeting", description: "Every Tuesday.", completed: false },
          { id: nanoid(), icon: "Briefcase", title: "Schedule Directors Meeting", description: "Every Tuesday.", completed: false },
          { id: nanoid(), icon: "Users", title: "Rohingya Class Orientation", description: "Lead the orientation session for new members every Wednesday.", completed: false },
          { id: nanoid(), icon: "Users", title: "Rohingya Class & Babysitting", description: "Attend the weekly educational session and provide childcare support every Friday.", completed: false },
        ],
      },
      {
        week: "Week 4",
        dates: "November 22-30",
        tasks: [
          { id: nanoid(), icon: "Wallet", title: "Pay Amazon Monthly", description: "Ensure the monthly payment is made on time.", completed: false },
          { id: nanoid(), icon: "Wallet", title: "Apple Pay Monthly", description: "Ensure the monthly payment is made on time.", completed: false },
          { id: nanoid(), icon: "Briefcase", title: "Complete Unemployment Benefits", description: "Certify for weekly benefits online.", completed: false },
          { id: nanoid(), icon: "Briefcase", title: "Schedule Alabama Investors Meeting", description: "Every Tuesday.", completed: false },
          { id: nanoid(), icon: "Briefcase", title: "Schedule Directors Meeting", description: "Every Tuesday.", completed: false },
          { id: nanoid(), icon: "Users", title: "Rohingya Class Orientation", description: "Lead the orientation session for new members every Wednesday.", completed: false },
          { id: nanoid(), icon: "Users", title: "Rohingya Class & Babysitting", description: "Attend the weekly educational session and provide childcare support every Friday.", completed: false },
        ],
      },
    ]
  },
  {
    id: "december-2024",
    title: "December Tasks",
    weeks: [
      {
        week: "Week 1",
        dates: "December 1-7",
        tasks: [
          { id: nanoid(), icon: "Briefcase", title: "Schedule Alabama Investors Meeting", description: "Every Tuesday.", completed: false },
          { id: nanoid(), icon: "Briefcase", title: "Schedule Directors Meeting", description: "Every Tuesday.", completed: false },
          { id: nanoid(), icon: "Users", title: "Rohingya Class Orientation", description: "Lead the orientation session for new members every Wednesday.", completed: false },
          { id: nanoid(), icon: "Users", title: "Rohingya Class & Babysitting", description: "Attend the weekly educational session and provide childcare support every Friday.", completed: false },
        ],
      },
       {
        week: "Week 2",
        dates: "December 8-14",
        tasks: [
          { id: nanoid(), icon: "Send", title: "Proposal send to Pelham.", description: "Finalize and send the business proposal to Pelham.", completed: false },
          { id: nanoid(), icon: "CalendarPlus", title: "Create meeting with Ryan Kelly for directorship", description: "Schedule a meeting to discuss the directorship role.", completed: false },
          { id: nanoid(), icon: "Briefcase", title: "Schedule Alabama Investors Meeting", description: "Every Tuesday.", completed: false },
          { id: nanoid(), icon: "Briefcase", title: "Schedule Directors Meeting", description: "Every Tuesday.", completed: false },
          { id: nanoid(), icon: "Users", title: "Rohingya Class Orientation", description: "Lead the orientation session for new members every Wednesday.", completed: false },
          { id: nanoid(), icon: "Users", title: "Rohingya Class & Babysitting", description: "Attend the weekly educational session and provide childcare support every Friday.", completed: false },
        ],
      },
       {
        week: "Week 3",
        dates: "December 15-21",
        tasks: [
          { id: nanoid(), icon: "Briefcase", title: "Schedule Alabama Investors Meeting", description: "Every Tuesday.", completed: false },
          { id: nanoid(), icon: "Briefcase", title: "Schedule Directors Meeting", description: "Every Tuesday.", completed: false },
          { id: nanoid(), icon: "Users", title: "Rohingya Class Orientation", description: "Lead the orientation session for new members every Wednesday.", completed: false },
          { id: nanoid(), icon: "Users", title: "Rohingya Class & Babysitting", description: "Attend the weekly educational session and provide childcare support every Friday.", completed: false },
        ],
      },
       {
        week: "Week 4",
        dates: "December 22-31",
        tasks: [
          { id: nanoid(), icon: "Briefcase", title: "Schedule Alabama Investors Meeting", description: "Every Tuesday.", completed: false },
          { id: nanoid(), icon: "Briefcase", title: "Schedule Directors Meeting", description: "Every Tuesday.", completed: false },
          { id: nanoid(), icon: "Users", title: "Rohingya Class Orientation", description: "Lead the orientation session for new members every Wednesday.", completed: false },
          { id: nanoid(), icon: "Users", title: "Rohingya Class & Babysitting", description: "Attend the weekly educational session and provide childcare support every Friday.", completed: false },
        ],
      },
    ]
  }
];

export async function initializeTasks(db: Firestore): Promise<void> {
  for (const monthData of initialTaskData) {
    const monthDocRef = doc(db, 'taskMonths', monthData.id);
    const docSnap = await getDoc(monthDocRef);

    if (!docSnap.exists()) {
      await setDoc(monthDocRef, monthData);
    } else {
      const existingData = docSnap.data() as TaskMonth;
      let needsUpdate = false;

      // Deep copy to avoid direct mutation
      const updatedWeeks = JSON.parse(JSON.stringify(existingData.weeks));

      // Sync tasks for each week present in the initial data
      monthData.weeks.forEach((initialWeek, weekIndex) => {
        let existingWeek = updatedWeeks.find((w: WeeklyTasks) => w.week === initialWeek.week);
        
        // If week doesn't exist, add it.
        if (!existingWeek) {
          updatedWeeks.splice(weekIndex, 0, initialWeek);
          needsUpdate = true;
          return; // continue to next week
        }

        const initialTaskTitles = new Set(initialWeek.tasks.map(t => t.title));
        const existingTaskTitles = new Set(existingWeek.tasks.map((t: Task) => t.title));

        // Add new tasks
        const tasksToAdd = initialWeek.tasks.filter(t => !existingTaskTitles.has(t.title));
        if (tasksToAdd.length > 0) {
          existingWeek.tasks.push(...tasksToAdd);
          needsUpdate = true;
        }

        // Remove old tasks
        const oldTaskCount = existingWeek.tasks.length;
        existingWeek.tasks = existingWeek.tasks.filter((t: Task) => initialTaskTitles.has(t.title));
        if (existingWeek.tasks.length !== oldTaskCount) {
          needsUpdate = true;
        }
      });
      
      // Remove weeks that are no longer in the initial data
      const initialWeekNames = new Set(monthData.weeks.map(w => w.week));
      const originalLength = updatedWeeks.length;
      const finalWeeks = updatedWeeks.filter((w: WeeklyTasks) => initialWeekNames.has(w.week));
      if (finalWeeks.length !== originalLength) {
          needsUpdate = true;
      }
      
      if (needsUpdate) {
        await updateDoc(monthDocRef, { weeks: finalWeeks });
      }
    }
  }
}

export async function toggleTaskCompletion(
  db: Firestore,
  monthId: string,
  weekIndex: number,
  taskId: string
): Promise<void> {
  const monthDocRef = doc(db, 'taskMonths', monthId);
  const docSnap = await getDoc(monthDocRef);

  if (docSnap.exists()) {
    const monthData = docSnap.data() as TaskMonth;
    const week = monthData.weeks[weekIndex];
    if (week) {
      const task = week.tasks.find((t) => t.id === taskId);
      if (task) {
        task.completed = !task.completed;
        
        updateDocumentNonBlocking(monthDocRef, { weeks: monthData.weeks });
      }
    }
  }
}
