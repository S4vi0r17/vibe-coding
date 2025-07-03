
import { Users, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import SectionWrapper from '@/components/sections/SectionWrapper';
import Image from 'next/image';

interface TeamMember {
  name: string;
  image: string;
}

interface TeamSectionProps {
  members: TeamMember[];
}

export default function TeamSection({ members }: TeamSectionProps) {
  // Extract initials from full name
  const getInitials = (name: string): string => {
    return name
      .split(' ')
      .map((word) => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <SectionWrapper 
      id="team" 
      title="Nuestro Equipo" 
      Icon={Users} 
      className="bg-muted/30"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conoce a los integrantes del Grupo 1 que han trabajado en esta investigación sobre los fundamentos de la IA Generativa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-0 shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-1"
            >
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <CardHeader className="text-center pb-4 relative z-10">
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <Avatar className="h-20 w-20 ring-4 ring-primary/20 transition-all duration-300 group-hover:ring-primary/40">
                      <AvatarImage 
                        src={member.image} 
                        alt={`Foto de ${member.name}`}
                        className="object-cover"
                      />
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg">
                        {getInitials(member.name)}
                      </AvatarFallback>
                    </Avatar>
                    {/* Online indicator */}
                    <div className="absolute -bottom-1 -right-1 h-6 w-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <User className="h-3 w-3 text-white" />
                    </div>
                  </div>
                </div>
                <CardTitle className="text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {member.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="text-center pb-6 relative z-10">
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <User className="h-4 w-4" />
                  <span>Investigador</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-12 text-center">
          <Card className="inline-block bg-primary/5 border-primary/20">
            <CardContent className="px-6 py-4">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-primary">{members.length} integrantes</span> trabajando en conjunto para explorar los fundamentos de la IA Generativa
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}
