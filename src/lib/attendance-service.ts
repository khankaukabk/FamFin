
'use client';

import {
  Firestore,
  collection,
  addDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDocs,
  query,
  orderBy,
  limit,
  deleteDoc,
} from 'firebase/firestore';
import { updateDocumentNonBlocking, deleteDocumentNonBlocking } from '@/firebase/non-blocking-updates';


export function sanitizeMemberName(name: string): string {
  // Replaces invalid characters for Firestore field paths.
  return name.replace(/[\s.]+/g, '_');
}


export async function createSession(
  db: Firestore,
  members: string[],
  sessionDate: Date
): Promise<string> {
  const sessionsCollection = collection(db, 'attendanceSessions');
  
  const q = query(sessionsCollection, orderBy('sessionNumber', 'desc'), limit(1));
  const querySnapshot = await getDocs(q);
  let newSessionNumber = 1;
  if (!querySnapshot.empty) {
    newSessionNumber = (querySnapshot.docs[0].data().sessionNumber || 0) + 1;
  }

  const initialAttendance = members.reduce((acc, member) => {
    acc[sanitizeMemberName(member)] = false;
    return acc;
  }, {} as Record<string, boolean>);

  const newSession = {
    date: sessionDate.toISOString(),
    sessionNumber: newSessionNumber,
    attendance: initialAttendance,
  };
  
  const docRef = await addDoc(sessionsCollection, newSession);
  return docRef.id;
}


export function updateAttendance(
  db: Firestore,
  sessionId: string,
  memberName: string,
  isPresent: boolean
) {
  const sessionDocRef = doc(db, 'attendanceSessions', sessionId);
  const sanitizedName = sanitizeMemberName(memberName);
  
  const fieldPath = `attendance.${sanitizedName}`;

  updateDocumentNonBlocking(sessionDocRef, {
    [fieldPath]: isPresent,
  });
}

export async function deleteSession(db: Firestore, sessionId: string): Promise<void> {
  const sessionDocRef = doc(db, 'attendanceSessions', sessionId);
  await deleteDoc(sessionDocRef);
}
