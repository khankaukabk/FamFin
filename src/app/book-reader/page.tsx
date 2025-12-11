
"use client";

import * as React from "react";
import Link from "next/link";
import { books } from "@/lib/books";
import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BookOpen, ArrowRight } from "lucide-react";

export default function BookSelectionPage() {
  const bookEntries = Object.entries(books);

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navigation title="Book Reader" />
      <main className="flex-1 p-4 sm:px-6 md:p-8">
        <div className="mx-auto max-w-2xl space-y-8">
            <Card>
                <CardHeader>
                    <div className="flex items-center gap-4">
                        <BookOpen className="h-8 w-8 text-primary" />
                        <div>
                            <CardTitle className="font-headline text-2xl">Choose a Book</CardTitle>
                            <CardDescription>Select a book from your library to start reading.</CardDescription>
                        </div>
                    </div>
                </CardHeader>
            </Card>

            <div className="grid grid-cols-1 gap-6">
                {bookEntries.map(([slug, book]) => (
                    <Link key={slug} href={`/book-reader/${slug}`} passHref>
                       <Card className="transition-all duration-300 hover:shadow-xl hover:border-primary/50 cursor-pointer">
                           <CardContent className="p-6 flex items-center justify-between">
                               <div>
                                   <h3 className="font-headline text-xl">{book.title}</h3>
                                   <p className="text-sm text-muted-foreground">{book.content.length} pages</p>
                               </div>
                               <ArrowRight className="h-5 w-5 text-muted-foreground" />
                           </CardContent>
                       </Card>
                    </Link>
                ))}
            </div>
        </div>
      </main>
      <footer className="text-center p-4 text-muted-foreground text-xs">
        Your personal library.
      </footer>
    </div>
  );
}
