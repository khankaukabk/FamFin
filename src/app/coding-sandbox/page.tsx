
"use client";

import * as React from "react";
import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const snippets = [
  {
    title: "firebase-debug.log",
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
    title: "src/app/news/[slug]/page.tsx",
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
  },
  {
    title: "src/app/news/page.tsx",
    category: "Next.js / Firebase",
    code: `
import type { Metadata } from 'next';
import NewsClientPage from './client-page';
import { db } from '@/lib/firebase';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import type { Story } from '@/lib/stories-data';

export const metadata: Metadata = {
  title: 'Newsroom',
  description: 'Our latest company news, announcements, press releases, and in-depth reports on our investment sectors.',
  openGraph: {
    title: 'Newsroom | GrowShare Capital',
    description: 'Our latest company news, announcements, press releases, and in-depth reports on our investment sectors.',
    images: [
      {
        url: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        width: 1200,
        height: 630,
        alt: 'A desk with marketing materials.',
      },
    ],
  },
};

// The server-side fetching is removed. We pass an empty array and let the client fetch.
export default function NewsPage() {
    return <NewsClientPage initialStories={[]} />;
}
`
  },
  {
    title: "firestore.rules",
    category: "Firebase",
    code: `
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {

    // --- PUBLIC COLLECTIONS ---

    // Anyone can read stories and announcements. Only admins can write.
    match /stories/{storyId} {
      allow read: if true;
      allow write: if request.auth != null && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.isAdmin == true;
    }
    match /announcements/{announcementId} {
      allow read: if true;
      allow write: if false; // Only backend can write
    }

    // Anyone can sign up for the newsletter
    match /subscribers/{docId} {
        allow create: if true;
        allow read, delete: if request.auth != null && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.isAdmin == true;
    }

    // Anyone can send an email via the contact form
    match /mail/{docId} {
        allow create: if true;
        allow read, update, delete: if request.auth != null && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.isAdmin == true;
    }


    // --- USER-SPECIFIC COLLECTIONS ---

    // Users can read/write their own data and notifications.
    match /users/{userId} {
      allow read: if request.auth != null;
      allow write: if request.auth.uid == userId;
    }

    match /users/{userId}/notifications/{notificationId} {
        allow read, write: if request.auth.uid == userId;
    }


    // --- ADMIN & SPECIALIZED ROLES ---

    // Only admins can manage documents and agendas.
    match /documents/{docId} {
      allow read, write: if request.auth != null && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.isAdmin == true;
    }
    match /agendas/{agendaId} {
        allow read, write: if request.auth != null && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.isAdmin == true;
    }

    // Only admins can manage email templates, but they are publicly readable.
    match /templates/{templateId} {
      allow read: if true;
      allow create, update, delete: if request.auth != null && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.isAdmin == true;
    }

    // Only users with the 'isNotary' custom claim can access notary records.
    match /notary/{recordId} {
      allow read, write: if request.auth != null && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.isNotary == true;
    }
  }
}
`
  },
  {
    title: "Build Logs",
    category: "Build & Deploy",
    code: `
84f5d694a"
FETCHSOURCE
BUILD
Starting Step #0 - "ubuntu"
Pulling image: ubuntu
Using default tag: latest
latest: Pulling from library/ubuntu
Digest: sha256:c35e29c9450151419d9448b0fd75374fec4fff364a27f176fb458d472dfc9e54
Status: Downloaded newer image for ubuntu:latest
docker.io/library/ubuntu:latest
Finished Step #0 - "ubuntu"
Starting Step #1 - "fetch"
Pulling image: us-central1-docker.pkg.dev/serverless-runtimes/google-22-full/builder/nodejs:nodejs_20251202_RC00
nodejs_20251202_RC00: Pulling from serverless-runtimes/google-22-full/builder/nodejs
828c1365039a: Already exists
637d3a8ce607: Already exists
981def9c0bac: Already exists
e0164080c69c: Pulling fs layer
833d93df957f: Pulling fs layer
83b4730cfb8d: Pulling fs layer
a301996cec5e: Pulling fs layer
a7d32d2fafa5: Pulling fs layer
04da99f28941: Pulling fs layer
fe0a88c014e5: Pulling fs layer
1a82443b3661: Pulling fs layer
0c8039a3128b: Pulling fs layer
50728006c64c: Pulling fs layer
a315dddb5884: Pulling fs layer
f9c7bad62e49: Pulling fs layer
cce0dbb99bc0: Pulling fs layer
7363111b4126: Pulling fs layer
ed6f6306007f: Pulling fs layer
b6665c58b318: Pulling fs layer
aea49d03a938: Pulling fs layer
d66444ad89b8: Pulling fs layer
3c80b6ecb77a: Pulling fs layer
a0c710bf047c: Pulling fs layer
367e5d8c8dfb: Pulling fs layer
d840fb4217f9: Pulling fs layer
d090c2304916: Pulling fs layer
3d0dadc5cd17: Pulling fs layer
26be9f471823: Pulling fs layer
34ce8ba30961: Pulling fs layer
e6178d2c0976: Pulling fs layer
4f4fb700ef54: Pulling fs layer
fe0a88c014e5: Waiting
1a82443b3661: Waiting
0c8039a3128b: Waiting
50728006c64c: Waiting
a315dddb5884: Waiting
f9c7bad62e49: Waiting
cce0dbb99bc0: Waiting
7363111b4126: Waiting
ed6f6306007f: Waiting
b6665c58b318: Waiting
aea49d03a938: Waiting
d66444ad89b8: Waiting
3c80b6ecb77a: Waiting
a0c710bf047c: Waiting
367e5d8c8dfb: Waiting
d840fb4217f9: Waiting
d090c2304916: Waiting
3d0dadc5cd17: Waiting
26be9f471823: Waiting
34ce8ba30961: Waiting
e6178d2c0976: Waiting
4f4fb700ef54: Waiting
a301996cec5e: Verifying Checksum
a301996cec5e: Download complete
833d93df957f: Verifying Checksum
833d93df957f: Download complete
e0164080c69c: Verifying Checksum
e0164080c69c: Download complete
83b4730cfb8d: Verifying Checksum
83b4730cfb8d: Download complete
04da99f28941: Verifying Checksum
04da99f28941: Download complete
fe0a88c014e5: Verifying Checksum
fe0a88c014e5: Download complete
a7d32d2fafa5: Verifying Checksum
a7d32d2fafa5: Download complete
50728006c64c: Verifying Checksum
50728006c64c: Download complete
1a82443b3661: Verifying Checksum
1a82443b3661: Download complete
0c8039a3128b: Download complete
a315dddb5884: Download complete
e0164080c69c: Pull complete
f9c7bad62e49: Download complete
833d93df957f: Pull complete
cce0dbb99bc0: Verifying Checksum
cce0dbb99bc0: Download complete
b6665c58b318: Verifying Checksum
b6665c58b318: Download complete
ed6f6306007f: Verifying Checksum
ed6f6306007f: Download complete
7363111b4126: Verifying Checksum
7363111b4126: Download complete
aea49d03a938: Verifying Checksum
aea49d03a938: Download complete
d66444ad89b8: Verifying Checksum
d66444ad89b8: Download complete
83b4730cfb8d: Pull complete
a301996cec5e: Pull complete
3c80b6ecb77a: Verifying Checksum
3c80b6ecb77a: Download complete
a0c710bf047c: Verifying Checksum
a0c710bf047c: Download complete
367e5d8c8dfb: Verifying Checksum
367e5d8c8dfb: Download complete
d090c2304916: Verifying Checksum
d090c2304916: Download complete
3d0dadc5cd17: Download complete
26be9f471823: Verifying Checksum
26be9f471823: Download complete
d840fb4217f9: Verifying Checksum
d840fb4217f9: Download complete
34ce8ba30961: Download complete
e6178d2c0976: Verifying Checksum
e6178d2c0976: Download complete
4f4fb700ef54: Verifying Checksum
4f4fb700ef54: Download complete
a7d32d2fafa5: Pull complete
04da99f28941: Pull complete
fe0a88c014e5: Pull complete
1a82443b3661: Pull complete
0c8039a3128b: Pull complete
50728006c64c: Pull complete
a315dddb5884: Pull complete
f9c7bad62e49: Pull complete
cce0dbb99bc0: Pull complete
7363111b4126: Pull complete
ed6f6306007f: Pull complete
b6665c58b318: Pull complete
aea49d03a938: Pull complete
d66444ad89b8: Pull complete
3c80b6ecb77a: Pull complete
a0c710bf047c: Pull complete
367e5d8c8dfb: Pull complete
d840fb4217f9: Pull complete
d090c2304916: Pull complete
3d0dadc5cd17: Pull complete
26be9f471823: Pull complete
34ce8ba30961: Pull complete
e6178d2c0976: Pull complete
4f4fb700ef54: Pull complete
Digest: sha256:4dba69b6f28e0bcbb5ac16874a287ab9299367e002e11a6c0eda1ef76fefbdd2
Status: Downloaded newer image for us-central1-docker.pkg.dev/serverless-runtimes/google-22-full/builder/nodejs:nodejs_20251202_RC00
us-central1-docker.pkg.dev/serverless-runtimes/google-22-full/builder/nodejs:nodejs_20251202_RC00
=== Fetch Source from Signed URL ===
Downloading source code from signed URL...
Extracting archive...
Moving source code into workspace...
Cleaning up temporary files and directories...
Downloaded and unpacked source code from signed URL
Finished Step #1 - "fetch"
Starting Step #2 - "preparer"
Pulling image: us-central1-docker.pkg.dev/serverless-runtimes/utilities/preparer:base_20251101_18_04_RC00
base_20251101_18_04_RC00: Pulling from serverless-runtimes/utilities/preparer
76e32336b994: Pulling fs layer
76e32336b994: Verifying Checksum
76e32336b994: Download complete
76e32336b994: Pull complete
Digest: sha256:d246fdb57194fb6b89bd52bc62105888655f1e89eba8a2c4422a40b500531477
Status: Downloaded newer image for us-central1-docker.pkg.dev/serverless-runtimes/utilities/preparer:base_20251101_18_04_RC00
us-central1-docker.pkg.dev/serverless-runtimes/utilities/preparer:base_20251101_18_04_RC00
2025/12/07 00:50:05 FIREBASE_CONFIG has no availability specified, applying the default of 'BUILD' and 'RUNTIME'
2025/12/07 00:50:05 Final app hosting schema:
runConfig:
  cpu: null
  memoryMiB: null
  concurrency: null
  maxInstances: 1
  minInstances: null
  vpcAccess: null
  cpuAlwaysAllocated: null
env:
- variable: FIREBASE_CONFIG
  value: '{"databaseURL":"","projectId":"family-financials","storageBucket":"family-financials.firebasestorage.app"}'
  availability:
  - BUILD
  - RUNTIME
  source: Firebase System
- variable: FIREBASE_WEBAPP_CONFIG
  value: '{"apiKey":"AIzaSyBLfPD9rwMZF_I9JxyfboA6UAiPTrhjPTs","appId":"1:190841971254:web:d213edeb5a466ad8f1ee97","authDomain":"family-financials.firebaseapp.com","databaseURL":"","messagingSenderId":"190841971254","projectId":"family-financials","storageBucket":"family-financials.firebasestorage.app"}'
  availability:
  - BUILD
  source: Firebase System
2025/12/07 00:50:05 Final app hosting schema:
runConfig:
  cpu: null
  memoryMiB: null
  concurrency: null
  maxInstances: 1
  minInstances: null
  vpcAccess: null
  cpuAlwaysAllocated: null
env:
- variable: FIREBASE_CONFIG
  value: '{"databaseURL":"","projectId":"family-financials","storageBucket":"family-financials.firebasestorage.app"}'
  availability:
  - BUILD
  - RUNTIME
  source: Firebase System
- variable: FIREBASE_WEBAPP_CONFIG
  value: '{"apiKey":"AIzaSyBLfPD9rwMZF_I9JxyfboA6UAiPTrhjPTs","appId":"1:190841971254:web:d213edeb5a466ad8f1ee97","authDomain":"family-financials.firebaseapp.com","databaseURL":"","messagingSenderId":"190841971254","projectId":"family-financials","storageBucket":"family-financials.firebasestorage.app"}'
  availability:
  - BUILD
  source: Firebase System
Finished Step #2 - "preparer"
Starting Step #3 - "pack"
Pulling image: gcr.io/k8s-skaffold/pack
Using default tag: latest
latest: Pulling from k8s-skaffold/pack
396c31837116: Pulling fs layer
9776b10d5c8c: Pulling fs layer
52cb9ac3197f: Pulling fs layer
9776b10d5c8c: Download complete
396c31837116: Verifying Checksum
396c31837116: Download complete
52cb9ac3197f: Verifying Checksum
52cb9ac3197f: Download complete
396c31837116: Pull complete
9776b10d5c8c: Pull complete
52cb9ac3197f: Pull complete
Digest: sha256:221c0c0d9a90f46f108bb888a1da9e99c82ff631e8b1c63b0223ea951752bd53
Status: Downloaded newer image for gcr.io/k8s-skaffold/pack:latest
gcr.io/k8s-skaffold/pack:latest
nodejs_20251202_RC00: Pulling from serverless-runtimes/google-22-full/builder/nodejs
Digest: sha256:4dba69b6f28e0bcbb5ac16874a287ab9299367e002e11a6c0eda1ef76fefbdd2
Status: Image is up to date for us-central1-docker.pkg.dev/serverless-runtimes/google-22-full/builder/nodejs:nodejs_20251202_RC00
public-image-next: Pulling from serverless-runtimes/google-22/run/base
63e5bc7682b8: Already exists
7c24c26cea09: Pulling fs layer
ba2668403dd2: Pulling fs layer
7c24c26cea09: Verifying Checksum
7c24c26cea09: Download complete
ba2668403dd2: Verifying Checksum
ba2668403dd2: Download complete
7c24c26cea09: Pull complete
ba2668403dd2: Pull complete
Digest: sha256:08f6f2356c8d4928a2520b23589420a360945c62e5654a7eed9e19a959c74404
Status: Downloaded newer image for us-central1-docker.pkg.dev/serverless-runtimes/google-22/run/base:public-image-next
===> ANALYZING
Image with name "us-central1-docker.pkg.dev/family-financials/firebaseapphosting-images/studio:a-2d40k08mqt3a" not found
===> DETECTING
target distro name/version labels not found, reading /etc/os-release file
4 of 6 buildpacks participating
google.nodejs.runtime        1.0.0
google.nodejs.firebasenextjs 0.0.1
google.nodejs.npm            1.1.0
google.nodejs.firebasebundle 0.0.1
===> RESTORING
===> BUILDING
target distro name/version labels not found, reading /etc/os-release file
=== Node.js - Runtime (google.nodejs.runtime@1.0.0) ===
Nodejs version not specified, using the latest available Nodejs runtime for the stack "ubuntu2204"
2025/12/07 00:50:09 [DEBUG] GET https://dl.google.com/runtimes/ubuntu2204/nodejs/version.json
Adding image label google.runtime-version: nodejs22
2025/12/07 00:50:10 [DEBUG] GET https://dl.google.com/runtimes/ubuntu2204/nodejs/version.json
Installing Node.js v22.21.0.
2025/12/07 00:50:10 [DEBUG] GET https://dl.google.com/runtimes/ubuntu2204/nodejs/nodejs-22.21.0.tar.gz
Installing the heapsize.sh exec.d script.
=== Node.js - Firebasenextjs (google.nodejs.firebasenextjs@0.0.1) ===
***** CACHE MISS: "npm_modules"
Installing nextjs adaptor 14.0.21
=== Node.js - Npm (google.nodejs.npm@1.1.0) ===
***** CACHE MISS: "npm_modules"
Installing application dependencies.
--------------------------------------------------------------------------------
Running "npm ci --quiet --no-fund --no-audit (NODE_ENV=development)"
npm warn deprecated rimraf@2.7.1: Rimraf versions prior to v4 are no longer supported
npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm warn deprecated node-domexception@1.0.0: Use your platform's native DOMException instead
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
added 790 packages in 25s
Done "npm ci --quiet --no-fund --no-audit (NODE_ENV=development)" (24.987017028s)
--------------------------------------------------------------------------------
Running "npm exec --prefix /layers/google.nodejs.firebasenextjs/npm_modules apphosting-adapter-nextjs-build"
file:///layers/google.nodejs.firebasenextjs/npm_modules/node_modules/@apphosting/adapter-nextjs/dist/utils.js:18
        throw new Error(\`CVE-2025-55182: Vulnerable Next version \${version} detected. Deployment blocked. Update your app's dependencies to a patched Next.js version and redeploy: https://nextjs.org/blog/CVE-2025-66478#fixed-versions\`);
              ^
Error: CVE-2025-55182: Vulnerable Next version 15.3.3 detected. Deployment blocked. Update your app's dependencies to a patched Next.js version and redeploy: https://nextjs.org/blog/CVE-2025-66478#fixed-versions
    at checkNextJSVersion (file:///layers/google.nodejs.firebasenextjs/npm_modules/node_modules/@apphosting/adapter-nextjs/dist/utils.js:18:15)
    at file:///layers/google.nodejs.firebasenextjs/npm_modules/node_modules/@apphosting/adapter-nextjs/dist/bin/build.js:12:1
    at ModuleJob.run (node:internal/modules/esm/module_job:343:25)
    at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:665:26)
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:117:5)
Node.js v22.21.0
Done "npm exec --prefix /layers/google.nodejs.firebasenextjs/npm_m..." (719.26505ms)
--------------------------------------------------------------------------------
failed to build: (error ID: 72b60790):
{"reason":"Failed Framework Build","code":"fah/failed-framework-build","userFacingMessage":"Your application failed to run the framework build command 'npm exec --prefix /layers/google.nodejs.firebasenextjs/npm_modules apphosting-adapter-nextjs-build' successfully. Please check the raw log to address the error and confirm that your application builds locally before redeploying.","rawLog":"(error ID: d0a693a9):
file:///layers/google.nodejs.firebasenextjs/npm_modules/node_modules/@apphosting/adapter-nextjs/dist/utils.js:18
        throw new Error(\`CVE-2025-55182: Vulnerable Next version \${version} detected. Deployment blocked. Update your app's dependencies to a patched Next.js version and redeploy: https://nextjs.org/blog/CVE-2025-66478#fixed-versions\`);
              ^
Error: CVE-2025-55182: Vulnerable Next version 15.3.3 detected. Deployment blocked. Update your app's dependencies to a patched Next.js version and redeploy: https://nextjs.org/blog/CVE-2025-66478#fixed-versions
    at checkNextJSVersion (file:///layers/google.nodejs.firebasenextjs/npm_modules/node_modules/@apphosting/adapter-nextjs/dist/utils.js:18:15)
    at file:///layers/google.nodejs.firebasenextjs/npm_modules/node_modules/@apphosting/adapter-nextjs/dist/bin/build.js:12:1
    at ModuleJob.run (node:internal/modules/esm/module_job:343:25)
    at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:665:26)
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:117:5)
Node.js v22.21.0"}
ERROR: failed to build: exit status 1
ERROR: failed to build: executing lifecycle: failed with status code: 51
Finished Step #3 - "pack"
ERROR
ERROR: build step 3 "gcr.io/k8s-skaffold/pack" failed: step exited with non-zero status: 1
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
