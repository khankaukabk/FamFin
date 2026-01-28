
"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import ScrollReader from "@/components/speed-reader"; 
import { books } from "@/lib/books"; 

export default function SpeedReaderPage() {
  const [selectedBookKey, setSelectedBookKey] = useState<string>("gulistan");
  const activeBook = books[selectedBookKey];

  return (
    <div className="fixed inset-0 bg-neutral-900 text-neutral-100 font-sans overflow-hidden">
      
      <div className="absolute top-0 left-0 right-0 z-10 p-4 bg-gradient-to-b from-neutral-900 to-transparent flex justify-between items-center">
        <h1 className="font-bold text-teal-500 tracking-tight">Zen Reader</h1>
        
        <select 
          value={selectedBookKey}
          onChange={(e) => setSelectedBookKey(e.target.value)}
          className="bg-neutral-800/80 backdrop-blur text-xs text-white py-2 pl-3 pr-2 rounded-full border border-neutral-700 focus:outline-none"
        >
          {Object.keys(books).map((key) => (
            <option key={key} value={key}>
              {books[key].title}
            </option>
          ))}
        </select>
      </div>

      <main className="h-full w-full">
        <ScrollReader 
          key={selectedBookKey}
          bookContent={activeBook.content} 
          bookKey={selectedBookKey}
        />
      </main>

    </div>
  );
}
