
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

export default function SectionWrapper({ 
  id, 
  title, 
  Icon, 
  children, 
  className, 
  titleClassName 
}: SectionWrapperProps) {
  return (
    <section 
      id={id} 
      className={cn('py-16 sm:py-20 lg:py-24 relative overflow-hidden', className)}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 lg:mb-16 text-center">
          <div className="inline-flex items-center justify-center mb-4 select-none">
            {Icon && (
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mr-4">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
            )}
          </div>
          <h2 
            className={cn(
              'text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 tracking-tight select-none',
              titleClassName
            )}
          >
            {title}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full select-none" />
        </div>
        <div className="animate-fade-in">
          {children}
        </div>
      </div>
    </section>
  );
}
