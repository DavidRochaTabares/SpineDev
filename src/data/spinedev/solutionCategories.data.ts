import { solutions } from './solutions.data';
import type { Solution } from './solutions.types';

export interface SolutionCategory {
  id: string;
  title: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  benefit: {
    es: string;
    en: string;
  };
  icon: string; // Lucide icon name
  gradient: string;
  solutions: Solution[];
}

export const solutionCategories: SolutionCategory[] = [
  {
    id: 'digital-development',
    title: {
      es: 'Desarrollo & Productos Digitales',
      en: 'Development & Digital Products'
    },
    description: {
      es: 'Creamos soluciones digitales desde cero para impulsar tu negocio: sitios web profesionales, aplicaciones personalizadas y productos escalables.',
      en: 'We create digital solutions from scratch to boost your business: professional websites, custom applications, and scalable products.'
    },
    benefit: {
      es: 'Lleva tu negocio al mundo digital con soluciones profesionales que generan resultados',
      en: 'Take your business to the digital world with professional solutions that deliver results'
    },
    icon: 'Code',
    gradient: 'from-blue-500 to-cyan-500',
    solutions: [
      solutions.find(s => s.id === 'web-development-solutions')!,
      solutions.find(s => s.id === 'mvp-saas')!,
      solutions.find(s => s.id === 'enterprise-software')!
    ]
  },
  {
    id: 'automation-technology',
    title: {
      es: 'Automatización & Tecnología Avanzada',
      en: 'Automation & Advanced Technology'
    },
    description: {
      es: 'Automatizamos procesos repetitivos, conectamos tus sistemas y aplicamos IA para que tu empresa opere más rápido, sin errores y con menos costos.',
      en: 'We automate repetitive processes, connect your systems, and apply AI so your company operates faster, error-free, and with lower costs.'
    },
    benefit: {
      es: 'Reduce costos operativos hasta 70% y libera tiempo para enfocarte en crecer',
      en: 'Reduce operational costs up to 70% and free up time to focus on growth'
    },
    icon: 'Zap',
    gradient: 'from-purple-500 to-pink-500',
    solutions: [
      solutions.find(s => s.id === 'automation-solutions')!,
      solutions.find(s => s.id === 'integration-solutions')!,
      solutions.find(s => s.id === 'ai-solutions')!
    ]
  }
];
