'use server';

/**
 * @fileOverview This file defines a Genkit flow for providing personalized financial advice.
 *
 * The flow takes income and expense data as input and returns tailored financial advice.
 * - getPersonalizedFinancialAdvice - A function that handles the financial advice generation process.
 * - FinancialAdviceInput - The input type for the getPersonalizedFinancialAdvice function.
 * - FinancialAdviceOutput - The return type for the getPersonalizedFinancialAdvice function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FinancialAdviceInputSchema = z.object({
  income: z
    .number()
    .describe('Total monthly income.')
    .min(0,
      'Income must be a non-negative number, as negative income is not a financial reality.'
    ),
  expenses: z
    .number()
    .describe('Total monthly expenses.')
    .min(0,
      'Expenses must be a non-negative number, as negative expenses is not a financial reality.'
    ),
  spendingHabits: z
    .string()
    .describe(
      'A summary of the users spending habits, including categories and amounts spent in each category.'
    ),
});

export type FinancialAdviceInput = z.infer<typeof FinancialAdviceInputSchema>;

const FinancialAdviceOutputSchema = z.object({
  advice: z.string().describe('Personalized financial advice based on the input data.'),
});

export type FinancialAdviceOutput = z.infer<typeof FinancialAdviceOutputSchema>;

export async function getPersonalizedFinancialAdvice(
  input: FinancialAdviceInput
): Promise<FinancialAdviceOutput> {
  return personalizedFinancialAdviceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedFinancialAdvicePrompt',
  input: {schema: FinancialAdviceInputSchema},
  output: {schema: FinancialAdviceOutputSchema},
  prompt: `You are a personal financial advisor. Provide personalized financial advice to the user based on their income, expenses, and spending habits.

Income: {{income}}
Expenses: {{expenses}}
Spending Habits: {{spendingHabits}}

Consider the users income and expenses to determine if they have a deficit or surplus. If they have a deficit, provide advice on how to reduce expenses or increase income. If they have a surplus, provide advice on how to invest or save the money. Provide specific and actionable advice.
`,
});

const personalizedFinancialAdviceFlow = ai.defineFlow(
  {
    name: 'personalizedFinancialAdviceFlow',
    inputSchema: FinancialAdviceInputSchema,
    outputSchema: FinancialAdviceOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
