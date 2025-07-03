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
    className="group flex flex-col overflow-hidden shadow-soft rounded-xl transition-all duration-300 hover:shadow-strong hover:-translate-y-1 bg-card border-border/50 hover:border-primary/30"
  >
    <div className="aspect-[16/10] w-full overflow-hidden">
      <Image
        src={
          'image' in item && item.image?.src
            ? item.image.src
            : 'https://placehold.co/400x250/f1f5f9/64748b?text=Imagen+no+disponible'
        }
        alt={item.name}
        width={400}
        height={250}
        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        data-ai-hint={
          item['data-ai-hint'] ||
          item.name.toLowerCase().split(' ').slice(0, 2).join(' ') ||
          'concept item'
        }
        loading="lazy"
      />
    </div>
    <CardHeader className="pb-3 pt-6">
      <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2 select-none">
        {item.name}
      </CardTitle>
    </CardHeader>
    <CardContent className="flex-grow pt-0 pb-6">
      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
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
          index % 2 === 0 ? 'bg-background' : 'bg-muted/30';

        const textContentElements = (
          <>
            {section.contentBlocks && (
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {section.contentBlocks.map((cb, i) => (
                  <Card
                    key={`cb-${section.id}-${i}`}
                    className="p-6 shadow-soft hover:shadow-medium transition-all duration-300 border-border/50"
                  >
                    <h4 className="text-xl font-semibold text-foreground mb-4">
                      {cb.subtitle}
                    </h4>
                    <ul className="space-y-3 text-muted-foreground text-sm">
                      {cb.points.map((pt, j) => (
                        <li key={`cb-pt-${section.id}-${i}-${j}`} className="flex items-start gap-3">
                          <span className="h-1.5 w-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="leading-relaxed">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            )}

            {section.features && (
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {section.features.map((feat, i) => (
                  <Card
                    key={`feat-${section.id}-${i}`}
                    className="p-6 shadow-soft hover:shadow-medium transition-all duration-300 border-border/50"
                  >
                    <h4 className="text-xl font-semibold text-foreground mb-4">
                      {feat.name}
                    </h4>
                    <ul className="space-y-3 text-muted-foreground text-sm">
                      {feat.points.map((pt, j) => (
                        <li key={`feat-pt-${section.id}-${i}-${j}`} className="flex items-start gap-3">
                          <span className="h-1.5 w-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="leading-relaxed">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            )}

            {section.evolution && (
              <Card className="mt-8 p-6 shadow-soft border-border/50">
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  Evolución de la Familia GPT:
                </h4>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  {section.evolution.map((item, i) => (
                    <li key={`evo-${section.id}-${i}`} className="flex items-start gap-3">
                      <span className="h-1.5 w-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )}

            {section.howItWorks && (
              <Card className="mt-8 p-6 shadow-soft border-border/50">
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  {section.howItWorks.title}
                </h4>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  {section.howItWorks.points.map((pt, i) => (
                    <li key={`hiw-pt-${section.id}-${i}`} className="flex items-start gap-3">
                      <span className="h-1.5 w-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )}

            {section.developments && (
              <Card className="mt-8 p-6 shadow-soft border-border/50">
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  {section.developments.title}
                </h4>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  {section.developments.points.map((pt, i) => (
                    <li key={`dev-pt-${section.id}-${i}`} className="flex items-start gap-3">
                      <span className="h-1.5 w-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
              </Card>
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
                className={`max-w-4xl mx-auto text-center ${
                  isGridSection ? 'mb-12' : 'mb-8'
                }`}
              >
                {section.paragraphs.map((p, i) => (
                  <p
                    key={`intro-p-${section.id}-${i}`}
                    className={`text-lg leading-relaxed text-muted-foreground ${
                      isGridSection &&
                      section.paragraphs &&
                      section.paragraphs.length === 1
                        ? ''
                        : 'mb-6'
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
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
                  <Card className="max-w-6xl mx-auto shadow-strong overflow-hidden transition-all duration-300 hover:shadow-strong border-border/50">
                    <CardContent className="p-0">
                      <div className="flex flex-col lg:flex-row">
                        <div className="w-full lg:w-2/5 relative group overflow-hidden">
                          <div className="aspect-[4/3] lg:aspect-auto lg:h-full relative bg-gradient-to-br from-primary/5 to-accent/5">
                            <Image
                              src={section.image.src}
                              alt={section.image.alt}
                              width={600}
                              height={450}
                              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                              data-ai-hint={section.image['data-ai-hint']}
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div className="w-full lg:w-3/5 p-6 lg:p-10 space-y-6">
                          {section.paragraphs &&
                            !isGridSection &&
                            section.paragraphs.map((p, i) => (
                              <p
                                key={`para-img-${section.id}-${i}`}
                                className="text-lg leading-relaxed text-muted-foreground"
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
                  <Card className="max-w-5xl mx-auto shadow-soft border-border/50">
                    <CardContent className="p-8 lg:p-12 space-y-6">
                      {section.paragraphs &&
                        !isGridSection &&
                        section.paragraphs.map((p, i) => (
                          <p
                            key={`para-solo-${section.id}-${i}`}
                            className="text-lg leading-relaxed text-muted-foreground"
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
