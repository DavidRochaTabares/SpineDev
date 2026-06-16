// Integration Playground Data
// Enfoque: Capacidades desbloqueadas, NO tecnologías

export interface Integration {
  id: string;
  name: string;
  category: {
    es: string;
    en: string;
  };
  icon: string; // Nombre del icono de Lucide
  color: string;
  problem: {
    es: string;
    en: string;
  };
  capability: {
    es: string;
    en: string;
  };
  useCases: {
    es: string[];
    en: string[];
  };
  benefits: {
    es: string[];
    en: string[];
  };
  component: string; // Nombre del componente feature
}

export const integrations: Integration[] = [
  {
    id: 'openai',
    name: 'OpenAI',
    category: {
      es: 'Inteligencia Artificial',
      en: 'Artificial Intelligence'
    },
    icon: 'Bot',
    color: 'emerald',
    problem: {
      es: 'Tu equipo responde las mismas preguntas repetidamente',
      en: 'Your team answers the same questions repeatedly'
    },
    capability: {
      es: 'Asistente IA',
      en: 'AI Assistant'
    },
    useCases: {
      es: [
        'Atención al cliente',
        'Asistentes virtuales',
        'Generación de respuestas',
        'Búsqueda de información'
      ],
      en: [
        'Customer support',
        'Virtual assistants',
        'Response generation',
        'Information search'
      ]
    },
    benefits: {
      es: [
        'Asistentes virtuales',
        'Atención automatizada',
        'Análisis de texto',
        'IA personalizada'
      ],
      en: [
        'Virtual assistants',
        'Automated support',
        'Text analysis',
        'Custom AI'
      ]
    },
    component: 'OpenAIFeature'
  },
  {
    id: 'twilio',
    name: 'Twilio',
    category: {
      es: 'Comunicaciones',
      en: 'Communications'
    },
    icon: 'Phone',
    color: 'red',
    problem: {
      es: 'Necesitas comunicarte con clientes en tiempo real',
      en: 'You need to communicate with customers in real-time'
    },
    capability: {
      es: 'Comunicaciones',
      en: 'Communications'
    },
    useCases: {
      es: [
        'SMS',
        'Recordatorios',
        'Videollamadas',
        'Verificaciones'
      ],
      en: [
        'SMS',
        'Reminders',
        'Video calls',
        'Verifications'
      ]
    },
    benefits: {
      es: [
        'Videollamadas',
        'SMS y notificaciones',
        'Verificaciones',
        'Comunicación en tiempo real'
      ],
      en: [
        'Video calls',
        'SMS and notifications',
        'Verifications',
        'Real-time communication'
      ]
    },
    component: 'TwilioFeature'
  },
  {
    id: 'stripe',
    name: 'Stripe',
    category: {
      es: 'Pagos',
      en: 'Payments'
    },
    icon: 'CreditCard',
    color: 'purple',
    problem: {
      es: 'Procesar pagos es complejo y requiere infraestructura',
      en: 'Processing payments is complex and requires infrastructure'
    },
    capability: {
      es: 'Pagos',
      en: 'Payments'
    },
    useCases: {
      es: [
        'Cobros online',
        'Suscripciones',
        'Facturación'
      ],
      en: [
        'Online payments',
        'Subscriptions',
        'Invoicing'
      ]
    },
    benefits: {
      es: [
        'Cobros online',
        'Suscripciones',
        'Facturación',
        'Pagos internacionales'
      ],
      en: [
        'Online payments',
        'Subscriptions',
        'Invoicing',
        'International payments'
      ]
    },
    component: 'StripeFeature'
  },
  {
    id: 'google-calendar',
    name: 'Google Calendar',
    category: {
      es: 'Productividad',
      en: 'Productivity'
    },
    icon: 'Calendar',
    color: 'blue',
    problem: {
      es: 'Coordinar reuniones consume tiempo operativo',
      en: 'Coordinating meetings consumes operational time'
    },
    capability: {
      es: 'Agenda',
      en: 'Calendar'
    },
    useCases: {
      es: [
        'Agendamiento',
        'Reservas',
        'Disponibilidad'
      ],
      en: [
        'Scheduling',
        'Bookings',
        'Availability'
      ]
    },
    benefits: {
      es: [
        'Agendamiento',
        'Reservas',
        'Disponibilidad',
        'Gestión de reuniones'
      ],
      en: [
        'Scheduling',
        'Bookings',
        'Availability',
        'Meeting management'
      ]
    },
    component: 'GoogleCalendarFeature'
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    category: {
      es: 'Mensajería',
      en: 'Messaging'
    },
    icon: 'MessageCircle',
    color: 'green',
    problem: {
      es: 'Tus clientes prefieren WhatsApp para comunicarse',
      en: 'Your customers prefer WhatsApp for communication'
    },
    capability: {
      es: 'Mensajería',
      en: 'Messaging'
    },
    useCases: {
      es: [
        'Soporte',
        'Conversaciones',
        'Seguimiento comercial'
      ],
      en: [
        'Support',
        'Conversations',
        'Sales follow-up'
      ]
    },
    benefits: {
      es: [
        'Atención omnicanal',
        'Soporte directo',
        'Seguimiento',
        'Conversaciones'
      ],
      en: [
        'Omnichannel support',
        'Direct support',
        'Follow-up',
        'Conversations'
      ]
    },
    component: 'WhatsAppFeature'
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    category: {
      es: 'CRM',
      en: 'CRM'
    },
    icon: 'Users',
    color: 'orange',
    problem: {
      es: 'Pierdes oportunidades por falta de organización comercial',
      en: 'You lose opportunities due to lack of sales organization'
    },
    capability: {
      es: 'CRM',
      en: 'CRM'
    },
    useCases: {
      es: [
        'Gestión de leads',
        'Pipeline de ventas',
        'Seguimiento comercial'
      ],
      en: [
        'Lead management',
        'Sales pipeline',
        'Sales tracking'
      ]
    },
    benefits: {
      es: [
        'Gestión de leads',
        'Pipeline de ventas',
        'Seguimiento de clientes',
        'Organización comercial'
      ],
      en: [
        'Lead management',
        'Sales pipeline',
        'Customer tracking',
        'Sales organization'
      ]
    },
    component: 'HubSpotFeature'
  }
];
