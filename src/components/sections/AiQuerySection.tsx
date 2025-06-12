"use client";

import { useState } from 'react';
import { MessageCircleQuestion, Sparkles, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import SectionWrapper from '@/components/sections/SectionWrapper';
import { askQuestion, type AskQuestionInput, type AskQuestionOutput } from '@/ai/flows/summarize-content-qa';
import { getFullPageTextForAI } from '@/lib/content';
import { useToast } from "@/hooks/use-toast";


export default function AiQuerySection() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const pageContentForAI = getFullPageTextForAI();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) {
      toast({
        title: "Pregunta vacía",
        description: "Por favor, escribe una pregunta.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setAnswer('');

    try {
      const input: AskQuestionInput = {
        question,
        content: pageContentForAI,
      };
      const result: AskQuestionOutput = await askQuestion(input);
      setAnswer(result.answer);
      toast({
        title: "Respuesta generada",
        description: "La IA ha respondido tu pregunta.",
      });
    } catch (error) {
      console.error('Error asking question:', error);
      setAnswer('Hubo un error al procesar tu pregunta. Inténtalo de nuevo.');
      toast({
        title: "Error",
        description: "No se pudo obtener respuesta de la IA.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SectionWrapper id="ai-query" title="Pregunta a la IA" Icon={MessageCircleQuestion} className="bg-background">
      <Card className="max-w-3xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-headline text-primary flex items-center justify-center">
            <Sparkles className="h-7 w-7 mr-2 text-accent" />
            Consulta Sobre el Contenido
          </CardTitle>
          <CardDescription className="text-center font-body text-lg text-foreground/80">
            ¿Tienes alguna duda sobre la IA Generativa? Pregunta aquí y nuestra IA te ayudará a resumir la información de esta página.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Textarea
                placeholder="Escribe tu pregunta aquí..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                rows={4}
                className="font-body text-base"
                disabled={isLoading}
              />
            </div>
            <Button type="submit" className="w-full font-headline text-lg" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Procesando...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-5 w-5" />
                  Preguntar
                </>
              )}
            </Button>
          </form>
          {answer && (
            <Card className="mt-8 bg-secondary/50 p-6 rounded-lg shadow-inner">
              <CardHeader className="p-0 mb-2">
                <CardTitle className="font-headline text-xl text-primary">Respuesta de la IA:</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="font-body text-foreground/90 whitespace-pre-wrap">{answer}</p>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
