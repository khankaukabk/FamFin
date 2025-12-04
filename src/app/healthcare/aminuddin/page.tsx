
"use client";

import * as React from "react";
import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FileQuestion } from "lucide-react";

export default function AminuddinHealthcarePage() {
    return (
        <div className="flex min-h-screen w-full flex-col">
            <Navigation title="Healthcare Plans" />
            <main className="flex-1 flex items-center justify-center p-4 sm:px-6 md:p-8">
                <Card className="w-full max-w-lg text-center">
                    <CardHeader>
                        <div className="mx-auto bg-muted rounded-full p-4 w-fit">
                           <FileQuestion className="h-12 w-12 text-muted-foreground" />
                        </div>
                        <CardTitle className="font-headline text-2xl mt-4">Aminuddin Khan's Plan</CardTitle>
                        <CardDescription>
                            This page is awaiting healthcare plan information. Please provide the details to build this section.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">
                            You can add details like plan name, member ID, coverage, and costs.
                        </p>
                    </CardContent>
                </Card>
            </main>
             <footer className="text-center p-4 text-muted-foreground text-xs">
                This is a summary. For full details, refer to your plan documents.
            </footer>
        </div>
    );
}
