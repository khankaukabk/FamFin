
"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navigation } from "@/components/ui/navigation";
import { Separator } from "@/components/ui/separator";
import { Target, CheckCircle, MessageSquare, BrainCircuit, Users, Hand, Lightbulb, Home, Heart, Coffee, Shield, BookHeart } from "lucide-react";

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

const session4CheatSheet = [
  {
    id: "4A",
    title: "Check-in and Resource Sharing",
    duration: "5 Minutes",
    icon: CheckCircle,
    goal: "Welcome everyone and check the energy of the group.",
    steps: [
      {
        title: "Welcome",
        instruction: 'Say: "Welcome back everyone! I am grateful you are here."',
      },
      {
        title: "Check-in",
        instruction: 'Do: Choose a simple check-in.\nSay: "Let\'s do a one-word check-in. Please say or type one word that describes how your week was."',
      },
      {
        title: "Resources",
        instruction: "Do: Share any important news if needed. If not, move on.",
      },
      {
        title: "Introduce Topic",
        instruction: 'Say: "Today we are talking about Family Wellbeing—how we get along with the people we live with and how we support our children."',
      },
    ],
  },
  {
    id: "4B",
    title: "Importance of Family Wellbeing",
    duration: "20 Minutes",
    icon: Home,
    goal: "Acknowledge that living together during stress is hard, and offer strategies.",
    parts: [
      {
        title: 'What is "Family"?',
        content: "Important Note: Not everyone lives with blood relatives.\n\nSay: \"When I say 'family' today, I mean whoever you are living with or whoever you love. This could be parents, children, roommates, friends, or partners.\"",
      },
      {
        title: 'The Challenge (The Reality Check)',
        content: 'Say: "Living together 24/7 can be comforting, but it can also be very stressful. It is normal to feel annoyed or overwhelmed when we are in the same house all the time."',
      },
      {
        title: 'Strategies for Peace',
        content: 'Do: Share these 3 tips with the group:\n\n- Routines: Keep a schedule. Wake up, eat, and sleep at the same time.\n- Rituals: Do something special together. (Example: Pizza on Fridays, Prayer every morning, Games on Thursday).\n- Space: Make a plan for "Alone Time." It is okay to need a break from your family.',
      },
      {
        title: 'Discussion',
        content: 'Ask: "What is one ritual or activity you used to do before the pandemic that you miss? Can we try to bring it back?"',
      },
    ],
  },
  {
    id: "4C",
    title: "Supporting Children",
    duration: "10 Minutes",
    icon: Users,
    goal: "Help parents/caregivers support the kids.",
    steps: [
      {
        title: "Brainstorm",
        instruction: 'Ask: "Those of you with children—what have you done lately to help them feel calm?"',
      },
      {
        title: "Facilitator Tips (Add these ideas)",
        instruction: 'Limit News: "Too much TV news scares children. Turn it off."\n\nAnswer Questions: "Be honest but gentle. Correct false rumors."\n\nBe a Role Model: "Children watch you. If you panic, they panic. If you take deep breaths and stay calm, they will too."',
      },
    ],
  },
  {
    id: "4D",
    title: 'The "Triple-A" Approach',
    duration: "10 Minutes",
    icon: Heart,
    goal: "Teach a specific tool to increase love and happiness hormones.",
    parts: [
      {
        title: "Introduction",
        content: "Say: \"Dr. Omar Reda created a tool called the 'Triple-A Approach' to help us feel happy and loved. It creates happy chemicals in our brain.\"",
      },
      {
        title: "Explain the 3 A's",
        content: "Attention: Look at them. Put down your phone. Listen to them.\nChemical: Dopamine (Satisfaction)\n\nAppreciation: Tell them \"Thank you\" or \"I value you.\"\nChemical: Serotonin (Happiness)\n\nAffection: Hugs, smiles, holding hands, or kind words.\nChemical: Oxytocin (Love)",
      },
      {
        title: "Mini-Activity",
        content: 'Ask: "Think of a time recently when someone gave you genuine Attention, Appreciation, or Affection. How did it feel?"',
      },
    ],
  },
  {
    id: "4E",
    title: "Caregiver Stress",
    duration: "10 Minutes",
    icon: Coffee,
    goal: "Remind them to take care of themselves first.",
    steps: [
      {
        title: "Core Message",
        instruction: 'Say: "You cannot pour from an empty cup. To take care of your family, you must take care of yourself."',
      },
      {
        title: "Self-Reflection Questions (Ask them to think about these)",
        instruction: '"What activities give me energy?"\n\n"What activities drain my energy?"\n\n"Who supports ME?"',
      },
    ],
  },
  {
    id: "4F",
    title: "Building Resilience",
    duration: "20 Minutes",
    icon: Shield,
    goal: "Create a plan to stay strong as a community/family.",
    parts: [
      {
        title: "Activity: The Resilience List",
        content: 'Say: "We are going to make a list of 4 things we can do to stay strong together."\n\nExamples to share:\n- Cooking a meal together.\n- Reading or telling stories.\n- Playing a game.\n- Sharing family traditions.',
      },
      {
        title: "Discussion",
        content: 'Ask: "Look at these ideas. Which one can you try this week?"\n\nAsk: "What gives you nourishment (strength) right now?"',
      },
    ],
  },
  {
    id: "4G",
    title: "Home Practice & Closing",
    duration: "10 Minutes",
    icon: BookHeart,
    goal: "Give homework and end the session.",
    steps: [
      {
        title: "Homework",
        instruction: 'Option 1: "Practice the Triple-A Approach (Attention, Appreciation, Affection) with your family for 5 minutes a day."\n\nOption 2: "Review the self-care questions. Ask yourself: \'What brings me joy?\'"',
      },
      {
        title: "Closing",
        instruction: 'Say: "Thank you for sharing today. Remember, a strong family starts with a strong YOU. See you next week!"',
      },
    ],
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
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="session-2">Session 2</TabsTrigger>
              <TabsTrigger value="session-3">Session 3</TabsTrigger>
              <TabsTrigger value="session-4">Session 4</TabsTrigger>
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
                        {section.steps?.map((step, stepIndex) => (
                           <div key={stepIndex} className="pl-4">
                              {step.title && <p className="font-semibold text-sm mb-1">{step.title}</p>}
                              <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-wrap">{step.instruction}</p>
                           </div>
                        ))}
                        {section.parts?.map((part, partIndex) => (
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
            <TabsContent value="session-4" className="mt-6">
               <div className="space-y-6">
                {session4CheatSheet.map((section, index) => (
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
                        {section.steps?.map((step, stepIndex) => (
                           <div key={stepIndex} className="pl-4">
                              {step.title && <p className="font-semibold text-sm mb-1">{step.title}</p>}
                              <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-wrap">{step.instruction}</p>
                           </div>
                        ))}
                        {section.parts?.map((part, partIndex) => (
                          <div key={partIndex} className="pl-4">
                             <p className="font-semibold text-sm mb-1">{part.title}</p>
                             <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-wrap">{part.content}</p>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                    {index < session4CheatSheet.length - 1 && <Separator />}
                  </React.Fragment>
                ))}
              </div>
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

    