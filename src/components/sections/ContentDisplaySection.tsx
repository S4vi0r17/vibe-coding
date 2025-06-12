import Image from 'next/image';
import type { LucideIcon } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import SectionWrapper from '@/components/sections/SectionWrapper';

interface ContentBlock {
  subtitle: string;
  points: string[];
}

interface Model {
  name: string;
  image: { src: string; alt: string };
  description: string;
  'data-ai-hint'?: string;
}

interface Feature {
  name: string;
  points: string[];
}

interface Application {
  name: string;
  description: string;
  'data-ai-hint'?: string;
}

interface Advantage {
  name: string;
  description: string;
  'data-ai-hint'?: string;
}

interface Development {
  title: string;
  points: string[];
}

interface ContentSectionItem {
  id: string;
  title: string;
  icon: keyof typeof LucideIcons;
  paragraphs?: string[];
  image?: { src: string; alt: string; 'data-ai-hint': string };
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

const renderGridItem = (
  item: Model | Application | Advantage,
  sectionId: string,
  itemType: string
) => (
  <Card
    key={`${itemType}-${sectionId}-${item.name.replace(/\s+/g, '-')}`}
    className="flex flex-col overflow-hidden shadow-lg rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] bg-card"
  >
    <div className="aspect-[16/10] w-full overflow-hidden rounded-t-xl">
      <Image
        src={item.image?.src || 'https://placehold.co/400x250.png'}
        alt={item.name}
        width={400}
        height={250}
        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        data-ai-hint={
          item['data-ai-hint'] ||
          item.name.toLowerCase().split(' ').slice(0, 2).join(' ') ||
          'concept item'
        }
      />
    </div>
    <CardHeader className="pb-3 pt-5">
      <CardTitle className="font-headline text-xl text-primary">
        {item.name}
      </CardTitle>
    </CardHeader>
    <CardContent className="flex-grow pt-0">
      <p className="text-foreground/80 font-body text-sm leading-relaxed">
        {item.description}
      </p>
    </CardContent>
  </Card>
);

export default function ContentDisplaySection({
  sections,
}: ContentDisplaySectionProps) {
  return (
    <>
      {sections.map((section, index) => {
        const IconComponent = LucideIcons[section.icon] as LucideIcon;
        const isGridSection = !!(
          section.models ||
          section.applications ||
          section.advantages
        );
        const alternateBg =
          index % 2 === 0 ? 'bg-background' : 'bg-secondary/60';

        const textContentElements = (
          <>
            {section.contentBlocks && (
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                {section.contentBlocks.map((cb, i) => (
                  <div
                    key={`cb-${section.id}-${i}`}
                    className="p-6 border rounded-xl bg-card/80 shadow-lg backdrop-blur-sm"
                  >
                    <h4 className="font-headline text-xl font-semibold text-primary mb-3">
                      {cb.subtitle}
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-foreground/80 font-body text-sm">
                      {cb.points.map((pt, j) => (
                        <li key={`cb-pt-${section.id}-${i}-${j}`}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {section.features && (
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                {section.features.map((feat, i) => (
                  <div
                    key={`feat-${section.id}-${i}`}
                    className="p-6 border rounded-xl bg-card/80 shadow-lg backdrop-blur-sm"
                  >
                    <h4 className="font-headline text-xl font-semibold text-primary mb-3">
                      {feat.name}
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-foreground/80 font-body text-sm">
                      {feat.points.map((pt, j) => (
                        <li key={`feat-pt-${section.id}-${i}-${j}`}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {section.evolution && (
              <div className="mt-6 p-6 border rounded-xl bg-card/80 shadow-lg backdrop-blur-sm">
                <h4 className="font-headline text-xl font-semibold text-primary mb-3">
                  Evolución de la Familia GPT:
                </h4>
                <ul className="list-disc list-inside space-y-2 text-foreground/80 font-body text-sm">
                  {section.evolution.map((item, i) => (
                    <li key={`evo-${section.id}-${i}`}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {section.howItWorks && (
              <div className="mt-6 p-6 border rounded-xl bg-card/80 shadow-lg backdrop-blur-sm">
                <h4 className="font-headline text-xl font-semibold text-primary mb-3">
                  {section.howItWorks.title}
                </h4>
                <ul className="list-disc list-inside space-y-2 text-foreground/80 font-body text-sm">
                  {section.howItWorks.points.map((pt, i) => (
                    <li key={`hiw-pt-${section.id}-${i}`}>{pt}</li>
                  ))}
                </ul>
              </div>
            )}

            {section.developments && (
              <div className="mt-6 p-6 border rounded-xl bg-card/80 shadow-lg backdrop-blur-sm">
                <h4 className="font-headline text-xl font-semibold text-primary mb-3">
                  {section.developments.title}
                </h4>
                <ul className="list-disc list-inside space-y-2 text-foreground/80 font-body text-sm">
                  {section.developments.points.map((pt, i) => (
                    <li key={`dev-pt-${section.id}-${i}`}>{pt}</li>
                  ))}
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
            className={alternateBg}
          >
            {section.paragraphs && (
              <div
                className={`max-w-3xl mx-auto text-center ${
                  isGridSection ? 'mb-10' : 'mb-0'
                }`}
              >
                {section.paragraphs.map((p, i) => (
                  <p
                    key={`intro-p-${section.id}-${i}`}
                    className={`text-md md:text-lg text-foreground/80 font-body leading-relaxed ${
                      isGridSection &&
                      section.paragraphs &&
                      section.paragraphs.length === 1
                        ? ''
                        : 'mb-4'
                    }`}
                  >
                    {p}
                  </p>
                ))}
              </div>
            )}

            {(() => {
              if (isGridSection) {
                const items =
                  section.models || section.applications || section.advantages;
                const itemType = section.models
                  ? 'model'
                  : section.applications
                  ? 'application'
                  : 'advantage';
                return (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mt-8">
                    {items?.map((item) =>
                      renderGridItem(
                        item as Model | Application | Advantage,
                        section.id,
                        itemType
                      )
                    )}
                  </div>
                );
              } else if (section.image) {
                return (
                  <Card className="max-w-5xl mx-auto shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl mt-8 bg-card/80 backdrop-blur-sm border-none">
                    <CardContent className="p-0 md:p-0">
                      <div className="flex flex-col md:flex-row gap-0 items-stretch">
                        <div className="w-full md:w-2/5 flex-shrink-0 relative group">
                          <div className="rounded-t-xl md:rounded-l-xl md:rounded-tr-none shadow-lg overflow-hidden bg-accent/30 h-full">
                            <Image
                              src={section.image.src}
                              alt={section.image.alt}
                              width={600}
                              height={450}
                              className="rounded-t-xl md:rounded-l-xl md:rounded-tr-none object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                              data-ai-hint={section.image['data-ai-hint']}
                            />
                          </div>
                        </div>
                        <div className="w-full md:w-3/5 p-6 md:p-8 space-y-5">
                          {section.paragraphs &&
                            !isGridSection &&
                            section.paragraphs.map((p, i) => (
                              <p
                                key={`para-img-${section.id}-${i}`}
                                className="text-md leading-relaxed text-foreground/90 font-body"
                              >
                                {p}
                              </p>
                            ))}
                          {textContentElements}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              } else {
                // For sections with only text content (no grid, no image)
                return (
                  <Card className="max-w-4xl mx-auto shadow-xl mt-8 bg-card/80 backdrop-blur-sm border-none">
                    <CardContent className="p-6 md:p-10 text-md font-body space-y-5">
                      {section.paragraphs &&
                        !isGridSection &&
                        section.paragraphs.map((p, i) => (
                          <p
                            key={`para-solo-${section.id}-${i}`}
                            className="leading-relaxed text-foreground/90"
                          >
                            {p}
                          </p>
                        ))}
                      {textContentElements}
                    </CardContent>
                  </Card>
                );
              }
            })()}
          </SectionWrapper>
        );
      })}
    </>
  );
}
