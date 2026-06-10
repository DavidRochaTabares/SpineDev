import type { Problem } from './types';

export const problems: Problem[] = [
  {
    id: 'manual-processes',
    icon: 'FileText',
    title: {
      es: 'Procesos Manuales Costosos',
      en: 'Costly Manual Processes'
    },
    description: {
      es: 'Horas perdidas copiando datos entre sistemas y realizando tareas repetitivas.',
      en: 'Hours wasted copying data between systems and performing repetitive tasks.'
    },
    impact: {
      es: 'Pérdida de productividad y errores humanos frecuentes',
      en: 'Loss of productivity and frequent human errors'
    }
  },
  {
    id: 'disconnected-systems',
    icon: 'Unplug',
    title: {
      es: 'Sistemas Desconectados',
      en: 'Disconnected Systems'
    },
    description: {
      es: 'Herramientas que no se comunican entre sí, generando silos de información.',
      en: 'Tools that don\'t communicate with each other, creating information silos.'
    },
    impact: {
      es: 'Datos duplicados y falta de visibilidad del negocio',
      en: 'Duplicate data and lack of business visibility'
    }
  },
  {
    id: 'generic-software',
    icon: 'Package',
    title: {
      es: 'Software Genérico',
      en: 'Generic Software'
    },
    description: {
      es: 'Herramientas que no se adaptan a tus procesos específicos de negocio.',
      en: 'Tools that don\'t adapt to your specific business processes.'
    },
    impact: {
      es: 'Workarounds complejos y baja adopción del equipo',
      en: 'Complex workarounds and low team adoption'
    }
  },
  {
    id: 'repetitive-tasks',
    icon: 'RotateCw',
    title: {
      es: 'Tareas Repetitivas',
      en: 'Repetitive Tasks'
    },
    description: {
      es: 'Reportes, notificaciones y procesos que se repiten constantemente.',
      en: 'Reports, notifications and processes that repeat constantly.'
    },
    impact: {
      es: 'Tiempo desperdiciado que podría invertirse en estrategia',
      en: 'Wasted time that could be invested in strategy'
    }
  },
  {
    id: 'slow-mvp',
    icon: 'Clock',
    title: {
      es: 'MVP Lento',
      en: 'Slow MVP'
    },
    description: {
      es: 'Necesitas validar tu idea rápidamente pero el desarrollo toma meses.',
      en: 'You need to validate your idea quickly but development takes months.'
    },
    impact: {
      es: 'Competencia se adelanta y oportunidad de mercado se pierde',
      en: 'Competition gets ahead and market opportunity is lost'
    }
  },
  {
    id: 'no-tech-team',
    icon: 'Users',
    title: {
      es: 'Sin Equipo Técnico',
      en: 'No Tech Team'
    },
    description: {
      es: 'No cuentas con desarrolladores internos para ejecutar proyectos.',
      en: 'You don\'t have internal developers to execute projects.'
    },
    impact: {
      es: 'Dependencia de proveedores y proyectos estancados',
      en: 'Vendor dependency and stalled projects'
    }
  }
];
