
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
} from 'firebase/firestore';
import { updateDocumentNonBlocking } from '@/firebase/non-blocking-updates';


export function sanitizeMemberName(name: string): string {
  // Replaces spaces and periods with underscores
  return name.replace(/[\s.]+/g, '_');
}


export async function createSession(
  db: Firestore,
  members: string[]
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
    date: new Date().toISOString(),
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
  
  // Construct the field path as a string for dot notation
  const fieldPath = `attendance.${sanitizedName}`;

  updateDocumentNonBlocking(sessionDocRef, {
    [fieldPath]: isPresent,
  });
}
