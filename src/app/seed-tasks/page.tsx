'use client';

import { useState } from 'react';
import { getApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

// --- FEBRUARY 2026 DATA ---
const februaryTemplate = {
  id: "february-2026",
  month: "February",
  year: 2026,
  weeks: [
    {
      week: "Week 1",
      dates: "Feb 1 - Feb 7",
      tasks: [
        { id: "feb1_1", title: "Directors' Meeting", description: "Weekly board review.", icon: "Users", completed: false },
        { id: "feb1_2", title: "USPS Submission", description: "Submit required documents.", icon: "Mail", completed: false },
        { id: "feb1_3", title: "Toyota Service", description: "Drop off at Discount Tire.", icon: "Car", completed: false },
        { id: "feb1_4", title: "Director Payment", description: "Contact Abid regarding payment.", icon: "CreditCard", completed: false },
        { id: "feb1_5", title: "Investor Cheque", description: "Fix issue with Chicago investor cheque.", icon: "FileText", completed: false },
        { id: "feb1_6", title: "Cullman Meat Visit", description: "Confirm visit for Saturday, Feb 7th.", icon: "CalendarCheck", completed: false },
        { id: "feb1_bis", title: "Email BIS", description: "Contact BIS regarding the Pelham project.", icon: "Mail", completed: false },
        
        // --- NEW TASKS ADDED HERE ---
        { id: "feb1_tax", title: "Tax Preparation", description: "Prepare taxes for Amin Consulting.", icon: "FileText", completed: false },
        { id: "feb1_uab", title: "Update Healthcare", description: "Change provider to UAB Medicine Hoover.", icon: "Activity", completed: false },
        
        // Always keep this at the bottom of the week
        { id: "feb1_pc", title: "Personal Choice Audit", description: "Check all personal choice hours to ensure 36 hours have been done.", icon: "Clock", completed: false }
      ]
    },
    {
      week: "Week 2",
      dates: "Feb 8 - Feb 14",
      tasks: [
        { id: "feb2_1", title: "Directors' Meeting", description: "Weekly board review.", icon: "Users", completed: false },
        { id: "feb2_pc", title: "Personal Choice Audit", description: "Check all personal choice hours to ensure 36 hours have been done.", icon: "Clock", completed: false }
      ]
    },
    {
      week: "Week 3",
      dates: "Feb 15 - Feb 21",
      tasks: [
        { id: "feb3_1", title: "Directors' Meeting", description: "Weekly board review.", icon: "Users", completed: false },
        { id: "feb3_pc", title: "Personal Choice Audit", description: "Check all personal choice hours to ensure 36 hours have been done.", icon: "Clock", completed: false }
      ]
    },
    {
      week: "Week 4",
      dates: "Feb 22 - Feb 28",
      tasks: [
        { id: "feb4_1", title: "Directors' Meeting", description: "Weekly board review.", icon: "Users", completed: false },
        { id: "feb4_pc", title: "Personal Choice Audit", description: "Check all personal choice hours to ensure 36 hours have been done.", icon: "Clock", completed: false },
        { id: "feb4_amazon", title: "Amazon Payment", description: "Check Amazon payment to ensure no interest charge.", icon: "CreditCard", completed: false }
      ]
    }
  ]
};

export default function SeedTasksPage() {
  const [status, setStatus] = useState('Idle');

  const handleUpload = async () => {
    setStatus('Uploading February...');
    try {
      const db = getFirestore(getApp());
      
      // Upload February 2026 with merge: true to update existing data
      await setDoc(doc(db, "taskMonths", "february-2026"), februaryTemplate, { merge: true });

      setStatus('✅ Success! February 2026 has been updated.');
    } catch (error: any) {
      console.error(error);
      setStatus(`❌ Error: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-10 space-y-6">
      <h1 className="text-3xl font-bold text-[#bf953f]">February Task Seeder</h1>
      
      <div className="text-gray-400 text-center space-y-2 max-w-md border border-gray-800 p-6 rounded-xl">
        <p><strong>Status:</strong> Ready to update.</p>
        <p><strong>Added:</strong> Amin Consulting Tax Prep & UAB Medicine (Week 1).</p>
      </div>

      <button 
        onClick={handleUpload}
        className="px-8 py-4 bg-[#bf953f] text-black font-bold rounded-xl hover:bg-[#aa771c] transition-all shadow-lg hover:shadow-[#bf953f]/20"
      >
        Update February
      </button>
      
      <p className="font-mono text-sm text-[#bf953f]">{status}</p>
    </div>
  );
}