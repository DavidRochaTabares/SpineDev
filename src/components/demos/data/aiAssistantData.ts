export interface SuggestedQuestion {
  id: string;
  text: string;
  icon: string;
}

export interface ResponseData {
  keywords: string[];
  response: string;
  followUpQuestions?: SuggestedQuestion[];
}

export const initialSuggestedQuestions: SuggestedQuestion[] = [
  {
    id: 'customer-service',
    text: '¿Cómo puede ayudar en atención al cliente?',
    icon: '💬'
  },
  {
    id: 'sales-team',
    text: '¿Puede asistir a mi equipo de ventas?',
    icon: '💼'
  },
  {
    id: 'documents',
    text: '¿Qué hace con documentos empresariales?',
    icon: '📄'
  },
  {
    id: 'operations',
    text: '¿Cómo optimiza operaciones internas?',
    icon: '⚙️'
  },
  {
    id: 'integration',
    text: '¿Puede integrarse con mis sistemas actuales?',
    icon: '🔗'
  },
  {
    id: 'case-study',
    text: 'Muéstrame un caso de uso real',
    icon: '🚀'
  }
];

export const welcomeMessage = `👋 Hola, soy tu Asistente de IA Empresarial.

Puedo mostrarte cómo la inteligencia artificial puede transformar diferentes áreas de tu negocio.

¿Sobre qué te gustaría saber más?`;

export const responses: Record<string, ResponseData> = {
  customerService: {
    keywords: ['atención', 'cliente', 'soporte', 'servicio', 'consultas'],
    response: `🤖 Un asistente de IA puede transformar tu atención al cliente:

✅ Responde preguntas frecuentes 24/7
✅ Resuelve consultas sobre productos/servicios
✅ Agenda citas y seguimientos
✅ Escala automáticamente en picos de demanda
✅ Transfiere casos complejos a humanos

Ejemplo real: E-commerce que redujo tiempo de respuesta de 30 minutos a menos de 1 minuto.

¿Tu empresa recibe muchas consultas repetitivas?`,
    followUpQuestions: [
      {
        id: 'integration',
        text: '¿Puede integrarse con mis sistemas actuales?',
        icon: '🔗'
      },
      {
        id: 'pricing',
        text: '¿Cuánto cuesta implementarlo?',
        icon: '💰'
      }
    ]
  },

  salesTeam: {
    keywords: ['ventas', 'vendedores', 'comercial', 'leads', 'prospectos'],
    response: `🤖 Tu equipo de ventas puede tener un asistente que:

✅ Califica leads automáticamente
✅ Responde consultas de productos al instante
✅ Genera cotizaciones personalizadas
✅ Hace seguimiento de prospectos
✅ Actualiza el CRM automáticamente

Beneficio: Vendedores se enfocan en cerrar, no en responder preguntas básicas.

¿Quieres saber cómo se integra con tu CRM?`,
    followUpQuestions: [
      {
        id: 'integration',
        text: '¿Puede integrarse con mis sistemas actuales?',
        icon: '🔗'
      },
      {
        id: 'case-study',
        text: 'Muéstrame un caso de uso real',
        icon: '🚀'
      }
    ]
  },

  documents: {
    keywords: ['documentos', 'archivos', 'pdf', 'contratos', 'manuales', 'políticas'],
    response: `🤖 Imagina poder "hablar" con tus documentos:

✅ Sube contratos, manuales, políticas
✅ Pregunta en lenguaje natural
✅ Obtén respuestas con referencias exactas
✅ Extrae datos específicos al instante
✅ Compara información entre documentos

Ejemplo: Equipo legal que encuentra cláusulas en segundos en lugar de horas.

¿Tu empresa maneja muchos documentos?`,
    followUpQuestions: [
      {
        id: 'tech',
        text: '¿Qué tecnologías usan?',
        icon: '🔧'
      },
      {
        id: 'pricing',
        text: '¿Cuánto tiempo y costo tiene?',
        icon: '⏱️'
      }
    ]
  },

  operations: {
    keywords: ['operaciones', 'procesos', 'internos', 'empleados', 'eficiencia', 'automatizar'],
    response: `🤖 Optimiza operaciones con un asistente interno:

✅ Responde preguntas de empleados (HR, IT, procesos)
✅ Automatiza reportes y análisis
✅ Monitorea KPIs y alerta anomalías
✅ Asiste en onboarding de nuevos empleados
✅ Centraliza conocimiento de la empresa

Beneficio: Reduce interrupciones y mejora eficiencia.

¿Qué procesos internos consumen más tiempo?`,
    followUpQuestions: [
      {
        id: 'case-study',
        text: 'Muéstrame un caso de uso real',
        icon: '🚀'
      },
      {
        id: 'pricing',
        text: '¿Cuánto cuesta implementarlo?',
        icon: '💰'
      }
    ]
  },

  integration: {
    keywords: ['integrar', 'integración', 'sistemas', 'crm', 'erp', 'api', 'conectar'],
    response: `🤖 ¡Absolutamente! Tenemos experiencia integrando con:

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
    followUpQuestions: [
      {
        id: 'tech',
        text: '¿Qué tecnologías usan?',
        icon: '🔧'
      },
      {
        id: 'pricing',
        text: '¿Cuánto tiempo toma?',
        icon: '⏱️'
      }
    ]
  },

  caseStudy: {
    keywords: ['caso', 'ejemplo', 'real', 'éxito', 'cliente', 'proyecto'],
    response: `🤖 Te comparto un caso de implementación:

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
    followUpQuestions: [
      {
        id: 'pricing',
        text: '¿Cuánto cuesta algo así?',
        icon: '💰'
      },
      {
        id: 'tech',
        text: '¿Qué tecnologías usan?',
        icon: '🔧'
      }
    ]
  },

  pricing: {
    keywords: ['precio', 'costo', 'cuánto', 'inversión', 'presupuesto', 'tiempo'],
    response: `🤖 Excelente pregunta. Aquí está el desglose:

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
    followUpQuestions: [
      {
        id: 'tech',
        text: '¿Qué tecnologías usan?',
        icon: '🔧'
      },
      {
        id: 'case-study',
        text: 'Muéstrame un caso de éxito',
        icon: '🚀'
      }
    ]
  },

  technology: {
    keywords: ['tecnología', 'tecnologías', 'stack', 'herramientas', 'framework', 'gpt'],
    response: `🤖 Usamos el stack tecnológico más avanzado:

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
    followUpQuestions: [
      {
        id: 'pricing',
        text: '¿Cuánto cuesta implementarlo?',
        icon: '💰'
      },
      {
        id: 'case-study',
        text: 'Muéstrame un caso de uso real',
        icon: '🚀'
      }
    ]
  }
};

export const defaultResponse: ResponseData = {
  keywords: [],
  response: `🤖 Esa es una excelente pregunta. 

Aunque no tengo una respuesta específica preparada para eso en esta demo, puedo ayudarte con:

• Casos de uso empresariales
• Integración con sistemas
• Precios y tiempos de implementación
• Tecnologías que utilizamos
• Casos de éxito reales

¿Sobre cuál de estos temas te gustaría saber más?`,
  followUpQuestions: [
    {
      id: 'customer-service',
      text: '¿Cómo puede ayudar en atención al cliente?',
      icon: '💬'
    },
    {
      id: 'pricing',
      text: '¿Cuánto cuesta implementarlo?',
      icon: '💰'
    }
  ]
};

export function findResponse(userMessage: string): ResponseData {
  const normalized = userMessage.toLowerCase();
  
  for (const [key, data] of Object.entries(responses)) {
    if (data.keywords.some(keyword => normalized.includes(keyword))) {
      return data;
    }
  }
  
  return defaultResponse;
}
