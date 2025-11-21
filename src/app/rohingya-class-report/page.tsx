
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
        instruction: 'Do: Ask a simple question.\nSay: "How are you feeling today? Give me a thumbs up (good), thumbs sideways (okay), or thumbs down (bad)."',
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
        content: 'Do: Ask the group for words.\nSay: "When I say the words \'Mental Health\', what is the first thing you think of? You can shout it out or type it in the chat."\nAction: Write down everything they say on a whiteboard or flipchart (or read them out loud if online).',
      },
      {
        title: 'The Explanation (The "Teaching")',
        content: 'Concept: Mental Health is a Skill.\nExplain it simply:\n"Mental health is like a muscle. It is a skill we have to practice. Just like we exercise our bodies to stay strong, we have to do things to keep our minds strong."\nList the 4 Skills (Write these down or say them clearly):\n\n- Positive Mindset: Trying to look for the good in things.\n- Bouncing Back: When bad things happen, we feel sad, but we don\'t get stuck there forever. We recover.\n- Mindfulness: Paying attention to the present moment (not worrying about tomorrow).\n- Caring for Others: Being kind to people around us.',
      },
      {
        title: "The Big Discussion (Reflection)",
        content: 'Do: Ask the group to think about a hard time in the past.\nSay: "Think about a time when life was very difficult for you. I want to ask you some questions about that time."\nAsk these questions (give time for answers):\n\n- "How did your body feel? (Headaches? Fast heartbeat?)"\n- "How was your sleep? (Too much or too little?)"\n- "How was your appetite? (Did you stop eating?)"\n- "Did you pull away from friends and family?"',
      },
      {
        title: "The Facilitator's Key Note (Very Important)",
        content: 'Do: You must correct a common mistake people make.\nThe Mistake: People think "Mental Health" means "Crazy" or "Sick."\nThe Correction (Say this):\n"I want to make sure we understand one important thing. Mental Health is different from Mental Illness."\n\nMental Health: Everyone has this! It is just how we feel and think. Sometimes it is good, sometimes it is bad.\nMental Illness: This is a medical sickness. This is when someone has very serious symptoms, like hearing voices.',
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
            content: 'Do: Draw a line on the board. Write "Mild / Normal" on the left and "Severe / Intense" on the right.\nExplain:\n"Mental health is a spectrum (a range).\nOn the Left side, we have normal feelings: feeling sad when someone dies, or nervous about a new job.\nOn the Right side, we have severe feelings: hearing voices, or feeling like life is not worth living."',
        },
        {
            title: 'Is This Normal? (Activity)',
            content: 'Do: Read these two stories and ask the class if it is "Normal" or "Not Normal."\n\nStory 1 (The New Job): "A man starts a new job. He is very nervous and afraid to talk to people."\nQuestion: "Is this normal?" -> Answer: YES.\nTwist: "What if he is so scared he cannot get out of bed?" -> Answer: NO. (This needs support).\n\nStory 2 (The Worried Mom): "A mom is worried about COVID-19 because her kids are going back to school."\nQuestion: "Is this normal?" -> Answer: YES.\nTwist: "What if she locks the doors and won\'t let anyone leave the house for 4 weeks?" -> Answer: NO. (This needs support).',
        },
        {
            title: 'The 4 Questions Tool',
            content: 'Say: "If you are worried about yourself or a friend, ask these 4 questions to see if they need help:"\n\n- What is happening? (Nightmares? Not leaving the house?)\n- How long has it been? (A few days? Or years?)\n- How does it impact daily life? (Can they work? Can they shower?)\n- Is there a safety risk? (Are they hurting themselves or others?)"',
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
            content: 'Say: "Every culture has different ideas about why we feel sad or scared. I want to hear from you."\nAsk: "In your culture, what do people say causes mental problems?"\nPrompts (If they are quiet, suggest these):\n\n- "Do people think it is because of spirits or ancestors?"\n- "Do people think it is a punishment from God?"\n- "Do people think it is \'bad blood\' or an imbalance in the body?"\n\nFacilitator Note: Validate all answers. Say: "Those are very common beliefs."',
        },
        {
            title: 'Stigma (Shame)',
            content: 'Explain:\n"In many cultures (including the US), there is Stigma. This means people feel shame about having mental health problems. They might think it makes them weak or \'crazy\'."\n\nCrucial Note on Discrimination:\n"Just like there is stigma against mental health, there is also wrong information about COVID-19 that causes hate against Asian communities. We must stand against all hate—whether it is against someone with a mental illness or someone from a different race."',
        },
        {
            title: 'Seeking Help',
            content: 'Ask: "In your culture, who do you go to for help? A priest? A family elder? A doctor?"\n\nExplain the US System:\n"In the US, many people go to a Counselor. This is confidential (private), just like a doctor. Going to a counselor does not mean you are crazy. It just means you need extra support."',
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
            instruction: 'Do: [Refer to Appendix Page 2 in your manual]. Lead the group through the tapping steps described there.\nExplain: "This touches energy points on your body to help lower stress and anxiety."'
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
            instruction: 'Say: "This week, try to practice a \'Mindfulness\' exercise for 5 to 15 minutes. Or, write a list of things that make you feel calm."\nSay: "Think about your family\'s strengths. What makes your family strong?"'
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
                      <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">{section.content}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Card className="mt-8 border-primary/20 bg-primary/5">
                <CardHeader>
                    <CardTitle className="font-headline text-xl">Facilitators’ Notes</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground whitespace-pre-wrap">{session2FacilitatorNotes}</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="session-3" className="mt-6">
               <div className="space-y-6">
                {session3CheatSheet.map((section, index) => (
                  <React.Fragment key={section.id}>
                    <Card>
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
                        {section.steps && section.steps.map((step, stepIndex) => (
                           <div key={stepIndex} className="pl-4">
                              {step.title && <p className="font-semibold text-sm mb-1">{step.title}</p>}
                              <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-wrap">{step.instruction}</p>
                           </div>
                        ))}
                        {section.parts && section.parts.map((part, partIndex) => (
                          <div key={partIndex} className="pl-4">
                             <p className="font-semibold text-sm mb-1">{part.title}</p>
                             <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-wrap">{part.content}</p>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                    {index < session3CheatSheet.length - 1 && <Separator />}
                  </React.Fragment>
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
