import Image from 'next/image';
import Header from '@/components/layout/Header';
import TeamSection from '@/components/sections/TeamSection';
import ContentDisplaySection from '@/components/sections/ContentDisplaySection';
import PdfSection from '@/components/sections/PdfSection';
import AiQuerySection from '@/components/sections/AiQuerySection';
import { contentData } from '@/lib/content';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section id="hero" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Left Column */}
              <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground font-headline mb-6">
                  {contentData.mainTitle}
                </h1>
                <p className="text-lg md:text-xl text-foreground/80 font-body mb-8 max-w-xl mx-auto md:mx-0">
                  Una exploración profunda de los conceptos, modelos y el impacto revolucionario de la Inteligencia Artificial Generativa.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button asChild size="lg" className="font-headline">
                    <a href="#intro">
                      Leer Más <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <Button asChild size="lg" className="font-headline">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      GitHub <Github className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Right Column */}
              <div className="md:w-1/2 mt-8 md:mt-0">
                <div className="rounded-xl shadow-2xl overflow-hidden bg-accent p-4 md:p-6">
                  <Image
                    src="https://placehold.co/600x400.png"
                    alt="Caja de herramientas de IA"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover w-full h-full"
                    data-ai-hint="orange toolbox"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <TeamSection members={contentData.teamMembers} />
        
        <ContentDisplaySection sections={contentData.sections} />
        
        <PdfSection 
          id="presentation-pdf" 
          title="Presentación (Diapositivas)"
          description="Visualiza nuestras diapositivas detalladas sobre los Fundamentos de la IA Generativa."
          // pdfUrl="/path/to/your/presentation.pdf" // Add actual path when available
        />
        
        <PdfSection 
          id="report-pdf" 
          title="Informe Detallado"
          description="Consulta nuestro informe completo que profundiza en los temas tratados."
          // pdfUrl="/path/to/your/report.pdf" // Add actual path when available
        />
        
        <AiQuerySection />
      </main>
      {/* Footer removed as per request */}
    </div>
  );
}
