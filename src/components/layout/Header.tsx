import { Brain } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground py-6 shadow-md">
      <div className="container mx-auto px-4 flex items-center">
        <Brain className="h-10 w-10 mr-3" />
        <h1 className="text-3xl font-headline font-bold">Grupo 1: IA Generativa</h1>
      </div>
    </header>
  );
}
