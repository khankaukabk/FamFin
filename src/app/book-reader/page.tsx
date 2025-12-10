
"use client";

import * as React from "react";
import { Navigation } from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

// You can replace this with your book's content, with each paragraph as an element in the array.
const bookContent = [
    "Once upon a time, in a small cottage nestled between rolling hills and a whispering forest, lived a family known for their kindness. Their home was humble, but their hearts were full of warmth and laughter.",
    "The father, a skilled woodcarver, filled their home with whimsical animals and sturdy furniture. The mother, a gifted gardener, coaxed vibrant flowers and delicious vegetables from the earth, no matter the season.",
    "They had two children, a boy named Leo and a girl named Elara. Leo was adventurous, with a spirit as wild as the forest he loved to explore. Elara was thoughtful, finding stories in the clouds and songs in the rustling leaves.",
    "One evening, as a cool autumn breeze swept through the valley, a weary traveler knocked on their door. He was old, with a long grey beard and eyes that twinkled like distant stars. 'I have traveled far,' he said, 'and I seek only a warm place to rest for the night.'",
    "Without hesitation, the family welcomed him in. They shared their simple meal of vegetable stew and freshly baked bread, and gave him the warmest spot by the crackling fireplace.",
    "The traveler was enchanted by their generosity. He saw the love that filled the small cottage, a love that was as tangible as the carved birds on the mantelpiece and as fragrant as the herbs drying in the kitchen.",
    "The next morning, as he prepared to leave, the traveler revealed he was no ordinary man. He was a keeper of stories, a weaver of dreams. As a token of his gratitude, he gifted them a small, unadorned wooden box.",
    "'This box holds a special magic,' he explained. 'Whenever you feel lost or sad, open it together. It will not give you riches, but it will remind you of the wealth you already possess.'",
    "Years passed. The children grew, the seasons turned, and life brought its share of challenges. There were times of worry, of disagreement, and of sadness. But whenever shadows began to creep into their home, they would remember the traveler's gift.",
    "They would gather, open the small wooden box, and find it empty. Yet, in that shared moment of opening the box, they would look at each other. They would see the love, the resilience, and the unwavering support in each other's eyes.",
    "The magic was not in the box itself, but in the act of coming together. It was a reminder that their greatest treasure was not gold or jewels, but the simple, profound strength of their family.",
    "And so, they continued to live a life that was rich in a way that truly mattered, their love story whispered on the wind, carried through the hills and the forest for all time. The end."
];


export default function BookReaderPage() {
    const [currentPage, setCurrentPage] = React.useState(0);
    const totalPages = bookContent.length;
    const progressPercentage = ((currentPage + 1) / totalPages) * 100;

    const goToNextPage = () => {
        setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
    };

    const goToPreviousPage = () => {
        setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
    };

    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/20">
            <Navigation title="The Story of the Family" />
            <main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6">
                <Card className="w-full max-w-lg shadow-2xl animate-in fade-in-50 zoom-in-95">
                    <CardContent className="p-6 sm:p-8">
                         <div className="flex items-center gap-3 mb-6">
                            <BookOpen className="h-6 w-6 text-primary" />
                            <p className="text-sm font-semibold text-muted-foreground">
                                Page {currentPage + 1} of {totalPages}
                            </p>
                        </div>
                        <p className="text-lg/relaxed sm:text-xl/relaxed text-foreground min-h-[200px] sm:min-h-[250px] flex items-center">
                            {bookContent[currentPage]}
                        </p>
                    </CardContent>
                    <CardFooter className="flex flex-col gap-4 p-6 bg-muted/50 border-t">
                        <div className="w-full flex justify-between items-center gap-4">
                            <Button 
                                variant="outline" 
                                size="lg" 
                                onClick={goToPreviousPage} 
                                disabled={currentPage === 0}
                                aria-label="Previous Page"
                            >
                                <ChevronLeft className="h-5 w-5" />
                                <span className="hidden sm:inline ml-2">Previous</span>
                            </Button>
                            <div className="flex-grow flex items-center justify-center text-sm font-medium">
                               {Math.round(progressPercentage)}%
                            </div>
                            <Button 
                                size="lg" 
                                onClick={goToNextPage} 
                                disabled={currentPage === totalPages - 1}
                                aria-label="Next Page"
                            >
                                <span className="hidden sm:inline mr-2">Next</span>
                                <ChevronRight className="h-5 w-5" />
                            </Button>
                        </div>
                        <Progress value={progressPercentage} className="w-full h-2" />
                    </CardFooter>
                </Card>
            </main>
        </div>
    );
}
