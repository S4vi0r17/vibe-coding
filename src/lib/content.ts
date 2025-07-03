// Copio la definición de ContentSectionItem aquí para tipar localmente
interface ContentBlock {
  subtitle: string;
  points: string[];
}
interface Model {
  name: string;
  image: { src: string; alt: string; 'data-ai-hint'?: string };
  description: string;
  'data-ai-hint'?: string;
}
interface Feature {
  name: string;
  points: string[];
}
interface Application {
  name: string;
  image: { src: string; alt: string; 'data-ai-hint'?: string };
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
import * as LucideIcons from 'lucide-react';
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

export const contentData: {
  mainTitle: string;
  teamMembers: { 
    name: string; 
    image: string;
    role?: string;
    description?: string;
    github?: string;
    portfolio?: string;
    specialties?: string[];
  }[];
  sections: ContentSectionItem[];
} = {
  mainTitle: 'Fundamentos de la IA Generativa',
  teamMembers: [
    {
      name: 'Asencios Ocaña, Jefferson Anthony',
      image: '/asencios.png',
      role: 'Desarrollador Frontend',
      description: 'Estudiante apasionado por la tecnología y defensor de la diversidad e inclusión. Jefferson es una persona homosexual que siempre lucha por los derechos LGBTI+ y la igualdad en el ámbito tecnológico.',
      specialties: ['React', 'Next.js', 'UI/UX Design']
    },
    {
      name: 'Villanueva Inés, José Antonio',
      image: '/villanueva.png',
      role: 'Analista de Sistemas',
      description: 'Especialista en análisis de sistemas y arquitectura de software.',
      specialties: ['Análisis de Sistemas', 'Documentación Técnica', 'Metodologías Ágiles']
    },
    {
      name: 'Benites Pardavé, Eder Gustavo',
      image: '/benites.png',
      role: 'Desarrollador Full Stack',
      description: 'Desarrollador web con experiencia en tecnologías modernas. Creador y arquitecto principal de este proyecto de IA Generativa.',
      github: 'https://github.com/S4vi0r17',
      portfolio: 'https://portfolio-gbp.vercel.app/',
      specialties: ['Full Stack Development', 'IA/ML', 'DevOps', 'Arquitectura de Software']
    },
    {
      name: 'Uribe Mejía, Guillermo César',
      image: '/uribe.png',
      role: 'Especialista en IA',
      description: 'Especialista en inteligencia artificial y machine learning.',
      specialties: ['Machine Learning', 'Deep Learning', 'Procesamiento de Lenguaje Natural']
    },
  ],
  sections: [
    {
      id: 'intro',
      title: '¿Qué es la Inteligencia Artificial Generativa?',
      icon: 'Lightbulb',
      paragraphs: [
        'La IA Generativa es una rama de la inteligencia artificial que se enfoca en crear contenido nuevo y original, como texto, imágenes, música o código, a partir de patrones aprendidos de grandes cantidades de datos existentes. A diferencia de la IA tradicional, que a menudo se centra en clasificar o predecir, la IA generativa produce creaciones novedosas.',
      ],
      image: {
        src: 'https://observatorio.tec.mx/wp-content/uploads/2024/08/IMG.png',
        alt: 'Abstract AI concept',
        'data-ai-hint': 'abstract ai',
      },
    },
    {
      id: 'diff',
      title: 'Diferencias Clave con IA Tradicional',
      icon: 'GitCompareArrows',
      contentBlocks: [
        {
          subtitle: 'IA Tradicional (Discriminativa):',
          points: [
            'Clasifica datos existentes.',
            'Responde "¿Qué es esto?".',
            'Ej: Reconocer un gato en una foto.',
          ],
        },
        {
          subtitle: 'IA Generativa:',
          points: [
            'Crea contenido nuevo.',
            'Responde "¿Cómo creo algo similar?".',
            'Ej: Generar una imagen original de un gato.',
          ],
        },
      ],
      image: {
        src: 'https://mlearninglab.com/wp-content/uploads/2019/06/discriminativo-768x472.jpg',
        alt: 'Comparing traditional and generative AI',
        'data-ai-hint': 'comparison chart',
      },
    },
    {
      id: 'models',
      title: 'Tipos de Modelos Generativos',
      icon: 'Shapes',
      paragraphs: [
        'Existen diversos modelos de IA generativa, cada uno con un enfoque único para la creación de contenido. Los Transformers son actualmente los más destacados por su capacidad y versatilidad.',
      ],
      models: [
        {
          name: 'Redes Generativas Antagónicas (GANs)',
          image: {
            src: 'https://i.blogs.es/bd2b76/gan_arquitectura/650_1200.jpg',
            alt: 'GAN architecture',
            'data-ai-hint': 'gan architecture',
          },
          description:
            'Dos redes neuronales compiten: una (generador) crea contenido y otra (discriminador) lo evalúa, forzando mejoras continuas en la calidad.',
          'data-ai-hint': 'neural network',
        },
        {
          name: 'Autoencoders Variacionales (VAEs)',
          image: {
            src: 'https://miro.medium.com/v2/resize:fit:1320/0*0Sf00Jozgtms2673.jpg',
            alt: 'VAE concept',
            'data-ai-hint': 'vae model',
          },
          description:
            'Comprimen datos en un espacio latente y luego los reconstruyen, aprendiendo a generar nuevas variaciones a partir de esa representación.',
          'data-ai-hint': 'data compression',
        },
        {
          name: 'Modelos de Difusión',
          image: {
            src: 'https://miro.medium.com/v2/resize:fit:1400/1*xc2Y6jwIUhfEGxJLytU1RA.png',
            alt: 'Diffusion model concept',
            'data-ai-hint': 'diffusion model',
          },
          description:
            'Generan contenido progresivamente eliminando ruido de una señal aleatoria, guiados por la información aprendida (ej. DALL-E 2, Stable Diffusion).',
          'data-ai-hint': 'abstract noise',
        },
        {
          name: 'Transformers',
          image: {
            src: 'https://mindfulml.vialabsdigital.com/images/transformer-schema.png',
            alt: 'Transformer architecture',
            'data-ai-hint': 'transformer architecture',
          },
          description:
            'Arquitectura de red neuronal basada en mecanismos de auto-atención, revolucionaria para el PLN y clave en la IA generativa moderna.',
          'data-ai-hint': 'transformer architecture',
        },
      ],
    },
    {
      id: 'applications',
      title: 'Aplicaciones Revolucionarias',
      icon: 'AppWindow',
      paragraphs: [
        'La IA Generativa está transformando múltiples campos con aplicaciones innovadoras que potencian la creatividad, la eficiencia y abren nuevas posibilidades en diversas industrias.',
      ],
      applications: [
        {
          name: 'Creación de Contenido',
          image: {
            src: 'https://www.segmentamarketing.com/wp-content/uploads/2022/04/Ideas-para-crear-contenido-con-inteligencia_artificial-1024x576.png',
            alt: 'Content creation',
            'data-ai-hint': 'content creation',
          },
          description:
            'Redacción automática de artículos, guiones para videos, slogans publicitarios personalizados.',
          'data-ai-hint': 'writing content',
        },
        {
          name: 'Programación Asistida',
          image: {
            src: 'https://aps.autodesk.com/sites/default/files/styles/twitter_card/public/2024-10/Screenshot%202024-10-03%20at%2015.34.40.png?itok=h0qq0YmD',
            alt: 'Coding assistance',
            'data-ai-hint': 'coding assistance',
          },
          description:
            'Generación de fragmentos de código, depuración de errores, redacción de documentación técnica.',
          'data-ai-hint': 'coding software',
        },
        {
          name: 'Educación Personalizada',
          image: {
            src: 'https://d8285fmxt3duy.cloudfront.net/public/articulos/img/2024/7-apps-IA-educacion_3.jpg',
            alt: 'Adaptive learning',
            'data-ai-hint': 'adaptive learning',
          },
          description:
            'Tutores virtuales adaptativos, creación de material educativo a medida, simulaciones.',
          'data-ai-hint': 'online learning',
        },
        {
          name: 'Creatividad y Arte Digital',
          image: {
            src: 'https://all-images.ai/wp-content/uploads/2023/10/l26rsquo3Bimpact-de-l26rsquo3Bintelligence-artificielle-sur-l26rsquo3Bart-numerique.jpg',
            alt: 'Digital art creation',
            'data-ai-hint': 'digital art creation',
          },
          description:
            'Composición musical original, generación de arte visual único, escritura de poesía y ficción.',
          'data-ai-hint': 'digital art',
        },
        {
          name: 'Productividad Empresarial',
          image: {
            src: 'https://www.esic.edu/sites/default/files/2024-04/inteligencia%20artificial%20marketing%20%282%29.jpeg',
            alt: 'Business productivity tools',
            'data-ai-hint': 'business productivity',
          },
          description:
            'Automatización de atención al cliente, resumen de documentos extensos, generación de informes.',
          'data-ai-hint': 'business office',
        },
      ],
    },
    {
      id: 'future',
      title: 'El Futuro de la IA Generativa',
      icon: 'Rocket',
      paragraphs: [
        'La IA Generativa, impulsada por arquitecturas como los Transformers, está redefiniendo industrias y la interacción humano-máquina. Su potencial es vasto y apenas comenzamos a explorarlo. Comprender sus fundamentos y evolución es crucial para los profesionales de hoy y del mañana.',
      ],
      developments: {
        title: 'Próximos Avances y Tendencias:',
        points: [
          'Modelos multimodales cada vez más sofisticados e integrados.',
          'Mayor eficiencia computacional y accesibilidad de modelos.',
          'Integración profunda en flujos de trabajo empresariales y creativos.',
          'Avances en personalización y controlabilidad de la generación.',
          'Consideraciones éticas y de seguridad más robustas.',
        ],
      },
      image: {
        src: 'https://www.innovaitors.ai/wp-content/uploads/2024/04/la-ia-en-los-procesos-de-la-arquitectura-g-1080x600.webp',
        alt: 'Future of Generative AI',
        'data-ai-hint': 'futuristic technology',
      },
    },
  ],
};

export const getFullPageTextForAI = (): string => {
  let summaryText = `Resumen del contenido de la página: ${contentData.mainTitle}\n\n`;
  
  // Información detallada del equipo
  summaryText += 'INFORMACIÓN DEL EQUIPO (Grupo 1):\n';
  contentData.teamMembers.forEach((member) => {
    summaryText += `• ${member.name}`;
    if (member.role) summaryText += ` - ${member.role}`;
    summaryText += '\n';
    
    if (member.description) {
      summaryText += `  Descripción: ${member.description}\n`;
    }
    
    if (member.github) {
      summaryText += `  GitHub: ${member.github}\n`;
    }
    
    if (member.portfolio) {
      summaryText += `  Portafolio: ${member.portfolio}\n`;
    }
    
    if (member.specialties && member.specialties.length > 0) {
      summaryText += `  Especialidades: ${member.specialties.join(', ')}\n`;
    }
    summaryText += '\n';
  });

  summaryText += 'CONTENIDO TÉCNICO:\n';
  summaryText += 'La página cubre las siguientes secciones principales sobre IA Generativa:\n';
  contentData.sections.forEach((section) => {
    summaryText += `\nTítulo de la Sección: ${section.title}\n`;
    if (section.paragraphs && section.paragraphs.length > 0) {
      // Usar el primer párrafo como una breve introducción a la sección
      summaryText += `Idea principal: ${section.paragraphs[0].substring(
        0,
        200
      )}${section.paragraphs[0].length > 200 ? '...' : ''}\n`;
    }
    // Podríamos añadir más detalles clave si es necesario, pero manteniendo la brevedad
    if (section.models) {
      summaryText += `Algunos modelos mencionados: ${section.models
        .slice(0, 2)
        .map((m: Model) => m.name)
        .join(', ')}.\n`;
    }
    if (section.applications) {
      summaryText += `Algunas aplicaciones: ${section.applications
        .slice(0, 2)
        .map((a: Application) => a.name)
        .join(', ')}.\n`;
    }
  });
  
  summaryText += '\nINSTRUCCIONES PARA LA IA:\n';
  summaryText += 'Al responder preguntas sobre el equipo, utiliza la información detallada proporcionada arriba. ';
  summaryText += 'Si te preguntan sobre algún miembro específico, menciona su rol, descripción, y enlaces si están disponibles. ';
  summaryText += 'Por favor, responde de manera amigable y con la información exacta proporcionada.';
  
  return summaryText;
};
