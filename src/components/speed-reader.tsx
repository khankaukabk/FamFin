
"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import type { BookSegment } from "@/lib/books";
import { Play, Pause, RotateCcw, Zap } from "lucide-react"; // Ideally install lucide-react, or use text labels

interface SpeedReaderProps {
  bookContent: BookSegment[];
}

interface WordItem {
  word: string;
  type: "story" | "commentary";
}

export default function SpeedReader({ bookContent }: SpeedReaderProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wpm, setWpm] = useState(300);

  // Parse content
  const allWords: WordItem[] = useMemo(() => {
    return bookContent.flatMap((segment) => {
      const text = typeof segment === "string" ? segment : segment.text;
      const type = typeof segment === "string" ? "story" : segment.type;
      return text.trim().split(/\s+/).map((word) => ({ word, type }));
    });
  }, [bookContent]);

  // Speed Logic
  useEffect(() => {
    if (!isPlaying) return;
    const intervalMs = (60 / wpm) * 1000;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= allWords.length - 1) {
          setIsPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, intervalMs);
    return () => clearInterval(timer);
  }, [isPlaying, wpm, allWords.length]);

  const currentItem = allWords[currentIndex] || { word: "Ready?", type: "story" };
  const progress = Math.min((currentIndex / allWords.length) * 100, 100);

  // Rewind function (Back 10 words)
  const handleRewind = () => {
    setIsPlaying(false);
    setCurrentIndex((prev) => Math.max(0, prev - 10));
  };

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] justify-between">
      
      {/* 1. IMMERSIVE READER AREA 
          - Tapping this toggle play/pause (super easy on phone) 
          - Background changes slightly for commentary
      */}
      <div 
        onClick={() => setIsPlaying(!isPlaying)}
        className={`
          flex-grow flex flex-col items-center justify-center 
          rounded-2xl border-2 shadow-2xl transition-all duration-500 cursor-pointer relative overflow-hidden
          ${currentItem.type === 'commentary' 
            ? 'bg-neutral-900 border-yellow-600/50 shadow-[0_0_50px_rgba(234,179,8,0.1)]' 
            : 'bg-neutral-800 border-neutral-700'}
        `}
      >
        {/* "Focus Mode" Guides */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-500 rounded-full opacity-50"></div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-500 rounded-full opacity-50"></div>

        {/* The Badge */}
        {currentItem.type === 'commentary' && (
           <div className="absolute top-6 px-3 py-1 bg-yellow-900/40 text-yellow-400 text-xs font-bold tracking-[0.2em] rounded-full border border-yellow-700/50 animate-pulse">
             ANALYSIS
           </div>
        )}

        {/* THE WORD */}
        <h1 className={`
            text-5xl sm:text-7xl font-bold text-center px-4 select-none
            ${currentItem.type === 'commentary' 
              ? 'text-yellow-400 font-serif italic' 
              : 'text-white font-sans'}
        `}>
          {currentItem.word}
        </h1>

        <p className="absolute bottom-6 text-neutral-500 text-xs uppercase tracking-widest opacity-60">
            {isPlaying ? "Tap to Pause" : "Tap to Read"}
        </p>
      </div>

      {/* 2. THUMB ZONE CONTROLS 
          - Placed at the bottom for easy one-handed use
      */}
      <div className="mt-6 flex flex-col gap-5">
        
        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
            <div 
                className={`h-full transition-all duration-300 ${currentItem.type === 'commentary' ? 'bg-yellow-500' : 'bg-teal-500'}`}
                style={{ width: `${progress}%` }}
            />
        </div>

        {/* Speed Slider */}
        <div className="flex items-center gap-3 px-2">
            <span className="text-xs font-mono text-neutral-500 w-10">SLOW</span>
            <input
                type="range"
                min="200"
                max="800"
                step="25"
                value={wpm}
                onChange={(e) => setWpm(Number(e.target.value))}
                className="flex-grow h-10 bg-transparent cursor-pointer touch-none" 
            />
            <span className="text-xs font-mono text-teal-400 w-10 text-right">{wpm}</span>
        </div>

        {/* Big Action Buttons */}
        <div className="grid grid-cols-4 gap-3 h-16">
            {/* Rewind Button */}
            <button 
                onClick={(e) => { e.stopPropagation(); handleRewind(); }}
                className="col-span-1 bg-neutral-800 rounded-xl flex items-center justify-center text-neutral-400 active:scale-95 transition-transform"
            >
                {/* Use icon or text */}
                <span className="text-xl font-bold">↺ 10</span>
            </button>

            {/* Play/Pause Button (Huge target) */}
            <button 
                onClick={(e) => { e.stopPropagation(); setIsPlaying(!isPlaying); }}
                className={`
                    col-span-3 rounded-xl flex items-center justify-center gap-2 text-xl font-bold tracking-wide shadow-lg active:scale-95 transition-all
                    ${isPlaying 
                        ? 'bg-neutral-700 text-white' 
                        : 'bg-teal-500 text-neutral-900 shadow-teal-500/20'}
                `}
            >
                {isPlaying ? "PAUSE" : "READ NOW"}
            </button>
        </div>
      </div>
    </div>
  );
}
