export const contentData = {
  mainTitle: "Fundamentos de la IA Generativa",
  teamMembers: [
    "Asencios Ocaña, Jefferson Anthony",
    "Villanueba inés, josé antonio",
    "benites pardavé, eder lagarto",
    "Uribe mejía, guillermo césar",
  ],
  sections: [
    {
      id: "intro",
      title: "¿Qué es la Inteligencia Artificial Generativa?",
      icon: "Lightbulb",
      paragraphs: [
        "La IA Generativa es una rama de la inteligencia artificial que se enfoca en crear contenido nuevo y original a partir de patrones aprendidos de grandes volúmenes de datos. A diferencia de la IA tradicional que clasifica o predice, la IA generativa produce contenido completamente nuevo: texto, imágenes, música, código, videos y más.",
      ],
      image: { src: "https://placehold.co/600x400.png", alt: "Abstract AI concept", "data-ai-hint": "abstract ai" },
    },
    {
      id: "diff",
      title: "Diferencias Clave con la IA Tradicional",
      icon: "GitCompareArrows",
      contentBlocks: [
        {
          subtitle: "IA Tradicional (Discriminativa):",
          points: [
            "Clasifica datos existentes",
            "Responde \"¿Qué es esto?\"",
            "Ejemplo: Reconocer si una imagen contiene un gato",
          ],
        },
        {
          subtitle: "IA Generativa:",
          points: [
            "Crea contenido nuevo",
            "Responde \"¿Cómo crear algo similar?\"",
            "Ejemplo: Generar una imagen original de un gato",
          ],
        },
      ],
      image: { src: "https://placehold.co/600x400.png", alt: "Comparing traditional and generative AI", "data-ai-hint": "comparison chart" },
    },
    {
      id: "models",
      title: "Tipos de Modelos Generativos",
      icon: "Shapes",
      models: [
        {
          name: "Redes Generativas Antagónicas (GANs)",
          description: "Utilizan dos redes neuronales que compiten entre sí: una genera contenido falso y otra trata de detectarlo. Esta competencia mejora constantemente la calidad del contenido generado.",
        },
        {
          name: "Autoencoders Variacionales (VAEs)",
          description: "Comprimen datos a una representación más pequeña y luego los reconstruyen, aprendiendo a generar variaciones en el proceso.",
        },
        {
          name: "Modelos de Difusión",
          description: "Aprenden a generar contenido eliminando gradualmente el ruido de datos aleatorios, como DALL-E 2 y Midjourney.",
        },
        {
          name: "Transformers (El Protagonista Principal)",
          description: "La arquitectura más revolucionaria en IA generativa moderna.",
        },
      ],
      image: { src: "https://placehold.co/600x400.png", alt: "Different types of generative models", "data-ai-hint": "network diagram" },
    },
    {
      id: "transformers",
      title: "Los Transformers: La Revolución de la IA",
      icon: "BrainCircuit",
      paragraphs: [
        "Los Transformers son una arquitectura de red neuronal introducida en 2017 que revolucionó el procesamiento de lenguaje natural. Su característica principal es el mecanismo de atención, que permite al modelo entender las relaciones entre todas las palabras de un texto simultáneamente.",
      ],
      features: [
        {
          name: "Mecanismo de Atención:",
          points: [
            "Analiza todas las palabras de una oración al mismo tiempo",
            "Identifica qué palabras son más relevantes para entender el contexto",
            "Permite capturar relaciones a larga distancia en el texto",
          ],
        },
        {
          name: "Paralelización:",
          points: [
            "Procesa secuencias de manera más eficiente que modelos anteriores",
            "Permite entrenar con datasets masivos",
            "Reduce significativamente los tiempos de entrenamiento",
          ],
        },
      ],
      image: { src: "https://placehold.co/600x400.png", alt: "Transformer architecture illustration", "data-ai-hint": "transformer model" },
    },
    {
      id: "gpt",
      title: "GPT: El Poder de los Transformers Generativos",
      icon: "Zap",
      paragraphs: [
        "¿Qué significa GPT? Generative Pre-trained Transformer - Transformer Generativo Pre-entrenado.",
      ],
      evolution: [
        "GPT-1 (2018): 117 millones de parámetros",
        "GPT-2 (2019): 1.5 mil millones de parámetros",
        "GPT-3 (2020): 175 mil millones de parámetros",
        "GPT-4 (2023): Arquitectura multimodal avanzada",
      ],
      howItWorks: {
        title: "Cómo Funciona GPT:",
        points: [
          "Pre-entrenamiento: Aprende de billones de palabras de internet",
          "Predicción: Predice la siguiente palabra más probable en una secuencia",
          "Generación: Construye texto coherente palabra por palabra",
          "Ajuste fino: Se especializa para tareas específicas",
        ],
      },
      image: { src: "https://placehold.co/600x400.png", alt: "GPT model concept", "data-ai-hint": "gpt logo" },
    },
    {
      id: "applications",
      title: "Aplicaciones Revolucionarias",
      icon: "AppWindow",
      applications: [
        { name: "Creación de Contenido", description: "Redacción automática de artículos y blogs, generación de guiones y narrativas, creación de contenido publicitario personalizado." },
        { name: "Programación y Desarrollo", description: "Generación automática de código, depuración y optimización de programas, documentación técnica automatizada." },
        { name: "Educación y Capacitación", description: "Tutores virtuales personalizados, generación de material educativo adaptativo, explicaciones simplificadas de conceptos complejos." },
        { name: "Creatividad y Arte", description: "Composición musical automática, generación de arte visual, escritura creativa y poesía." },
        { name: "Productividad Empresarial", description: "Automatización de respuestas de atención al cliente, análisis y resumen de documentos, generación de reportes y presentaciones." },
      ],
      image: { src: "https://placehold.co/600x400.png", alt: "Applications of Generative AI", "data-ai-hint": "ai applications" },
    },
    {
      id: "advantages",
      title: "Ventajas Competitivas de los Transformers",
      icon: "Award",
      advantages: [
        { name: "Escalabilidad", description: "Los Transformers mejoran consistentemente con más datos y mayor capacidad de cómputo, siguiendo leyes de escalamiento predecibles." },
        { name: "Versatilidad", description: "Una sola arquitectura puede manejar múltiples modalidades: texto, imágenes, audio, código y más." },
        { name: "Transfer Learning", description: "Los modelos pre-entrenados pueden adaptarse rápidamente a nuevas tareas con mínimos datos adicionales." },
        { name: "Contextualización", description: "Comprenden el contexto completo de una conversación o documento, no solo fragmentos aislados." },
      ],
      image: { src: "https://placehold.co/600x400.png", alt: "Advantages of Transformers", "data-ai-hint": "technology benefits" },
    },
    {
      id: "future",
      title: "El Futuro de la IA Generativa",
      icon: "Rocket",
      paragraphs: [
        "La IA Generativa con Transformers está transformando industrias completas. Desde la automatización de tareas creativas hasta la revolución en la productividad empresarial, estamos apenas comenzando a explorar su potencial.",
        "La comprensión de estos fundamentos es esencial para cualquier profesional que busque aprovechar el poder transformador de la IA Generativa en su campo de trabajo.",
      ],
      developments: {
        title: "Próximos Desarrollos:",
        points: [
          "Modelos multimodales más sofisticados",
          "Mayor eficiencia computacional",
          "Integración más profunda en flujos de trabajo empresariales",
          "Personalización avanzada para usuarios individuales",
        ],
      },
      image: { src: "https://placehold.co/600x400.png", alt: "Future of Generative AI", "data-ai-hint": "futuristic technology" },
    },
  ],
};

export const getFullPageTextForAI = (): string => {
  let fullText = `${contentData.mainTitle}\n\n`;
  fullText += `Integrantes del Grupo 1: ${contentData.teamMembers.join(', ')}\n\n`;

  contentData.sections.forEach(section => {
    fullText += `Sección: ${section.title}\n`;
    if (section.paragraphs) {
      section.paragraphs.forEach(p => {
        fullText += `${p}\n`;
      });
    }
    if (section.contentBlocks) {
      section.contentBlocks.forEach(cb => {
        fullText += `${cb.subtitle}\n`;
        cb.points.forEach(pt => fullText += `- ${pt}\n`);
      });
    }
    if (section.models) {
      section.models.forEach(m => {
        fullText += `${m.name}: ${m.description}\n`;
      });
    }
    if (section.features) {
      section.features.forEach(f => {
        fullText += `${f.name}\n`;
        f.points.forEach(pt => fullText += `- ${pt}\n`);
      });
    }
    if (section.evolution) {
      fullText += `Evolución:\n${section.evolution.join('\n- ')}\n`;
    }
    if (section.howItWorks) {
      fullText += `${section.howItWorks.title}\n`;
      section.howItWorks.points.forEach(pt => fullText += `- ${pt}\n`);
    }
    if (section.applications) {
      section.applications.forEach(app => {
        fullText += `${app.name}: ${app.description}\n`;
      });
    }
    if (section.advantages) {
      section.advantages.forEach(adv => {
        fullText += `${adv.name}: ${adv.description}\n`;
      });
    }
    if (section.developments) {
      fullText += `${section.developments.title}\n`;
      section.developments.points.forEach(pt => fullText += `- ${pt}\n`);
    }
    fullText += "\n";
  });

  return fullText;
};
