"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { getApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { useCollection, useMemoFirebase } from "@/firebase/firestore/use-collection";
import { ChevronLeft, Book, Loader2, RotateCcw, List, X, Ear } from "lucide-react";
import { Button } from "@/components/ui/button";

// --- TYPES ---
type BookSegment = string | { 
    text: string; 
    type: "story" | "commentary"; 
    pronunciation?: string; 
};

type BookData = { id: string; title: string; content: BookSegment[]; };

// FIX: Explicitly define what a "Reading Item" looks like so TypeScript doesn't guess
type QueueItem = {
    text: string;
    type: "story" | "commentary" | "header"; // We explicitly allow "header" here
    pronunciation?: string;
};

// --- HELPER: TEXT CHUNKING ---
const MAX_CHARS_PER_SLIDE = 180; 
function splitIntoReadableChunks(text: string): string[] {
  if (text.length <= MAX_CHARS_PER_SLIDE) return [text];
  const words = text.split(" ");
  const chunks: string[] = [];
  let currentChunk = "";
  for (const word of words) {
    if ((currentChunk + word).length > MAX_CHARS_PER_SLIDE) {
      if (currentChunk) chunks.push(currentChunk.trim() + "...");
      currentChunk = (chunks.length > 0 ? "..." : "") + word + " ";
    } else { currentChunk += word + " "; }
  }
  if (currentChunk) chunks.push(currentChunk.trim());
  return chunks;
}

// --- COMPONENT: CLICK-TO-REVEAL BADGE ---
const PronunciationBadge = ({ text }: { text: string }) => {
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => { setIsVisible(false); }, [text]);

    if (isVisible) {
        return (
            <div 
                onClick={(e) => { e.stopPropagation(); setIsVisible(false); }}
                className="mt-6 inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 cursor-pointer animate-in fade-in zoom-in duration-200"
            >
                <span className="text-lg md:text-xl font-mono text-primary font-bold tracking-wide">
                    /{text}/
                </span>
            </div>
        );
    }

    return (
        <button 
            onClick={(e) => { e.stopPropagation(); setIsVisible(true); }}
            className="mt-6 flex items-center gap-2 mx-auto px-4 py-2 rounded-full bg-muted/50 hover:bg-muted text-muted-foreground hover:text-primary transition-all text-xs font-bold uppercase tracking-widest border border-transparent hover:border-primary/20"
        >
            <Ear className="w-4 h-4" />
            <span>Show Pronunciation</span>
        </button>
    );
};

export default function ZenReadPage() {
  const app = getApp();
  const db = getFirestore(app);
  const booksQuery = useMemoFirebase(() => collection(db, "books"), [db]);
  const { data: books, isLoading, error } = useCollection(booksQuery);

  const [selectedBook, setSelectedBook] = useState<BookData | null>(null);
  const [progressMap, setProgressMap] = useState<Record<string, number>>({}); 
  const [showTOC, setShowTOC] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // --- FIXED: Added ': QueueItem[]' to flatMap callback ---
  const readingQueue = useMemo<QueueItem[]>(() => {
    if (!selectedBook || !selectedBook.content) return [];

    // The ': QueueItem[]' here tells TypeScript to expect our broader type
    return selectedBook.content.flatMap((segment): QueueItem[] => {
      
      // 1. Handle Headers
      if (typeof segment === 'string') {
          return [{ text: segment, type: 'header', pronunciation: undefined }];
      }

      // 2. Handle Objects
      const rawSentences = segment.text.match(/[^.!?]+[.!?]+["']?|[^.!?]+$/g) || [segment.text];
      
      return rawSentences.flatMap((sentence) => {
        const cleanSentence = sentence.trim();
        const chunks = splitIntoReadableChunks(cleanSentence);
        return chunks.map(chunk => ({
          text: chunk,
          type: segment.type,
          pronunciation: segment.pronunciation 
        }));
      });
    });
  }, [selectedBook]);

  const chapters = useMemo(() => {
    return readingQueue
      .map((item, index) => ({ text: item.text, type: item.type, index }))
      .filter((item) => item.type === 'header');
  }, [readingQueue]);

  useEffect(() => {
    if (books) {
      const newMap: Record<string, number> = {};
      books.forEach((book: any) => {
        const saved = localStorage.getItem(`zen-read-progress-${book.id}`);
        if (saved) newMap[book.id] = parseInt(saved, 10);
      });
      setProgressMap(newMap);
    }
  }, [books]);

  useEffect(() => {
    if (selectedBook && readingQueue.length > 0 && scrollContainerRef.current) {
      const savedIndex = localStorage.getItem(`zen-read-progress-${selectedBook.id}`);
      if (savedIndex) {
        const index = parseInt(savedIndex, 10);
        setTimeout(() => {
            if (scrollContainerRef.current) {
                const targetSlide = scrollContainerRef.current.children[index];
                if (targetSlide) targetSlide.scrollIntoView({ behavior: 'auto' });
            }
        }, 50);
      }
    }
  }, [selectedBook, readingQueue.length]);

  const handleScroll = () => {
    if (!scrollContainerRef.current || !selectedBook) return;
    const container = scrollContainerRef.current;
    const index = Math.round(container.scrollTop / container.clientHeight);
    if (index >= 0) localStorage.setItem(`zen-read-progress-${selectedBook.id}`, index.toString());
  };

  const resetProgress = (e: React.MouseEvent, bookId: string) => {
    e.stopPropagation();
    localStorage.removeItem(`zen-read-progress-${bookId}`);
    const newMap = { ...progressMap };
    delete newMap[bookId];
    setProgressMap(newMap);
    if (selectedBook?.id === bookId && scrollContainerRef.current) {
        scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const jumpToSlide = (index: number) => {
    setShowTOC(false); 
    if (scrollContainerRef.current) {
      const targetSlide = scrollContainerRef.current.children[index];
      if (targetSlide) {
        targetSlide.scrollIntoView({ behavior: 'smooth' });
        if (selectedBook) {
            localStorage.setItem(`zen-read-progress-${selectedBook.id}`, index.toString());
        }
      }
    }
  };

  if (isLoading) return <div className="min-h-screen flex items-center justify-center bg-background"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>;
  if (error) return <div className="p-10 text-red-500">Error: {error.message}</div>;

  if (!selectedBook) {
    return (
      <div className="min-h-screen bg-background p-6 font-sans">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-2 mt-8">
            <h1 className="text-3xl font-bold tracking-tight">Library</h1>
            <p className="text-muted-foreground">Choose a book to enter Zen Read mode.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {books?.map((book: any) => {
                const currentProgress = progressMap[book.id];
                const hasProgress = currentProgress && currentProgress > 1;
                return (
                  <button key={book.id} onClick={() => setSelectedBook(book)} className="group relative flex flex-col items-start text-left p-6 h-full border rounded-xl hover:border-primary/50 hover:bg-muted/30 transition-all shadow-sm hover:shadow-md active:scale-95 duration-200">
                    <div className="p-3 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors"><Book className="w-6 h-6 text-primary" /></div>
                    <h3 className="font-semibold text-lg leading-tight mb-2 pr-6">{book.title}</h3>
                    {hasProgress && <span className="absolute top-6 right-6 h-2 w-2 rounded-full bg-green-500 ring-4 ring-green-500/20 shadow-sm" />}
                    <div className="mt-auto pt-4 text-xs font-medium text-muted-foreground uppercase tracking-wider w-full flex justify-between items-center">
                      <span>{book.content?.length || 0} Segments</span>
                      {hasProgress && <span className="text-green-600 font-bold">Resume</span>}
                    </div>
                  </button>
                )
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-[100dvh] w-full bg-background overflow-hidden relative touch-none">
      <div className="absolute top-4 left-4 z-50 flex gap-2">
        <Button variant="secondary" size="icon" className="rounded-full h-10 w-10 shadow-md bg-background/80 backdrop-blur-md border border-border/50" onClick={() => { setSelectedBook(null); setShowTOC(false); }}>
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button variant="secondary" size="icon" className={`rounded-full h-10 w-10 shadow-md backdrop-blur-md border border-border/50 transition-colors ${showTOC ? 'bg-primary text-primary-foreground' : 'bg-background/80 text-foreground'}`} onClick={() => setShowTOC(!showTOC)} title="Table of Contents">
            {showTOC ? <X className="h-5 w-5" /> : <List className="h-5 w-5" />}
        </Button>
        <Button variant="secondary" size="icon" className="rounded-full h-10 w-10 shadow-md bg-background/80 backdrop-blur-md border border-border/50 text-muted-foreground hover:text-red-500" onClick={(e) => resetProgress(e, selectedBook.id)} title="Reset Progress">
            <RotateCcw className="h-4 w-4" />
        </Button>
      </div>

      {showTOC && (
        <div className="absolute top-16 left-4 z-40 w-64 md:w-80 max-h-[70vh] overflow-y-auto bg-background/95 backdrop-blur-xl border rounded-2xl shadow-2xl p-2 animate-in fade-in slide-in-from-top-4">
            <div className="px-4 py-3 border-b mb-2">
                <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Chapters</h3>
            </div>
            <div className="space-y-1">
                {chapters.length === 0 && <div className="p-4 text-center text-sm text-muted-foreground">No chapters found.</div>}
                {chapters.map((chapter, i) => (
                    <button key={i} onClick={() => jumpToSlide(chapter.index)} className="w-full text-left px-4 py-3 text-sm font-medium rounded-lg hover:bg-primary/10 hover:text-primary transition-colors truncate">
                        {chapter.text}
                    </button>
                ))}
            </div>
        </div>
      )}

      <div ref={scrollContainerRef} onScroll={handleScroll} className="h-full w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar" onClick={() => setShowTOC(false)}>
        <div className="snap-center h-full w-full flex flex-col items-center justify-center p-8 text-center space-y-6">
            <h1 className="text-3xl md:text-6xl font-black tracking-tighter leading-tight">{selectedBook.title}</h1>
            <p className="text-sm md:text-base text-muted-foreground animate-bounce uppercase tracking-widest mt-8">Swipe up to read</p>
        </div>

        {readingQueue.map((item, index) => (
          <div key={index} className="snap-center h-full w-full flex flex-col items-center justify-center p-6 md:p-12 relative">
            <div className="max-w-xl text-center w-full">
                {item.type === 'header' && <h2 className="text-2xl md:text-5xl font-bold text-primary tracking-tight uppercase leading-snug break-words">{item.text}</h2>}
                {item.type === 'commentary' && (
                    <div className="flex flex-col items-center space-y-6">
                        <span className="inline-block px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-600 text-[10px] md:text-xs font-bold uppercase tracking-wider">Commentary</span>
                        <p className="text-xl md:text-3xl font-sans italic text-muted-foreground leading-normal md:leading-relaxed">"{item.text}"</p>
                    </div>
                )}
                {item.type === 'story' && <p className="text-2xl md:text-4xl font-serif font-medium leading-normal md:leading-relaxed text-foreground/90">{item.text}</p>}
                
                {item.pronunciation && <PronunciationBadge text={item.pronunciation} />}

            </div>
            <div className="absolute bottom-6 text-[10px] text-muted-foreground/30 font-mono">{index + 1} / {readingQueue.length}</div>
          </div>
        ))}
        <div className="snap-center h-full w-full flex flex-col items-center justify-center p-12 text-center space-y-6">
            <h2 className="text-2xl font-bold text-muted-foreground">End of Book</h2>
            <Button size="lg" onClick={() => setSelectedBook(null)} className="mt-4 rounded-full px-8">Back to Library</Button>
        </div>
      </div>
    </div>
  );
}