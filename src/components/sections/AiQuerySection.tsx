
"use client";

import { useState } from 'react';
import { MessageCircleQuestion, Sparkles, Loader2, Send, Bot } from 'lucide-react';
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

  const suggestedQuestions = [
    "¿Qué es la IA Generativa?",
    "¿Cuáles son los principales modelos mencionados?",
    "¿Qué aplicaciones tiene la IA Generativa?",
    "¿Cuáles son las ventajas de los modelos GPT?"
  ];

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

  const handleSuggestedQuestion = (suggestedQ: string) => {
    setQuestion(suggestedQ);
  };

  return (
    <SectionWrapper id="ai-query" title="Consulta con IA" Icon={MessageCircleQuestion} className="bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Main Query Card */}
        <Card className="shadow-strong border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <div className="flex items-center justify-center mb-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                <Bot className="h-8 w-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-3xl font-bold text-foreground mb-2">
              Asistente de IA
            </CardTitle>
            <CardDescription className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Haz preguntas sobre el contenido de esta presentación y obtén respuestas instantáneas basadas en la información mostrada.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 lg:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="question-input" className="text-sm font-medium text-foreground">
                  Tu pregunta
                </label>
                <Textarea
                  id="question-input"
                  placeholder="¿Qué te gustaría saber sobre la IA Generativa?"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  rows={4}
                  className="text-base rounded-lg shadow-soft focus:ring-primary/50 transition-all duration-300"
                  disabled={isLoading}
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full shadow-soft hover:shadow-medium transition-all duration-300" 
                disabled={isLoading || !question.trim()}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Generando respuesta...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Preguntar a la IA
                  </>
                )}
              </Button>
            </form>

            {/* Suggested Questions */}
            <div className="mt-8 space-y-4">
              <h4 className="text-sm font-medium text-muted-foreground text-center">
                Preguntas sugeridas
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {suggestedQuestions.map((suggestedQ, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handleSuggestedQuestion(suggestedQ)}
                    disabled={isLoading}
                    className="text-left justify-start h-auto py-3 px-4 hover:bg-primary/5 transition-colors text-sm"
                  >
                    <Sparkles className="mr-2 h-4 w-4 text-primary flex-shrink-0" />
                    <span className="truncate">{suggestedQ}</span>
                  </Button>
                ))}
              </div>
            </div>

            {/* Answer Display */}
            {answer && (
              <Card className="mt-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 shadow-soft">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-foreground flex items-center">
                    <Bot className="mr-2 h-6 w-6 text-primary" />
                    Respuesta de la IA
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-sm max-w-none">
                    <p className="text-muted-foreground whitespace-pre-wrap leading-relaxed">
                      {answer}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>

        {/* Info Card */}
        <Card className="bg-muted/30 border-border/50">
          <CardContent className="p-6 text-center">
            <p className="text-sm text-muted-foreground">
              <strong>Nota:</strong> Las respuestas se generan basándose únicamente en el contenido de esta presentación sobre IA Generativa.
            </p>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
