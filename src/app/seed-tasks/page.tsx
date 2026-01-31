'use client';

import { useState } from 'react';
import { getApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

// --- DATA TO UPLOAD ---
const taskData = {
  "january-2026": {
    id: "january-2026",
    month: "January",
    year: 2026,
    weeks: [
      {
        week: "Week 1",
        dates: "Jan 1 - Jan 7",
        tasks: [
          { id: "t1", title: "New Year Audit", description: "Review 2025 performance and set Q1 goals.", icon: "Target", completed: false },
          { id: "t2", title: "System Update", description: "Run security patches on all servers.", icon: "Shield", completed: false }
        ]
      },
      {
        week: "Week 2",
        dates: "Jan 8 - Jan 14",
        tasks: [
          { id: "t3", title: "Client Outreach", description: "Send New Year greetings to top 50 clients.", icon: "Mail", completed: false }
        ]
      }
    ]
  },
  "december-2025": {
    id: "december-2025",
    month: "December",
    year: 2025,
    weeks: [
      {
        week: "Week 4",
        dates: "Dec 22 - Dec 28",
        tasks: [
          { id: "d1", title: "Year End Party", description: "Finalize venue and catering.", icon: "PartyPopper", completed: true },
          { id: "d2", title: "Archive Logs", description: "Backup all 2025 system logs to cold storage.", icon: "Archive", completed: true }
        ]
      }
    ]
  }
};

export default function SeedTasksPage() {
  const [status, setStatus] = useState('Idle');

  const handleUpload = async () => {
    setStatus('Uploading...');
    try {
      const db = getFirestore(getApp());
      
      // Upload January 2026
      await setDoc(doc(db, "taskMonths", "january-2026"), taskData["january-2026"]);
      
      // Upload December 2025
      await setDoc(doc(db, "taskMonths", "december-2025"), taskData["december-2025"]);

      setStatus('✅ Success! Database updated for 2026.');
    } catch (error: any) {
      console.error(error);
      setStatus(`❌ Error: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-10 space-y-6">
      <h1 className="text-3xl font-bold text-[#bf953f]">Task Database Seeder</h1>
      <p className="text-gray-400">This will create "january-2026" and "december-2025" in your database.</p>
      <button 
        onClick={handleUpload}
        className="px-8 py-4 bg-[#bf953f] text-black font-bold rounded-xl hover:bg-[#aa771c] transition-all"
      >
        Run Update
      </button>
      <p className="font-mono text-sm">{status}</p>
    </div>
  );
}
