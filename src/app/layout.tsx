
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { FirebaseClientProvider } from '@/firebase/client-provider';
// Switched DM_Serif to Playfair_Display for that sharper, high-end editorial look
import { Inter, Playfair_Display } from 'next/font/google'; 
import { cn } from '@/lib/utils';
import { AddToHomeScreenBanner } from '@/components/add-to-home-screen-banner';

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontSerif = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'], // Added weights for bold luxury headers
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Khan Family',
  description: 'Manage your family\'s spending and income at a glance.',
  icons: {
    icon: 'https://firebasestorage.googleapis.com/v0/b/growshare-capital.firebasestorage.app/o/Logo%2FKhan%20Family.png?alt=media&token=703dc19f-7e98-4943-bc0d-31b035a65d1c',
    apple: 'https://firebasestorage.googleapis.com/v0/b/growshare-capital.firebasestorage.app/o/Logo%2FKhan%20Family.png?alt=media&token=703dc19f-7e98-4943-bc0d-31b035a65d1c',
  },
  // Dark mode status bar for phones
  themeColor: '#000000',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark"> 
      <body className={cn(
          // GLOBAL LUXURY STYLES:
          // 1. bg-black: Sets the dark foundation
          // 2. text-neutral-200: Softer than pure white for elegance
          // 3. selection:bg-[#bf953f]: When you highlight text, it turns Gold
          "min-h-screen bg-black text-neutral-200 font-sans antialiased selection:bg-[#bf953f] selection:text-black overflow-x-hidden",
          fontSans.variable,
          fontSerif.variable
        )}>
        <FirebaseClientProvider>
          {children}
          <Toaster />
          <AddToHomeScreenBanner />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
