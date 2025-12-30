
"use client";

import { useMemo, useRef, useEffect } from "react";
import type { BookSegment } from "@/lib/books";

interface ScrollReaderProps {
  bookContent: BookSegment[];
  bookKey: string;
}

interface SlideItem {
  text: string;
  type: "story" | "commentary" | "chapter-title";
}

export default function ScrollReader({ bookContent, bookKey }: ScrollReaderProps) {
  
  const slides: SlideItem[] = useMemo(() => {
    const result: SlideItem[] = [];

    bookContent.forEach((segment) => {
      const rawText = typeof segment === "string" ? segment : segment.text;
      const type = typeof segment === "string" ? "story" : segment.type;

      if (rawText.toUpperCase() === rawText || rawText.startsWith("CHAPTER")) {
        result.push({ text: rawText, type: "chapter-title" });
        return;
      }

      const sentences = rawText.match(/[^.!?]+[.!?]+["']?|[^.!?]+$/g) || [rawText];

      sentences.forEach((sentence) => {
        if (sentence.trim().length > 0) {
          result.push({ 
            text: sentence.trim(), 
            type: type as any 
          });
        }
      });
    });

    return result;
  }, [bookContent]);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const LOCAL_STORAGE_KEY = `scroll-reader-progress-${bookKey}`;

  // Load initial scroll position
  useEffect(() => {
    const savedIndex = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedIndex && scrollContainerRef.current) {
      const index = parseInt(savedIndex, 10);
      const { clientHeight } = scrollContainerRef.current;
      scrollContainerRef.current.scrollTop = index * clientHeight;
    }
  }, [bookKey, LOCAL_STORAGE_KEY]);

  // Handle saving scroll position
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      if (scrollContainerRef.current) {
        const { scrollTop, clientHeight } = scrollContainerRef.current;
        const currentIndex = Math.round(scrollTop / clientHeight);
        localStorage.setItem(LOCAL_STORAGE_KEY, currentIndex.toString());
      }
    }, 250); // Debounce to avoid excessive writes
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    container?.addEventListener('scroll', handleScroll);
    return () => {
      container?.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookKey]); // Rerun if the book changes


  return (
    <div 
      ref={scrollContainerRef}
      className="h-full w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar"
    >
      
      {slides.map((slide, index) => (
        <div 
          key={index} 
          className="snap-center h-full w-full flex flex-col items-center justify-center p-8 transition-all duration-500"
        >
          <div className="max-w-md w-full">
            
            {slide.type === "commentary" && (
              <div className="mb-6 flex justify-center">
                 <span className="bg-yellow-500/20 text-yellow-300 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest border border-yellow-500/30">
                   Analysis
                 </span>
              </div>
            )}

            {slide.type === "chapter-title" && (
              <div className="mb-6 flex justify-center">
                 <span className="text-teal-500 text-xs font-mono uppercase tracking-widest">
                   New Section
                 </span>
              </div>
            )}

            <p className={`
              text-center leading-relaxed transition-all
              ${slide.type === "chapter-title" 
                ? "text-3xl font-black text-teal-400 uppercase tracking-widest" 
                : ""}
              ${slide.type === "story" 
                ? "text-2xl sm:text-3xl font-medium text-neutral-200" 
                : ""}
              ${slide.type === "commentary" 
                ? "text-xl sm:text-2xl font-serif italic text-yellow-100/90" 
                : ""}
            `}>
              {slide.text}
            </p>

            {slide.type === "commentary" && (
              <div className="mt-8 w-16 h-1 bg-yellow-500/30 mx-auto rounded-full" />
            )}

          </div>
          
          <div className="absolute bottom-8 opacity-20 text-white animate-bounce">
            ↓
          </div>
        </div>
      ))}
      
      <div className="snap-center h-1/2 w-full flex items-center justify-center text-neutral-500">
        End of Preview
      </div>

    </div>
  );
}
