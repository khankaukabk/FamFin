
"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowLeft, Landmark, BookOpen, Handshake, Heart, Megaphone, Quote, CheckCircle, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Navigation } from "@/components/ui/navigation";

type Quality = {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  content: React.ReactNode;
};

const qualities: Quality[] = [
  {
    icon: Quote,
    title: "Kalimah Tayyibah",
    subtitle: "Laa ilaaha illallah Muhammadur Rasulullah",
    content: (
      <div className="space-y-6">
        <div className="text-center">
            <p className="text-2xl font-bold arabic-text">لَا إِلٰهَ إِلَّا اللهُ مُحَمَّدٌ رَسُولُ اللهِ</p>
        </div>
        <div>
          <h4 className="font-semibold text-lg text-primary mb-2">Part One: Laa ilaaha illallah</h4>
          <p className="font-bold">The Meaning:</p>
          <p className="text-muted-foreground mb-3">There is no one worthy of worship but Allah.</p>
          <p className="font-bold">The Purpose:</p>
          <p className="text-muted-foreground">To remove the certainty of created things from our hearts and to place the certainty of Allah alone into our hearts. We must believe that Allah can do everything without the help of creation, and that creation can do nothing without the help of Allah.</p>
        </div>
        <Separator />
        <div>
          <h4 className="font-semibold text-lg text-primary mb-2">Part Two: Muhammadur Rasulullah</h4>
          <p className="font-bold">The Meaning:</p>
          <p className="text-muted-foreground mb-3">Muhammad (PBUH) is the true Messenger of Allah.</p>
          <p className="font-bold">The Purpose:</p>
          <p className="text-muted-foreground">To believe firmly that the only way to achieve success in this world and the Hereafter is by following the lifestyle (Sunnah) of the Prophet Muhammad (PBUH).</p>
        </div>
         <Separator />
        <div>
          <h4 className="font-semibold text-lg text-primary mb-2">How to Acquire this Quality</h4>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><span className="font-semibold text-foreground">Da’wah:</span> Invite others to the greatness of Allah.</li>
              <li><span className="font-semibold text-foreground">Practice:</span> Sit in gatherings where the greatness of Allah is discussed.</li>
              <li><span className="font-semibold text-foreground">Dua:</span> Pray to Allah to grant us the reality of Iman.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    icon: Landmark,
    title: "Salah",
    subtitle: "With Khushu’ wal Khudu’",
    content: (
       <div className="space-y-6">
        <div>
          <p className="font-bold">The Meaning:</p>
          <p className="text-muted-foreground mb-3">To pray with mental concentration (Khushu) and physical humility (Khudu), following the method shown by the Prophet Muhammad (PBUH).</p>
          <p className="font-bold">The Purpose:</p>
          <p className="text-muted-foreground">To bring the obedience of Allah into our daily lives directly from our Salah. If our Salah is correct, our whole life will become correct.</p>
        </div>
        <Separator />
        <div>
            <h4 className="font-semibold text-lg text-primary mb-2">Key Points</h4>
             <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><span className="font-semibold text-foreground">In Congregation:</span> Prayer in congregation is 27 times more rewarding.</li>
                <li><span className="font-semibold text-foreground">Proper Posture:</span> Perform Ruku and Sajdah with calmness.</li>
                <li><span className="font-semibold text-foreground">On Time:</span> Delaying prayer is a sign of hypocrisy.</li>
             </ul>
        </div>
        <Separator />
        <div>
          <h4 className="font-semibold text-lg text-primary mb-2">How to Acquire this Quality</h4>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><span className="font-semibold text-foreground">Da’wah:</span> Invite others to the importance of Salah.</li>
              <li><span className="font-semibold text-foreground">Practice:</span> Strive to improve the outer form and inner concentration.</li>
              <li><span className="font-semibold text-foreground">Dua:</span> Ask Allah to grant us true concentration and humility.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    icon: BookOpen,
    title: "Ilm and Dhikr",
    subtitle: "Knowledge & Remembrance",
    content: (
       <div className="space-y-6">
        <div>
          <h4 className="font-semibold text-lg text-primary mb-2">Part One: Ilm (Knowledge)</h4>
          <p className="font-bold">The Meaning:</p>
          <p className="text-muted-foreground mb-3">To know what Allah wants from us at this specific moment and in this specific condition.</p>
          <p className="font-bold">The Purpose:</p>
          <p className="text-muted-foreground">To carry out the commands of Allah within the boundaries of the Sharia (Islamic Law).</p>
        </div>
         <Separator />
        <div>
          <h4 className="font-semibold text-lg text-primary mb-2">Part Two: Dhikr (Remembrance)</h4>
          <p className="font-bold">The Meaning:</p>
          <p className="text-muted-foreground mb-3">To remember Allah in every state and situation.</p>
          <p className="font-bold">The Purpose:</p>
          <p className="text-muted-foreground">To perform the commands of Allah while being conscious of His Majesty, believing that "Allah is watching me."</p>
        </div>
         <Separator />
        <div>
          <h4 className="font-semibold text-lg text-primary mb-2">How to Acquire this Quality</h4>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><span className="font-semibold text-foreground">Da’wah:</span> Encourage others to seek knowledge and remember Allah.</li>
              <li><span className="font-semibold text-foreground">Practice:</span> Attend Ta’lim. Recite Tasbihat, Darood, and Istighfar daily.</li>
              <li><span className="font-semibold text-foreground">Dua:</span> Pray for beneficial knowledge and a tongue moist with Dhikr.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    icon: Handshake,
    title: "Ikram-ul-Muslim",
    subtitle: "Honouring a Muslim",
    content: (
       <div className="space-y-6">
        <div>
          <p className="font-bold">The Meaning:</p>
          <p className="text-muted-foreground mb-3">To treat every Muslim with honour and respect.</p>
          <p className="font-bold">The Purpose:</p>
          <p className="text-muted-foreground">To fulfill the rights of fellow Muslims without demanding our own rights from them.</p>
        </div>
        <Separator />
         <div>
            <h4 className="font-semibold text-lg text-primary mb-2">A True Believer...</h4>
             <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Likes for others what they like for themself.</li>
                <li>Is the first to greet others (Salam).</li>
                <li>Forgives those who offend them.</li>
                <li>Avoids backbiting and helps the needy.</li>
             </ul>
        </div>
        <Separator />
        <div>
          <h4 className="font-semibold text-lg text-primary mb-2">How to Acquire this Quality</h4>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><span className="font-semibold text-foreground">Da’wah:</span> Encourage others to respect fellow believers.</li>
              <li><span className="font-semibold text-foreground">Practice:</span> Respect elders, show mercy to the young, and honour scholars.</li>
              <li><span className="font-semibold text-foreground">Dua:</span> Pray for the excellent character of the Prophet (PBUH).</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    icon: Heart,
    title: "Ikhlas-e-Niyyat",
    subtitle: "Sincerity of Intention",
    content: (
       <div className="space-y-6">
        <div>
          <p className="font-bold">The Meaning:</p>
          <p className="text-muted-foreground mb-3">To clean one's intention and do everything solely for the pleasure of Allah.</p>
          <p className="font-bold">The Purpose:</p>
          <p className="text-muted-foreground">To ensure our deeds are accepted by Allah. The Prophet (PBUH) said: "The reward for your deeds depends entirely on your intention."</p>
        </div>
        <Separator />
        <div>
          <h4 className="font-semibold text-lg text-primary mb-2">How to Acquire this Quality</h4>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><span className="font-semibold text-foreground">Da’wah:</span> Invite others to sincerity.</li>
              <li><span className="font-semibold text-foreground">Practice:</span> Constantly check your heart: "Why am I doing this?"</li>
              <li><span className="font-semibold text-foreground">Dua:</span> Pray to Allah to save us from hypocrisy and showing off (Riya).</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    icon: Megaphone,
    title: "Dawat and Tabligh",
    subtitle: "Inviting & Conveying",
    content: (
      <div className="space-y-6">
        <div>
          <p className="font-bold">The Meaning:</p>
          <p className="text-muted-foreground mb-3">To spare time from our worldly engagements to travel in the path of Allah, inviting people towards Him.</p>
          <p className="font-bold">The Purpose:</p>
          <p className="text-muted-foreground">To correct our own faith and deeds, and to revive the effort of the Prophet (PBUH) in the entire world.</p>
        </div>
        <Separator />
        <div>
          <h4 className="font-semibold text-lg text-primary mb-2">How to Acquire this Quality</h4>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><span className="font-semibold text-foreground">Da’wah:</span> Encourage others to go in the path of Allah.</li>
              <li><span className="font-semibold text-foreground">Practice:</span> Spare time! (e.g., 4 months in a lifetime, 40 days a year, 3 days a month).</li>
              <li><span className="font-semibold text-foreground">Dua:</span> Ask Allah to accept us for His noble work.</li>
          </ul>
        </div>
      </div>
    ),
  },
];

export default function SixQualitiesPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
       <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;700&display=swap');
        .arabic-text {
          font-family: 'Noto Naskh+Arabic', serif;
        }
      `}</style>
      <Navigation title="The Six Qualities" />
      <main className="flex-1 p-4 sm:px-6 md:p-8">
        <div className="mx-auto max-w-4xl space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-xl">The Six Qualities (Points) of Tabligh</CardTitle>
              <CardDescription>
                Allah has placed the success of human beings—both in this world and in the Hereafter—solely in the perfection of our religious deeds as brought by the Prophet Muhammad (ﷺ).
              </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">People today may not have the strength to practice religion perfectly. However, if we strive to acquire these six qualities as the Sahabah did, Allah will make it easy for perfect Islam to enter our hearts and lives.</p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {qualities.map((quality, index) => (
              <Card key={index} className="flex flex-col transition-all duration-300 hover:shadow-xl hover:border-primary/50">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <quality.icon className="h-10 w-10 text-accent flex-shrink-0" />
                    <div>
                      <CardTitle className="font-headline text-xl">{quality.title}</CardTitle>
                      <CardDescription className="font-semibold">{quality.subtitle}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-muted-foreground text-base leading-relaxed">{quality.content}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-accent/50">
              <CardHeader>
                <div className="flex items-start gap-4">
                    <CheckCircle className="h-8 w-8 text-accent mt-1 flex-shrink-0" />
                    <div>
                        <CardTitle className="font-headline text-xl">A Final Note: Abandoning Vanity (Laghw)</CardTitle>
                        <CardDescription>A necessary condition for all these qualities.</CardDescription>
                    </div>
                </div>
              </CardHeader>
              <CardContent>
                  <p className="text-muted-foreground">A Muslim should spend every moment preparing for the Hereafter. We must avoid vain talk, destructive customs, and wasting time on things that bring no benefit in this world or the next. The Prophet (PBUH) said: <span className="font-semibold italic">"The perfection of one’s Islam is to leave that which does not concern him."</span></p>
              </CardContent>
          </Card>

        </div>
      </main>
      <footer className="text-center p-4 text-muted-foreground text-xs">
        A guide for personal and spiritual development.
      </footer>
    </div>
  );
}

    