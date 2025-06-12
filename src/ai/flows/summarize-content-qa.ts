// src/ai/flows/summarize-content-qa.ts
'use server';

/**
 * @fileOverview A question answering AI agent for summarizing content on the landing page.
 *
 * - askQuestion - A function that handles the question answering process.
 * - AskQuestionInput - The input type for the askQuestion function.
 * - AskQuestionOutput - The return type for the askQuestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AskQuestionInputSchema = z.object({
  question: z.string().describe('The question to be answered.'),
  content: z.string().describe('The summary of the content of the landing page.'),
});
export type AskQuestionInput = z.infer<typeof AskQuestionInputSchema>;

const AskQuestionOutputSchema = z.object({
  answer: z.string().describe('The AI-generated answer to the question.'),
});
export type AskQuestionOutput = z.infer<typeof AskQuestionOutputSchema>;

export async function askQuestion(input: AskQuestionInput): Promise<AskQuestionOutput> {
  return askQuestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'askQuestionPrompt',
  input: {schema: AskQuestionInputSchema},
  output: {schema: AskQuestionOutputSchema},
  prompt: `You are an AI assistant that answers questions about the content of a landing page.
  You will be provided with a summary of the page content.

  Page Content Summary: {{{content}}}

  Question: {{{question}}}

  Based on the summary, provide an answer:`,
});

const askQuestionFlow = ai.defineFlow(
  {
    name: 'askQuestionFlow',
    inputSchema: AskQuestionInputSchema,
    outputSchema: AskQuestionOutputSchema,
  },
  async input => {
    const response = await prompt(input);
    if (!response.output || typeof response.output.answer !== 'string') {
      console.error("Genkit prompt response did not contain a valid output structure:", response);
      throw new Error('AI model did not return a valid answer.');
    }
    return response.output;
  }
);
