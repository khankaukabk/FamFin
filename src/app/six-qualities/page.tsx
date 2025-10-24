
"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Landmark, BookOpen, Handshake, Heart, Megaphone, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type Quality = {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: React.ReactNode;
};

const qualities: Quality[] = [
  {
    icon: Quote,
    title: "Kalimah Tayyibah",
    subtitle: "The Pure Word",
    description: (
      <div className="space-y-4">
        <div>
            <p className="font-bold text-base text-primary">#1 Iman & Yaqin</p>
             <p className="text-sm text-muted-foreground mt-2">To believe that everything happens only by the will of Allah. Nothing can happen without the will of Allah. The only way of life acceptable to Allah is the lifestyle of the Rasul (ﷺ).</p>
        </div>
        <Separator />
        <div className="text-center">
            <p className="text-xl font-bold arabic-text">لَا إِلٰهَ إِلَّا اللهُ مُحَمَّدٌ رَسُولُ اللهِ</p>
            <p className="text-sm text-muted-foreground italic mt-1">"There is no god but Allah, Muhammad is the Messenger of Allah."</p>
        </div>
      </div>
    ),
  },
  {
    icon: Landmark,
    title: "Salat",
    subtitle: "Prayer",
    description: "Performing our five daily prayers with concentration (Khushu) and devotion, understanding it as our direct connection and conversation with Allah.",
  },
  {
    icon: BookOpen,
    title: "Ilm and Dhikr",
    subtitle: "Knowledge & Remembrance",
    description: "Seeking beneficial knowledge of the Deen and constantly remembering Allah (Dhikr) in all situations, which brings peace to the heart and awareness of His presence.",
  },
  {
    icon: Handshake,
    title: "Ikram-ul-Muslim",
    subtitle: "Honoring a Muslim",
    description: "To respect, honor, and fulfill the rights of every Muslim, serving them with kindness and compassion for the sake of Allah.",
  },
  {
    icon: Heart,
    title: "Ikhlas-e-Niyyat",
    subtitle: "Sincerity of Intention",
    description: "Purifying our intentions so that every action, whether religious or worldly, is done solely to please Allah and not for show or personal gain.",
  },
  {
    icon: Megaphone,
    title: "Dawat and Tabligh",
    subtitle: "Invitation & Conveyance",
    description: "To share the message of Islam with wisdom and kindness, inviting others towards good and sacrificing our time and wealth in the path of Allah.",
  },
];

export default function SixQualitiesPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
       <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;700&display=swap');
        .arabic-text {
          font-family: 'Noto Naskh Arabic', serif;
        }
      `}</style>
      <header className="sticky top-0 z-30 flex h-auto items-center justify-between gap-4 border-b bg-background/80 px-4 py-4 backdrop-blur-sm sm:h-16 sm:px-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
          <Link href="/" passHref>
            <Button variant="outline" size="icon" className="h-8 w-8 flex-shrink-0 sm:h-10 sm:w-10">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="font-headline text-xl font-bold tracking-tight text-primary sm:text-2xl">
            The Six Qualities of the Sahaba
          </h1>
        </div>
      </header>
      <main className="flex-1 p-4 sm:px-6 md:p-8">
        <div className="mx-auto max-w-5xl space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-xl">A Path to Spiritual Excellence</CardTitle>
              <CardDescription>
                These six principles, derived from the lives of the Sahaba (Companions of the Prophet Muhammad ﷺ), serve as a practical framework for striving to perfect one's faith and character.
              </CardDescription>
            </CardHeader>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualities.map((quality, index) => (
              <Card key={index} className="flex flex-col transition-all duration-300 hover:shadow-xl hover:border-primary/50">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <quality.icon className="h-10 w-10 text-accent flex-shrink-0" />
                    <div>
                      <CardTitle className="font-headline text-lg">{quality.title}</CardTitle>
                      <CardDescription className="font-semibold">{quality.subtitle}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-muted-foreground">{quality.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <footer className="text-center p-4 text-muted-foreground text-xs">
        A guide for personal and spiritual development.
      </footer>
    </div>
  );
}
