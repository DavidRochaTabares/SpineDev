import type { ProcessStep } from './types';

export const processSteps: ProcessStep[] = [
  {
    id: 'discovery',
    step: 1,
    icon: 'Search',
    title: {
      es: 'Descubrimiento',
      en: 'Discovery'
    },
    description: {
      es: 'Entendemos tu negocio, objetivos y desafíos actuales en una consultoría inicial.',
      en: 'We understand your business, goals and current challenges in an initial consultation.'
    },
    duration: {
      es: '3-5 días',
      en: '3-5 days'
    }
  },
  {
    id: 'proposal',
    step: 2,
    icon: 'FileText',
    title: {
      es: 'Propuesta',
      en: 'Proposal'
    },
    description: {
      es: 'Presentamos presupuesto fijo, roadmap detallado y cronograma de entregas.',
      en: 'We present fixed budget, detailed roadmap and delivery schedule.'
    },
    duration: {
      es: '2-3 días',
      en: '2-3 days'
    }
  },
  {
    id: 'design',
    step: 3,
    icon: 'Palette',
    title: {
      es: 'Diseño',
      en: 'Design'
    },
    description: {
      es: 'Creamos wireframes y prototipos interactivos que validamos contigo antes de desarrollar.',
      en: 'We create wireframes and interactive prototypes that we validate with you before developing.'
    },
    duration: {
      es: '5-10 días',
      en: '5-10 days'
    }
  },
  {
    id: 'development',
    step: 4,
    icon: 'Code',
    title: {
      es: 'Desarrollo',
      en: 'Development'
    },
    description: {
      es: 'Sprints semanales con demos funcionales para que veas el progreso constantemente.',
      en: 'Weekly sprints with functional demos so you can see progress constantly.'
    },
    duration: {
      es: '2-4 semanas',
      en: '2-4 weeks'
    }
  },
  {
    id: 'testing',
    step: 5,
    icon: 'CheckCircle',
    title: {
      es: 'Pruebas',
      en: 'Testing'
    },
    description: {
      es: 'QA exhaustivo, pruebas de usuario y ajustes finales antes del lanzamiento.',
      en: 'Exhaustive QA, user testing and final adjustments before launch.'
    },
    duration: {
      es: '3-5 días',
      en: '3-5 days'
    }
  },
  {
    id: 'launch',
    step: 6,
    icon: 'Rocket',
    title: {
      es: 'Lanzamiento',
      en: 'Launch'
    },
    description: {
      es: 'Deploy a producción, capacitación de tu equipo y soporte continuo post-lanzamiento.',
      en: 'Production deploy, team training and ongoing post-launch support.'
    },
    duration: {
      es: 'Continuo',
      en: 'Ongoing'
    }
  }
];
