import { Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SectionWrapper from '@/components/sections/SectionWrapper';

interface TeamSectionProps {
  members: string[];
}

export default function TeamSection({ members }: TeamSectionProps) {
  return (
    <SectionWrapper id="team" title="Integrantes del Grupo 1" Icon={Users} className="bg-secondary">
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-headline text-primary">Nuestro Equipo</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {members.map((member, index) => (
                <li key={index} className="text-lg text-center font-body text-foreground p-2 bg-background rounded-md shadow-sm">
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
