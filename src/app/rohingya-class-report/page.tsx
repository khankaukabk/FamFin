"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navigation } from "@/components/ui/navigation";
import { Separator } from "@/components/ui/separator";
import { Target, CheckCircle, MessageSquare, BrainCircuit, Users, Hand, Lightbulb, Home, Heart, Coffee, Shield, BookHeart, HeartPulse, Salad, Rainbow, ClipboardList, Repeat, Globe, Trees, Anchor, AlertTriangle, Speaker, Paintbrush, Gamepad2, Phone, PartyPopper, Milestone, PiggyBank, Receipt, ShoppingCart, Calculator } from "lucide-react";

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

const session5CheatSheet = [
  {
    id: "5A",
    title: "Check-in and Resource Sharing",
    duration: "10 Minutes",
    icon: CheckCircle,
    goal: "Welcome everyone and see how they are doing.",
    steps: [
      {
        title: "Welcome",
        instruction: 'Say: "Welcome back! I am so happy to see you all today."',
      },
      {
        title: "Check-in",
        instruction: 'Do: Choose a style you like.\nSay: "Let\'s go around. Please tell us your name and one thing you ate this week that you really enjoyed."\nAsk (Follow-up): "Did anyone try the homework from last week (the \'Triple-A\' attention/affection tool)? How did it go?"',
      },
      {
        title: "Resources",
        instruction: "Do: Share any news about COVID-19 or local support services.\nAsk: \"Does anyone have questions about resources or news?\"",
      },
      {
        title: "Introduce Topic",
        instruction: 'Say: "Today we are talking about Healthy Living—how we move our bodies and what we eat to stay strong in our minds."',
      },
    ],
  },
  {
    id: "5B",
    title: "Movement and Seated Yoga",
    duration: "20 Minutes",
    icon: HeartPulse,
    goal: "Show that simple movement helps reduce stress.",
    parts: [
      {
        title: 'Why Move?',
        content: 'Say: "Did you know that moving your body helps your brain? It reduces stress and helps you sleep."\nAsk: "What is your favorite way to move your body? Do you like dancing, walking, or playing with kids?"\nAsk: "What stops you from exercising? Is it time, space, or pain?" (Listen to their barriers).\nTips to Share:\n"You don\'t need a gym. Just walking is great exercise."\n"Stand up every 20 minutes to let your blood flow."\n"Listen to your body. If it hurts, stop."',
      },
      {
        title: 'Activity - Seated Yoga (or Gentle Stretching)',
        content: 'Note: Refer to "Appendix Page 4" in your manual for the specific Yoga poses.\nIf you don\'t have the manual, lead these simple movements:\n\nJoint Wake-up: "Sit comfortably. Slowly rotate your wrists. Now rotate your ankles."\nShoulder Rolls: "Lift your shoulders to your ears, then roll them back and down. Do this 5 times."\nBreathing: "Take a deep breath in, lift your arms up. Breathe out, lower your arms."\n\nSay: "Notice how your body feels now compared to 10 minutes ago."\nAsk: "Does your mind feel any quieter now that your body is relaxed?"',
      },
    ],
  },
  {
    id: "5C",
    title: "Nutrition & Culture",
    duration: "10 Minutes",
    icon: Salad,
    goal: "Discuss food access and cultural connection.",
    steps: [
      {
        title: "Acknowledge Reality",
        instruction: 'Say: "I know that finding your traditional foods in the US can be hard. Also, healthy food can sometimes be expensive."\nAsk: "Have you noticed your diet changing since you moved here? Is it better or worse?"\nAsk: "Is it easy or hard to find the specific ingredients you need for your traditional cooking?"\n\nFacilitator Note: If someone says they don\'t have enough food, talk to them privately after class to give them food bank resources.',
      },
      {
        title: "Food is Connection",
        instruction: 'Say: "Food is not just fuel; it is culture. Eating your traditional foods is good for your soul."\nAsk: "What is one \'comfort food\' from your culture that makes you feel better when you are sad?"',
      },
    ],
  },
  {
    id: "5D",
    title: "Healthy Eating Tips",
    duration: "20 Minutes",
    icon: Rainbow,
    goal: 'Teach simple nutrition using the "Rainbow" concept.',
    parts: [
      {
        title: 'The Rainbow',
        content: 'Concept: Different colors of vegetables have different vitamins.\nSay: "A simple rule for eating healthy is: Eat the Rainbow."\n"Try to have different colors on your plate (Green, Red, Orange, Yellow)."\nAsk: "Which color is the easiest for you to eat? Which color is the hardest to find?"',
      },
      {
        title: 'Food Groups (Quick Review)',
        content: 'Vegetables/Fruits: Aim for half your plate.\nProteins: Meat, fish, tofu, beans. (Palm-sized amount).\nGrains: Rice, bread, quinoa.\nWater: Drink lots of water! (Aim for half your body weight in ounces, or just "8 glasses").\nAsk: "Does this \'Healthy Plate\' look different from how you usually eat? What is different?"',
      },
      {
        title: 'Activity - "Food is Medicine"',
        content: 'Do: Refer to "Appendix Page 5" (Food is Medicine).\nDiscussion: "Think about what you ate yesterday. Did you have any vegetables? Did you drink enough water? What is one small change you can make tomorrow?"\nAsk: "Does anyone have a healthy recipe they want to share with the group?"',
      },
    ],
  },
  {
    id: "5E",
    title: "Wellness Plan Activity",
    duration: "25 Minutes",
    icon: ClipboardList,
    goal: "Create a personal plan for when things get hard.",
    steps: [
      {
        title: "The Concept",
        instruction: 'Say: "When we are stressed, we often forget how to take care of ourselves. We are going to write down a \'Cheat Sheet\' for ourselves."\nAsk: "Why do you think we forget to take care of ourselves when we are stressed?"',
      },
      {
        title: "The Writing Exercise",
        instruction: 'Do: Ask participants to write down or think about answers to these 5 sentences:\n\n"When I feel SAD, I will..." (Example: Call a friend, cry, listen to music)\n"When I feel LONELY, I will..."\n"When I feel HOMESICK, I will..."\n"When I feel ANGRY, I will..."\n"When I feel SCARED, I will..."',
      },
      {
        title: "Sharing",
        instruction: 'Ask: "Would anyone like to share one of their answers?"\nAsk: "How can we support our friends when they feel this way?" (Example: Drop off a meal, check in).',
      },
    ],
  },
  {
    id: "5F",
    title: "Home Practice & Closing",
    duration: "5 Minutes",
    icon: Repeat,
    goal: "Give homework and Goodbye.",
    steps: [
      {
        title: "Homework",
        instruction: 'Movement: "Try to move your body every day (walk, stretch, dance)."\nRecipe: "Think of a favorite family recipe. Who taught it to you? Why is it special? Write it down or just think about the memory."',
      },
      {
        title: "Closing",
        instruction: 'Say: "Thank you for moving and learning with us today. Remember to drink water and be kind to your body!"',
      },
    ],
  },
];

const session6CheatSheet = [
  {
    id: "6A",
    title: "Check-in and Resource Sharing",
    duration: "10 Minutes",
    icon: CheckCircle,
    goal: "Welcome everyone and acknowledge their journey.",
    steps: [
      { title: "Welcome", instruction: 'Say: "Welcome back. Thank you for being here today."' },
      { title: "Check-in", instruction: 'Do: Choose a simple check-in.\nSay: "Let\'s do a one-word check-in. What is one word that describes your energy level today?" (Examples: High, Low, Tired, Excited).' },
      { title: "Resources", instruction: "Do: Share any news about COVID-19 or legal updates if relevant." },
      { title: "Introduce Topic", instruction: 'Say: "Today we are talking about Culture Shock—the emotional journey of moving to a new country and how we adjust."' },
    ],
  },
  {
    id: "6B",
    title: "Culture Shock & The Adjustment Process",
    duration: "15 Minutes",
    icon: Globe,
    goal: "Explain that feeling confused or sad is a normal part of moving.",
    parts: [
      {
        title: "The 4 Stages of Migration",
        content: 'Do: Explain these 4 stages simply. Use your hands to show ups and downs.\n\nHoneymoon: "When you first arrive, everything is new and exciting. You feel hopeful."\n\nCRITICAL NOTE for Asylum Seekers: "If you came here seeking asylum/safety, you might not have felt this. You might have just felt stress. That is okay, too."\n\nCulture Shock: "The excitement stops. You realize life here is HARD. You might feel angry, sad, or confused. You miss home."\n\nAdjustment: "You start to learn how things work. You learn the bus system, the language, or find a job. It feels a little less scary."\n\nIntegration: "You feel comfortable. You feel like you are from your home country AND part of the US community."',
      },
      {
        title: "Discussion",
        content: 'Ask: "Have you felt \'Culture Shock\'? What was the hardest thing for you to understand when you first arrived?"\n\nAsk: "Where do you think you are on this timeline right now? Are you in \'Shock\' or \'Adjustment\'?"',
      },
      {
        title: "Scenarios (Activity)",
        content: 'Do: Refer to "Appendix Page 7" (Newcomer Scenarios). Read the story of Amal or Tsegeye if you have it.\n\nIf you do not have the story, Ask: "Think of a friend who is struggling to adjust. What would you say to support them?"',
      },
    ],
  },
  {
    id: "6C",
    title: "Cultural Integration",
    duration: "15 Minutes",
    icon: Salad,
    goal: "Explain that you don't have to lose your culture to live here.",
    steps: [
      {
        title: 'The "Salad Bowl" Concept',
        instruction: 'Say: "Integrating does NOT mean you have to forget your culture. You can keep your traditions AND learn new American traditions."\n\nSay: "It is okay to be \'Bicultural\'—to be two things at once."',
      },
      {
        title: "Old vs. New Traditions",
        instruction: 'Activity: Ask the group to compare traditions.\n\nAsk: "What is one tradition from your home country that you MUST keep?" (Example: specific holidays, food, respect for elders).\n\nAsk: "What is one NEW tradition in the US that you actually like?" (Example: Thanksgiving, parks, casual clothing).\n\nAsk: "What is one US tradition that is very strange to you?"',
      },
    ],
  },
  {
    id: "6D-6E",
    title: "Community Wellbeing & Compassion",
    duration: "20 Minutes",
    icon: Heart,
    goal: "Discuss how to stay connected and be kind.",
    parts: [
      {
        title: "Coping Strategies",
        content: 'Say: "When we miss our home, we need anchors to hold us steady."\n\nAsk: "What keeps you strong? Is it Faith? Family? Or Community?"\n\nAsk: "How do you stay connected to your community during the pandemic/isolation? Do you call? Use WhatsApp?"',
      },
      {
        title: "Compassion (Helping Others)",
        content: 'Say: "One of the best ways to heal yourself is to be kind to others."\n\nExplain Compassion:\n\n"Listen without judgment."\n\n"Be patient. Everyone adjusts at different speeds."\n\n"Share your own stories of how you cope."\n\nAsk: "Think of a time someone was kind to you when you were new here. How did that help you?"',
      },
    ],
  },
  {
    id: "6F",
    title: "Reflection Activity: Tree of Life",
    duration: "20 Minutes",
    icon: Trees,
    goal: "Connect past strength with future hope.",
    steps: [
      {
        title: 'The "Tree of Life" Visualization',
        instruction: 'Note: Refer to "Appendix Page 8 or 9". If you cannot do the full activity, do this simple version:\n\nSay: "I want you to imagine a tree." (Or draw it if they have paper).\n\nThe Roots (History): "Think about where you come from. Your ancestors. Your culture. This keeps you standing."\n\nThe Trunk (Strengths): "What makes you strong? Is it your family? Your faith? Your bravery?"\n\nThe Leaves/Fruit (The Future): "What are your hopes for the future? What do you want to give to your children?"\n\nAsk: "Would anyone like to share one \'Root\' (where they are from) or one \'Fruit\' (a hope for the future)?"',
      },
    ],
  },
  {
    id: "6G",
    title: "Home Practice & Closing",
    duration: "10 Minutes",
    icon: Home,
    goal: "Homework and Goodbye.",
    steps: [
      {
        title: "Homework",
        instruction: 'Say: "This week, try to reach out to one person in your community just to say hello and see how they are doing."',
      },
      {
        title: "Closing",
        instruction: 'Say: "You have all been through a big journey. Be proud of how far you have come. See you next week!"',
      },
    ],
  },
];

const session7Guide = [
    {
        id: "7A",
        title: "Check-in and Resource Sharing",
        duration: "10 Minutes",
        icon: CheckCircle,
        goal: "Welcome everyone and prepare them for the end of the program.",
        steps: [
            { title: "Welcome & Reminder", instruction: 'Say: "Welcome back. I am happy you are here."\n\nCrucial Reminder: "I want to remind everyone that our group is ending soon. We only have a few sessions left. How does that make you feel?"' },
            { title: "Check-in", instruction: 'Do: Simple check-in.\nSay: "If your mood was weather today, what weather would it be? (Sunny, Stormy, Cloudy?)"' },
            { title: "Introduce Topic", instruction: 'Say: "Today we are talking about Trauma—how big, scary events affect our bodies and how we can calm down."' }
        ],
        report: {
            title: "Sample Responses for Report (7A)",
            sections: [
                { title: "Weather Metaphor:", content: '"Cloudy" (Unsure, feeling "blah")\n"Stormy" (Angry or agitated)\n"Sunny with clouds" (Hopeful but worried)\n"Foggy" (Cannot think clearly)' },
                { title: "Feelings about Group Ending:", content: '"Sad. This is the only place I can talk."\n"Anxious. I will miss my friends."\n"Okay. I feel ready."' }
            ]
        }
    },
    {
        id: "7B",
        title: "What is Trauma?",
        duration: "15 Minutes",
        icon: BrainCircuit,
        goal: "Define Trauma simply.",
        steps: [
            { title: "Definitions (Trauma vs. Stress vs. Adversity)", content: 'Say: "We use these words a lot, but let\'s define them:"\n\nStress: "Everyday pressure. Traffic, bills, arguments."\n\nAdversity: "Hard times or bad luck. Being poor, losing a job, or facing discrimination."\n\nTrauma: "An event that is unexpected and overwhelming. It makes you fear for your life or safety. Examples: War, accidents, violence."' },
            { title: 'How to Explain "Triggers"', content: 'Definition to Share: "A \'Trigger\' is when something small (a sound, a smell, a news story) reminds your brain of the bad event. Your body reacts as if the danger is happening right now."' },
            { title: "Cultural Words & Discussion", content: 'Ask: "In your language, is there a specific word for \'Trauma\'? Or do you just say \'Big Sadness\' or \'Heart Pain\'?"\n\nAsk: "How do people in your community show they are suffering? Do they get quiet? Do they get angry? Do they work harder?"' },
            { title: 'The "Why"', content: 'Say: "Trauma is not just in your head. It lives in your body. It can affect you months or years after the event happened."' }
        ],
        report: {
            title: "Sample Responses for Report (7B)",
            sections: [
                { title: "Cultural Definitions of Trauma:", content: 'Descriptive: "We don\'t have a word for \'Trauma\'. We say \'The Great Shock\' or \'Soul Wound\'."\nPhysical: "We describe it as \'Heavy Heart\' or \'Head that does not stop spinning\'."\nSpiritual: "Some people say it is a curse or bad luck."' },
                { title: "Common Causes Mentioned:", content: '"War/Bombing"\n"Leaving my home country forever"\n"Domestic violence"' }
            ]
        }
    },
    {
        id: "7C",
        title: "Fight, Flight, or Freeze",
        duration: "20 Minutes",
        icon: Shield,
        goal: "Explain the body's automatic safety system.",
        steps: [
            { title: "The Animal Example", content: 'Say: "Imagine a rabbit sees a lion. The rabbit does not think. Its body takes over."\n\nFlight: "It runs away fast."\n\nFight: "If it cannot run, it bites and kicks."\n\nFreeze: "If it is too scared, it freezes like a statue, hoping the lion won\'t see it."' },
            { title: "The Human Connection", content: 'Say: "Humans are the same. When we are scared (by war, or even by a virus like COVID-19), our bodies react."\n\nThe Problem: "Animals shake it off and go back to eating grass. Humans remember. We hold the fear inside, so we might feel \'Frozen\' or \'Angry\' long after the danger is gone."' },
            { title: "Discussion Questions (Make it real)", content: 'Ask (The Freeze): "Have you ever felt \'Frozen\' during this pandemic? Like you sit on the couch and cannot move, even though you are not tired?"\n\nAsk (The Fight): "What does \'Fight\' look like in a family? Is it always hitting? Or can it be yelling or snapping at people?"\n\nAsk (The Flight): "In a small apartment, we can\'t run away. How do we \'Flee\'? Do we hide in the bathroom? Do we sleep all day? Do we stay on our phones?"' }
        ],
        report: {
            title: "Sample Responses for Report (7C)",
            sections: [
                { title: 'The "Freeze" Response:', content: '"Yes. Some days I sit on the couch for 3 hours and cannot get up. I am not tired, just stuck."' },
                { title: 'The "Fight" Response:', content: '"I find myself yelling at my children for small things. I am always angry."' },
                { title: 'The "Flight" Response:', content: '"I just want to sleep all day to escape reality."' },
                { title: "Understanding the Metaphor:", content: '"I feel like the rabbit. Always looking for danger."' }
            ]
        }
    },
    {
        id: "7D",
        title: "Body Awareness Activities",
        duration: "30 Minutes",
        icon: HeartPulse,
        goal: "Connect the mind to the body.",
        parts: [
            { title: "Body Map (The Drawing)", content: 'Do: Give them paper and markers (or just ask them to imagine).\nSay: "Draw a simple outline of a body."\nAsk: "Where do you feel stress? Color that part Red."\nFollow-up: "Does your stomach hurt when you are worried? Do you get headaches?"\nAsk: "Where do you feel strength or love? Color that part Green."\nFollow-up: "Think of a time you felt powerful. Did you feel it in your chest? Your hands?"' },
            { title: "Body Scan (The Meditation)", content: 'Do: Speak slowly and calmly.\nScript:\n"Sit comfortably. Close your eyes if you want."\n"Notice your feet on the floor."\n"Notice your legs. Are they heavy?"\n"Notice your stomach. Is it tight or soft?"\n"Notice your shoulders. Drop them down away from your ears."\n"Take a deep breath. Let it all go."' }
        ],
        report: {
            title: "Sample Responses for Report (7D)",
            sections: [
                { title: "Where is Stress (Red)?", content: 'Shoulders/Neck: "Very heavy. Like carrying a rock."\nStomach: "Knots. I cannot eat when I am scared."\nHead: "Headaches every day."' },
                { title: "Where is Strength (Green)?", content: 'Hands: "Because I work hard for my family."\nHeart: "Because I love my children."\nLegs: "Because they brought me to this country."' },
                { title: "Reaction to Meditation:", content: '"I almost fell asleep." (Positive)\n"It was hard to close my eyes. I felt unsafe." (Negative/Trauma response - validate this).\n"I didn\'t realize my shoulders were so high until you said to drop them."' }
            ]
        }
    },
    {
        id: "7E",
        title: "Home Practice & Closing",
        duration: "10 Minutes",
        icon: Home,
        goal: "Homework and De-escalation.",
        steps: [
            { title: "Homework", instruction: 'Say: "Practice the Body Scan 2 times this week. Or, if you prefer, put on music and dance/sing. Dancing releases the \'Frozen\' feeling."' },
            { title: "Closing", instruction: 'Say: "We talked about heavy things today. Take a deep breath. Shake out your hands. Leave the heavy feelings here. See you next week."' }
        ]
    }
];

const session8Guide = [
  {
    id: "8A",
    title: "Check-in",
    duration: "5 minutes",
    icon: CheckCircle,
    goal: "Say hello and see how everyone is feeling.",
    steps: [
      { title: "You Ask", instruction: '"Welcome back! I am happy to see you. Before we start, let’s check in. How are you feeling today? You can say one word or a short sentence."' },
    ],
    report: {
        title: "Sample Responses for Report (8A)",
        sections: [
            { title: "Check-in Feelings:", content: '"I am tired today."\n"I am happy because my child started school."\n"I feel a little stressed."' },
        ]
    }
  },
  {
    id: "8B",
    title: "Guest Speaker",
    duration: "15 minutes",
    icon: Speaker,
    goal: "Listen to a guest talk about healing or culture.",
    steps: [
      { title: "You Say (if applicable)", instruction: '"Today we have a special guest, [Name]. They will talk about how to stay strong and healthy in our culture. Please listen."' },
      { title: "After the talk, You Ask", instruction: '"Does anyone have a question for our guest?"' },
    ],
    report: {
        title: "Sample Responses for Report (8B)",
        sections: [
            { title: "Guest Speaker Interaction:", content: '"Thank you for the story."\n"How do you stay calm when things are hard?"' },
        ]
    }
  },
  {
    id: "8C",
    title: "Virtual Hope Wall",
    duration: "10 minutes",
    icon: Paintbrush,
    goal: "Share things that make us feel hopeful and happy.",
    steps: [
      { title: "You Say", instruction: '"When life is hard, \'hope\' helps us keep going. We are going to build a \'Hope Wall\' together."' },
      { title: "You Ask", instruction: '"What is one thing that gives you hope? It can be a person, a place, or an activity. You can draw it or just tell me."' },
      { title: "You Do", instruction: 'Write their answers on a whiteboard (or a shared screen if online) so everyone can see the "Wall."' },
    ],
    report: {
        title: "Sample Responses for Report (8C)",
        sections: [
            { title: "Sources of Hope:", content: '"My children give me hope."\n"Praying makes me feel better."\n"Cooking food from my country."\n"Listening to music."' },
        ]
    }
  },
  {
    id: "8D",
    title: "Five Senses Game",
    duration: "15 minutes",
    icon: Gamepad2,
    goal: "A calming exercise to stop stress.",
    steps: [
      { title: "You Say", instruction: '"Sometimes we worry about the future. This game helps us focus on *right now*. Please sit comfortably and take a deep breath."' },
      { title: "You Ask (Step 1)", instruction: '"Look around. Tell me 5 things you see."' },
      { title: "You Ask (Step 2)", instruction: '"Now, touch things near you. Tell me 4 things you can touch."' },
      { title: "You Ask (Step 3)", instruction: '"Be quiet and listen. Tell me 3 things you can hear."' },
      { title: "You Ask (Step 4)", instruction: '"Take a sniff. Tell me 2 things you can smell."' },
      { title: "You Ask (Step 5)", instruction: '"Tell me 1 thing you can taste in your mouth."' },
    ],
    report: {
        title: "Sample Responses for Report (8D)",
        sections: [
            { title: "5 Things Seen:", content: '"I see a chair, a light, a shoe, a window, a book."' },
            { title: "4 Things Touched:", content: '"My shirt, the table, my hair, the paper."' },
            { title: "3 Things Heard:", content: '"A car outside, the wind, someone talking."' },
            { title: "2 Things Smelled:", content: '"Coffee, soap."' },
            { title: "1 Thing Tasted:", content: '"Toothpaste, tea."' },
        ]
    }
  },
  {
    id: "8E",
    title: "Support and Connection",
    duration: "5 minutes",
    icon: Heart,
    goal: "Talk about who helps us.",
    steps: [
      { title: "You Ask", instruction: '"When you feel sad or have a problem, who do you talk to? Who helps you?"' },
      { title: "Follow-up Question", instruction: '"If you see a friend who is sad, what can you do?"' },
    ],
    report: {
        title: "Sample Responses for Report (8E)",
        sections: [
            { title: "Who They Talk To:", content: '"I call my sister."\n"I talk to my case manager."\n"I go to my religious leader (Imam/Priest/Rabbi)."' },
            { title: "How They Help a Friend:", content: '"I can cook for them."\n"I can listen to them."\n"I can give them a phone number for a doctor."' },
        ]
    }
  },
  {
    id: "8F",
    title: "Role Play Activity",
    duration: "20 minutes",
    icon: Users,
    goal: "Practice helping a friend.",
    steps: [
      { title: "You Say", instruction: '"Let\'s pretend (act). I need two volunteers. Person A has a problem. Person B is the friend helping them."' },
      { title: "The Scenario", instruction: '*Use a simple story. Example: "Person A lost their job and is very sad. Person B wants to help."*' },
      { title: "You Ask the Group", instruction: '"How did Person B help? Did they do a good job?"' },
    ],
     report: {
        title: "Sample Responses for Report (8F)",
        sections: [
            { title: "Feedback on Role Play:", content: '"Yes, they listened well."\n"They told them about a job fair."\n"They were kind."' },
        ]
    }
  },
  {
    id: "8G",
    title: "Planning the Future",
    duration: "10 minutes",
    icon: Phone,
    goal: "Decide if the group wants to keep meeting.",
    steps: [
      { title: "You Say", instruction: '"Next week is our last session! But you can keep being friends."' },
      { title: "You Ask", instruction: '"Do you want to keep meeting after this class is finished? How can we stay in touch?"' },
    ],
    report: {
        title: "Sample Responses for Report (8G)",
        sections: [
            { title: "Staying in Touch:", content: '"Yes, let\'s make a WhatsApp group."\n"We can meet at the park once a month."\n"I want to share my phone number."' },
        ]
    }
  },
  {
    id: "8H",
    title: "Homework and Closing",
    duration: "5 minutes",
    icon: PartyPopper,
    goal: "Prepare for the final party/session.",
    steps: [
      { title: "You Say", instruction: '"Next week is our last time together. We will celebrate!"' },
      { title: "Homework", instruction: '"Please think about a time you were strong. Think of a story where you had a hard problem but you fixed it. Please bring this story next week. You can also bring a photo or a song."' },
      { title: "Closing", instruction: '"Thank you everyone. See you next week!"' },
    ]
  },
];

const session9Guide = [
  {
    id: "9A",
    title: "Review and Next Steps",
    duration: "10 minutes",
    icon: Users,
    goal: "Talk about the group ending and how to stay friends.",
    steps: [
      { title: "You Say", instruction: '"Welcome to our last session! I am so happy you are here, but also a little sad that our class is finishing."' },
      { title: "You Ask", instruction: '"How do you feel about this being the last day?"' },
      { title: "You Ask", instruction: '"Do you want to stay in touch with each other? We can make a list of phone numbers or a WhatsApp group. Is that okay?"' }
    ],
    report: {
      title: "Sample Responses for Report (9A)",
      sections: [
        { title: "Feelings about Last Day:", content: '"I will miss seeing everyone."\n"I am proud that I finished."\n"I feel a little lonely."' },
        { title: "Staying in Touch:", content: '"Yes, please add my number."\n"I can start the WhatsApp group."\n"No, I prefer not to share my number."' }
      ]
    }
  },
  {
    id: "9B",
    title: "The River and The Bridge",
    duration: "15 minutes",
    icon: Milestone,
    goal: "A picture activity to understand how we overcome problems.",
    steps: [
      { title: "You Say", instruction: '"We are going to imagine a picture. Imagine a big river. You are on one side, and you want to get to the other side."' },
      { title: "You Ask (The River)", instruction: '"The river is a problem or a challenge. What is the \'river\' in your life right now?"' },
      { title: "You Ask (The Bridge)", instruction: '"The bridge is the help you have from the outside. Who or what is your bridge?"' },
      { title: "You Ask (The Traveler/You)", instruction: '"Now think about YOU crossing the bridge. What strength do you have *inside* you that helps you walk across?"' },
      { title: "You Ask (The Other Side)", instruction: '"What is on the other side of the river? What is your dream?"' },
      { title: "You Ask (Reviewing Tools)", instruction: '"We learned many tools in this class (like deep breathing, the hope wall, or sharing stories). Which tool will you keep using?"' }
    ],
    report: {
      title: "Sample Responses for Report (9B)",
      sections: [
        { title: "The River (Challenges):", content: '"Learning English is my river."\n"Finding a job."\n"Missing my family back home."' },
        { title: "The Bridge (External Support):", content: '"This support group is my bridge."\n"My case manager."\n"My neighbor who drives me to the store."' },
        { title: "The Traveler (Internal Strength):", content: '"I am patient."\n"I pray."\n"I do not give up for my children."' },
        { title: "The Other Side (Dreams):", content: '"A safe home."\n"My children going to college."\n"Feeling peace."' },
        { title: "Tools to Keep:", content: '"I will use the breathing when I am stressed."\n"I will remember to ask for help."' }
      ]
    }
  },
  {
    id: "9C",
    title: "Ending and Celebration",
    duration: "30 minutes",
    icon: PartyPopper,
    goal: "Celebrate the participants and say goodbye.",
    steps: [
      { title: "You Say", instruction: '"Now it is time to celebrate! We are all heroes in our own stories."' },
      { title: "You Ask", instruction: '"Did anyone bring something to share? A song, a poem, or a picture?"' },
      { title: "You Say (Certificates)", instruction: '"I have a certificate for each of you to say \'Good Job\'!"' },
      { title: "Action", instruction: 'Hold up the certificate on the screen (or give it to them if in person) and say their name loud and clear.\n"Congratulations, [Name]!"' },
      { title: "You Ask", instruction: '"Let\'s all clap for [Name]!"' },
      { title: "You Ask (Final Goodbye)", instruction: '"Before we go, does anyone have one last word they want to say to the group?"' },
      { title: "You Say", instruction: '"Thank you for your energy and your trust. Even though the class is over, you are strong and you have each other. Goodbye and good luck!"' }
    ],
    report: {
      title: "Sample Responses for Report (9C)",
      sections: [
        { title: "Shared Items:", content: '"I want to sing a song from my country."\n"I brought a picture of my family."\n"I want to tell a short story about when I was brave."' },
        { title: "Final Words:", content: '"Thank you everyone."\n"You are my family now."\n"Good luck."' }
      ]
    }
  }
];

const financialLiteracyGuide = [
    {
        id: "FL1",
        title: "Welcome & Opening",
        duration: "5 minutes",
        icon: Users,
        goal: "Make everyone feel comfortable talking about money (no judgment).",
        steps: [
            { title: "You Say", instruction: '"Welcome! Today we are talking about money. Money in a new country can be confusing and different."' },
            { title: "You Ask (Ice Breaker)", instruction: '"When you first went to an American supermarket, what surprised you?"' },
            { title: "You Ask", instruction: '"Is there anything about money in the U.S. that confuses you?"' },
        ],
        report: {
            title: "Sample Responses",
            sections: [
                { title: "Supermarket Surprises:", content: '"There are too many choices of cereal!"\n"Vegetables are expensive."\n"The prices have tax added later."' },
                { title: "Money Confusion:", content: '"How to pay bills?"\n"Why is rent so high?"' }
            ]
        }
    },
    {
        id: "FL2",
        title: "The Envelope Budgeting Game",
        duration: "10-15 minutes",
        icon: Receipt,
        goal: 'Learn that we must pay for "Needs" before "Wants."',
        parts: [
            { title: "Preparation", content: 'Give each person play money (fake cash, e.g., $2,000) and 4 envelopes labeled: Rent, Utilities (Lights/Heat), Food, Savings.\nYou Say: "We are going to play a game. You have $2,000 for the month. You have 4 envelopes."' },
            { title: "Round 1 (The Mistake)", content: 'You Say: "Put the money in the envelopes however you want. Go!"\nYou Ask: "Okay, look at your \'Rent\' envelope. Do you have enough? Look at your \'Food\'. Did you spend too much on nice food and forget the electric bill?"\nThe Lesson: Many will not have enough for rent.' },
            { title: "Round 2 (The Solution - Needs vs. Wants)", content: 'You Say: "Let\'s try again. We must follow the Basic Rule: Money coming in must be MORE than money going out."\nYou Say: "We have Needs (Survival) and Wants (Fun). Rent is a NEED. Expensive fish is a WANT."\nYou Say: "Fill the envelopes in this order:\n1. Rent (You need a home).\n2. Utilities (You need lights/heat).\n3. Savings (Even just $5).\n4. Food (Use what is left for food)."\nYou Ask: "Why do we pay rent first?"' }
        ],
        report: {
            title: "Sample Responses",
            sections: [
                { title: "Why pay rent first?", content: '"So we don\'t get evicted."\n"Because it is the most important need."' },
            ]
        }
    },
    {
        id: "FL3",
        title: "Smart Shopping & Unit Price Game",
        duration: "15 minutes",
        icon: ShoppingCart,
        goal: "Learn how to save money at the grocery store.",
        parts: [
            { title: "Part A: Smart Rules", content: 'You Say: "Food is expensive. Here are 3 rules to save money:"\n1. "Make a List: Only buy what is on the paper."\n2. "Don\'t Shop Hungry: When you are hungry, you buy too much!"\n3. "Store Brands: The \'Great Value\' or store brand is the same food, but cheaper than the famous name."' },
            { title: "Part B: The Unit Price Game", content: 'You Say: "Look at these two bags of rice." [Hold up a small bag and a big bag, or pictures]\nYou Ask: "The small bag is $2. The big bag is $5. Which is cheaper?"\nThey Answer: "The small bag is cheaper money ($2)."\nYou Say: "Be careful! We have to look at the Unit Price (Price per pound). The big bag lasts longer. It is actually cheaper per pound."\nActivity: Have them use their phone calculators.\nYou Say: "Take the Price ($) divided by the Weight (lb/oz). Let\'s practice."\n"It is better to buy the big bag of rice or lentils if you have the money today."' }
        ]
    },
    {
        id: "FL4",
        title: "Savings Jar Demonstration",
        duration: "10 minutes",
        icon: PiggyBank,
        goal: "Understand why we save for emergencies.",
        parts: [
            { title: "The Story", content: 'You Say: "I will tell you a story about two families."\nFamily A: They spend all their money every month. One day, their car breaks. They have no money to fix it. They lose their job because they can\'t drive. They are very stressed.\nFamily B: They save $20 every month. It feels small. But after one year, they have $240. When the car breaks, they can fix it.'},
            { title: "Discussion", content: 'You Ask: "Why is it hard to save money?"\nYou Say: "I know it is hard. But try to save 5% or even just pennies. It adds up."'},
            { title: "Activity", content: 'Give each family a physical jar (or an envelope).\nYou Say: "This is your Emergency Fund. Put a little bit in here every week. Do not touch it unless it is a Need (emergency)."' }
        ],
        report: {
            title: "Sample Responses",
            sections: [
                { title: "Why is it hard to save?", content: '"We don\'t have enough money."\n"Everything is expensive."' },
            ]
        }
    },
    {
        id: "FL5",
        title: "Closing Commitments",
        duration: "5 minutes",
        icon: Calculator,
        goal: "Promise to do one new thing this week.",
        steps: [
            { title: "You Say", instruction: '"We learned a lot today. I want you to pick ONE thing to do this week."' },
            { title: "You Ask", instruction: '"What will you do differently next time you shop?"' },
            { title: "You Say", instruction: '"Great job. Money is hard, but you are learning to be the boss of your money!"' }
        ],
        report: {
            title: "Sample Commitments",
            sections: [
                { title: "New Shopping Habits:", content: '"I will make a shopping list."\n"I will look for the \'Unit Price\'."\n"I will buy the store brand sugar, not the expensive one."\n"I will put $5 in my jar."' },
            ]
        }
    }
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
          
          <Tabs defaultValue="session-9.2" className="w-full">
            <TabsList className="grid w-full grid-cols-5 sm:grid-cols-5 md:grid-cols-9">
              <TabsTrigger value="session-2">Sess. 2</TabsTrigger>
              <TabsTrigger value="session-3">Sess. 3</TabsTrigger>
              <TabsTrigger value="session-4">Sess. 4</TabsTrigger>
              <TabsTrigger value="session-5">Sess. 5</TabsTrigger>
              <TabsTrigger value="session-6">Sess. 6</TabsTrigger>
              <TabsTrigger value="session-7">Sess. 7</TabsTrigger>
              <TabsTrigger value="session-8">Sess. 8</TabsTrigger>
              <TabsTrigger value="session-9">Sess. 9</TabsTrigger>
              <TabsTrigger value="session-9.2">Finance</TabsTrigger>
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
            <TabsContent value="session-5" className="mt-6">
               <div className="space-y-6">
                {session5CheatSheet.map((section, index) => (
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
                    {index < session5CheatSheet.length - 1 && <Separator />}
                  </React.Fragment>
                ))}
              </div>
            </TabsContent>
             <TabsContent value="session-6" className="mt-6">
               <div className="space-y-6">
                {session6CheatSheet.map((section, index) => (
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
                    {index < session6CheatSheet.length - 1 && <Separator />}
                  </React.Fragment>
                ))}
              </div>
            </TabsContent>
             <TabsContent value="session-7" className="mt-6">
                <Card className="mb-6 border-red-500/50 bg-red-500/10 text-red-900">
                    <CardHeader>
                        <div className="flex items-start gap-4">
                            <AlertTriangle className="h-6 w-6 flex-shrink-0 mt-1" />
                            <div>
                                <CardTitle className="font-headline text-lg">SAFETY NOTE</CardTitle>
                                <CardDescription className="text-red-800">
                                Today's topic is heavy. Watch your participants. If someone looks very upset or "checked out" (staring at nothing), stop the discussion and do a simple "Grounding Exercise" (like feeling their feet on the floor).
                                </CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                </Card>
               <div className="space-y-6">
                {session7Guide.map((section, index) => (
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
                              <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-wrap">{step.instruction || step.content}</p>
                           </div>
                        ))}
                        {section.parts?.map((part, partIndex) => (
                          <div key={partIndex} className="pl-4">
                             <p className="font-semibold text-sm mb-1">{part.title}</p>
                             <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-wrap">{part.content}</p>
                          </div>
                        ))}
                        {section.report && (
                            <Card className="mt-6 bg-blue-500/5 border-blue-500/20">
                                <CardHeader>
                                    <CardTitle className="text-base font-semibold text-blue-800">{section.report.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    {section.report.sections.map((reportSection, reportIndex) => (
                                        <div key={reportIndex}>
                                            <p className="font-semibold text-sm text-blue-700">{reportSection.title}</p>
                                            <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-wrap">{reportSection.content}</p>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        )}
                      </CardContent>
                    </Card>
                    {index < session7Guide.length - 1 && <Separator />}
                  </React.Fragment>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="session-8" className="mt-6">
                <div className="space-y-6">
                    {session8Guide.map((section, index) => (
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
                                <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-wrap">{step.instruction || step.content}</p>
                            </div>
                            ))}
                            {section.parts?.map((part, partIndex) => (
                            <div key={partIndex} className="pl-4">
                                <p className="font-semibold text-sm mb-1">{part.title}</p>
                                <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-wrap">{part.content}</p>
                            </div>
                            ))}
                            {section.report && (
                                <Card className="mt-6 bg-blue-500/5 border-blue-500/20">
                                    <CardHeader>
                                        <CardTitle className="text-base font-semibold text-blue-800">{section.report.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-3">
                                        {section.report.sections.map((reportSection, reportIndex) => (
                                            <div key={reportIndex}>
                                                <p className="font-semibold text-sm text-blue-700">{reportSection.title}</p>
                                                <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-wrap">{reportSection.content}</p>
                                            </div>
                                        ))}
                                    </CardContent>
                                </Card>
                            )}
                        </CardContent>
                        </Card>
                        {index < session8Guide.length - 1 && <Separator />}
                    </React.Fragment>
                    ))}
                </div>
            </TabsContent>
            <TabsContent value="session-9" className="mt-6">
                <div className="space-y-6">
                    {session9Guide.map((section, index) => (
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
                                <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-wrap">{step.instruction || step.content}</p>
                            </div>
                            ))}
                            {section.parts?.map((part, partIndex) => (
                            <div key={partIndex} className="pl-4">
                                <p className="font-semibold text-sm mb-1">{part.title}</p>
                                <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-wrap">{part.content}</p>
                            </div>
                            ))}
                            {section.report && (
                                <Card className="mt-6 bg-blue-500/5 border-blue-500/20">
                                    <CardHeader>
                                        <CardTitle className="text-base font-semibold text-blue-800">{section.report.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-3">
                                        {section.report.sections.map((reportSection, reportIndex) => (
                                            <div key={reportIndex}>
                                                <p className="font-semibold text-sm text-blue-700">{reportSection.title}</p>
                                                <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-wrap">{reportSection.content}</p>
                                            </div>
                                        ))}
                                    </CardContent>
                                </Card>
                            )}
                        </CardContent>
                        </Card>
                        {index < session9Guide.length - 1 && <Separator />}
                    </React.Fragment>
                    ))}
                </div>
            </TabsContent>
             <TabsContent value="session-9.2" className="mt-6">
                <div className="space-y-6">
                    {financialLiteracyGuide.map((section, index) => (
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
                                <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-wrap">{step.instruction || step.content}</p>
                            </div>
                            ))}
                            {section.parts?.map((part, partIndex) => (
                            <div key={partIndex} className="pl-4">
                                <p className="font-semibold text-sm mb-1">{part.title}</p>
                                <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-wrap">{part.content}</p>
                            </div>
                            ))}
                            {section.report && (
                                <Card className="mt-6 bg-blue-500/5 border-blue-500/20">
                                    <CardHeader>
                                        <CardTitle className="text-base font-semibold text-blue-800">{section.report.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-3">
                                        {section.report.sections.map((reportSection, reportIndex) => (
                                            <div key={reportIndex}>
                                                <p className="font-semibold text-sm text-blue-700">{reportSection.title}</p>
                                                <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-wrap">{reportSection.content}</p>
                                            </div>
                                        ))}
                                    </CardContent>
                                </Card>
                            )}
                        </CardContent>
                        </Card>
                        {index < financialLiteracyGuide.length - 1 && <Separator />}
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
