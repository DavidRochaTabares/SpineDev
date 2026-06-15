export interface SuggestedQuestion {
  id: string;
  text: { es: string; en: string };
  icon: string;
}

export interface ResponseData {
  keywords: string[];
  response: { es: string; en: string };
  followUpQuestions?: SuggestedQuestion[];
}

export const initialSuggestedQuestions: SuggestedQuestion[] = [
  {
    id: 'customer-service',
    text: {
      es: '¿Cómo puede ayudar en atención al cliente?',
      en: 'How can it help with customer service?'
    },
    icon: '💬'
  },
  {
    id: 'sales-team',
    text: {
      es: '¿Puede asistir a mi equipo de ventas?',
      en: 'Can it assist my sales team?'
    },
    icon: '💼'
  },
  {
    id: 'documents',
    text: {
      es: '¿Qué hace con documentos empresariales?',
      en: 'What does it do with business documents?'
    },
    icon: '📄'
  },
  {
    id: 'operations',
    text: {
      es: '¿Cómo optimiza operaciones internas?',
      en: 'How does it optimize internal operations?'
    },
    icon: '⚙️'
  },
  {
    id: 'integration',
    text: {
      es: '¿Puede integrarse con mis sistemas actuales?',
      en: 'Can it integrate with my current systems?'
    },
    icon: '🔗'
  },
  {
    id: 'case-study',
    text: {
      es: 'Muéstrame un caso de uso real',
      en: 'Show me a real use case'
    },
    icon: '🚀'
  }
];

export const welcomeMessage = {
  es: `👋 Hola, soy tu Asistente de IA Empresarial.

Puedo mostrarte cómo la inteligencia artificial puede transformar diferentes áreas de tu negocio.

¿Sobre qué te gustaría saber más?`,
  en: `👋 Hello, I'm your AI Business Assistant.

I can show you how artificial intelligence can transform different areas of your business.

What would you like to know more about?`
};

export const responses: Record<string, ResponseData> = {
  customerService: {
    keywords: ['atención', 'cliente', 'soporte', 'servicio', 'consultas', 'customer', 'service', 'support'],
    response: {
      es: `🤖 Un asistente de IA puede transformar tu atención al cliente:

✅ Responde preguntas frecuentes 24/7
✅ Resuelve consultas sobre productos/servicios
✅ Agenda citas y seguimientos
✅ Escala automáticamente en picos de demanda
✅ Transfiere casos complejos a humanos

Ejemplo real: E-commerce que redujo tiempo de respuesta de 30 minutos a menos de 1 minuto.

¿Tu empresa recibe muchas consultas repetitivas?`,
      en: `🤖 An AI assistant can transform your customer service:

✅ Answers frequently asked questions 24/7
✅ Resolves product/service inquiries
✅ Schedules appointments and follow-ups
✅ Scales automatically during demand peaks
✅ Transfers complex cases to humans

Real example: E-commerce that reduced response time from 30 minutes to less than 1 minute.

Does your company receive many repetitive inquiries?`
    },
    followUpQuestions: [
      {
        id: 'integration',
        text: {
          es: '¿Puede integrarse con mis sistemas actuales?',
          en: 'Can it integrate with my current systems?'
        },
        icon: '🔗'
      },
      {
        id: 'pricing',
        text: {
          es: '¿Cuánto cuesta implementarlo?',
          en: 'How much does it cost to implement?'
        },
        icon: '💰'
      }
    ]
  },

  salesTeam: {
    keywords: ['ventas', 'vendedores', 'comercial', 'leads', 'prospectos', 'sales', 'team', 'prospects'],
    response: {
      es: `🤖 Tu equipo de ventas puede tener un asistente que:

✅ Califica leads automáticamente
✅ Responde consultas de productos al instante
✅ Genera cotizaciones personalizadas
✅ Hace seguimiento de prospectos
✅ Actualiza el CRM automáticamente

Beneficio: Vendedores se enfocan en cerrar, no en responder preguntas básicas.

¿Quieres saber cómo se integra con tu CRM?`,
      en: `🤖 Your sales team can have an assistant that:

✅ Automatically qualifies leads
✅ Instantly responds to product inquiries
✅ Generates personalized quotes
✅ Follows up with prospects
✅ Automatically updates CRM

Benefit: Salespeople focus on closing, not answering basic questions.

Want to know how it integrates with your CRM?`
    },
    followUpQuestions: [
      {
        id: 'integration',
        text: {
          es: '¿Puede integrarse con mis sistemas actuales?',
          en: 'Can it integrate with my current systems?'
        },
        icon: '🔗'
      },
      {
        id: 'case-study',
        text: {
          es: 'Muéstrame un caso de uso real',
          en: 'Show me a real use case'
        },
        icon: '🚀'
      }
    ]
  },

  documents: {
    keywords: ['documentos', 'archivos', 'pdf', 'contratos', 'manuales', 'políticas', 'documents', 'files', 'contracts'],
    response: {
      es: `🤖 Imagina poder "hablar" con tus documentos:

✅ Sube contratos, manuales, políticas
✅ Pregunta en lenguaje natural
✅ Obtén respuestas con referencias exactas
✅ Extrae datos específicos al instante
✅ Compara información entre documentos

Ejemplo: Equipo legal que encuentra cláusulas en segundos en lugar de horas.

¿Tu empresa maneja muchos documentos?`,
      en: `🤖 Imagine being able to "talk" to your documents:

✅ Upload contracts, manuals, policies
✅ Ask questions in natural language
✅ Get answers with exact references
✅ Extract specific data instantly
✅ Compare information between documents

Example: Legal team that finds clauses in seconds instead of hours.

Does your company handle many documents?`
    },
    followUpQuestions: [
      {
        id: 'tech',
        text: {
          es: '¿Qué tecnologías usan?',
          en: 'What technologies do you use?'
        },
        icon: '🔧'
      },
      {
        id: 'pricing',
        text: {
          es: '¿Cuánto tiempo y costo tiene?',
          en: 'How much time and cost does it have?'
        },
        icon: '⏱️'
      }
    ]
  },

  operations: {
    keywords: ['operaciones', 'procesos', 'internos', 'empleados', 'eficiencia', 'automatizar', 'operations', 'processes', 'efficiency'],
    response: {
      es: `🤖 Optimiza operaciones con un asistente interno:

✅ Responde preguntas de empleados (HR, IT, procesos)
✅ Automatiza reportes y análisis
✅ Monitorea KPIs y alerta anomalías
✅ Asiste en onboarding de nuevos empleados
✅ Centraliza conocimiento de la empresa

Beneficio: Reduce interrupciones y mejora eficiencia.

¿Qué procesos internos consumen más tiempo?`,
      en: `🤖 Optimize operations with an internal assistant:

✅ Answers employee questions (HR, IT, processes)
✅ Automates reports and analysis
✅ Monitors KPIs and alerts anomalies
✅ Assists in onboarding new employees
✅ Centralizes company knowledge

Benefit: Reduces interruptions and improves efficiency.

Which internal processes consume the most time?`
    },
    followUpQuestions: [
      {
        id: 'case-study',
        text: {
          es: 'Muéstrame un caso de uso real',
          en: 'Show me a real use case'
        },
        icon: '🚀'
      },
      {
        id: 'pricing',
        text: {
          es: '¿Cuánto cuesta implementarlo?',
          en: 'How much does it cost to implement?'
        },
        icon: '💰'
      }
    ]
  },

  integration: {
    keywords: ['integrar', 'integración', 'sistemas', 'crm', 'erp', 'api', 'conectar', 'integrate', 'systems'],
    response: {
      es: `🤖 ¡Absolutamente! Tenemos experiencia integrando con:

✅ CRMs Populares:
• Salesforce, HubSpot, Zoho CRM
• Pipedrive, Monday.com

🔌 Métodos de Integración:
• API nativa del CRM
• Webhooks bidireccionales
• Zapier/Make para conexiones rápidas
• Integración personalizada

📋 Funcionalidades:
• Crear/actualizar contactos automáticamente
• Registrar conversaciones en el CRM
• Acceder a datos del cliente en tiempo real
• Sincronización bidireccional

¿Qué CRM o sistemas están usando actualmente?`,
      en: `🤖 Absolutely! We have experience integrating with:

✅ Popular CRMs:
• Salesforce, HubSpot, Zoho CRM
• Pipedrive, Monday.com

🔌 Integration Methods:
• Native CRM API
• Bidirectional webhooks
• Zapier/Make for quick connections
• Custom integration

📋 Features:
• Automatically create/update contacts
• Log conversations in CRM
• Access customer data in real-time
• Bidirectional synchronization

What CRM or systems are you currently using?`
    },
    followUpQuestions: [
      {
        id: 'tech',
        text: {
          es: '¿Qué tecnologías usan?',
          en: 'What technologies do you use?'
        },
        icon: '🔧'
      },
      {
        id: 'pricing',
        text: {
          es: '¿Cuánto tiempo toma?',
          en: 'How long does it take?'
        },
        icon: '⏱️'
      }
    ]
  },

  caseStudy: {
    keywords: ['caso', 'ejemplo', 'real', 'éxito', 'cliente', 'proyecto', 'case', 'example', 'success'],
    response: {
      es: `🤖 Te comparto un caso de implementación:

📊 Empresa: Distribuidora (30 empleados)

Desafío:
• 150+ consultas diarias de clientes
• Equipo de 2 personas saturado
• Información dispersa en múltiples sistemas

Solución:
• Asistente IA integrado en WhatsApp y web
• Conectado a inventario y sistema de pedidos
• Respuestas instantáneas sobre stock y precios

Resultado:
• 70% de consultas resueltas automáticamente
• Equipo enfocado en casos complejos
• Clientes satisfechos con respuesta inmediata

Tiempo de implementación: 6 semanas

¿Te gustaría explorar una solución similar?`,
      en: `🤖 Let me share an implementation case:

📊 Company: Distributor (30 employees)

Challenge:
• 150+ daily customer inquiries
• Team of 2 people overwhelmed
• Information scattered across multiple systems

Solution:
• AI assistant integrated in WhatsApp and web
• Connected to inventory and order system
• Instant responses on stock and prices

Result:
• 70% of inquiries resolved automatically
• Team focused on complex cases
• Customers satisfied with immediate response

Implementation time: 6 weeks

Would you like to explore a similar solution?`
    },
    followUpQuestions: [
      {
        id: 'pricing',
        text: {
          es: '¿Cuánto cuesta algo así?',
          en: 'How much does something like this cost?'
        },
        icon: '💰'
      },
      {
        id: 'tech',
        text: {
          es: '¿Qué tecnologías usan?',
          en: 'What technologies do you use?'
        },
        icon: '🔧'
      }
    ]
  },

  pricing: {
    keywords: ['precio', 'costo', 'cuánto', 'inversión', 'presupuesto', 'tiempo', 'price', 'cost', 'investment', 'budget'],
    response: {
      es: `🤖 Excelente pregunta. Aquí está el desglose:

⏱️ Tiempo de Desarrollo:
• MVP Básico: 3-4 semanas
• Asistente Completo: 6-8 semanas
• Incluye: Diseño, desarrollo, entrenamiento y pruebas

💰 Inversión:
• Desde $4,000 USD para MVP
• $8,000-$15,000 USD para solución completa
• Incluye 3 meses de soporte

📊 ROI Típico:
• Recuperación de inversión: 4-6 meses
• Ahorro promedio: $2,000-$5,000/mes en costos operativos

¿Quieres que calculemos el ROI específico para tu caso?`,
      en: `🤖 Excellent question. Here's the breakdown:

⏱️ Development Time:
• Basic MVP: 3-4 weeks
• Complete Assistant: 6-8 weeks
• Includes: Design, development, training, and testing

💰 Investment:
• From $4,000 USD for MVP
• $8,000-$15,000 USD for complete solution
• Includes 3 months of support

📊 Typical ROI:
• Investment recovery: 4-6 months
• Average savings: $2,000-$5,000/month in operational costs

Would you like us to calculate the specific ROI for your case?`
    },
    followUpQuestions: [
      {
        id: 'tech',
        text: {
          es: '¿Qué tecnologías usan?',
          en: 'What technologies do you use?'
        },
        icon: '🔧'
      },
      {
        id: 'case-study',
        text: {
          es: 'Muéstrame un caso de éxito',
          en: 'Show me a success case'
        },
        icon: '🚀'
      }
    ]
  },

  technology: {
    keywords: ['tecnología', 'tecnologías', 'stack', 'herramientas', 'framework', 'gpt', 'technology', 'tools'],
    response: {
      es: `🤖 Usamos el stack tecnológico más avanzado:

🧠 Modelos de IA:
• OpenAI GPT-4 / GPT-4 Turbo
• Claude 3 (Anthropic)
• Modelos personalizados con fine-tuning

🔧 Framework:
• LangChain para orquestación
• Vector databases (Pinecone/Weaviate)
• Python + FastAPI backend

🌐 Integración:
• APIs REST
• Webhooks en tiempo real
• SDKs para React, Vue, Angular

🔒 Seguridad:
• Encriptación end-to-end
• Cumplimiento GDPR
• Datos en servidores seguros

Todas nuestras soluciones son escalables y production-ready.`,
      en: `🤖 We use the most advanced tech stack:

🧠 AI Models:
• OpenAI GPT-4 / GPT-4 Turbo
• Claude 3 (Anthropic)
• Custom models with fine-tuning

🔧 Framework:
• LangChain for orchestration
• Vector databases (Pinecone/Weaviate)
• Python + FastAPI backend

🌐 Integration:
• REST APIs
• Real-time webhooks
• SDKs for React, Vue, Angular

🔒 Security:
• End-to-end encryption
• GDPR compliance
• Data on secure servers

All our solutions are scalable and production-ready.`
    },
    followUpQuestions: [
      {
        id: 'pricing',
        text: {
          es: '¿Cuánto cuesta implementarlo?',
          en: 'How much does it cost to implement?'
        },
        icon: '💰'
      },
      {
        id: 'case-study',
        text: {
          es: 'Muéstrame un caso de uso real',
          en: 'Show me a real use case'
        },
        icon: '🚀'
      }
    ]
  }
};

export const defaultResponse: ResponseData = {
  keywords: [],
  response: {
    es: `🤖 Esa es una excelente pregunta. 

Aunque no tengo una respuesta específica preparada para eso en esta demo, puedo ayudarte con:

• Casos de uso empresariales
• Integración con sistemas
• Precios y tiempos de implementación
• Tecnologías que utilizamos
• Casos de éxito reales

¿Sobre cuál de estos temas te gustaría saber más?`,
    en: `🤖 That's an excellent question.

Although I don't have a specific answer prepared for that in this demo, I can help you with:

• Business use cases
• System integration
• Pricing and implementation times
• Technologies we use
• Real success cases

Which of these topics would you like to know more about?`
  },
  followUpQuestions: [
    {
      id: 'customer-service',
      text: {
        es: '¿Cómo puede ayudar en atención al cliente?',
        en: 'How can it help with customer service?'
      },
      icon: '💬'
    },
    {
      id: 'pricing',
      text: {
        es: '¿Cuánto cuesta implementarlo?',
        en: 'How much does it cost to implement?'
      },
      icon: '💰'
    }
  ]
};

export function findResponse(userMessage: string, language: 'es' | 'en' = 'es'): ResponseData {
  const normalized = userMessage.toLowerCase();
  
  for (const [key, data] of Object.entries(responses)) {
    if (data.keywords.some(keyword => normalized.includes(keyword))) {
      return data;
    }
  }
  
  return defaultResponse;
}
