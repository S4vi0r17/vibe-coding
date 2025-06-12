import Header from '@/components/layout/Header';
import TeamSection from '@/components/sections/TeamSection';
import ContentDisplaySection from '@/components/sections/ContentDisplaySection';
import PdfSection from '@/components/sections/PdfSection';
import AiQuerySection from '@/components/sections/AiQuerySection';
import SectionWrapper from '@/components/sections/SectionWrapper';
import { contentData } from '@/lib/content';
import { GraduationCap } from 'lucide-react'; // Or another relevant icon

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <SectionWrapper 
            id="main-title"
            title={contentData.mainTitle}
            Icon={GraduationCap}
            className="bg-primary text-center"
            titleClassName="text-4xl md:text-5xl font-bold text-primary-foreground"
        >
            <p className="mt-4 text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto font-body">
                Una exploración profunda de los conceptos, modelos y el impacto revolucionario de la Inteligencia Artificial Generativa.
            </p>
        </SectionWrapper>
        
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
