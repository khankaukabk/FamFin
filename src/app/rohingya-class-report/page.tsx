
"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navigation } from "@/components/ui/navigation";
import { Separator } from "@/components/ui/separator";
import { Target, CheckCircle, MessageSquare, BrainCircuit, Users, Hand, Lightbulb, Home } from "lucide-react";

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

const session3CheatSheet = [
  {
    id: "3A",
    title: "Check-in and Resource Sharing",
    duration: "5 Minutes",
    icon: CheckCircle,
    goal: "Welcome everyone and make them feel comfortable.",
    steps: [
      {
        title: "Welcome",
        instruction: 'Say: "Hello everyone! Thank you for joining. I am happy to see you."',
      },
      {
        title: "Check-in",
        instruction: 'Do: Ask a simple question. Say: "How are you feeling today? Give me a thumbs up (good), thumbs sideways (okay), or thumbs down (bad)."',
      },
      {
        title: "Resources",
        instruction: "Do: Share any news about health/COVID-19 if necessary. If not, just ask if anyone has questions from last time.",
      },
      {
        title: "Introduce Topic",
        instruction: 'Say: "Today, we are going to talk about Mental Health and Wellbeing."',
      },
    ],
  },
  {
    id: "3B",
    title: "Brainstorming Mental Health",
    duration: "15 Minutes",
    icon: BrainCircuit,
    goal: "Define what mental health is and separate it from mental illness.",
    parts: [
      {
        title: 'The Brainstorm (The "Warm-up")',
        content: 'Do: Ask the group for words. Say: "When I say the words \'Mental Health\', what is the first thing you think of?" Action: Write down everything they say.',
      },
      {
        title: 'The Explanation (The "Teaching")',
        content: "Concept: Mental Health is a Skill. Explain it simply: \"Mental health is like a muscle. It is a skill we have to practice.\" List the 4 Skills: Positive Mindset, Bouncing Back, Mindfulness, and Caring for Others.",
      },
      {
        title: "The Big Discussion (Reflection)",
        content: 'Do: Ask the group to think about a hard time. Ask questions: "How did your body feel?", "How was your sleep?", "How was your appetite?", "Did you pull away from friends and family?"',
      },
      {
        title: "The Facilitator's Key Note (Very Important)",
        content: 'The Mistake: People think "Mental Health" means "Crazy" or "Sick." The Correction: Say: "Mental Health is different from Mental Illness." Mental Health: Everyone has this. Mental Illness: A medical sickness.',
      },
    ],
  },
  {
    id: "3C",
    title: "Defining Mental Health",
    duration: "25 Minutes",
    icon: MessageSquare,
    goal: 'Explain the difference between "Normal Sadness" and "Needing Help."',
    parts: [
        {
            title: 'The Spectrum (The Line)',
            content: 'Do: Draw a line on the board from "Mild/Normal" to "Severe/Intense." Explain that mental health is a range, from normal sadness to severe feelings that need support.'
        },
        {
            title: 'Is This Normal? (Activity)',
            content: 'Read two stories (New Job, Worried Mom) and ask the class if the behavior is normal or needs support, including the "twist" for each.'
        },
        {
            title: 'The 4 Questions Tool',
            content: 'Say: "If you are worried, ask these 4 questions: What is happening? How long? How does it impact daily life? Is there a safety risk?"'
        }
    ]
  },
  {
    id: "3D",
    title: "Traditional Beliefs & Culture",
    duration: "20 Minutes",
    icon: Users,
    goal: "Discuss how culture affects how we see mental health.",
    parts: [
        {
            title: 'Cultural Beliefs',
            content: 'Ask: "In your culture, what do people say causes mental problems?" Prompts: spirits, punishment from God, bad blood. Validate all answers.'
        },
        {
            title: 'Stigma (Shame)',
            content: 'Explain that in many cultures, people feel shame about mental health problems. Crucial Note: "We must stand against all hate—whether against mental illness or different races."'
        },
        {
            title: 'Seeking Help',
            content: 'Ask: "Who do you go to for help?" Explain the US System: "A Counselor is confidential, like a doctor. It just means you need extra support."'
        }
    ]
  },
  {
    id: "3E",
    title: "Activity: Finger Tapping",
    duration: "15 Minutes",
    icon: Hand,
    goal: "Teach a physical tool to calm down.",
    steps: [
        {
            instruction: 'Say: "We are going to learn a tool to help our bodies relax. It is called Finger Tapping."'
        },
        {
            instruction: 'Do: Lead the group through the tapping steps. Explain: "This touches energy points on your body to help lower stress and anxiety."'
        }
    ]
  },
  {
    id: "3F",
    title: "Home Practice & Closing",
    duration: "10 Minutes",
    icon: Home,
    goal: "Give homework and end the session.",
    steps: [
        {
            title: "Homework",
            instruction: 'Say: "This week, try a mindfulness exercise or write a list of things that make you feel calm. Also, think about your family\'s strengths."'
        },
        {
            title: "Closing",
            instruction: 'Say: "Next week, we will talk about [Insert next week\'s topic]. Thank you for your hard work today!"'
        }
    ]
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
              <CardTitle className="font-headline text-2xl">Mental Health & Wellness Sessions</CardTitle>
              <CardDescription>A summary of topics and shared experiences from group sessions.</CardDescription>
            </CardHeader>
          </Card>
          
          <Tabs defaultValue="session-3" className="w-full">
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
                {session3CheatSheet.map((section) => (
                  <Card key={section.id}>
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <section.icon className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <CardTitle className="font-headline text-lg">{section.id}. {section.title}</CardTitle>
                          <CardDescription>{section.duration}</CardDescription>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center gap-3 rounded-lg bg-muted/50 p-3 border">
                        <Target className="h-5 w-5 text-accent flex-shrink-0"/>
                        <p className="text-sm font-semibold text-muted-foreground">{section.goal}</p>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {section.steps && section.steps.map((step, index) => (
                         <div key={index} className="pl-4">
                            {step.title && <p className="font-semibold text-sm mb-1">{step.title}</p>}
                            <p className="text-muted-foreground text-sm leading-relaxed">{step.instruction}</p>
                         </div>
                      ))}
                      {section.parts && section.parts.map((part, index) => (
                        <div key={index} className="pl-4">
                           <p className="font-semibold text-sm mb-1">{part.title}</p>
                           <p className="text-muted-foreground text-sm leading-relaxed">{part.content}</p>
                        </div>
                      ))}
                      {index < session3CheatSheet.length -1 && <Separator />}
                    </CardContent>
                  </Card>
                ))}
              </div>
               <Card className="mt-8 border-primary/20 bg-primary/5">
                <CardHeader>
                    <CardTitle className="font-headline text-xl flex items-center gap-2">
                        <Lightbulb className="h-5 w-5" />
                        Facilitators Only: Debrief
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">After the session, the facilitators meet briefly to talk about how the session went and what to improve next time.</p>
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

