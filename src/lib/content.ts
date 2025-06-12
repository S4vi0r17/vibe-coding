
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
        "La IA Generativa es una rama de la inteligencia artificial que se enfoca en crear contenido nuevo y original, como texto, imágenes, música o código, a partir de patrones aprendidos de grandes cantidades de datos existentes. A diferencia de la IA tradicional, que a menudo se centra en clasificar o predecir, la IA generativa produce creaciones novedosas.",
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
            "Ej: Reconocer un gato en una foto.",
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
      paragraphs: ["Existen diversos modelos de IA generativa, cada uno con un enfoque único para la creación de contenido. Los Transformers son actualmente los más destacados por su capacidad y versatilidad."],
      models: [
        {
          name: "Redes Generativas Antagónicas (GANs)",
          description: "Dos redes neuronales compiten: una (generador) crea contenido y otra (discriminador) lo evalúa, forzando mejoras continuas en la calidad.",
          "data-ai-hint": "neural network",
        },
        {
          name: "Autoencoders Variacionales (VAEs)",
          description: "Comprimen datos en un espacio latente y luego los reconstruyen, aprendiendo a generar nuevas variaciones a partir de esa representación.",
          "data-ai-hint": "data compression",
        },
        {
          name: "Modelos de Difusión",
          description: "Generan contenido progresivamente eliminando ruido de una señal aleatoria, guiados por la información aprendida (ej. DALL-E 2, Stable Diffusion).",
          "data-ai-hint": "abstract noise",
        },
        {
          name: "Transformers",
          description: "Arquitectura de red neuronal basada en mecanismos de auto-atención, revolucionaria para el PLN y clave en la IA generativa moderna.",
          "data-ai-hint": "transformer architecture",
        },
      ],
    },
    {
      id: "transformers",
      title: "Los Transformers: La Revolución de la IA",
      icon: "BrainCircuit",
      paragraphs: [
        "Introducidos por Google en 2017 ('Attention Is All You Need'), los Transformers revolucionaron el Procesamiento del Lenguaje Natural (PLN). Su innovador mecanismo de atención les permite sopesar la importancia de diferentes partes de la secuencia de entrada de forma simultánea, capturando relaciones complejas en el texto.",
      ],
      features: [
        {
          name: "Mecanismo de Atención:",
          points: [
            "Analiza todas las palabras a la vez, no secuencialmente.",
            "Identifica relevancia y contexto entre palabras.",
            "Captura dependencias a larga distancia eficazmente.",
          ],
        },
        {
          name: "Paralelización:",
          points: [
            "Procesa secuencias de manera más eficiente.",
            "Permite el entrenamiento con datasets masivos.",
            "Reduce significativamente los tiempos de entrenamiento.",
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
        "GPT (Generative Pre-trained Transformer), desarrollado por OpenAI, es una familia de modelos de lenguaje que aprovecha la arquitectura Transformer. Son pre-entrenados en vastas cantidades de texto para generar texto coherente y contextualmente relevante, prediciendo la siguiente palabra en una secuencia.",
      ],
      evolution: [
        "GPT-1 (2018): 117 millones de parámetros, demostró el potencial del pre-entrenamiento.",
        "GPT-2 (2019): 1.5 mil millones de parámetros, mayor capacidad de generación.",
        "GPT-3 (2020): 175 mil millones de parámetros, habilidades sorprendentes de 'pocos ejemplos' (few-shot learning).",
        "GPT-4 (y sucesores): Multimodalidad (texto, imágenes), razonamiento mejorado y mayor escala.",
      ],
      howItWorks: {
        title: "Funcionamiento Clave de GPT:",
        points: [
          "Pre-entrenamiento masivo con datos de internet para aprender patrones del lenguaje.",
          "Arquitectura Transformer para procesar y entender el contexto.",
          "Predicción secuencial de la siguiente palabra (o token).",
          "Ajuste fino (fine-tuning) opcional para tareas específicas.",
        ],
      },
      image: { src: "https://placehold.co/600x400.png", alt: "GPT model concept", "data-ai-hint": "gpt logo" },
    },
    {
      id: "applications",
      title: "Aplicaciones Revolucionarias",
      icon: "AppWindow",
      paragraphs: ["La IA Generativa está transformando múltiples campos con aplicaciones innovadoras que potencian la creatividad, la eficiencia y abren nuevas posibilidades en diversas industrias."],
      applications: [
        { name: "Creación de Contenido", description: "Redacción automática de artículos, guiones para videos, slogans publicitarios personalizados.", "data-ai-hint": "writing content" },
        { name: "Programación Asistida", description: "Generación de fragmentos de código, depuración de errores, redacción de documentación técnica.", "data-ai-hint": "coding software" },
        { name: "Educación Personalizada", description: "Tutores virtuales adaptativos, creación de material educativo a medida, simulaciones.", "data-ai-hint": "online learning" },
        { name: "Creatividad y Arte Digital", description: "Composición musical original, generación de arte visual único, escritura de poesía y ficción.", "data-ai-hint": "digital art" },
        { name: "Productividad Empresarial", description: "Automatización de atención al cliente, resumen de documentos extensos, generación de informes.", "data-ai-hint": "business office" },
      ],
    },
    {
      id: "advantages",
      title: "Ventajas Competitivas de Transformers",
      icon: "Award",
      paragraphs: ["Los Transformers no solo mejoraron el rendimiento en tareas de PLN, sino que ofrecen ventajas significativas que los han posicionado como la arquitectura dominante en la IA generativa actual."],
      advantages: [
        { name: "Escalabilidad Efectiva", description: "Su rendimiento mejora predeciblemente con más datos y mayor capacidad de cómputo (leyes de escala).", "data-ai-hint": "scalability chart" },
        { name: "Versatilidad Multimodal", description: "No solo texto; manejan imágenes, audio, video y código, permitiendo modelos unificados.", "data-ai-hint": "versatile tools" },
        { name: "Transfer Learning Superior", description: "El conocimiento pre-entrenado se adapta a nuevas tareas con relativamente pocos datos adicionales.", "data-ai-hint": "knowledge transfer" },
        { name: "Comprensión Contextual Profunda", description: "El mecanismo de auto-atención permite entender el contexto global de la información, no solo fragmentos aislados.", "data-ai-hint": "context understanding" },
      ],
    },
    {
      id: "future",
      title: "El Futuro de la IA Generativa",
      icon: "Rocket",
      paragraphs: [
        "La IA Generativa, impulsada por arquitecturas como los Transformers, está redefiniendo industrias y la interacción humano-máquina. Su potencial es vasto y apenas comenzamos a explorarlo. Comprender sus fundamentos y evolución es crucial para los profesionales de hoy y del mañana.",
      ],
      developments: {
        title: "Próximos Avances y Tendencias:",
        points: [
          "Modelos multimodales cada vez más sofisticados e integrados.",
          "Mayor eficiencia computacional y accesibilidad de modelos.",
          "Integración profunda en flujos de trabajo empresariales y creativos.",
          "Avances en personalización y controlabilidad de la generación.",
          "Consideraciones éticas y de seguridad más robustas.",
        ],
      },
      image: { src: "https://placehold.co/600x400.png", alt: "Future of Generative AI", "data-ai-hint": "futuristic technology" },
    },
  ],
};

export const getFullPageTextForAI = (): string => {
  let summaryText = `Resumen del contenido de la página: ${contentData.mainTitle}\n\n`;
  summaryText += `El equipo que presenta este contenido está compuesto por: ${contentData.teamMembers.join(', ')}.\n\n`;

  summaryText += "La página cubre las siguientes secciones principales:\n";
  contentData.sections.forEach(section => {
    summaryText += `Título de la Sección: ${section.title}\n`;
    if (section.paragraphs && section.paragraphs.length > 0) {
      // Usar el primer párrafo como una breve introducción a la sección
      summaryText += `Idea principal: ${section.paragraphs[0].substring(0, 200)}${section.paragraphs[0].length > 200 ? '...' : ''}\n`;
    }
    // Podríamos añadir más detalles clave si es necesario, pero manteniendo la brevedad
    if (section.models) {
      summaryText += `Algunos modelos mencionados: ${section.models.slice(0,2).map(m => m.name).join(', ')}.\n`;
    }
    if (section.applications) {
      summaryText += `Algunas aplicaciones: ${section.applications.slice(0,2).map(a => a.name).join(', ')}.\n`;
    }
    summaryText += "\n";
  });
  summaryText += "Por favor, responde la pregunta basándote en este resumen del contenido de la página web.";
  return summaryText;
};
