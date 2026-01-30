"use client";

import { useMemo, useRef, useEffect, useState } from "react";
import type { BookSegment } from "@/lib/books";

const premiumStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap');
  
  .font-reading { font-family: 'Quicksand', sans-serif; }
  
  .no-scrollbar::-webkit-scrollbar { display: none; }
  .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

  /* Smooth fade-in for each slide */
  .fade-up {
    animation: fadeUp 0.8s ease-out forwards;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

export default function ScrollReader({ bookContent, bookKey }: { bookContent: BookSegment[], bookKey: string }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const STORAGE_KEY = `zen-reader-pos-${bookKey}`;

  const slides = useMemo(() => {
    const result: { text: string; type: string }[] = [];
    bookContent.forEach((segment) => {
      const text = typeof segment === "string" ? segment : segment.text;
      const type = typeof segment === "string" ? "chapter" : segment.type;

      if (typeof segment === "string") {
        result.push({ text, type: "chapter" });
      } else {
        const sentences = text.match(/[^.!?]+[.!?]+["']?|[^.!?]+$/g) || [text];
        sentences.forEach(s => result.push({ text: s.trim(), type }));
      }
    });
    return result;
  }, [bookContent]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && scrollContainerRef.current) {
      const index = parseInt(saved, 10);
      setTimeout(() => {
        if (scrollContainerRef.current) {
          const h = scrollContainerRef.current.clientHeight;
          scrollContainerRef.current.scrollTo({ top: index * h, behavior: 'instant' });
        }
      }, 150);
    }
  }, [bookKey]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const index = Math.round(container.scrollTop / container.clientHeight);
    if (index !== currentIndex) {
      setCurrentIndex(index);
      localStorage.setItem(STORAGE_KEY, index.toString());
    }
  };

  return (
    <>
      <style>{premiumStyles}</style>
      <div 
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="h-full w-full overflow-y-scroll snap-y snap-mandatory no-scrollbar bg-[#0f1115] font-reading"
      >
        {/* Sleek Gradient Progress Bar */}
        <div 
          className="fixed top-0 left-0 h-1.5 bg-gradient-to-r from-teal-500 to-emerald-400 z-50 transition-all duration-500 rounded-r-full"
          style={{ width: `${((currentIndex + 1) / slides.length) * 100}%` }}
        />

        {slides.map((slide, i) => (
          <div key={i} className="h-full w-full snap-start snap-always flex flex-col items-center justify-center p-10 relative">
            <div className={`max-w-md w-full text-center ${currentIndex === i ? 'fade-up' : 'opacity-0'}`}>
              
              {/* Important Tag - Categorized by Color */}
              <div className="mb-8">
                <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.25em] shadow-sm border ${
                  slide.type === 'commentary' 
                    ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' 
                    : slide.type === 'chapter'
                    ? 'bg-teal-500/10 text-teal-400 border-teal-500/20'
                    : 'bg-neutral-500/10 text-neutral-400 border-neutral-500/20'
                }`}>
                  {slide.type === 'chapter' ? 'The Brief' : slide.type}
                </span>
              </div>

              {/* The Reading Text */}
              <p 
                suppressHydrationWarning 
                className={`leading-relaxed transition-colors duration-500 ${
                  slide.type === 'chapter' ? 'text-4xl font-bold text-white' :
                  slide.type === 'commentary' ? 'text-2xl font-medium text-amber-100/90' :
                  'text-3xl font-semibold text-neutral-200'
                }`}
              >
                {slide.text}
              </p>

              {/* Subtle underline for important Commentary */}
              {slide.type === 'commentary' && (
                <div className="mt-6 w-12 h-0.5 bg-amber-500/40 mx-auto rounded-full" />
              )}
            </div>

            {/* Bottom Counter with Glass effect */}
            <div className="absolute bottom-12 px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-[9px] font-mono text-neutral-500 tracking-[3px]">
              {i + 1} / {slides.length}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}