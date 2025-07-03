import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'IA Generativa - Grupo 1 | Fundamentos y Aplicaciones',
  description: 'Exploración completa de los fundamentos de la Inteligencia Artificial Generativa: conceptos, modelos, aplicaciones y el futuro de la tecnología. Presentación académica del Grupo 1.',
  keywords: 'IA generativa, inteligencia artificial, machine learning, GPT, modelos generativos, tecnología',
  authors: [{ name: 'Grupo 1 - IA Generativa' }],
  openGraph: {
    title: 'Fundamentos de IA Generativa - Grupo 1',
    description: 'Una exploración profunda de los conceptos, modelos y el impacto revolucionario de la Inteligencia Artificial Generativa.',
    type: 'website',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fundamentos de IA Generativa - Grupo 1',
    description: 'Exploración completa de la Inteligencia Artificial Generativa',
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning={true}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#2dd4bf" />
        <meta name="color-scheme" content="light" />
      </head>
      <body className="font-sans antialiased scroll-smooth">
        <div className="relative min-h-screen bg-gradient-to-br from-background via-background to-background/95">
          {children}
          <Toaster />
        </div>
      </body>
    </html>
  );
}
