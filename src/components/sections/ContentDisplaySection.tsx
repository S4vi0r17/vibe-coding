import Image from 'next/image';
import type { LucideIcon } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card'; // Removed CardHeader, CardDescription, CardTitle as they are not used here
import SectionWrapper from '@/components/sections/SectionWrapper';

// Define more specific types for content structure
interface ContentBlock {
  subtitle: string;
  points: string[];
}

interface Model {
  name: string;
  description: string;
}

interface Feature {
  name: string;
  points: string[];
}

interface Application {
  name: string;
  description: string;
}

interface Advantage {
  name: string;
  description: string;
}

interface Development {
  title: string;
  points: string[];
}

interface ContentSectionItem {
  id: string;
  title: string;
  icon: keyof typeof LucideIcons; // Use keyof to ensure valid icon names
  paragraphs?: string[];
  image?: { src: string; alt: string; "data-ai-hint": string };
  contentBlocks?: ContentBlock[];
  models?: Model[];
  features?: Feature[];
  evolution?: string[];
  howItWorks?: { title: string; points: string[] };
  applications?: Application[];
  advantages?: Advantage[];
  developments?: Development;
}

interface ContentDisplaySectionProps {
  sections: ContentSectionItem[];
}

export default function ContentDisplaySection({ sections }: ContentDisplaySectionProps) {
  return (
    <>
      {sections.map((section, index) => {
        const IconComponent = LucideIcons[section.icon] as LucideIcon;

        const textContentElements = (
          <>
            {section.paragraphs && section.paragraphs.map((p, i) => (
              <p key={`para-${section.id}-${i}`} className="leading-relaxed text-foreground/90">{p}</p>
            ))}

            {section.contentBlocks && (
              <div className="grid md:grid-cols-2 gap-6">
                {section.contentBlocks.map((cb, i) => (
                  <div key={`cb-${section.id}-${i}`} className="p-4 border rounded-lg bg-background shadow-sm">
                    <h4 className="font-headline text-xl font-semibold text-primary mb-2">{cb.subtitle}</h4>
                    <ul className="list-disc list-inside space-y-1 text-foreground/80">
                      {cb.points.map((pt, j) => <li key={`cb-pt-${section.id}-${i}-${j}`}>{pt}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {section.models && (
              <div className="space-y-4">
                {section.models.map((model, i) => (
                   <Card key={`model-${section.id}-${i}`} className="bg-primary/5 p-4 rounded-lg shadow-sm">
                     <h4 className="font-headline text-xl font-semibold text-primary mb-1">{model.name}</h4>
                     <p className="text-foreground/80">{model.description}</p>
                   </Card>
                ))}
              </div>
            )}

            {section.features && (
              <div className="grid md:grid-cols-2 gap-6">
                {section.features.map((feat, i) => (
                  <div key={`feat-${section.id}-${i}`} className="p-4 border rounded-lg bg-background shadow-sm">
                    <h4 className="font-headline text-xl font-semibold text-primary mb-2">{feat.name}</h4>
                    <ul className="list-disc list-inside space-y-1 text-foreground/80">
                      {feat.points.map((pt, j) => <li key={`feat-pt-${section.id}-${i}-${j}`}>{pt}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            )}
            
            {section.evolution && (
              <div>
                <h4 className="font-headline text-xl font-semibold text-primary mb-2">Evolución de la Familia GPT:</h4>
                <ul className="list-disc list-inside space-y-1 text-foreground/80">
                  {section.evolution.map((item, i) => <li key={`evo-${section.id}-${i}`}>{item}</li>)}
                </ul>
              </div>
            )}

            {section.howItWorks && (
              <div className="p-4 border rounded-lg bg-background shadow-sm">
                <h4 className="font-headline text-xl font-semibold text-primary mb-2">{section.howItWorks.title}</h4>
                <ul className="list-disc list-inside space-y-1 text-foreground/80">
                  {section.howItWorks.points.map((pt, i) => <li key={`hiw-pt-${section.id}-${i}`}>{pt}</li>)}
                </ul>
              </div>
            )}

            {section.applications && (
              <div className="grid md:grid-cols-2 gap-4">
                {section.applications.map((app, i) => (
                  <Card key={`app-${section.id}-${i}`} className="bg-primary/5 p-4 rounded-lg shadow-sm">
                    <h4 className="font-headline text-xl font-semibold text-primary mb-1">{app.name}</h4>
                    <p className="text-foreground/80">{app.description}</p>
                  </Card>
                ))}
              </div>
            )}

            {section.advantages && (
              <div className="space-y-4">
                 {section.advantages.map((adv, i) => (
                   <Card key={`adv-${section.id}-${i}`} className="bg-primary/5 p-4 rounded-lg shadow-sm">
                     <h4 className="font-headline text-xl font-semibold text-primary mb-1">{adv.name}</h4>
                     <p className="text-foreground/80">{adv.description}</p>
                   </Card>
                ))}
              </div>
            )}

            {section.developments && (
              <div className="p-4 border rounded-lg bg-background shadow-sm">
                <h4 className="font-headline text-xl font-semibold text-primary mb-2">{section.developments.title}</h4>
                <ul className="list-disc list-inside space-y-1 text-foreground/80">
                  {section.developments.points.map((pt, i) => <li key={`dev-pt-${section.id}-${i}`}>{pt}</li>)}
                </ul>
              </div>
            )}
          </>
        );

        return (
          <SectionWrapper 
            key={section.id} 
            id={section.id} 
            title={section.title} 
            Icon={IconComponent} 
            className={index % 2 === 0 ? 'bg-background' : 'bg-secondary/70'}
          >
            <Card className="max-w-4xl mx-auto shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
              <CardContent className="p-6 text-lg font-body">
                {section.image ? (
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                    <div className="w-full md:w-2/5 flex-shrink-0">
                      <div className="rounded-xl shadow-lg overflow-hidden">
                        <Image
                          src={section.image.src}
                          alt={section.image.alt}
                          width={600} 
                          height={400} 
                          className="rounded-xl object-cover w-full h-auto transition-transform duration-500 hover:scale-105"
                          data-ai-hint={section.image['data-ai-hint']}
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-3/5 space-y-4">
                      {textContentElements}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {textContentElements}
                  </div>
                )}
              </CardContent>
            </Card>
          </SectionWrapper>
        );
      })}
    </>
  );
}
