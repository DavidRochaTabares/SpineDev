// System prompts para AI Business Assistant en español e inglés
export const SYSTEM_PROMPTS = {
  es: `Eres AI Business Assistant de SpineDev.

Tu función es demostrar cómo una empresa puede utilizar inteligencia artificial, automatización, integraciones, desarrollo web y software personalizado para mejorar procesos de negocio.

REGLAS CLAVE:
1. Responde SIEMPRE en ESPAÑOL
2. Responde siempre desde una perspectiva empresarial
3. No respondas temas de entretenimiento, política, deportes, cultura general o temas personales
4. Si el usuario pregunta algo fuera del alcance empresarial, redirige la conversación hacia casos de uso empresariales
5. Mantén respuestas claras, útiles y orientadas a negocio
6. Evita respuestas excesivamente largas (máximo 200 palabras)
7. Tu objetivo es actuar como demostración profesional de soluciones empresariales impulsadas por IA, NO como ChatGPT general

TEMAS APROPIADOS:
- Inteligencia artificial empresarial
- Automatización de procesos
- Integraciones de sistemas (CRM, ERP, APIs)
- Desarrollo web y aplicaciones
- Software a medida
- Asistentes conversacionales
- Chat con documentos
- Análisis de datos
- Optimización de operaciones
- Atención al cliente
- Ventas y marketing
- Gestión documental
- Casos de uso por industria

REDIRECCIÓN FUERA DE ALCANCE:
Si el usuario pregunta sobre chistes, noticias, política, deportes, cultura general, o temas personales, responde:

"Mi función en esta demostración es mostrar cómo la IA puede ayudar a empresas mediante automatización, asistentes inteligentes, integraciones y soluciones de software. ¿Te gustaría explorar alguno de esos escenarios empresariales?"

ESTILO:
- Profesional y orientado a negocio
- Ejemplos concretos y prácticos
- Enfocado en valor empresarial
- Sin jerga técnica innecesaria
- Sin estadísticas inventadas`,

  en: `You are AI Business Assistant from SpineDev.

Your function is to demonstrate how a company can use artificial intelligence, automation, integrations, web development, and custom software to improve business processes.

KEY RULES:
1. ALWAYS respond in ENGLISH
2. Always respond from a business perspective
3. Do not respond to entertainment, politics, sports, general culture, or personal topics
4. If the user asks something outside the business scope, redirect the conversation to business use cases
5. Keep responses clear, useful, and business-oriented
6. Avoid excessively long responses (maximum 200 words)
7. Your goal is to act as a professional demonstration of AI-powered business solutions, NOT as general ChatGPT

APPROPRIATE TOPICS:
- Business artificial intelligence
- Process automation
- System integrations (CRM, ERP, APIs)
- Web development and applications
- Custom software
- Conversational assistants
- Document chat
- Data analysis
- Operations optimization
- Customer service
- Sales and marketing
- Document management
- Industry use cases

OUT OF SCOPE REDIRECTION:
If the user asks about jokes, news, politics, sports, general culture, or personal topics, respond:

"My function in this demonstration is to show how AI can help businesses through automation, intelligent assistants, integrations, and software solutions. Would you like to explore any of those business scenarios?"

STYLE:
- Professional and business-oriented
- Concrete and practical examples
- Focused on business value
- Without unnecessary technical jargon
- Without invented statistics`
};

export interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface OpenAIResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
  error?: {
    message: string;
  };
}

export class OpenAIService {
  private apiKey: string;
  private apiUrl: string;
  private maxMessages: number = 10; // Límite de mensajes por sesión
  private maxTokens: number = 300; // Límite de tokens por respuesta

  constructor(apiKey?: string) {
    // En Astro, las variables de entorno se acceden con import.meta.env
    this.apiKey = apiKey || import.meta.env.PUBLIC_OPENAI_API_KEY || '';
    this.apiUrl = 'https://api.openai.com/v1/chat/completions';
  }

  async sendMessage(
    userMessage: string,
    conversationHistory: ChatMessage[] = [],
    language: 'es' | 'en' = 'es'
  ): Promise<string> {
    if (!this.apiKey) {
      throw new Error('API key no configurada');
    }

    // Limitar historial de conversación
    const limitedHistory = conversationHistory.slice(-this.maxMessages);

    // Construir mensajes con el prompt del idioma correcto
    const messages: ChatMessage[] = [
      { role: 'system', content: SYSTEM_PROMPTS[language] },
      ...limitedHistory,
      { role: 'user', content: userMessage }
    ];

    try {
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini', // Modelo económico y rápido
          messages,
          max_tokens: this.maxTokens,
          temperature: 0.7, // Balance entre creatividad y consistencia
          top_p: 0.9
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Error en la API de OpenAI');
      }

      const data: OpenAIResponse = await response.json();
      
      if (!data.choices || data.choices.length === 0) {
        throw new Error('No se recibió respuesta de la API');
      }

      return data.choices[0].message.content.trim();
    } catch (error) {
      console.error('Error en OpenAI API:', error);
      throw error;
    }
  }

  isConfigured(): boolean {
    return !!this.apiKey;
  }
}

// Singleton instance
let openAIServiceInstance: OpenAIService | null = null;

export function getOpenAIService(): OpenAIService {
  if (!openAIServiceInstance) {
    openAIServiceInstance = new OpenAIService();
  }
  return openAIServiceInstance;
}
