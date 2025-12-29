
"use client";

import { useState } from "react";
import SpeedReader from "@/components/speed-reader";
import { books } from "@/lib/books";
import { Navigation } from "@/components/ui/navigation";

export default function SpeedReaderPage() {
  const [selectedBookKey, setSelectedBookKey] = useState<string>("a-tale-of-two-cities");
  
  const activeBook = books[selectedBookKey];
  const fullText = activeBook.content.join(" ");

  return (
    <div className="flex min-h-screen w-full flex-col bg-neutral-900 text-neutral-100">
      <Navigation title="Speed Reader" />
      <main className="flex-1 p-4 sm:p-8">
        <div className="max-w-2xl mx-auto space-y-8">
          
          <header className="flex flex-col gap-4 border-b border-neutral-800 pb-6">
            <h1 className="text-3xl font-bold text-teal-400">Speed Reader</h1>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm text-neutral-400 uppercase tracking-wider font-semibold">
                Select Book
              </label>
              <select 
                value={selectedBookKey}
                onChange={(e) => setSelectedBookKey(e.target.value)}
                className="bg-neutral-800 border border-neutral-700 rounded p-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
              >
                {Object.keys(books).map((key) => (
                  <option key={key} value={key}>
                    {books[key].title}
                  </option>
                ))}
              </select>
            </div>
          </header>

          <div className="mt-8">
            <SpeedReader 
              key={selectedBookKey} 
              text={fullText} 
            />
          </div>

          <section className="mt-12 p-6 bg-neutral-800/50 rounded-lg border border-neutral-800">
            <h3 className="text-lg font-semibold text-neutral-300 mb-4">
              Currently Reading: <span className="text-teal-400">{activeBook.title}</span>
            </h3>
            <p className="text-neutral-500 leading-relaxed text-sm line-clamp-4">
              {fullText}
            </p>
          </section>

        </div>
      </main>
    </div>
  );
}
