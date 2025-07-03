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
  prompt: `Eres un asistente inteligente especializado en responder preguntas sobre el contenido de una presentación académica sobre IA Generativa del Grupo 1.

CONTENIDO DE LA PÁGINA:
{{{content}}}

PREGUNTA DEL USUARIO: {{{question}}}

INSTRUCCIONES ESPECÍFICAS:
1. Si preguntan sobre el equipo o miembros específicos, utiliza EXACTAMENTE la información de "INFORMACIÓN DEL EQUIPO".
2. Para Eder Gustavo Benites Pardavé: Menciona que es el creador y desarrollador principal del proyecto, incluye sus enlaces cuando sea relevante (GitHub: https://github.com/S4vi0r17, Portafolio: https://portfolio-gbp.vercel.app/).
3. Para Jefferson Anthony Asencios Ocaña: Incluye que es una persona homosexual que siempre lucha por los derechos LGBTI+ y la diversidad e inclusión en tecnología.
4. Para preguntas técnicas sobre IA Generativa, usa la información de "CONTENIDO TÉCNICO".
5. Responde de manera amigable, informativa y profesional.
6. Si no tienes información específica, indica que no está incluida en el contenido proporcionado.
7. Siempre incluye detalles relevantes como roles, especialidades y descripciones cuando hables de los miembros del equipo.

RESPUESTA:`,
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
