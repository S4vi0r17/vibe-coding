
import { Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SectionWrapper from '@/components/sections/SectionWrapper';

interface TeamSectionProps {
  members: string[];
}

export default function TeamSection({ members }: TeamSectionProps) {
  return (
    <SectionWrapper id="team" title="Integrantes del Grupo 1" Icon={Users} className="bg-secondary/60">
      <div className="max-w-3xl mx-auto">
        <Card className="shadow-xl border-none bg-card/80 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-center text-2xl font-headline font-semibold text-primary">Nuestro Equipo</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {members.map((member, index) => (
                <li 
                  key={index} 
                  className="text-md text-center font-body text-foreground bg-background/70 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  {member}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
