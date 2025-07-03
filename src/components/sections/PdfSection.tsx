
import { FileText, Download, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import SectionWrapper from '@/components/sections/SectionWrapper';
import { Button } from '@/components/ui/button';

interface PdfSectionProps {
  id: string;
  title: string;
  pdfUrl?: string; 
  description: string;
}

export default function PdfSection({ id, title, pdfUrl, description }: PdfSectionProps) {
  const placeholderFileName = title.toLowerCase().replace(/\s+/g, '-').replace(/[():]/g, '') + '.pdf';
  
  return (
    <SectionWrapper id={id} title={title} Icon={FileText} className="bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <Card className="shadow-strong border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-3xl font-bold text-foreground mb-2">
              {title}
            </CardTitle>
            <CardDescription className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {description}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 lg:p-8">
            {pdfUrl ? (
              <div className="space-y-6">
                <div className="aspect-[16/9] w-full rounded-xl overflow-hidden border border-border shadow-medium bg-background">
                  <iframe
                    src={pdfUrl}
                    width="100%"
                    height="100%"
                    title={`${title} - Visualizador de PDF`}
                    className="border-0"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="shadow-soft">
                    <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-5 w-5" />
                      Abrir en Nueva Pestaña
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="shadow-soft">
                    <a href={pdfUrl} download>
                      <Download className="mr-2 h-5 w-5" />
                      Descargar PDF
                    </a>
                  </Button>
                </div>
              </div>
            ) : (
              <div className="aspect-[16/9] w-full rounded-xl border-2 border-dashed border-border bg-muted/30 flex flex-col items-center justify-center p-8 text-center space-y-6">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary/10">
                  <FileText className="h-10 w-10 text-primary" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">
                    Documento en Preparación
                  </h3>
                  <p className="text-muted-foreground max-w-md">
                    El PDF estará disponible próximamente. Mientras tanto, puedes explorar el contenido en las secciones anteriores.
                  </p>
                  <p className="text-sm text-muted-foreground/60">
                    Archivo: <code className="bg-muted px-2 py-1 rounded text-xs">{placeholderFileName}</code>
                  </p>
                </div>
                <Button variant="outline" disabled size="lg">
                  <Download className="mr-2 h-4 w-4" />
                  Descarga No Disponible
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
