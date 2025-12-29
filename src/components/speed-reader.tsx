import { useMemo } from "react";
import { BookSegment } from "@/lib/books";

interface ScrollReaderProps {
  bookContent: BookSegment[];
}

interface SlideItem {
  text: string;
  type: "story" | "commentary" | "chapter-title";
}

export default function ScrollReader({ bookContent }: ScrollReaderProps) {
  
  // 1. DATA PROCESSING
  // This turns paragraphs into a list of single sentences
  const slides: SlideItem[] = useMemo(() => {
    const result: SlideItem[] = [];

    bookContent.forEach((segment) => {
      const rawText = typeof segment === "string" ? segment : segment.text;
      const type = typeof segment === "string" ? "story" : segment.type;

      // Detect Chapter Titles (simple heuristic: all caps or starts with "CHAPTER")
      if (rawText.toUpperCase() === rawText || rawText.startsWith("CHAPTER")) {
        result.push({ text: rawText, type: "chapter-title" });
        return;
      }

      // Split paragraph into sentences using regex
      // This looks for periods, question marks, or exclamations followed by space
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

  return (
    // The Container: Full screen height, handles the snapping
    <div className="h-[calc(100vh-80px)] w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar">
      
      {slides.map((slide, index) => (
        // The Slide: Each sentence is a full screen section
        <div 
          key={index} 
          className="snap-center h-full w-full flex flex-col items-center justify-center p-8 transition-all duration-500"
        >
          <div className="max-w-md w-full">
            
            {/* Visual Indicator for Commentary */}
            {slide.type === "commentary" && (
              <div className="mb-6 flex justify-center">
                 <span className="bg-yellow-500/20 text-yellow-300 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest border border-yellow-500/30">
                   Analysis
                 </span>
              </div>
            )}

            {/* Visual Indicator for Chapter Titles */}
            {slide.type === "chapter-title" && (
              <div className="mb-6 flex justify-center">
                 <span className="text-teal-500 text-xs font-mono uppercase tracking-widest">
                   New Section
                 </span>
              </div>
            )}

            {/* THE TEXT */}
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

            {/* Decoration for Commentary */}
            {slide.type === "commentary" && (
              <div className="mt-8 w-16 h-1 bg-yellow-500/30 mx-auto rounded-full" />
            )}

          </div>
          
          {/* Subtle scroll hint at the very bottom */}
          <div className="absolute bottom-8 opacity-20 text-white animate-bounce">
            ↓
          </div>
        </div>
      ))}
      
      {/* End of Book Spacer */}
      <div className="snap-center h-1/2 w-full flex items-center justify-center text-neutral-500">
        End of Preview
      </div>

    </div>
  );
}
