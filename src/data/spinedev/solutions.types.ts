// Tipos para el sistema de Soluciones Interactivas SpineDev
// Arquitectura escalable preparada para crecimiento futuro

export type SolutionStatus = 'active' | 'coming-soon' | 'planned';

export type SolutionCategory = 
  | 'ai' 
  | 'automation' 
  | 'integration' 
  | 'web-development' 
  | 'enterprise-software' 
  | 'mvp-saas';

export interface Technology {
  name: string;
  icon?: string;
  category?: 'frontend' | 'backend' | 'ai' | 'cloud' | 'database' | 'tool';
}

export interface Benefit {
  title: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  icon?: string;
}

export interface DemoConfig {
  id: string; // Identificador único de la demo
  name: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  component: string; // Nombre del componente de demo
  enabled: boolean;
  featured?: boolean; // Para destacar una demo principal
  complexity?: 'simple' | 'intermediate' | 'advanced';
  version?: string;
  requiresInteraction?: boolean;
  estimatedTime?: {
    es: string;
    en: string;
  }; // Tiempo estimado de exploración
}

// Preparado para futuras expansiones
export interface CaseStudy {
  id: string;
  clientName: string;
  industry: string;
  challenge: {
    es: string;
    en: string;
  };
  solution: {
    es: string;
    en: string;
  };
  results: {
    metric: string;
    value: string;
    description: {
      es: string;
      en: string;
    };
  }[];
  testimonial?: {
    quote: {
      es: string;
      en: string;
    };
    author: string;
    position: string;
  };
}

// Preparado para futuras expansiones
export interface Project {
  id: string;
  name: string;
  description: {
    es: string;
    en: string;
  };
  url?: string;
  image?: string;
  technologies: Technology[];
  completedDate?: string;
}

export interface SEOMetadata {
  title: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  keywords?: string[];
}

export interface Solution {
  // Identificación
  id: string;
  slug: string;
  
  // Contenido básico
  title: {
    es: string;
    en: string;
  };
  problem: {
    es: string;
    en: string;
  };
  shortDescription: {
    es: string;
    en: string;
  };
  fullDescription: {
    es: string;
    en: string;
  };
  
  // Clasificación
  category: SolutionCategory;
  status: SolutionStatus;
  
  // Visual
  icon: string; // Nombre del icono de lucide-react
  image?: string; // Ruta a imagen/ilustración
  gradient?: string; // Clases de Tailwind para gradiente personalizado
  
  // Contenido detallado
  benefits: Benefit[];
  technologies: Technology[];
  
  // Características destacadas
  features?: {
    es: string[];
    en: string[];
  };
  
  // Demos interactivas (soporta múltiples demos por solución)
  demos: DemoConfig[];
  
  // Futuras expansiones (preparadas pero no implementadas)
  caseStudies?: CaseStudy[];
  relatedProjects?: Project[];
  
  // SEO
  seo: SEOMetadata;
  
  // Configuración de página independiente (preparado para futuro)
  hasOwnPage?: boolean; // Si tiene página dedicada en /solutions/[slug]
  
  // Metadata adicional
  priority?: number; // Para ordenar las tarjetas
  featured?: boolean; // Para destacar soluciones
  estimatedTime?: {
    es: string;
    en: string;
  }; // Tiempo estimado de implementación
  startingPrice?: {
    amount: number;
    currency: string;
    note?: {
      es: string;
      en: string;
    };
  };
}

// Sistema de tabs (preparado para futuro, sin UI todavía)
export type SolutionTab = 'overview' | 'demos' | 'case-studies' | 'projects' | 'technologies';

export interface TabConfig {
  id: SolutionTab;
  label: {
    es: string;
    en: string;
  };
  icon?: string;
  visible: boolean; // Se calcula dinámicamente según contenido disponible
}

// Tipo para el contenido del modal
export interface SolutionModalContent {
  solution: Solution;
  language: 'es' | 'en';
  activeTab?: SolutionTab; // Preparado para tabs futuros
}
