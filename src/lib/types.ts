import type { Timestamp } from 'firebase/firestore';

export type Transaction = {
  id: string;
  type: "income" | "expense";
  amount: number;
  category: string;
  description: string;
  date: Date | string;
  member?: string;
};

export type Meeting = {
  id: string;
  userId: string;
  title: string;
  date: Timestamp;
  attendees: string[];
  agenda: AgendaItem[];
  summary?: string;
};

export type AgendaItem = {
  id: string;
  topic: string;
  description: string;
  presenter: string;
  time: string;
  vote: 'yes' | 'no' | 'pending';
};
