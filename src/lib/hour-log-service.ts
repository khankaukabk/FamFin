
'use client';

import {
  Firestore,
  collection,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { addDocumentNonBlocking } from '@/firebase/non-blocking-updates';
import { nanoid } from 'nanoid';

export type HourLog = {
  date: string; // ISO string
  hours: number;
  notes: string;
};

export async function addHourLog(
  db: Firestore,
  logData: { date: string; hours: number; notes: string }
): Promise<void> {
  const hourLogsCollection = collection(db, 'hourLogs');
  
  const newLog = {
    ...logData,
    id: nanoid(),
    createdAt: serverTimestamp(),
  };

  // Using non-blocking add
  addDocumentNonBlocking(hourLogsCollection, newLog);
}
