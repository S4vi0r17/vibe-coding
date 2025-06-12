import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  id?: string;
  title: string;
  Icon?: LucideIcon;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
}

export default function SectionWrapper({ id, title, Icon, children, className, titleClassName }: SectionWrapperProps) {
  return (
    <section id={id} className={cn('py-12 md:py-16', className)}>
      <div className="container mx-auto px-4">
        <div className="mb-8 md:mb-12 text-center">
          <h2 className={cn('text-3xl md:text-4xl font-headline font-bold text-primary mb-2 flex items-center justify-center', titleClassName)}>
            {Icon && <Icon className="h-8 w-8 md:h-10 md:w-10 mr-3 text-accent" />}
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
