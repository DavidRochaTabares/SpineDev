// Nueva estructura optimizada para máximo impacto comercial
// Problema → Consecuencia → Transformación → Cómo Funciona → Resultado → CTA
// Usando iconos de Lucide para un estilo más corporativo

export interface ProblemStep {
  id: string;
  icon: string; // Nombre del icono de Lucide
  problem: {
    es: string;
    en: string;
  };
  consequence: {
    es: string;
    en: string;
  };
}

export interface TransformationPair {
  before: {
    icon: string; // Nombre del icono de Lucide
    text: {
      es: string;
      en: string;
    };
  };
  after: {
    icon: string; // Nombre del icono de Lucide
    text: {
      es: string;
      en: string;
    };
  };
}

export interface AutomationStep {
  id: string;
  icon: string; // Nombre del icono de Lucide
  description: {
    es: string;
    en: string;
  };
}

export interface WorkflowScenario {
  id: string;
  name: {
    es: string;
    en: string;
  };
  icon: string; // Nombre del icono de Lucide
  color: string;
  problemDescription: {
    es: string;
    en: string;
  };
  problemSteps: ProblemStep[];
  transformations: TransformationPair[];
  automationSteps: AutomationStep[];
  beforeAfter: {
    before: {
      es: string;
      en: string;
    };
    after: {
      es: string;
      en: string;
    };
  };
  benefits: {
    es: string[];
    en: string[];
  };
}

export const workflowScenarios: WorkflowScenario[] = [
  // VENTAS
  {
    id: 'sales',
    name: {
      es: 'Ventas',
      en: 'Sales'
    },
    icon: 'Briefcase',
    color: 'blue',
    problemDescription: {
      es: 'Los vendedores pierden tiempo en tareas repetitivas y seguimiento manual.',
      en: 'Sales teams waste time on repetitive tasks and manual follow-up.'
    },
    problemSteps: [
      {
        id: 'lead-arrives',
        icon: 'Mail',
        problem: {
          es: 'Llega un lead',
          en: 'Lead arrives'
        },
        consequence: {
          es: '',
          en: ''
        }
      },
      {
        id: 'wait',
        icon: 'Clock',
        problem: {
          es: 'Espera respuesta',
          en: 'Waiting for response'
        },
        consequence: {
          es: 'El cliente pierde interés',
          en: 'Customer loses interest'
        }
      },
      {
        id: 'manual-entry',
        icon: 'FileEdit',
        problem: {
          es: 'Registro manual',
          en: 'Manual registration'
        },
        consequence: {
          es: 'Tiempo administrativo innecesario',
          en: 'Unnecessary administrative time'
        }
      },
      {
        id: 'data-error',
        icon: 'AlertCircle',
        problem: {
          es: 'Error en información',
          en: 'Information error'
        },
        consequence: {
          es: 'Datos inconsistentes en el CRM',
          en: 'Inconsistent CRM data'
        }
      },
      {
        id: 'forgot-followup',
        icon: 'CalendarX',
        problem: {
          es: 'Seguimiento olvidado',
          en: 'Forgotten follow-up'
        },
        consequence: {
          es: 'Oportunidades desaprovechadas',
          en: 'Missed opportunities'
        }
      },
      {
        id: 'lost-sale',
        icon: 'TrendingDown',
        problem: {
          es: 'Venta perdida',
          en: 'Lost sale'
        },
        consequence: {
          es: 'Impacto directo en el negocio',
          en: 'Direct business impact'
        }
      }
    ],
    transformations: [
      {
        before: {
          icon: 'Clock',
          text: {
            es: 'Espera respuesta',
            en: 'Waiting for response'
          }
        },
        after: {
          icon: 'Zap',
          text: {
            es: 'Contacto inmediato',
            en: 'Immediate contact'
          }
        }
      },
      {
        before: {
          icon: 'FileEdit',
          text: {
            es: 'Registro manual',
            en: 'Manual registration'
          }
        },
        after: {
          icon: 'Bot',
          text: {
            es: 'Registro automático',
            en: 'Automatic registration'
          }
        }
      },
      {
        before: {
          icon: 'AlertCircle',
          text: {
            es: 'Error en información',
            en: 'Information error'
          }
        },
        after: {
          icon: 'CheckCircle',
          text: {
            es: 'Datos consistentes',
            en: 'Consistent data'
          }
        }
      },
      {
        before: {
          icon: 'CalendarX',
          text: {
            es: 'Seguimiento olvidado',
            en: 'Forgotten follow-up'
          }
        },
        after: {
          icon: 'CalendarCheck',
          text: {
            es: 'Seguimiento programado',
            en: 'Scheduled follow-up'
          }
        }
      }
    ],
    automationSteps: [
      {
        id: 'detect',
        icon: 'Radar',
        description: {
          es: 'Se detecta un nuevo lead',
          en: 'New lead detected'
        }
      },
      {
        id: 'classify',
        icon: 'Sparkles',
        description: {
          es: 'Se clasifica automáticamente',
          en: 'Automatically classified'
        }
      },
      {
        id: 'register',
        icon: 'Database',
        description: {
          es: 'Se registra en el CRM',
          en: 'Registered in CRM'
        }
      },
      {
        id: 'respond',
        icon: 'Send',
        description: {
          es: 'Se envía respuesta inmediata',
          en: 'Immediate response sent'
        }
      },
      {
        id: 'schedule',
        icon: 'Calendar',
        description: {
          es: 'Se programa seguimiento',
          en: 'Follow-up scheduled'
        }
      },
      {
        id: 'automatic',
        icon: 'RefreshCw',
        description: {
          es: 'Todo sin intervención manual',
          en: 'All without manual intervention'
        }
      }
    ],
    beforeAfter: {
      before: {
        es: 'El equipo dedicaba tiempo a tareas repetitivas y seguimiento manual',
        en: 'The team spent time on repetitive tasks and manual follow-up'
      },
      after: {
        es: 'El equipo se enfoca en actividades de mayor valor para el negocio',
        en: 'The team focuses on higher-value business activities'
      }
    },
    benefits: {
      es: [
        'Menos trabajo administrativo',
        'Seguimiento consistente',
        'Respuestas más rápidas',
        'Mejor organización comercial'
      ],
      en: [
        'Less administrative work',
        'Consistent follow-up',
        'Faster responses',
        'Better sales organization'
      ]
    }
  },

  // ATENCIÓN AL CLIENTE
  {
    id: 'customer-service',
    name: {
      es: 'Atención al Cliente',
      en: 'Customer Service'
    },
    icon: 'MessageSquare',
    color: 'purple',
    problemDescription: {
      es: 'Las solicitudes llegan por múltiples canales y muchas se responden tarde o se pierden.',
      en: 'Requests arrive through multiple channels and many are answered late or lost.'
    },
    problemSteps: [
      {
        id: 'message-arrives',
        icon: 'MessageCircle',
        problem: {
          es: 'Llega solicitud',
          en: 'Request arrives'
        },
        consequence: {
          es: '',
          en: ''
        }
      },
      {
        id: 'manual-review',
        icon: 'Search',
        problem: {
          es: 'Revisión manual',
          en: 'Manual review'
        },
        consequence: {
          es: 'Tiempo de espera para el cliente',
          en: 'Customer wait time'
        }
      },
      {
        id: 'lost-request',
        icon: 'XCircle',
        problem: {
          es: 'Solicitud perdida',
          en: 'Lost request'
        },
        consequence: {
          es: 'Cliente sin respuesta',
          en: 'Customer without response'
        }
      },
      {
        id: 'late-response',
        icon: 'AlertTriangle',
        problem: {
          es: 'Respuesta tardía',
          en: 'Late response'
        },
        consequence: {
          es: 'Mala experiencia del cliente',
          en: 'Poor customer experience'
        }
      },
      {
        id: 'no-priority',
        icon: 'Shuffle',
        problem: {
          es: 'Sin priorización',
          en: 'No prioritization'
        },
        consequence: {
          es: 'Casos urgentes sin atender',
          en: 'Urgent cases unattended'
        }
      }
    ],
    transformations: [
      {
        before: {
          icon: 'Search',
          text: {
            es: 'Revisión manual',
            en: 'Manual review'
          }
        },
        after: {
          icon: 'Bot',
          text: {
            es: 'Clasificación automática',
            en: 'Automatic classification'
          }
        }
      },
      {
        before: {
          icon: 'XCircle',
          text: {
            es: 'Solicitud perdida',
            en: 'Lost request'
          }
        },
        after: {
          icon: 'CheckCircle',
          text: {
            es: 'Todas registradas',
            en: 'All registered'
          }
        }
      },
      {
        before: {
          icon: 'AlertTriangle',
          text: {
            es: 'Respuesta tardía',
            en: 'Late response'
          }
        },
        after: {
          icon: 'Zap',
          text: {
            es: 'Respuesta inmediata',
            en: 'Immediate response'
          }
        }
      },
      {
        before: {
          icon: 'Shuffle',
          text: {
            es: 'Sin priorización',
            en: 'No prioritization'
          }
        },
        after: {
          icon: 'Target',
          text: {
            es: 'Priorización inteligente',
            en: 'Smart prioritization'
          }
        }
      }
    ],
    automationSteps: [
      {
        id: 'receive',
        icon: 'Inbox',
        description: {
          es: 'Se recibe la solicitud',
          en: 'Request received'
        }
      },
      {
        id: 'analyze',
        icon: 'Brain',
        description: {
          es: 'Se analiza automáticamente',
          en: 'Automatically analyzed'
        }
      },
      {
        id: 'classify',
        icon: 'Tag',
        description: {
          es: 'Se clasifica por urgencia',
          en: 'Classified by urgency'
        }
      },
      {
        id: 'assign',
        icon: 'UserCheck',
        description: {
          es: 'Se asigna al agente correcto',
          en: 'Assigned to right agent'
        }
      },
      {
        id: 'notify',
        icon: 'Bell',
        description: {
          es: 'Se notifica al cliente',
          en: 'Customer notified'
        }
      },
      {
        id: 'track',
        icon: 'Activity',
        description: {
          es: 'Se hace seguimiento automático',
          en: 'Automatic tracking'
        }
      }
    ],
    beforeAfter: {
      before: {
        es: 'El equipo perdía tiempo clasificando y muchas solicitudes quedaban sin responder',
        en: 'The team wasted time classifying and many requests went unanswered'
      },
      after: {
        es: 'El equipo se enfoca en resolver casos complejos con mejor atención',
        en: 'The team focuses on solving complex cases with better attention'
      }
    },
    benefits: {
      es: [
        'Menos solicitudes perdidas',
        'Mejor tiempo de respuesta',
        'Atención más organizada',
        'Mejor experiencia para clientes'
      ],
      en: [
        'Fewer lost requests',
        'Better response time',
        'More organized attention',
        'Better customer experience'
      ]
    }
  },

  // RECURSOS HUMANOS
  {
    id: 'hr',
    name: {
      es: 'Recursos Humanos',
      en: 'Human Resources'
    },
    icon: 'Users',
    color: 'green',
    problemDescription: {
      es: 'Los procesos de contratación y onboarding consumen demasiadas horas operativas.',
      en: 'Hiring and onboarding processes consume too many operational hours.'
    },
    problemSteps: [
      {
        id: 'new-hire',
        icon: 'UserPlus',
        problem: {
          es: 'Nuevo empleado',
          en: 'New employee'
        },
        consequence: {
          es: '',
          en: ''
        }
      },
      {
        id: 'manual-docs',
        icon: 'FileText',
        problem: {
          es: 'Solicitud manual de documentos',
          en: 'Manual document request'
        },
        consequence: {
          es: 'Tiempo operativo perdido',
          en: 'Lost operational time'
        }
      },
      {
        id: 'lost-docs',
        icon: 'FileX',
        problem: {
          es: 'Documentos perdidos',
          en: 'Lost documents'
        },
        consequence: {
          es: 'Retrasos en contratación',
          en: 'Hiring delays'
        }
      },
      {
        id: 'manual-onboarding',
        icon: 'ClipboardList',
        problem: {
          es: 'Onboarding manual',
          en: 'Manual onboarding'
        },
        consequence: {
          es: 'Procesos inconsistentes',
          en: 'Inconsistent processes'
        }
      },
      {
        id: 'no-tracking',
        icon: 'EyeOff',
        problem: {
          es: 'Sin seguimiento',
          en: 'No tracking'
        },
        consequence: {
          es: 'Tareas olvidadas',
          en: 'Forgotten tasks'
        }
      }
    ],
    transformations: [
      {
        before: {
          icon: 'FileText',
          text: {
            es: 'Solicitud manual',
            en: 'Manual request'
          }
        },
        after: {
          icon: 'Send',
          text: {
            es: 'Envío automático',
            en: 'Automatic sending'
          }
        }
      },
      {
        before: {
          icon: 'FileX',
          text: {
            es: 'Documentos perdidos',
            en: 'Lost documents'
          }
        },
        after: {
          icon: 'FolderCheck',
          text: {
            es: 'Todo centralizado',
            en: 'Everything centralized'
          }
        }
      },
      {
        before: {
          icon: 'ClipboardList',
          text: {
            es: 'Onboarding manual',
            en: 'Manual onboarding'
          }
        },
        after: {
          icon: 'Bot',
          text: {
            es: 'Onboarding automático',
            en: 'Automatic onboarding'
          }
        }
      },
      {
        before: {
          icon: 'EyeOff',
          text: {
            es: 'Sin seguimiento',
            en: 'No tracking'
          }
        },
        after: {
          icon: 'BarChart',
          text: {
            es: 'Seguimiento completo',
            en: 'Complete tracking'
          }
        }
      }
    ],
    automationSteps: [
      {
        id: 'register',
        icon: 'UserPlus',
        description: {
          es: 'Se registra el nuevo empleado',
          en: 'New employee registered'
        }
      },
      {
        id: 'send-docs',
        icon: 'Mail',
        description: {
          es: 'Se envían documentos automáticamente',
          en: 'Documents sent automatically'
        }
      },
      {
        id: 'validate',
        icon: 'FileCheck',
        description: {
          es: 'Se validan firmas digitales',
          en: 'Digital signatures validated'
        }
      },
      {
        id: 'schedule',
        icon: 'BookOpen',
        description: {
          es: 'Se programa onboarding',
          en: 'Onboarding scheduled'
        }
      },
      {
        id: 'access',
        icon: 'Key',
        description: {
          es: 'Se crean accesos',
          en: 'Access created'
        }
      },
      {
        id: 'track',
        icon: 'ListChecks',
        description: {
          es: 'Se hace seguimiento automático',
          en: 'Automatic tracking'
        }
      }
    ],
    beforeAfter: {
      before: {
        es: 'El equipo de RRHH dedicaba horas a tareas administrativas repetitivas',
        en: 'HR team spent hours on repetitive administrative tasks'
      },
      after: {
        es: 'El equipo se enfoca en estrategia y desarrollo del talento',
        en: 'The team focuses on strategy and talent development'
      }
    },
    benefits: {
      es: [
        'Procesos estandarizados',
        'Menos tareas repetitivas',
        'Menos errores operativos',
        'Mejor experiencia para nuevos empleados'
      ],
      en: [
        'Standardized processes',
        'Fewer repetitive tasks',
        'Fewer operational errors',
        'Better experience for new employees'
      ]
    }
  },

  // OPERACIONES
  {
    id: 'operations',
    name: {
      es: 'Operaciones',
      en: 'Operations'
    },
    icon: 'Settings',
    color: 'orange',
    problemDescription: {
      es: 'Los equipos realizan tareas repetitivas entre múltiples sistemas.',
      en: 'Teams perform repetitive tasks across multiple systems.'
    },
    problemSteps: [
      {
        id: 'request',
        icon: 'FileInput',
        problem: {
          es: 'Solicitud interna',
          en: 'Internal request'
        },
        consequence: {
          es: '',
          en: ''
        }
      },
      {
        id: 'manual-validation',
        icon: 'CheckSquare',
        problem: {
          es: 'Validación manual',
          en: 'Manual validation'
        },
        consequence: {
          es: 'Cuellos de botella',
          en: 'Bottlenecks'
        }
      },
      {
        id: 'data-entry',
        icon: 'Copy',
        problem: {
          es: 'Ingreso en múltiples sistemas',
          en: 'Entry in multiple systems'
        },
        consequence: {
          es: 'Datos duplicados',
          en: 'Duplicate data'
        }
      },
      {
        id: 'errors',
        icon: 'AlertOctagon',
        problem: {
          es: 'Errores de transcripción',
          en: 'Transcription errors'
        },
        consequence: {
          es: 'Información inconsistente',
          en: 'Inconsistent information'
        }
      },
      {
        id: 'delays',
        icon: 'Timer',
        problem: {
          es: 'Retrasos operativos',
          en: 'Operational delays'
        },
        consequence: {
          es: 'Procesos lentos',
          en: 'Slow processes'
        }
      }
    ],
    transformations: [
      {
        before: {
          icon: 'CheckSquare',
          text: {
            es: 'Validación manual',
            en: 'Manual validation'
          }
        },
        after: {
          icon: 'Bot',
          text: {
            es: 'Validación automática',
            en: 'Automatic validation'
          }
        }
      },
      {
        before: {
          icon: 'Copy',
          text: {
            es: 'Múltiples sistemas',
            en: 'Multiple systems'
          }
        },
        after: {
          icon: 'Link',
          text: {
            es: 'Sistemas conectados',
            en: 'Connected systems'
          }
        }
      },
      {
        before: {
          icon: 'AlertOctagon',
          text: {
            es: 'Errores de transcripción',
            en: 'Transcription errors'
          }
        },
        after: {
          icon: 'CheckCircle',
          text: {
            es: 'Datos consistentes',
            en: 'Consistent data'
          }
        }
      },
      {
        before: {
          icon: 'Timer',
          text: {
            es: 'Retrasos operativos',
            en: 'Operational delays'
          }
        },
        after: {
          icon: 'Zap',
          text: {
            es: 'Procesos ágiles',
            en: 'Agile processes'
          }
        }
      }
    ],
    automationSteps: [
      {
        id: 'receive',
        icon: 'Inbox',
        description: {
          es: 'Se recibe la solicitud',
          en: 'Request received'
        }
      },
      {
        id: 'validate',
        icon: 'ShieldCheck',
        description: {
          es: 'Se valida automáticamente',
          en: 'Automatically validated'
        }
      },
      {
        id: 'sync',
        icon: 'GitBranch',
        description: {
          es: 'Se sincronizan sistemas',
          en: 'Systems synchronized'
        }
      },
      {
        id: 'create-task',
        icon: 'ListTodo',
        description: {
          es: 'Se crea tarea automática',
          en: 'Automatic task created'
        }
      },
      {
        id: 'notify',
        icon: 'BellRing',
        description: {
          es: 'Se notifica al responsable',
          en: 'Responsible notified'
        }
      },
      {
        id: 'track',
        icon: 'TrendingUp',
        description: {
          es: 'Se hace seguimiento completo',
          en: 'Complete tracking'
        }
      }
    ],
    beforeAfter: {
      before: {
        es: 'El equipo perdía tiempo copiando información entre sistemas',
        en: 'The team wasted time copying information between systems'
      },
      after: {
        es: 'El equipo se enfoca en optimización y mejora continua',
        en: 'The team focuses on optimization and continuous improvement'
      }
    },
    benefits: {
      es: [
        'Menos cuellos de botella',
        'Mayor trazabilidad',
        'Procesos consistentes',
        'Mejor uso del tiempo'
      ],
      en: [
        'Fewer bottlenecks',
        'Greater traceability',
        'Consistent processes',
        'Better use of time'
      ]
    }
  }
];
