import { FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SectionWrapper from '@/components/sections/SectionWrapper';

interface PdfSectionProps {
  id: string;
  title: string;
  pdfUrl?: string; // Optional for now, can be placeholder
  description: string;
}

export default function PdfSection({ id, title, pdfUrl, description }: PdfSectionProps) {
  return (
    <SectionWrapper id={id} title={title} Icon={FileText} className="bg-secondary">
      <Card className="max-w-4xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-headline text-primary">{title}</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mb-6 text-lg font-body text-foreground/80">{description}</p>
          {pdfUrl ? (
            <div className="aspect-[4/3] w-full rounded-lg overflow-hidden border shadow-inner">
              <iframe
                src={pdfUrl}
                width="100%"
                height="100%"
                title={title}
                className="border-0"
              />
            </div>
          ) : (
            <div className="aspect-[4/3] w-full rounded-lg border border-dashed border-muted-foreground bg-muted/50 flex flex-col items-center justify-center p-8">
              <FileText className="h-16 w-16 text-muted-foreground mb-4" />
              <p className="text-muted-foreground font-body">El PDF estará disponible próximamente.</p>
              <p className="text-sm text-muted-foreground/70 font-body">(Ruta del archivo: {title.toLowerCase().replace(/\s+/g, '-')}.pdf)</p>
            </div>
          )}
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
