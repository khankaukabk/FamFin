
"use client";

import * as React from "react";
import { Users, Clock, Smile, MessageSquare, Virus, Wind, Home, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Navigation } from "@/components/ui/navigation";

const reportSections = [
  {
    id: "2A",
    icon: Smile,
    title: "Check-in and Sharing",
    duration: "10 minutes",
    content: "We started by greeting everyone and asking how they were feeling. People shared updates and we gave out helpful information about staying well and getting support.",
  },
  {
    id: "2B",
    icon: MessageSquare,
    title: "What Is a Crisis or Stressful Event?",
    duration: "15 minutes",
    content: "Some people talked about when they first came to this country. They said they felt very sad and stressed. Ramida said her husband became very sick and nearly had a mental breakdown. At that time, they mostly prayed and slept to cope.",
  },
  {
    id: "2C",
    icon: Users,
    title: "Feelings and How They Affect the Body",
    duration: "20–40 minutes",
    content: "Alamgir shared that he had depression and felt very low. During this part, people learned how stress and sadness can affect the body. We talked about how small things—like chatting with someone, sleeping well, and using phones less—can help the mind and body feel better.",
  },
  {
    id: "2D",
    icon: Virus,
    title: "Stress During the Pandemic",
    duration: "15+ minutes",
    content: "We spoke about how COVID made things harder. People said they felt lonely and worried. They shared how they tried to manage—by praying, keeping busy, and talking to family.",
  },
  {
    id: "2E",
    icon: Wind,
    title: "Breathing and Mindfulness",
    duration: "10–30 minutes",
    content: "We taught a simple breathing exercise from the booklet. Some said they had learned it before in Bangladesh. They were happy to be reminded and said they would do it three times a day to stay calm.",
  },
  {
    id: "2F",
    icon: Home,
    title: "Home Practice and Goodbye",
    duration: "5 minutes",
    content: "We asked everyone to keep practising breathing and other small self-care habits at home. We ended the session with kind words and thanks.",
  },
];

export default function RohingyaClassReportPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navigation title="Rohingya Class Report" />
      <main className="flex-1 p-4 sm:px-6 md:p-8">
        <div className="mx-auto max-w-3xl space-y-8">
          
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Mental Health & Wellness Session</CardTitle>
              <CardDescription>A summary of the topics discussed and shared experiences from the group session.</CardDescription>
            </CardHeader>
          </Card>

          <div className="space-y-8">
            {reportSections.map((section) => (
              <Card key={section.id} className="transition-all hover:shadow-lg">
                <CardHeader>
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                            <section.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-grow">
                            <CardTitle className="font-headline text-lg">{section.title}</CardTitle>
                            <CardDescription className="flex items-center gap-2 text-xs">
                                <Clock className="h-3 w-3" />
                                <span>{section.duration}</span>
                            </CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>

           <Card className="mt-8 border-primary/20 bg-primary/5">
            <CardHeader>
                 <div className="flex items-start gap-4">
                    <FileText className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                    <div>
                        <CardTitle className="font-headline text-xl">Facilitators’ Notes</CardTitle>
                        <CardDescription>Key takeaways and observations.</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">This session helped the group understand how feelings affect the body. People opened up about their past and current stress. The breathing activity was well liked, and many promised to keep doing it every day.</p>
            </CardContent>
          </Card>
          
        </div>
      </main>
       <footer className="text-center p-4 text-muted-foreground text-xs">
        Report generated from session notes.
      </footer>
    </div>
  );
}
