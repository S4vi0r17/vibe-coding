
import { FileText, Download } from 'lucide-react';
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
    <SectionWrapper id={id} title={title} Icon={FileText} className="bg-secondary/60">
      <Card className="max-w-4xl mx-auto shadow-xl border-none bg-card/80 backdrop-blur-sm">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-2xl md:text-3xl font-headline font-semibold text-primary">{title}</CardTitle>
          <CardDescription className="text-md md:text-lg text-foreground/70 font-body pt-1">{description}</CardDescription>
        </CardHeader>
        <CardContent className="text-center p-6 md:p-8">
          {pdfUrl ? (
            <div className="aspect-video md:aspect-[16/9] w-full rounded-xl overflow-hidden border-2 border-primary/20 shadow-inner bg-muted/30">
              <iframe
                src={pdfUrl}
                width="100%"
                height="100%"
                title={title}
                className="border-0"
              />
            </div>
          ) : (
            <div className="aspect-video md:aspect-[16/9] w-full rounded-xl border-2 border-dashed border-muted-foreground/50 bg-muted/30 flex flex-col items-center justify-center p-8 text-center">
              <FileText className="h-16 w-16 md:h-20 md:w-20 text-muted-foreground/70 mb-4" />
              <p className="text-lg md:text-xl text-muted-foreground font-body mb-2">El PDF estará disponible próximamente.</p>
              <p className="text-sm text-muted-foreground/60 font-body mb-6">(Archivo: {placeholderFileName})</p>
              <Button variant="outline" disabled className="border-primary/30 text-primary/80">
                <Download className="mr-2 h-4 w-4" />
                Descarga Deshabilitada
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
