
import { Brain } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground py-5 shadow-lg sticky top-0 z-50 backdrop-blur-md bg-primary/90">
      <div className="container mx-auto px-4 flex items-center">
        <Brain className="h-8 w-8 md:h-10 md:w-10 mr-3 text-primary-foreground/80" />
        <h1 className="text-2xl md:text-3xl font-headline font-semibold tracking-tight">Grupo 1: IA Generativa</h1>
      </div>
    </header>
  );
}
