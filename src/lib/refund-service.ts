
'use client';

import {
  Firestore,
  collection,
  doc,
  serverTimestamp,
} from 'firebase/firestore';
import { addDocumentNonBlocking, updateDocumentNonBlocking, deleteDocumentNonBlocking } from '@/firebase/non-blocking-updates';
import { nanoid } from 'nanoid';

export type Refund = {
  id: string; // nanoid
  orderNumber: string;
  store: string;
  itemDescription: string;
  amount: number;
  status: 'Pending' | 'Refunded' | 'Shipped' | 'Rejected';
  returnDate: string; // ISO string
  notes?: string;
};

// Type for creating a new refund, ID is generated automatically
export type NewRefund = Omit<Refund, 'id'>;

export async function addRefund(
  db: Firestore,
  refundData: NewRefund
): Promise<void> {
  const refundsCollection = collection(db, 'refunds');

  const newRefund = {
    ...refundData,
    id: nanoid(),
    createdAt: serverTimestamp(),
  };

  // Using non-blocking update for faster UI response
  addDocumentNonBlocking(refundsCollection, newRefund);
}

export async function updateRefund(
  db: Firestore,
  refundId: string,
  refundData: Partial<Refund>
): Promise<void> {
  const refundDocRef = doc(db, 'refunds', refundId);
  updateDocumentNonBlocking(refundDocRef, {
    ...refundData,
    updatedAt: serverTimestamp(),
  });
}

export async function deleteRefund(
  db: Firestore,
  refundId: string
): Promise<void> {
  const refundDocRef = doc(db, 'refunds', refundId);
  deleteDocumentNonBlocking(refundDocRef);
}
