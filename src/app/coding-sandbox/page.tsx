
"use client";

import * as React from "react";
import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Code, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const errorLogs = `
[error] Failed to fetch Firebase Project from Studio Workspace because WORKSPACE_SLUG environment variable is empty
[debug] [2025-12-01T22:12:14.452Z] > command requires scopes: ["email","openid","https://www.googleapis.com/auth/cloudplatformprojects.readonly","https://www.googleapis.com/auth/firebase","https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/userinfo.email"]
[debug] [2025-12-01T22:12:14.456Z] > authorizing via signed-in user (jahan.a@growsharecapital.com)
[debug] [2025-12-01T22:12:14.460Z] Checked if tokens are valid: false, expires at: 1758946362331
[debug] [2025-12-01T22:12:14.461Z] Checked if tokens are valid: false, expires at: 1758946362331
[debug] [2025-12-01T22:12:14.464Z] > refreshing access token with scopes: []
[debug] [2025-12-01T22:12:14.467Z] >>> [apiv2][query] POST https://www.googleapis.com/oauth2/v3/token [none]
[debug] [2025-12-01T22:12:14.468Z] >>> [apiv2][body] POST https://www.googleapis.com/oauth2/v3/token [omitted]
[error] Failed to fetch Firebase Project from Studio Workspace because WORKSPACE_SLUG environment variable is empty
[debug] [2025-12-01T22:12:14.486Z] > command requires scopes: ["email","openid","https://www.googleapis.com/auth/cloudplatformprojects.readonly","https://www.googleapis.com/auth/firebase","https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/userinfo.email"]
[debug] [2025-12-01T22:12:14.486Z] > authorizing via signed-in user (jahan.a@growsharecapital.com)
[debug] [2025-12-01T22:12:14.487Z] Checked if tokens are valid: false, expires at: 1758946362331
[debug] [2025-12-01T22:12:14.488Z] Checked if tokens are valid: false, expires at: 1758946362331
[debug] [2025-12-01T22:12:14.488Z] > refreshing access token with scopes: []
[debug] [2025-12-01T22:12:14.489Z] >>> [apiv2][query] POST https://www.googleapis.com/oauth2/v3/token [none]
[debug] [2025-12-01T22:12:14.489Z] >>> [apiv2][body] POST https://www.googleapis.com/oauth2/v3/token [omitted]
[debug] [2025-12-01T22:12:14.598Z] <<< [apiv2][status] POST https://www.googleapis.com/oauth2/v3/token 400
[error] Failed to fetch Firebase Project from Studio Workspace because WORKSPACE_SLUG environment variable is empty
[debug] [2025-12-01T22:43:41.647Z] > command requires scopes: ["email","openid","https://www.googleapis.com/auth/cloudplatformprojects.readonly","https://www.googleapis.com/auth/firebase","https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/userinfo.email"]
[debug] [2025-12-01T22:43:41.652Z] > authorizing via signed-in user (jahan.a@growsharecapital.com)
[error] Failed to fetch Firebase Project from Studio Workspace because WORKSPACE_SLUG environment variable is empty
[debug] [2025-12-01T22:43:41.660Z] > command requires scopes: ["email","openid","https://www.googleapis.com/auth/cloudplatformprojects.readonly","https://www.googleapis.com/auth/firebase","https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/userinfo.email"]
[debug] [2025-12-01T22:43:41.661Z] > authorizing via signed-in user (jahan.a@growsharecapital.com)
[debug] [2025-12-01T22:43:41.662Z] Checked if tokens are valid: false, expires at: 1758946362331
[debug] [2025-12-01T22:43:41.662Z] Checked if tokens are valid: false, expires at: 1758946362331
[debug] [2025-12-01T22:43:41.663Z] > refreshing access token with scopes: []
[debug] [2025-12-01T22:43:41.666Z] >>> [apiv2][query] POST https://www.googleapis.com/oauth2/v3/token [none]
[debug] [2025-12-01T22:43:41.666Z] >>> [apiv2][body] POST https://www.googleapis.com/oauth2/v3/token [omitted]
[debug] [2025-12-01T22:43:41.670Z] Checked if tokens are valid: false, expires at: 1758946362331
[debug] [2025-12-01T22:43:41.670Z] Checked if tokens are valid: false, expires at: 1758946362331
[debug] [2025-12-01T22:43:41.670Z] > refreshing access token with scopes: []
[debug] [2025-12-01T22:43:41.671Z] >>> [apiv2][query] POST https://www.googleapis.com/oauth2/v3/token [none]
[debug] [2025-12-01T22:43:41.671Z] >>> [apiv2][body] POST https://www.googleapis.com/oauth2/v3/token [omitted]
[debug] [2025-12-01T22:43:41.749Z] <<< [apiv2][status] POST https://www.googleapis.com/oauth2/v3/token 400
[debug] [2025-12-01T22:43:41.749Z] <<< [apiv2][body] POST https://www.googleapis.com/oauth2/v3/token [omitted]
[error] Authentication Error: Your credentials are no longer valid. Please run firebase login --reauth

For CI servers and headless environments, generate a new token with firebase login:ci
[error] Authentication Error: Your credentials are no longer valid. Please run firebase login --reauth

For CI servers and headless environments, generate a new token with firebase login:ci
[error] Failed to fetch Firebase Project from Studio Workspace because WORKSPACE_SLUG environment variable is empty
`;

export default function CodingSandboxPage() {
    const [code, setCode] = React.useState(errorLogs);
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
