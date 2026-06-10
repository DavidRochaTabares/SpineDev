export interface BilingualContent {
  es: string;
  en: string;
}

export interface BilingualArray {
  es: string[];
  en: string[];
}

export interface Service {
  id: string;
  icon: string;
  title: BilingualContent;
  description: BilingualContent;
  features: BilingualArray;
  category: 'development' | 'automation' | 'ai' | 'integration';
}

export interface Problem {
  id: string;
  icon: string;
  title: BilingualContent;
  description: BilingualContent;
  impact: BilingualContent;
}

export interface WhySpineDev {
  id: string;
  icon: string;
  title: BilingualContent;
  description: BilingualContent;
}

export interface ProcessStep {
  id: string;
  step: number;
  title: BilingualContent;
  description: BilingualContent;
  duration: BilingualContent;
  icon: string;
}

export interface FAQ {
  id: string;
  question: BilingualContent;
  answer: BilingualContent;
  category: 'pricing' | 'process' | 'technical' | 'support';
}

export interface CaseStudy {
  id: string;
  title: BilingualContent;
  client: BilingualContent;
  industry: string;
  problem: BilingualContent;
  solution: BilingualContent;
  result: BilingualContent;
  technologies: string[];
  image?: string;
  featured: boolean;
  date: string;
}

export interface SpineDevProject {
  id: string;
  title: BilingualContent;
  shortDescription: BilingualContent;
  fullDescription: BilingualContent;
  category: 'web' | 'app' | 'mobile' | 'automation' | 'ai' | 'saas';
  technologies: string[];
  images: string[];
  video?: string;
  demoUrl?: string;
  githubUrl?: string;
  problem: BilingualContent;
  solution: BilingualContent;
  result: BilingualContent;
  metrics?: {
    label: BilingualContent;
    value: string;
  }[];
  architecture?: BilingualContent;
  learnings?: BilingualArray;
  date: string;
  featured: boolean;
  showInPortfolio: boolean;
  showInCaseStudies: boolean;
  clientName?: BilingualContent;
  industry?: string;
}

export interface AboutSpineDev {
  mission: BilingualContent;
  vision: BilingualContent;
  values: {
    title: BilingualContent;
    description: BilingualContent;
  }[];
  stats: {
    label: BilingualContent;
    value: string;
  }[];
}
