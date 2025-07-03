
'use client';

import { Brain, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Equipo', href: '#team' },
    { name: 'Introducción', href: '#intro' },
    { name: 'Modelos', href: '#models' },
    { name: 'Aplicaciones', href: '#applications' },
    { name: 'Consultar IA', href: '#ai-query' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3 select-none">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Brain className="h-6 w-6" aria-hidden="true" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-semibold tracking-tight text-foreground">
                Grupo 1: IA Generativa
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1" role="navigation" aria-label="Navegación principal">
            {navigation.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                size="sm"
                asChild
                className="text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
              >
                <a href={item.href} className="px-3 py-2 text-sm font-medium">
                  {item.name}
                </a>
              </Button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              className="text-muted-foreground hover:text-foreground"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={cn(
            "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
            isMenuOpen 
              ? "max-h-96 opacity-100 pb-4" 
              : "max-h-0 opacity-0"
          )}
        >
          <nav className="px-2 pt-2 pb-3 space-y-1" role="navigation" aria-label="Navegación móvil">
            {navigation.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                size="sm"
                asChild
                className="w-full justify-start text-muted-foreground hover:text-foreground hover:bg-accent/50"
                onClick={() => setIsMenuOpen(false)}
              >
                <a href={item.href} className="block px-3 py-2 text-base font-medium">
                  {item.name}
                </a>
              </Button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
