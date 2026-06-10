import type { Service } from './types';

export const services: Service[] = [
  {
    id: 'web-development',
    icon: 'Code2',
    title: {
      es: 'Desarrollo Web',
      en: 'Web Development'
    },
    description: {
      es: 'Sitios web y aplicaciones modernas, rápidas y escalables con las últimas tecnologías.',
      en: 'Modern, fast and scalable websites and applications with the latest technologies.'
    },
    features: {
      es: ['React, Next.js, Astro', 'Responsive y accesible', 'SEO optimizado', 'Alto rendimiento'],
      en: ['React, Next.js, Astro', 'Responsive & accessible', 'SEO optimized', 'High performance']
    },
    category: 'development'
  },
  {
    id: 'custom-software',
    icon: 'Laptop',
    title: {
      es: 'Software a Medida',
      en: 'Custom Software'
    },
    description: {
      es: 'Soluciones personalizadas que se adaptan perfectamente a tus procesos de negocio.',
      en: 'Custom solutions that perfectly fit your business processes.'
    },
    features: {
      es: ['Análisis de requerimientos', 'Arquitectura escalable', 'Integración con sistemas', 'Soporte continuo'],
      en: ['Requirements analysis', 'Scalable architecture', 'System integration', 'Ongoing support']
    },
    category: 'development'
  },
  {
    id: 'automation',
    icon: 'Zap',
    title: {
      es: 'Automatizaciones',
      en: 'Automation'
    },
    description: {
      es: 'Elimina tareas repetitivas y optimiza procesos con automatización inteligente.',
      en: 'Eliminate repetitive tasks and optimize processes with intelligent automation.'
    },
    features: {
      es: ['Flujos de trabajo', 'Integraciones API', 'Reportes automáticos', 'Notificaciones'],
      en: ['Workflows', 'API integrations', 'Automated reports', 'Notifications']
    },
    category: 'automation'
  },
  {
    id: 'artificial-intelligence',
    icon: 'Brain',
    title: {
      es: 'Inteligencia Artificial',
      en: 'Artificial Intelligence'
    },
    description: {
      es: 'Integra IA en tus procesos para análisis, predicciones y automatización avanzada.',
      en: 'Integrate AI into your processes for analysis, predictions and advanced automation.'
    },
    features: {
      es: ['Chatbots inteligentes', 'Análisis de datos', 'Procesamiento de lenguaje', 'Modelos personalizados'],
      en: ['Smart chatbots', 'Data analysis', 'Language processing', 'Custom models']
    },
    category: 'ai'
  },
  {
    id: 'api-integrations',
    icon: 'Network',
    title: {
      es: 'Integraciones API',
      en: 'API Integrations'
    },
    description: {
      es: 'Conecta tus sistemas y herramientas para un flujo de datos sin interrupciones.',
      en: 'Connect your systems and tools for seamless data flow.'
    },
    features: {
      es: ['APIs RESTful', 'Webhooks', 'Sincronización de datos', 'Middleware personalizado'],
      en: ['RESTful APIs', 'Webhooks', 'Data synchronization', 'Custom middleware']
    },
    category: 'integration'
  },
  {
    id: 'mvp-saas',
    icon: 'Rocket',
    title: {
      es: 'MVPs y SaaS',
      en: 'MVPs & SaaS'
    },
    description: {
      es: 'Lanza tu producto rápidamente con un MVP funcional y escalable.',
      en: 'Launch your product quickly with a functional and scalable MVP.'
    },
    features: {
      es: ['Desarrollo ágil', 'Infraestructura cloud', 'Autenticación y pagos', 'Analytics integrado'],
      en: ['Agile development', 'Cloud infrastructure', 'Auth & payments', 'Integrated analytics']
    },
    category: 'development'
  }
];
