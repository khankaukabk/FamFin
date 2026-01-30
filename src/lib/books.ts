// src/lib/books.ts

// Keep these types so your app knows what a "Book" looks like
export type BookSegment = string | { text: string; type: "story" | "commentary" };

// This is now EMPTY. 
// Only add NEW books here when you are ready to upload them.
export const books: Record<string, { title: string; content: BookSegment[] }> = {
    
    // Example of how to add a new book later:
    /*
    "new-book-id": {
        title: "My New Book",
        content: [
            "Chapter 1",
            { text: "Once upon a time...", type: "story" }
        ]
    } 
    */

};