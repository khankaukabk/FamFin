
"use client";

import { useState } from "react";
import SpeedReader from "@/components/speed-reader";
import { books } from "@/lib/books"; 

export default function SpeedReaderPage() {
  const [selectedBookKey, setSelectedBookKey] = useState<string>("dune");
  const activeBook = books[selectedBookKey];

  return (
    // min-h-screen ensures it fills phone screen, overflow-hidden stops scrolling while reading
    <div className="min-h-screen bg-neutral-900 text-neutral-100 font-sans touch-manipulation">
      
      <div className="max-w-md mx-auto h-screen p-4 flex flex-col">
        
        {/* Minimal Header */}
        <header className="flex-none mb-4 flex justify-between items-center">
            <div>
                <h1 className="text-lg font-bold text-teal-400 leading-none">Speed Reader</h1>
                <p className="text-xs text-neutral-500">v1.0 Mobile</p>
            </div>
            
            {/* Native Select is actually great on mobile, we just style it to look like a pill button */}
            <div className="relative">
                <select 
                    value={selectedBookKey}
                    onChange={(e) => setSelectedBookKey(e.target.value)}
                    className="appearance-none bg-neutral-800 border border-neutral-700 text-white py-2 pl-4 pr-8 rounded-full text-sm font-medium focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                    {Object.keys(books).map((key) => (
                        <option key={key} value={key}>
                            {books[key].title}
                        </option>
                    ))}
                </select>
                {/* Little arrow icon for the select */}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-neutral-400">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
            </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-grow">
          {/* We pass the array content directly now */}
          <SpeedReader 
            key={selectedBookKey} 
            bookContent={activeBook.content} 
          />
        </main>

      </div>
    </div>
  );
}
