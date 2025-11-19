
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
import { setDocumentNonBlocking, updateDocumentNonBlocking } from '@/firebase/non-blocking-updates';


export async function createSession(
  db: Firestore,
  members: string[]
): Promise<string> {
  const sessionsCollection = collection(db, 'attendanceSessions');
  
  // Find the last session number
  const q = query(sessionsCollection, orderBy('sessionNumber', 'desc'), limit(1));
  const querySnapshot = await getDocs(q);
  let newSessionNumber = 1;
  if (!querySnapshot.empty) {
    newSessionNumber = (querySnapshot.docs[0].data().sessionNumber || 0) + 1;
  }

  const initialAttendance = members.reduce((acc, member) => {
    acc[member] = false;
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
  const fieldToUpdate = `attendance.${memberName}`;
  
  updateDocumentNonBlocking(sessionDocRef, {
    [fieldToUpdate]: isPresent,
  });
}
