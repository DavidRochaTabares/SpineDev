import type { FAQ } from './types';

export const faqs: FAQ[] = [
  {
    id: 'pricing',
    category: 'pricing',
    question: {
      es: '¿Cuánto cuesta desarrollar un proyecto?',
      en: 'How much does it cost to develop a project?'
    },
    answer: {
      es: 'El costo varía según la complejidad y alcance del proyecto. Después de la consultoría inicial, entregamos un presupuesto fijo detallado. Los proyectos típicamente van desde $5,000 USD para MVPs hasta $50,000+ para soluciones empresariales completas.',
      en: 'The cost varies depending on the complexity and scope of the project. After the initial consultation, we deliver a detailed fixed budget. Projects typically range from $5,000 USD for MVPs to $50,000+ for complete enterprise solutions.'
    }
  },
  {
    id: 'timeline',
    category: 'process',
    question: {
      es: '¿Cuánto tiempo toma desarrollar un proyecto?',
      en: 'How long does it take to develop a project?'
    },
    answer: {
      es: 'Un MVP funcional puede estar listo en 4-8 semanas. Proyectos más complejos pueden tomar 3-6 meses. Trabajamos con sprints semanales, por lo que verás progreso funcional cada semana, no al final del proyecto.',
      en: 'A functional MVP can be ready in 4-8 weeks. More complex projects can take 3-6 months. We work with weekly sprints, so you\'ll see functional progress every week, not at the end of the project.'
    }
  },
  {
    id: 'fixed-vs-hourly',
    category: 'pricing',
    question: {
      es: '¿Trabajan con presupuestos fijos o por horas?',
      en: 'Do you work with fixed budgets or hourly rates?'
    },
    answer: {
      es: 'Preferimos presupuestos fijos para proyectos con alcance definido. Esto te da certeza de costos y evita sorpresas. Para proyectos de soporte continuo o alcance variable, podemos trabajar con retainers mensuales.',
      en: 'We prefer fixed budgets for projects with defined scope. This gives you cost certainty and avoids surprises. For ongoing support projects or variable scope, we can work with monthly retainers.'
    }
  },
  {
    id: 'post-launch-support',
    category: 'support',
    question: {
      es: '¿Ofrecen soporte después del lanzamiento?',
      en: 'Do you offer support after launch?'
    },
    answer: {
      es: 'Sí. Incluimos 30 días de soporte post-lanzamiento para resolver bugs y hacer ajustes menores. Después, ofrecemos planes de mantenimiento mensual que incluyen actualizaciones, monitoreo y soporte técnico continuo.',
      en: 'Yes. We include 30 days of post-launch support to fix bugs and make minor adjustments. After that, we offer monthly maintenance plans that include updates, monitoring and ongoing technical support.'
    }
  },
  {
    id: 'progress-visibility',
    category: 'process',
    question: {
      es: '¿Puedo ver el progreso durante el desarrollo?',
      en: 'Can I see progress during development?'
    },
    answer: {
      es: 'Absolutamente. Trabajamos con sprints semanales y cada viernes hacemos una demo de las funcionalidades completadas. Tendrás acceso a un ambiente de staging donde podrás probar el producto en cualquier momento.',
      en: 'Absolutely. We work with weekly sprints and every Friday we do a demo of completed features. You\'ll have access to a staging environment where you can test the product at any time.'
    }
  },
  {
    id: 'changes-after-delivery',
    category: 'support',
    question: {
      es: '¿Qué pasa si necesito cambios después de la entrega?',
      en: 'What if I need changes after delivery?'
    },
    answer: {
      es: 'Los cambios menores y correcciones de bugs están cubiertos en el período de soporte inicial. Para nuevas funcionalidades o cambios mayores, podemos crear una propuesta adicional o incluirlos en un plan de mantenimiento mensual.',
      en: 'Minor changes and bug fixes are covered in the initial support period. For new features or major changes, we can create an additional proposal or include them in a monthly maintenance plan.'
    }
  },
  {
    id: 'international-clients',
    category: 'process',
    question: {
      es: '¿Trabajan con empresas fuera de Colombia?',
      en: 'Do you work with companies outside Colombia?'
    },
    answer: {
      es: 'Sí, trabajamos con clientes en toda Latinoamérica, Estados Unidos y Europa. Todas nuestras comunicaciones pueden ser en español o inglés, y nos adaptamos a diferentes zonas horarias para reuniones.',
      en: 'Yes, we work with clients throughout Latin America, the United States and Europe. All our communications can be in Spanish or English, and we adapt to different time zones for meetings.'
    }
  },
  {
    id: 'initial-consultation',
    category: 'process',
    question: {
      es: '¿Qué incluye la consultoría inicial?',
      en: 'What does the initial consultation include?'
    },
    answer: {
      es: 'Una videollamada de 30-45 minutos donde analizamos tu proceso actual, identificamos oportunidades de mejora y discutimos posibles soluciones. Es completamente gratis y sin compromiso. Al final, tendrás una idea clara de cómo podemos ayudarte.',
      en: 'A 30-45 minute video call where we analyze your current process, identify improvement opportunities and discuss possible solutions. It\'s completely free and without commitment. At the end, you\'ll have a clear idea of how we can help you.'
    }
  }
];
