"use client";

import { useState, useMemo } from "react";
import { getApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { useCollection, useMemoFirebase } from "@/firebase/firestore/use-collection";
import { ChevronLeft, Book, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

// ----------------------------------------------------------------------
// Types
// ----------------------------------------------------------------------
type BookSegment = string | { text: string; type: "story" | "commentary" };

type BookData = {
  id: string;
  title: string;
  content: BookSegment[];
};

// ----------------------------------------------------------------------
// Helper: Smart Text Chunking (Keeps text readable on mobile)
// ----------------------------------------------------------------------
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
    } else {
      currentChunk += word + " ";
    }
  }
  if (currentChunk) chunks.push(currentChunk.trim());
  
  return chunks;
}

export default function ZenReadPage() {
  // 1. Setup Firebase Connection
  const app = getApp();
  const db = getFirestore(app);

  // 2. Create Memoized Query
  const booksQuery = useMemoFirebase(
    () => collection(db, "books"),
    [db]
  );

  // 3. Fetch Data from Cloud
  const { data: books, isLoading, error } = useCollection(booksQuery);

  const [selectedBook, setSelectedBook] = useState<BookData | null>(null);

  // 4. Process Content: Split paragraphs -> sentences -> fit-to-screen chunks
  const readingQueue = useMemo(() => {
    if (!selectedBook || !selectedBook.content) return [];

    return selectedBook.content.flatMap((segment) => {
      // CASE A: Header (String)
      if (typeof segment === 'string') {
        return [{ text: segment, type: 'header' }];
      }

      // CASE B: Story/Commentary Object
      const rawSentences = segment.text.match(/[^.!?]+[.!?]+["']?|[^.!?]+$/g) || [segment.text];
      
      return rawSentences.flatMap((sentence) => {
        const cleanSentence = sentence.trim();
        const chunks = splitIntoReadableChunks(cleanSentence);
        
        return chunks.map(chunk => ({
          text: chunk,
          type: segment.type,
        }));
      });
    });
  }, [selectedBook]);

  // ------------------------------------------------------------------
  // LOADING / ERROR STATES
  // ------------------------------------------------------------------
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="text-muted-foreground">Loading your library...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Error loading library: {error.message}
      </div>
    );
  }

  // ------------------------------------------------------------------
  // VIEW 1: BOOK LIBRARY
  // ------------------------------------------------------------------
  if (!selectedBook) {
    return (
      <div className="min-h-screen bg-background p-6 font-sans">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-2 mt-8">
            <h1 className="text-3xl font-bold tracking-tight">Library</h1>
            <p className="text-muted-foreground">
              Choose a book to enter Zen Read mode.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* The 'books' array comes directly from Firestore now */}
            {books?.map((book: any) => (
              <button
                key={book.id}
                onClick={() => setSelectedBook(book)}
                className="group flex flex-col items-start text-left p-6 h-full border rounded-xl hover:border-primary/50 hover:bg-muted/30 transition-all shadow-sm hover:shadow-md active:scale-95 duration-200"
              >
                <div className="p-3 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                  <Book className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg leading-tight mb-2">
                  {book.title}
                </h3>
                <div className="mt-auto pt-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {book.content?.length || 0} Segments
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ------------------------------------------------------------------
  // VIEW 2: VERTICAL SNAP READER
  // ------------------------------------------------------------------
  return (
    <div className="h-[100dvh] w-full bg-background overflow-hidden relative touch-none">
      
      {/* Floating Back Button */}
      <div className="absolute top-4 left-4 z-50">
        <Button
          variant="secondary"
          size="icon"
          className="rounded-full h-10 w-10 shadow-md bg-background/80 backdrop-blur-md border border-border/50"
          onClick={() => setSelectedBook(null)}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
      </div>

      {/* Snap Container */}
      <div className="h-full w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar">
        
        {/* Title Page */}
        <div className="snap-center h-full w-full flex flex-col items-center justify-center p-8 text-center space-y-6">
            <h1 className="text-3xl md:text-6xl font-black tracking-tighter leading-tight">
                {selectedBook.title}
            </h1>
            <p className="text-sm md:text-base text-muted-foreground animate-bounce uppercase tracking-widest mt-8">
                Swipe up to read
            </p>
        </div>

        {/* Content Slides */}
        {readingQueue.map((item, index) => (
          <div 
            key={index} 
            className="snap-center h-full w-full flex items-center justify-center p-6 md:p-12 relative"
          >
            <div className="max-w-xl text-center w-full">
                
                {item.type === 'header' && (
                    <h2 className="text-2xl md:text-5xl font-bold text-primary tracking-tight uppercase leading-snug break-words">
                        {item.text}
                    </h2>
                )}

                {item.type === 'commentary' && (
                    <div className="flex flex-col items-center space-y-6">
                        <span className="inline-block px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-600 text-[10px] md:text-xs font-bold uppercase tracking-wider">
                            Commentary
                        </span>
                        <p className="text-xl md:text-3xl font-sans italic text-muted-foreground leading-normal md:leading-relaxed">
                            "{item.text}"
                        </p>
                    </div>
                )}

                {item.type === 'story' && (
                    <p className="text-2xl md:text-4xl font-serif font-medium leading-normal md:leading-relaxed text-foreground/90">
                        {item.text}
                    </p>
                )}
            </div>

            <div className="absolute bottom-6 text-[10px] text-muted-foreground/30 font-mono">
              {index + 1} / {readingQueue.length}
            </div>
          </div>
        ))}

        {/* End Page */}
        <div className="snap-center h-full w-full flex flex-col items-center justify-center p-12 text-center space-y-6">
            <h2 className="text-2xl font-bold text-muted-foreground">End of Book</h2>
            <Button size="lg" onClick={() => setSelectedBook(null)} className="mt-4 rounded-full px-8">
                Back to Library
            </Button>
        </div>

      </div>
    </div>
  );
}