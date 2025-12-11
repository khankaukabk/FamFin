
"use client";

import * as React from "react";
import { useParams, notFound } from 'next/navigation';
import useEmblaCarousel from 'embla-carousel-react';
import { books } from "@/lib/books";
import { BookOpen, X } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

export default function BookReaderPage() {
    const params = useParams();
    const slug = params.slug as string;
    const book = books[slug];

    const [emblaRef, emblaApi] = useEmblaCarousel({ 
        axis: 'y',
        startIndex: 0,
    });
    const [currentPage, setCurrentPage] = React.useState(0);
    const [progressPercentage, setProgressPercentage] = React.useState(0);

    // If book is not found, render a not-found page
    if (!book) {
        notFound();
    }
    
    const { title: bookTitle, content: bookContent } = book;
    const totalPages = bookContent.length;
    const LOCAL_STORAGE_KEY = `book-progress-${slug}`;

    // Effect to load initial page from local storage
    React.useEffect(() => {
        const savedPage = localStorage.getItem(LOCAL_STORAGE_KEY);
        const pageIndex = savedPage ? parseInt(savedPage, 10) : 0;
        if (emblaApi) {
            emblaApi.scrollTo(pageIndex, true); // Instantly scroll without animation
        }
        setCurrentPage(pageIndex);
        if (totalPages > 0) {
            setProgressPercentage(((pageIndex + 1) / totalPages) * 100);
        }
    }, [emblaApi, totalPages, LOCAL_STORAGE_KEY]);

    // Effect to handle page selection and saving progress
    React.useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => {
            const newPage = emblaApi.selectedScrollSnap();
            setCurrentPage(newPage);
            if (totalPages > 0) {
                setProgressPercentage(((newPage + 1) / totalPages) * 100);
            }
            localStorage.setItem(LOCAL_STORAGE_KEY, newPage.toString());
        };

        emblaApi.on('select', onSelect);
        // Initial call to set state
        onSelect();

        return () => {
            emblaApi.off('select', onSelect);
        };
    }, [emblaApi, totalPages, LOCAL_STORAGE_KEY]);
    
    return (
        <div className="fixed inset-0 bg-background flex flex-col font-serif">
            <header className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-background/80 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                    <BookOpen className="h-6 w-6 text-primary" />
                    <div className="text-sm">
                        <p className="font-bold text-foreground">{bookTitle}</p>
                        <p className="text-muted-foreground">Page {currentPage + 1} of {totalPages}</p>
                    </div>
                </div>
                 <Button variant="ghost" size="icon" onClick={() => window.history.back()}>
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close Reader</span>
                </Button>
            </header>
            
            <div className="flex-1 overflow-hidden" ref={emblaRef}>
                <div className="h-full">
                    {bookContent.map((paragraph, index) => (
                        <div key={index} className="h-full flex-shrink-0 flex items-center justify-center p-6 pt-24 pb-20">
                            <p className="text-xl/relaxed sm:text-2xl/relaxed max-w-prose whitespace-pre-wrap">
                                {paragraph}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <footer className="absolute bottom-0 left-0 right-0 z-10 p-4 bg-background/80 backdrop-blur-sm">
                 <Progress value={progressPercentage} className="w-full h-1" />
            </footer>
        </div>
    );
}
