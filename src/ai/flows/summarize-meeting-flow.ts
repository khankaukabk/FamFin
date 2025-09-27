
'use server';
/**
 * @fileOverview An AI flow to summarize meeting decisions.
 *
 * - summarizeDecisions: A function that takes agenda items and their outcomes and generates a summary.
 * - MeetingDecisionsInput: The input type for the summarizeDecisions function.
 * - MeetingSummaryOutput: The return type for the summarizeDecisions function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const AgendaItemDecisionSchema = z.object({
    topic: z.string().describe('The main topic of the agenda item.'),
    description: z.string().describe('A brief description of the agenda item.'),
    outcome: z.enum(['yes', 'no', 'pending']).describe('The final decision for the item.'),
});
export type AgendaItemDecision = z.infer<typeof AgendaItemDecisionSchema>;

const MeetingDecisionsInputSchema = z.object({
  decisions: z.array(AgendaItemDecisionSchema),
});
export type MeetingDecisionsInput = z.infer<typeof MeetingDecisionsInputSchema>;

const MeetingSummaryOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the key decisions and outcomes from the meeting based on the provided votes.'),
});
export type MeetingSummaryOutput = z.infer<typeof MeetingSummaryOutputSchema>;

export async function summarizeDecisions(input: MeetingDecisionsInput): Promise<MeetingSummaryOutput> {
  return summarizeDecisionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeDecisionsPrompt',
  input: { schema: MeetingDecisionsInputSchema },
  output: { schema: MeetingSummaryOutputSchema },
  prompt: `You are an expert at writing concise meeting summaries.
Based on the following agenda items and their final "yes" or "no" outcomes, write a brief summary of the meeting's key decisions.
Do not list the items one by one. Instead, synthesize the information into a short, narrative paragraph.
For example, if the outcome for a new director was 'yes' and for a new budget was 'no', you could write: "The board approved the appointment of a new director and decided against the proposed budget changes for the next quarter."

Agenda & Decisions:
{{#each decisions}}
- Topic: {{{topic}}}
  Description: {{{description}}}
  Outcome: {{{outcome}}}
{{/each}}
`,
});

const summarizeDecisionsFlow = ai.defineFlow(
  {
    name: 'summarizeDecisionsFlow',
    inputSchema: MeetingDecisionsInputSchema,
    outputSchema: MeetingSummaryOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
