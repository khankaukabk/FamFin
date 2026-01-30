"use client";

import { useState, useEffect } from "react";
// 1. Changed import to use standard getApp
import { getApp } from "firebase/app"; 
import { collection, getFirestore } from "firebase/firestore";

// 2. We assume you fixed the export in Step 1. 
// If this still errors, see the note below code.
import { useCollection, useMemoFirebase } from "@/firebase/firestore/use-collection";
import { ChevronLeft, Book, List } from "lucide-react";
import { Button } from "@/components/ui/button";

// ----------------------------------------------------------------------
// Types for your Book Data
// ----------------------------------------------------------------------
type Chapter = {
  title: string;
  content: string;
};

type BookData = {
  id: string;
  title: string;
  author?: string;
  chapters?: Chapter[];
  content?: string;
};

export default function ZenReadPage() {
  // 3. Initialize Firestore using standard getApp()
  const app = getApp(); 
  const db = getFirestore(app);

  // 4. Create a "Memoized" Query
  const booksQuery = useMemoFirebase(
    () => collection(db, "books"),
    [db]
  );

  // 5. Fetch Data
  const { data: books, isLoading: loading, error } = useCollection(booksQuery);

  const [selectedBook, setSelectedBook] = useState<BookData | null>(null);
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);

  const getCurrentContent = () => {
    if (!selectedBook) return "";
    if (selectedBook.chapters && selectedBook.chapters.length > 0) {
      return selectedBook.chapters[currentChapterIndex]?.content || "";
    }
    return selectedBook.content || "No content found for this book.";
  };

  // ------------------------------------------------------------------
  // VIEW 1: BOOK LIBRARY
  // ------------------------------------------------------------------
  if (!selectedBook) {
    return (
      <div className="min-h-screen bg-background p-8 font-sans">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Library</h1>
            <p className="text-muted-foreground">
              Choose a book to enter Zen Read mode.
            </p>
          </div>

          {loading && <div>Loading your library...</div>}
          {error && <div className="text-red-500">Error loading books.</div>}

          {!loading && books && books.length === 0 && (
            <div className="p-8 border rounded-lg text-center text-muted-foreground bg-muted/20">
              No books found. Add a document to the 'books' collection in Firestore.
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books?.map((book: any) => (
              <button
                key={book.id}
                onClick={() => {
                  setSelectedBook(book);
                  setCurrentChapterIndex(0);
                }}
                className="group flex flex-col items-start text-left p-6 h-full border rounded-xl hover:border-primary/50 hover:bg-muted/30 transition-all shadow-sm hover:shadow-md"
              >
                <div className="p-3 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                  <Book className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg leading-tight mb-2">
                  {book.title || "Untitled Book"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {book.author || "Unknown Author"}
                </p>
                <div className="mt-auto pt-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {book.chapters?.length ? `${book.chapters.length} Chapters` : "Single Text"}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ------------------------------------------------------------------
  // VIEW 2: READER MODE
  // ------------------------------------------------------------------
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center px-4 max-w-5xl mx-auto w-full gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSelectedBook(null)}
            title="Back to Library"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <div className="flex-1 min-w-0">
             <h2 className="text-sm font-medium text-muted-foreground truncate">Reading</h2>
             <h1 className="text-base font-semibold truncate">{selectedBook.title}</h1>
          </div>

          {selectedBook.chapters && selectedBook.chapters.length > 1 && (
            <div className="flex items-center gap-2">
              <List className="h-4 w-4 text-muted-foreground hidden sm:block" />
              <select
                className="h-9 w-[180px] rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                value={currentChapterIndex}
                onChange={(e) => setCurrentChapterIndex(Number(e.target.value))}
              >
                {selectedBook.chapters.map((chapter, index) => (
                  <option key={index} value={index}>
                    {chapter.title || `Chapter ${index + 1}`}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </header>

      <main className="flex-1 w-full max-w-3xl mx-auto p-6 sm:p-10">
        <div className="prose dark:prose-invert prose-lg max-w-none">
            <h2 className="mb-6 text-2xl font-bold text-primary">
               {selectedBook.chapters?.[currentChapterIndex]?.title}
            </h2>
            <div className="whitespace-pre-wrap leading-relaxed text-foreground/90">
                {getCurrentContent()}
            </div>
        </div>

        {selectedBook.chapters && selectedBook.chapters.length > 1 && (
          <div className="flex justify-between mt-16 pt-8 border-t">
            <Button
              variant="outline"
              disabled={currentChapterIndex === 0}
              onClick={() => setCurrentChapterIndex((prev) => prev - 1)}
            >
              Previous Chapter
            </Button>
            <Button
              variant="default"
              disabled={currentChapterIndex === (selectedBook.chapters.length - 1)}
              onClick={() => setCurrentChapterIndex((prev) => prev + 1)}
            >
              Next Chapter
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}