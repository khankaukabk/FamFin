
"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navigation } from "@/components/ui/navigation";

const session2ReportSections = [
  {
    id: "2A",
    title: "Check-in and Sharing (10 minutes)",
    content: "We started by greeting everyone and asking how they were feeling. People shared updates and we gave out helpful information about staying well and getting support.",
  },
  {
    id: "2B",
    title: "What Is a Crisis or Stressful Event? (15 minutes)",
    content: "Some people talked about when they first came to this country. They said they felt very sad and stressed. Ramida said her husband became very sick and nearly had a mental breakdown. At that time, they mostly prayed and slept to cope.",
  },
  {
    id: "2C",
    title: "Feelings and How They Affect the Body (20–40 minutes)",
    content: "Alamgir shared that he had depression and felt very low. During this part, people learned how stress and sadness can affect the body. We talked about how small things—like chatting with someone, sleeping well, and using phones less—can help the mind and body feel better.",
  },
  {
    id: "2D",
    title: "Stress During the Pandemic (15+ minutes)",
    content: "We spoke about how COVID made things harder. People said they felt lonely and worried. They shared how they tried to manage—by praying, keeping busy, and talking to family.",
  },
  {
    id: "2E",
    title: "Breathing and Mindfulness (10–30 minutes)",
    content: "We taught a simple breathing exercise from the booklet. Some said they had learned it before in Bangladesh. They were happy to be reminded and said they would do it three times a day to stay calm.",
  },
  {
    id: "2F",
    title: "Home Practice and Goodbye (5 minutes)",
    content: "We asked everyone to keep practising breathing and other small self-care habits at home. We ended the session with kind words and thanks.",
  },
];

const session2FacilitatorNotes = "This session helped the group understand how feelings affect the body. People opened up about their past and current stress. The breathing activity was well liked, and many promised to keep doing it every day.";


const session3ReportSections = [
  {
    id: "3A",
    title: "Check-in and Sharing (5 minutes)",
    content: "We start by saying hello and asking how everyone is feeling. We also share any helpful information or resources.",
  },
  {
    id: "3B",
    title: "What Is Mental Health and Wellbeing? (15 minutes)",
    content: "We ask the group: “What do you think mental health and wellbeing mean?” Everyone can share their ideas. There are no wrong answers.",
  },
  {
    id: "3C",
    title: "Understanding Mental Health (25 minutes)",
    content: "We explain what mental health means in simple words. We also show a picture called the Mental Health Spectrum Diagram to help people see that mental health can change—sometimes we feel well, sometimes not so well, and that’s okay.",
  },
  {
    id: "3D",
    title: "Traditional Beliefs About Mental Health (20 minutes)",
    content: "We talk about what people in the community or in their culture believe about mental health. Some may think mental health problems are a weakness or something to hide. We gently explore these ideas together.",
  },
  {
    id: "3E",
    title: "Body Awareness Activity – Finger Tapping (15 minutes)",
    content: "We do a short activity where we tap our fingers and notice how our body feels. This helps us feel calm and more connected to our body.",
  },
  {
    id: "3F",
    title: "Home Practice and Goodbye (10 minutes)",
    content: "We give a small task to try at home—like doing the finger tapping again or talking to someone about how they feel. We end the session with kind words and thanks.",
  },
];

const session3FacilitatorNotes = "After the session, the facilitators meet briefly to talk about how the session went and what to improve next time.";


export default function RohingyaClassReportPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navigation title="Rohingya Class Report" />
      <main className="flex-1 p-4 sm:px-6 md:p-8">
        <div className="mx-auto max-w-3xl space-y-8">
          
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Mental Health & Wellness Sessions</CardTitle>
              <CardDescription>A summary of topics and shared experiences from group sessions.</CardDescription>
            </CardHeader>
          </Card>
          
          <Tabs defaultValue="session-2" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="session-2">Session 2</TabsTrigger>
              <TabsTrigger value="session-3">Session 3</TabsTrigger>
            </TabsList>
            <TabsContent value="session-2" className="mt-6">
              <div className="space-y-6">
                {session2ReportSections.map((section) => (
                  <Card key={section.id}>
                    <CardHeader>
                        <CardTitle className="font-headline text-lg">{section.id}. {section.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Card className="mt-8 border-primary/20 bg-primary/5">
                <CardHeader>
                    <CardTitle className="font-headline text-xl">Facilitators’ Notes</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{session2FacilitatorNotes}</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="session-3" className="mt-6">
               <div className="space-y-6">
                {session3ReportSections.map((section) => (
                  <Card key={section.id}>
                    <CardHeader>
                        <CardTitle className="font-headline text-lg">{section.id}. {section.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Card className="mt-8 border-primary/20 bg-primary/5">
                <CardHeader>
                    <CardTitle className="font-headline text-xl">Facilitators Only: Debrief</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{session3FacilitatorNotes}</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
        </div>
      </main>
       <footer className="text-center p-4 text-muted-foreground text-xs">
        Report generated from session notes.
      </footer>
    </div>
  );
}
