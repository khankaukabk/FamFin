
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
  {
    title: "Next.js Dynamic Page with Firebase Admin",
    category: "Next.js / Firebase",
    code: `
import type { Metadata, ResolvingMetadata } from 'next';
import NewsArticleClientPage from './client-page';
import { dbAdmin } from '@/lib/firebase-admin';
import { Timestamp } from 'firebase-admin/firestore';
import type { Story } from '@/lib/stories-data';

type StoryWithDate = Omit<Story, 'date'> & {
    date: Timestamp | string;
};

type Props = {
  params: { slug: string }
}

async function getStoryData(slug: string): Promise<StoryWithDate | null> {
  if (!dbAdmin) {
      console.error("Admin SDK not available in getStoryData.");
      return null;
  }
  try {
    const storyDoc = await dbAdmin.collection("stories").doc(slug).get();
    
    if (!storyDoc.exists) {
      return null;
    }
    
    const data = storyDoc.data();
    if (!data) return null;

    const storyData: StoryWithDate = {
      ...data,
      id: storyDoc.id,
      date: data.date instanceof Timestamp ? data.date.toDate().toISOString() : data.date.toString(),
    } as StoryWithDate;

    return storyData;

  } catch (error) {
    console.error("Error fetching story data with Admin SDK:", error);
    return null;
  }
}

export async function generateStaticParams() {
    if (!dbAdmin) {
        console.error("Admin SDK not available for generateStaticParams.");
        return [];
    }
    try {
        const storiesCollection = dbAdmin.collection("stories");
        const storySnapshot = await storiesCollection.get();
        const stories = storySnapshot.docs.map(doc => ({ slug: doc.id }));
        return stories;
    } catch (error) {
        console.error("Error fetching stories for static params:", error);
        return [];
    }
}


export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;
  const story = await getStoryData(slug);

  if (!story) {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found.',
    }
  }

  const parentMetadata = await parent;
  
  return {
    title: story.title,
    description: story.description,
    openGraph: {
      title: story.title,
      description: story.description,
      type: 'article',
      publishedTime: story.date ? new Date(story.date as string).toISOString() : undefined,
      authors: story.author ? [story.author] : [],
      images: [
        {
          url: story.image,
          width: 1200,
          height: 630,
          alt: story.title,
        },
      ],
    },
    twitter: {
        card: 'summary_large_image',
        title: story.title,
        description: story.description,
        images: [story.image],
    }
  }
}

export default async function NewsArticlePage({ params }: Props) {
  const story = await getStoryData(params.slug);
  return <NewsArticleClientPage initialStory={story} />;
}
`
  }
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
