
import Image from 'next/image';
import Header from '@/components/layout/Header';
import TeamSection from '@/components/sections/TeamSection';
import ContentDisplaySection from '@/components/sections/ContentDisplaySection';
import PdfSection from '@/components/sections/PdfSection';
import AiQuerySection from '@/components/sections/AiQuerySection';
import { contentData } from '@/lib/content';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Sparkles, BookOpen } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section id="hero" className="relative overflow-hidden py-20 sm:py-24 lg:py-32">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column - Content */}
              <div className="text-center lg:text-left space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium select-none">
                  <Sparkles className="h-4 w-4" />
                  Presentación Académica
                </div>

                {/* Main heading */}
                <div className="space-y-4 select-none">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
                    <span className="block text-foreground">Fundamentos de la</span>
                    <span className="block gradient-text">IA Generativa</span>
                  </h1>
                  <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed select-text">
                    Una exploración profunda de los conceptos, modelos y el impacto revolucionario de la Inteligencia Artificial Generativa.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button 
                    asChild 
                    size="lg" 
                    className="text-base px-8 py-6 h-auto shadow-medium hover:shadow-strong transition-all duration-300"
                  >
                    <a href="#intro" className="inline-flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      Explorar Contenido
                      <ArrowRight className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button 
                    asChild 
                    variant="outline" 
                    size="lg" 
                    className="text-base px-8 py-6 h-auto border-2 hover:bg-primary/5 transition-all duration-300"
                  >
                    <a 
                      href="https://github.com/jefferson30ao/LegalGenAI" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      <Github className="h-5 w-5" />
                      Ver en GitHub
                    </a>
                  </Button>
                </div>

                {/* Stats or features */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-border/50 select-none">
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-foreground">4</div>
                    <div className="text-sm text-muted-foreground">Integrantes</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-foreground">7+</div>
                    <div className="text-sm text-muted-foreground">Secciones</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-foreground">IA</div>
                    <div className="text-sm text-muted-foreground">Consultas</div>
                  </div>
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="relative">
                <div className="relative">
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -left-4 h-24 w-24 rounded-full bg-primary/20 blur-xl" />
                  <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-accent/20 blur-xl" />
                  
                  {/* Main image container */}
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-4 shadow-strong">
                    <div className="aspect-[4/3] overflow-hidden rounded-xl bg-white/50 backdrop-blur-sm">
                      <Image
                        src="https://i.ibb.co/r1vGhYM/67ac700c-ac6e-46fe-b9ef-e63e8845dbb3.png"
                        alt="Caja de herramientas de IA representando los fundamentos de la inteligencia artificial generativa"
                        width={600}
                        height={450}
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                        data-ai-hint="orange toolbox representing AI tools"
                        priority
                      />
                    </div>
                  </div>
                  
                  {/* Floating card */}
                  <div className="absolute -bottom-6 -left-6 rounded-xl bg-card border border-border shadow-strong p-4 backdrop-blur-sm select-none hover:shadow-medium transition-shadow duration-300">
                    <div className="flex items-center gap-3">
                      <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-sm font-medium text-card-foreground">Modelos Activos</span>
                    </div>
                  </div>
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
          pdfUrl="/expo-canva.pdf"
        />
        
        <AiQuerySection />
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Grupo 1 - Fundamentos de IA Generativa. Proyecto académico.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
