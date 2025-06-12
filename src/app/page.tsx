
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
        <section id="hero" className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 items-center gap-12 md:gap-16">
              {/* Left Column */}
              <div className="text-center md:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground font-headline mb-6 leading-tight">
                  {contentData.mainTitle}
                </h1>
                <p className="text-lg md:text-xl text-foreground/80 font-body mb-10 max-w-xl mx-auto md:mx-0">
                  Una exploración profunda de los conceptos, modelos y el impacto revolucionario de la Inteligencia Artificial Generativa.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button asChild size="lg" className="font-headline text-lg px-8 py-3">
                    <a href="#intro">
                      Leer Más <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="font-headline text-lg px-8 py-3 border-primary/50 hover:bg-primary/10">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      GitHub <Github className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Right Column */}
              <div className="mt-8 md:mt-0">
                <div className="rounded-xl shadow-2xl overflow-hidden bg-accent/50 p-3 md:p-4 transform transition-all duration-500 hover:scale-105">
                  <Image
                    src="https://placehold.co/600x450.png" 
                    alt="Caja de herramientas de IA"
                    width={600}
                    height={450}
                    className="rounded-lg object-cover w-full h-full"
                    data-ai-hint="orange toolbox"
                    priority
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
          pdfUrl="https://web.seducoahuila.gob.mx/biblioweb/upload/Dante%20Alighieri%20Divina%20comedia.pdf"
        />
        
        <PdfSection 
          id="report-pdf" 
          title="Informe Detallado"
          description="Consulta nuestro informe completo que profundiza en los temas tratados."
          // pdfUrl="/path/to/your/report.pdf"
        />
        
        <AiQuerySection />
      </main>
      {/* Footer can be added here if needed in the future */}
    </div>
  );
}
