
"use client";

import * as React from "react";
import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Code, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function CodingSandboxPage() {
    const [code, setCode] = React.useState("");
    const { toast } = useToast();

    const handleSave = () => {
        // In a real app, you'd save this to a database.
        // For now, we'll just show a notification.
        toast({
            title: "Code Saved!",
            description: "Your code snippet has been saved to this session.",
        });
    };

    return (
        <div className="flex min-h-screen w-full flex-col">
            <Navigation title="Coding Sandbox" />
            <main className="flex-1 p-4 sm:px-6 md:p-8">
                <div className="mx-auto max-w-4xl space-y-8">
                    <Card>
                        <CardHeader>
                            <div className="flex items-start gap-4">
                                <Code className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <CardTitle className="font-headline text-xl">Code Editor</CardTitle>
                                    <CardDescription>
                                        Paste your code snippets here to keep them organized. Use the tabs to categorize your code.
                                    </CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Textarea
                                placeholder="Paste your code here..."
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                                className="h-96 min-h-[400px] font-mono text-sm"
                            />
                            <div className="flex justify-end">
                                <Button onClick={handleSave}>
                                    <Save className="mr-2 h-4 w-4" />
                                    Save Snippet
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
             <footer className="text-center p-4 text-muted-foreground text-xs">
                A place for your brilliant code.
            </footer>
        </div>
    );
}
