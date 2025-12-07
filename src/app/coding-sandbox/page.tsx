
"use client";

import * as React from "react";
import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const snippets = [
  {
    title: "Firebase Auth & Workspace Errors",
    category: "Firebase Debug Logs",
    code: `
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
[error] Authentication Error: Your credentials are no longer valid. Please run firebase login --reauth
[error] Failed to fetch Firebase Project from Studio Workspace because WORKSPACE_SLUG environment variable is empty
`
  },
  // You can add more snippets here in the future
];

export default function CodingSandboxPage() {
    const { toast } = useToast();
    const [copiedSnippet, setCopiedSnippet] = React.useState<string | null>(null);

    const handleCopy = (code: string, title: string) => {
        navigator.clipboard.writeText(code.trim());
        setCopiedSnippet(title);
        toast({
            title: "Copied to Clipboard!",
            description: `The "${title}" snippet is ready to paste.`,
        });
        setTimeout(() => setCopiedSnippet(null), 2000);
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
                                    <CardTitle className="font-headline text-xl">Code Snippets</CardTitle>
                                    <CardDescription>
                                        A collection of useful code snippets and logs. Click to copy.
                                    </CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                    </Card>

                    {snippets.map((snippet) => (
                        <Card key={snippet.title}>
                            <CardHeader className="flex flex-row items-center justify-between">
                                <div>
                                    <CardTitle>{snippet.title}</CardTitle>
                                    <CardDescription>{snippet.category}</CardDescription>
                                </div>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => handleCopy(snippet.code, snippet.title)}
                                >
                                    {copiedSnippet === snippet.title ? (
                                        <Check className="h-4 w-4 text-green-500" />
                                    ) : (
                                        <Copy className="h-4 w-4" />
                                    )}
                                    <span className="sr-only">Copy code</span>
                                </Button>
                            </CardHeader>
                            <CardContent>
                                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm font-mono">
                                    <code>{snippet.code.trim()}</code>
                                </pre>
                            </CardContent>
                        </Card>
                    ))}

                </div>
            </main>
             <footer className="text-center p-4 text-muted-foreground text-xs">
                A place for your brilliant code.
            </footer>
        </div>
    );
}

