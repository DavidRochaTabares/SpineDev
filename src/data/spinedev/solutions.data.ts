import type { Solution } from './solutions.types';

// Datos de las 6 soluciones iniciales
// Contenido temporal - será refinado en fases posteriores

export const solutions: Solution[] = [
  {
    id: 'ai-solutions',
    slug: 'inteligencia-artificial',
    title: {
      es: 'Inteligencia Artificial',
      en: 'Artificial Intelligence'
    },
    problem: {
      es: 'Tareas repetitivas que consumen tiempo valioso y procesos que podrían ser más eficientes con automatización inteligente.',
      en: 'Repetitive tasks consuming valuable time and processes that could be more efficient with intelligent automation.'
    },
    shortDescription: {
      es: 'Asistentes inteligentes y automatización con IA para tu negocio',
      en: 'Intelligent assistants and AI automation for your business'
    },
    fullDescription: {
      es: 'Implementamos soluciones de IA personalizadas que automatizan tareas, mejoran la atención al cliente y optimizan procesos de negocio. Desde chatbots inteligentes hasta análisis predictivo.',
      en: 'We implement custom AI solutions that automate tasks, improve customer service, and optimize business processes. From intelligent chatbots to predictive analytics.'
    },
    category: 'ai',
    status: 'active',
    icon: 'Brain',
    gradient: 'from-blue-600 to-indigo-600',
    benefits: [
      {
        title: { es: 'Automatización Inteligente', en: 'Intelligent Automation' },
        description: { 
          es: 'Reduce tareas repetitivas hasta en un 80%',
          en: 'Reduce repetitive tasks by up to 80%'
        },
        icon: 'Zap'
      },
      {
        title: { es: 'Disponibilidad 24/7', en: '24/7 Availability' },
        description: { 
          es: 'Asistentes que trabajan sin descanso',
          en: 'Assistants that work non-stop'
        },
        icon: 'Clock'
      },
      {
        title: { es: 'Decisiones Basadas en Datos', en: 'Data-Driven Decisions' },
        description: { 
          es: 'Análisis predictivo para mejores resultados',
          en: 'Predictive analytics for better results'
        },
        icon: 'TrendingUp'
      }
    ],
    technologies: [
      { name: 'OpenAI GPT', category: 'ai' },
      { name: 'LangChain', category: 'ai' },
      { name: 'Python', category: 'backend' },
      { name: 'TensorFlow', category: 'ai' }
    ],
    features: {
      es: [
        'Chatbots conversacionales',
        'Análisis de sentimientos',
        'Procesamiento de lenguaje natural',
        'Recomendaciones personalizadas'
      ],
      en: [
        'Conversational chatbots',
        'Sentiment analysis',
        'Natural language processing',
        'Personalized recommendations'
      ]
    },
    demos: [
      {
        id: 'ai-assistant',
        name: {
          es: 'Asistente de IA',
          en: 'AI Assistant'
        },
        description: {
          es: 'Asistente conversacional inteligente para tu negocio',
          en: 'Intelligent conversational assistant for your business'
        },
        component: 'AiAssistantDemo',
        enabled: true, // ✅ Demo habilitada
        featured: true,
        complexity: 'intermediate',
        version: '1.0',
        estimatedTime: {
          es: '2-3 minutos',
          en: '2-3 minutes'
        }
      }
    ],
    seo: {
      title: {
        es: 'Soluciones de Inteligencia Artificial | SpineDev',
        en: 'Artificial Intelligence Solutions | SpineDev'
      },
      description: {
        es: 'Implementamos IA personalizada para automatizar procesos y mejorar tu negocio',
        en: 'We implement custom AI to automate processes and improve your business'
      }
    },
    priority: 1,
    featured: true,
    estimatedTime: {
      es: '4-8 semanas',
      en: '4-8 weeks'
    }
  },
  {
    id: 'automation-solutions',
    slug: 'automatizacion',
    title: {
      es: 'Automatización',
      en: 'Automation'
    },
    problem: {
      es: 'Horas perdidas copiando datos entre sistemas y realizando tareas manuales que generan errores frecuentes.',
      en: 'Hours wasted copying data between systems and performing manual tasks that generate frequent errors.'
    },
    shortDescription: {
      es: 'Automatiza procesos repetitivos y ahorra tiempo valioso',
      en: 'Automate repetitive processes and save valuable time'
    },
    fullDescription: {
      es: 'Diseñamos flujos de trabajo automatizados que conectan tus herramientas y eliminan tareas manuales. Desde sincronización de datos hasta procesos complejos de negocio.',
      en: 'We design automated workflows that connect your tools and eliminate manual tasks. From data synchronization to complex business processes.'
    },
    category: 'automation',
    status: 'active',
    icon: 'Workflow',
    gradient: 'from-blue-500 to-cyan-500',
    benefits: [
      {
        title: { es: 'Ahorro de Tiempo', en: 'Time Savings' },
        description: { 
          es: 'Recupera hasta 20 horas semanales',
          en: 'Recover up to 20 hours per week'
        },
        icon: 'Timer'
      },
      {
        title: { es: 'Cero Errores', en: 'Zero Errors' },
        description: { 
          es: 'Elimina errores humanos en procesos',
          en: 'Eliminate human errors in processes'
        },
        icon: 'CheckCircle'
      },
      {
        title: { es: 'Escalabilidad', en: 'Scalability' },
        description: { 
          es: 'Crece sin aumentar tu equipo',
          en: 'Grow without increasing your team'
        },
        icon: 'TrendingUp'
      }
    ],
    technologies: [
      { name: 'Make (Integromat)', category: 'tool' },
      { name: 'Zapier', category: 'tool' },
      { name: 'n8n', category: 'tool' },
      { name: 'Node.js', category: 'backend' }
    ],
    features: {
      es: [
        'Sincronización de datos',
        'Notificaciones automáticas',
        'Generación de reportes',
        'Flujos de trabajo personalizados'
      ],
      en: [
        'Data synchronization',
        'Automatic notifications',
        'Report generation',
        'Custom workflows'
      ]
    },
    demos: [
      {
        id: 'workflow-automation',
        name: {
          es: 'Workflow Automation Studio',
          en: 'Workflow Automation Studio'
        },
        description: {
          es: 'Visualiza cómo automatizar procesos empresariales',
          en: 'Visualize how to automate business processes'
        },
        component: 'WorkflowAutomationDemo',
        enabled: true, // ✅ Demo habilitada
        featured: true,
        complexity: 'simple',
        version: '1.0',
        estimatedTime: {
          es: '3-5 minutos',
          en: '3-5 minutes'
        }
      }
    ],
    seo: {
      title: {
        es: 'Automatización de Procesos | SpineDev',
        en: 'Process Automation | SpineDev'
      },
      description: {
        es: 'Automatiza tareas repetitivas y optimiza tu flujo de trabajo',
        en: 'Automate repetitive tasks and optimize your workflow'
      }
    },
    priority: 2,
    featured: true,
    estimatedTime: {
      es: '2-4 semanas',
      en: '2-4 weeks'
    }
  },
  {
    id: 'integration-solutions',
    slug: 'integraciones',
    title: {
      es: 'Integraciones',
      en: 'Integrations'
    },
    problem: {
      es: 'Sistemas desconectados que no se comunican entre sí, generando silos de información y datos duplicados.',
      en: 'Disconnected systems that don\'t communicate with each other, creating information silos and duplicate data.'
    },
    shortDescription: {
      es: 'Conecta todas tus herramientas en un ecosistema unificado',
      en: 'Connect all your tools in a unified ecosystem'
    },
    fullDescription: {
      es: 'Integramos tus sistemas existentes para que trabajen juntos sin fricciones. APIs, webhooks, sincronización en tiempo real y más.',
      en: 'We integrate your existing systems to work together seamlessly. APIs, webhooks, real-time synchronization and more.'
    },
    category: 'integration',
    status: 'active',
    icon: 'Plug',
    gradient: 'from-green-500 to-emerald-500',
    benefits: [
      {
        title: { es: 'Datos Centralizados', en: 'Centralized Data' },
        description: { 
          es: 'Toda tu información en un solo lugar',
          en: 'All your information in one place'
        },
        icon: 'Database'
      },
      {
        title: { es: 'Sincronización en Tiempo Real', en: 'Real-Time Sync' },
        description: { 
          es: 'Cambios instantáneos entre sistemas',
          en: 'Instant changes between systems'
        },
        icon: 'RefreshCw'
      },
      {
        title: { es: 'Compatibilidad Total', en: 'Full Compatibility' },
        description: { 
          es: 'Conectamos cualquier herramienta',
          en: 'We connect any tool'
        },
        icon: 'Link'
      }
    ],
    technologies: [
      { name: 'REST APIs', category: 'backend' },
      { name: 'GraphQL', category: 'backend' },
      { name: 'Webhooks', category: 'backend' },
      { name: 'OAuth 2.0', category: 'backend' }
    ],
    features: {
      es: [
        'Integración de CRM',
        'Conexión con ERPs',
        'APIs personalizadas',
        'Sincronización bidireccional'
      ],
      en: [
        'CRM integration',
        'ERP connection',
        'Custom APIs',
        'Bidirectional synchronization'
      ]
    },
    demos: [
      {
        id: 'integration-playground',
        name: {
          es: 'Integration Playground',
          en: 'Integration Playground'
        },
        description: {
          es: 'Descubre cómo las integraciones agregan nuevas capacidades a tu plataforma',
          en: 'Discover how integrations add new capabilities to your platform'
        },
        component: 'IntegrationPlayground',
        enabled: true,
        featured: true,
        complexity: 'simple',
        version: '1.0',
        estimatedTime: {
          es: '2-4 minutos',
          en: '2-4 minutes'
        }
      }
    ],
    seo: {
      title: {
        es: 'Integraciones de Sistemas | SpineDev',
        en: 'System Integrations | SpineDev'
      },
      description: {
        es: 'Conectamos tus herramientas para trabajar en perfecta armonía',
        en: 'We connect your tools to work in perfect harmony'
      }
    },
    priority: 3,
    estimatedTime: {
      es: '3-6 semanas',
      en: '3-6 weeks'
    }
  },
  {
    id: 'web-development-solutions',
    slug: 'desarrollo-web',
    title: {
      es: 'Desarrollo Web',
      en: 'Web Development'
    },
    problem: {
      es: 'Necesitas presencia digital profesional pero no cuentas con un equipo técnico interno para ejecutar proyectos web.',
      en: 'You need professional digital presence but don\'t have an internal technical team to execute web projects.'
    },
    shortDescription: {
      es: 'Sitios web modernos, rápidos y optimizados para conversión',
      en: 'Modern, fast websites optimized for conversion'
    },
    fullDescription: {
      es: 'Creamos experiencias web excepcionales con las tecnologías más modernas. Desde landing pages hasta aplicaciones web complejas.',
      en: 'We create exceptional web experiences with the most modern technologies. From landing pages to complex web applications.'
    },
    category: 'web-development',
    status: 'active',
    icon: 'Globe',
    gradient: 'from-orange-500 to-red-500',
    benefits: [
      {
        title: { es: 'Rendimiento Extremo', en: 'Extreme Performance' },
        description: { 
          es: 'Carga en menos de 1 segundo',
          en: 'Loads in less than 1 second'
        },
        icon: 'Rocket'
      },
      {
        title: { es: 'SEO Optimizado', en: 'SEO Optimized' },
        description: { 
          es: 'Posiciónate en Google desde el día 1',
          en: 'Rank on Google from day 1'
        },
        icon: 'Search'
      },
      {
        title: { es: 'Responsive Design', en: 'Responsive Design' },
        description: { 
          es: 'Perfecto en cualquier dispositivo',
          en: 'Perfect on any device'
        },
        icon: 'Smartphone'
      }
    ],
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'Next.js', category: 'frontend' },
      { name: 'Astro', category: 'frontend' },
      { name: 'Tailwind CSS', category: 'frontend' }
    ],
    features: {
      es: [
        'Landing pages de alta conversión',
        'Aplicaciones web progresivas (PWA)',
        'E-commerce personalizado',
        'Dashboards interactivos'
      ],
      en: [
        'High-conversion landing pages',
        'Progressive web apps (PWA)',
        'Custom e-commerce',
        'Interactive dashboards'
      ]
    },
    demos: [
      {
        id: 'web-solution-showcase',
        name: {
          es: 'Galería de Soluciones Web',
          en: 'Web Solutions Gallery'
        },
        description: {
          es: 'Explora los diferentes tipos de productos digitales que podemos construir',
          en: 'Explore the different types of digital products we can build'
        },
        component: 'WebSolutionShowcase',
        enabled: true,
        complexity: 'simple',
        version: '1.0'
      }
    ],
    seo: {
      title: {
        es: 'Desarrollo Web Profesional | SpineDev',
        en: 'Professional Web Development | SpineDev'
      },
      description: {
        es: 'Sitios web modernos y optimizados que convierten visitantes en clientes',
        en: 'Modern, optimized websites that convert visitors into customers'
      }
    },
    priority: 4,
    estimatedTime: {
      es: '3-8 semanas',
      en: '3-8 weeks'
    }
  },
  {
    id: 'enterprise-software',
    slug: 'software-empresarial',
    title: {
      es: 'Software Empresarial',
      en: 'Enterprise Software'
    },
    problem: {
      es: 'Software genérico que no se adapta a tus procesos específicos, generando workarounds complejos y baja adopción.',
      en: 'Generic software that doesn\'t adapt to your specific processes, generating complex workarounds and low adoption.'
    },
    shortDescription: {
      es: 'Soluciones a medida para empresas que buscan escalar',
      en: 'Custom solutions for companies looking to scale'
    },
    fullDescription: {
      es: 'Desarrollamos software empresarial robusto y escalable que se adapta a tus procesos únicos. Desde gestión interna hasta plataformas complejas.',
      en: 'We develop robust and scalable enterprise software that adapts to your unique processes. From internal management to complex platforms.'
    },
    category: 'enterprise-software',
    status: 'active',
    icon: 'Building2',
    gradient: 'from-indigo-500 to-purple-500',
    benefits: [
      {
        title: { es: 'Totalmente Personalizado', en: 'Fully Customized' },
        description: { 
          es: 'Adaptado a tus procesos exactos',
          en: 'Adapted to your exact processes'
        },
        icon: 'Settings'
      },
      {
        title: { es: 'Escalable', en: 'Scalable' },
        description: { 
          es: 'Crece con tu empresa',
          en: 'Grows with your company'
        },
        icon: 'ArrowUpRight'
      },
      {
        title: { es: 'Soporte Dedicado', en: 'Dedicated Support' },
        description: { 
          es: 'Acompañamiento continuo',
          en: 'Continuous support'
        },
        icon: 'Headphones'
      }
    ],
    technologies: [
      { name: 'Node.js', category: 'backend' },
      { name: 'PostgreSQL', category: 'database' },
      { name: 'AWS', category: 'cloud' },
      { name: 'Docker', category: 'tool' }
    ],
    features: {
      es: [
        'Sistemas de gestión (ERP/CRM)',
        'Plataformas internas',
        'Portales de clientes',
        'Sistemas de reportería'
      ],
      en: [
        'Management systems (ERP/CRM)',
        'Internal platforms',
        'Customer portals',
        'Reporting systems'
      ]
    },
    demos: [
      {
        id: 'business-software-builder',
        name: {
          es: 'Constructor de Software Empresarial',
          en: 'Business Software Builder'
        },
        description: {
          es: 'Construye tu sistema empresarial seleccionando los módulos que necesitas',
          en: 'Build your business system by selecting the modules you need'
        },
        component: 'BusinessSoftwareDemo',
        enabled: true,
        complexity: 'simple',
        version: '1.0'
      }
    ],
    seo: {
      title: {
        es: 'Software Empresarial a Medida | SpineDev',
        en: 'Custom Enterprise Software | SpineDev'
      },
      description: {
        es: 'Software robusto y escalable diseñado para tu empresa',
        en: 'Robust and scalable software designed for your company'
      }
    },
    priority: 5,
    estimatedTime: {
      es: '8-16 semanas',
      en: '8-16 weeks'
    }
  },
  {
    id: 'mvp-saas',
    slug: 'mvp-saas',
    title: {
      es: 'MVPs y SaaS',
      en: 'MVPs and SaaS'
    },
    problem: {
      es: 'Necesitas validar tu idea rápidamente pero el desarrollo tradicional toma meses y la competencia se adelanta.',
      en: 'You need to validate your idea quickly but traditional development takes months and competition gets ahead.'
    },
    shortDescription: {
      es: 'Lanza tu producto digital en semanas, no meses',
      en: 'Launch your digital product in weeks, not months'
    },
    fullDescription: {
      es: 'Convertimos tu idea en un producto funcional listo para validar con usuarios reales. Desarrollo ágil, iterativo y enfocado en resultados.',
      en: 'We turn your idea into a functional product ready to validate with real users. Agile, iterative development focused on results.'
    },
    category: 'mvp-saas',
    status: 'active',
    icon: 'Sparkles',
    gradient: 'from-yellow-500 to-orange-500',
    benefits: [
      {
        title: { es: 'Lanzamiento Rápido', en: 'Fast Launch' },
        description: { 
          es: 'MVP funcional en 4-6 semanas',
          en: 'Functional MVP in 4-6 weeks'
        },
        icon: 'Zap'
      },
      {
        title: { es: 'Validación Temprana', en: 'Early Validation' },
        description: { 
          es: 'Prueba tu idea con usuarios reales',
          en: 'Test your idea with real users'
        },
        icon: 'Users'
      },
      {
        title: { es: 'Iteración Continua', en: 'Continuous Iteration' },
        description: { 
          es: 'Mejora basada en feedback',
          en: 'Improvement based on feedback'
        },
        icon: 'RefreshCw'
      }
    ],
    technologies: [
      { name: 'Next.js', category: 'frontend' },
      { name: 'Supabase', category: 'backend' },
      { name: 'Stripe', category: 'tool' },
      { name: 'Vercel', category: 'cloud' }
    ],
    features: {
      es: [
        'Autenticación de usuarios',
        'Pagos integrados',
        'Panel de administración',
        'Analytics básico'
      ],
      en: [
        'User authentication',
        'Integrated payments',
        'Admin panel',
        'Basic analytics'
      ]
    },
    demos: [
      {
        id: 'mvp-builder',
        name: {
          es: 'Constructor de MVP',
          en: 'MVP Builder'
        },
        description: {
          es: 'Transforma tu idea en un MVP funcional',
          en: 'Transform your idea into a functional MVP'
        },
        component: 'MvpBuilderDemo',
        enabled: true,
        featured: true,
        complexity: 'simple',
        version: '1.0'
      }
    ],
    seo: {
      title: {
        es: 'Desarrollo de MVPs y SaaS | SpineDev',
        en: 'MVP and SaaS Development | SpineDev'
      },
      description: {
        es: 'Lanza tu producto digital rápidamente y valida tu idea',
        en: 'Launch your digital product quickly and validate your idea'
      }
    },
    priority: 6,
    featured: true,
    estimatedTime: {
      es: '4-6 semanas',
      en: '4-6 weeks'
    },
    startingPrice: {
      amount: 3000,
      currency: 'USD',
      note: {
        es: 'Precio base para MVP estándar',
        en: 'Base price for standard MVP'
      }
    }
  }
];
