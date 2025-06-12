
export const contentData = {
  mainTitle: "Fundamentos de la IA Generativa",
  teamMembers: [
    "Asencios Ocaña, Jefferson Anthony",
    "Villanueba Inés, José Antonio",
    "Benites Pardavé, Eder Lagarto",
    "Uribe Mejía, Guillermo César",
  ],
  sections: [
    {
      id: "intro",
      title: "¿Qué es la Inteligencia Artificial Generativa?",
      icon: "Lightbulb",
      paragraphs: [
        "La IA Generativa crea contenido nuevo y original (texto, imágenes, música) a partir de patrones aprendidos de grandes volúmenes de datos. A diferencia de la IA tradicional que clasifica o predice, esta IA produce.",
      ],
      image: { src: "https://placehold.co/600x400.png", alt: "Abstract AI concept", "data-ai-hint": "abstract ai" },
    },
    {
      id: "diff",
      title: "Diferencias Clave con IA Tradicional",
      icon: "GitCompareArrows",
      contentBlocks: [
        {
          subtitle: "IA Tradicional (Discriminativa):",
          points: [
            "Clasifica datos existentes.",
            "Responde \"¿Qué es esto?\".",
            "Ej: Reconocer un gato en una imagen.",
          ],
        },
        {
          subtitle: "IA Generativa:",
          points: [
            "Crea contenido nuevo.",
            "Responde \"¿Cómo creo algo similar?\".",
            "Ej: Generar una imagen original de un gato.",
          ],
        },
      ],
      image: { src: "https://placehold.co/600x400.png", alt: "Comparing traditional and generative AI", "data-ai-hint": "comparison chart" },
    },
    {
      id: "models",
      title: "Tipos de Modelos Generativos",
      icon: "Shapes",
      paragraphs: ["Existen diversos modelos de IA generativa, cada uno con un enfoque único para la creación de contenido. Los Transformers son actualmente los más destacados."],
      models: [
        {
          name: "Redes Generativas Antagónicas (GANs)",
          description: "Dos redes compiten: una genera contenido y otra lo evalúa, mejorando la calidad.",
          "data-ai-hint": "neural network",
        },
        {
          name: "Autoencoders Variacionales (VAEs)",
          description: "Comprimen y reconstruyen datos, aprendiendo a generar variaciones.",
          "data-ai-hint": "data compression",
        },
        {
          name: "Modelos de Difusión",
          description: "Generan contenido eliminando ruido de datos aleatorios (ej. DALL-E 2).",
          "data-ai-hint": "abstract noise",
        },
        {
          name: "Transformers",
          description: "Arquitectura revolucionaria, clave en la IA generativa moderna por su mecanismo de atención.",
          "data-ai-hint": "transformer architecture",
        },
      ],
    },
    {
      id: "transformers",
      title: "Los Transformers: La Revolución de la IA",
      icon: "BrainCircuit",
      paragraphs: [
        "Introducidos en 2017, los Transformers revolucionaron el PLN. Su mecanismo de atención permite entender relaciones complejas en el texto simultáneamente.",
      ],
      features: [
        {
          name: "Mecanismo de Atención:",
          points: [
            "Analiza todas las palabras a la vez.",
            "Identifica relevancia y contexto.",
            "Captura relaciones a larga distancia.",
          ],
        },
        {
          name: "Paralelización:",
          points: [
            "Procesa secuencias eficientemente.",
            "Permite entrenar con datasets masivos.",
            "Reduce tiempos de entrenamiento.",
          ],
        },
      ],
      image: { src: "https://placehold.co/600x400.png", alt: "Transformer architecture illustration", "data-ai-hint": "transformer model" },
    },
    {
      id: "gpt",
      title: "GPT: El Poder Generativo Pre-entrenado",
      icon: "Zap",
      paragraphs: [
        "GPT (Generative Pre-trained Transformer) aprovecha los Transformers para generar texto coherente y contextualmente relevante, prediciendo la siguiente palabra en una secuencia.",
      ],
      evolution: [
        "GPT-1 (2018): 117M parámetros.",
        "GPT-2 (2019): 1.5B parámetros.",
        "GPT-3 (2020): 175B parámetros.",
        "GPT-4 (2023): Multimodalidad avanzada.",
      ],
      howItWorks: {
        title: "Funcionamiento de GPT:",
        points: [
          "Pre-entrenamiento masivo con datos de internet.",
          "Predicción secuencial de la siguiente palabra.",
          "Generación de texto coherente y contextual.",
          "Ajuste fino (fine-tuning) para tareas específicas.",
        ],
      },
      image: { src: "https://placehold.co/600x400.png", alt: "GPT model concept", "data-ai-hint": "gpt logo" },
    },
    {
      id: "applications",
      title: "Aplicaciones Revolucionarias",
      icon: "AppWindow",
      paragraphs: ["La IA Generativa está transformando múltiples campos con aplicaciones innovadoras que potencian la creatividad y la eficiencia."],
      applications: [
        { name: "Creación de Contenido", description: "Redacción automática, guiones, publicidad personalizada.", "data-ai-hint": "writing content" },
        { name: "Programación", description: "Generación de código, depuración, documentación técnica.", "data-ai-hint": "coding software" },
        { name: "Educación", description: "Tutores virtuales, material educativo adaptativo.", "data-ai-hint": "online learning" },
        { name: "Creatividad y Arte", description: "Composición musical, arte visual, escritura poética.", "data-ai-hint": "digital art" },
        { name: "Productividad Empresarial", description: "Atención al cliente, resumen de documentos, reportes.", "data-ai-hint": "business office" },
      ],
    },
    {
      id: "advantages",
      title: "Ventajas Competitivas de Transformers",
      icon: "Award",
      paragraphs: ["Los Transformers ofrecen ventajas significativas que los han posicionado como la arquitectura dominante en IA generativa."],
      advantages: [
        { name: "Escalabilidad", description: "Mejoran con más datos y cómputo, siguiendo leyes predecibles.", "data-ai-hint": "scalability chart" },
        { name: "Versatilidad", description: "Manejan múltiples modalidades: texto, imágenes, audio, código.", "data-ai-hint": "versatile tools" },
        { name: "Transfer Learning", description: "Adaptables a nuevas tareas con mínimos datos adicionales.", "data-ai-hint": "knowledge transfer" },
        { name: "Contextualización", description: "Comprenden el contexto completo, no solo fragmentos aislados.", "data-ai-hint": "context understanding" },
      ],
    },
    {
      id: "future",
      title: "El Futuro de la IA Generativa",
      icon: "Rocket",
      paragraphs: [
        "La IA Generativa con Transformers está redibujando el panorama industrial. Su potencial es vasto y apenas comenzamos a explorarlo. Comprender sus fundamentos es clave para cualquier profesional.",
      ],
      developments: {
        title: "Próximos Avances:",
        points: [
          "Modelos multimodales más sofisticados.",
          "Mayor eficiencia computacional.",
          "Integración profunda en flujos empresariales.",
          "Personalización avanzada para usuarios.",
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
