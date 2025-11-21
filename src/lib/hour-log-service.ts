
'use client';

import {
  Firestore,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
} from 'firebase/firestore';
import { addDocumentNonBlocking, updateDocumentNonBlocking, deleteDocumentNonBlocking } from '@/firebase/non-blocking-updates';
import { nanoid } from 'nanoid';

export type HourLog = {
  id: string; // nanoid
  date: string; // ISO string
  startTime: string;
  endTime: string;
  duration: number;
  notes: string;
};

export async function addHourLog(
  db: Firestore,
  logData: {
    date: string;
    startTime: string;
    endTime: string;
    duration: number;
    notes: string;
  }
): Promise<void> {
  const hourLogsCollection = collection(db, 'hourLogs');

  const newLog = {
    ...logData,
    id: nanoid(),
    createdAt: serverTimestamp(),
  };

  addDocumentNonBlocking(hourLogsCollection, newLog);
}

export async function updateHourLog(
  db: Firestore,
  logId: string,
  logData: Partial<HourLog>
): Promise<void> {
  const logDocRef = doc(db, 'hourLogs', logId);
  updateDocumentNonBlocking(logDocRef, {
    ...logData,
    updatedAt: serverTimestamp(),
  });
}

export async function deleteHourLog(
  db: Firestore,
  logId: string
): Promise<void> {
  const logDocRef = doc(db, 'hourLogs', logId);
  deleteDocumentNonBlocking(logDocRef);
}
    
