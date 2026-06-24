import type { APIRoute } from 'astro';
import type { ChatMessage, DemoType, ServiceType } from '../../types/lead.types';
import { getOpenAIService } from '../../services/openaiService';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  let language: 'es' | 'en' = 'es';
  
  try {
    // Leer el body
    let body;
    try {
      body = await request.json();
    } catch (jsonError) {
      console.error('Error parsing JSON:', jsonError);
      return new Response(JSON.stringify({ 
        error: 'Invalid JSON',
        message: 'Error al procesar la solicitud'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const { messages, visitedDemos = [], language: reqLanguage = 'es' } = body;
    language = reqLanguage;

    if (!messages || !Array.isArray(messages)) {
      return new Response(JSON.stringify({ 
        error: 'Invalid messages',
        message: 'Mensajes inválidos'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const openAIService = getOpenAIService();
    
    if (!openAIService.isConfigured()) {
      return new Response(JSON.stringify({ 
        error: 'API key not configured',
        message: language === 'es' 
          ? 'Lo siento, el servicio no está disponible en este momento.'
          : 'Sorry, the service is not available at this time.'
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Obtener el último mensaje del usuario
    const userMessage = messages.filter((m: ChatMessage) => m.role === 'user').pop()?.content || '';
    
    if (!userMessage) {
      return new Response(JSON.stringify({ 
        error: 'No user message',
        message: 'No se encontró mensaje del usuario'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Construir historial de conversación
    const conversationHistory = messages.slice(0, -1).map((m: ChatMessage) => ({
      role: m.role,
      content: m.content
    }));

    // Crear prompt personalizado con contexto de demos
    const systemPrompt = getSystemPrompt(visitedDemos, language);
    const historyWithSystem = [
      { role: 'system' as const, content: systemPrompt },
      ...conversationHistory
    ];

    // Llamar a OpenAI usando el servicio existente
    const assistantMessage = await openAIService.sendMessage(
      userMessage,
      historyWithSystem,
      language
    );

    // Detectar servicio y generar resumen
    const detectedService = detectService(messages, assistantMessage);
    const projectSummary = generateProjectSummary(messages);

    return new Response(JSON.stringify({
      message: assistantMessage,
      detectedService,
      projectSummary
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Chat API error:', error);
    return new Response(JSON.stringify({ 
      error: 'Failed to process chat',
      message: language === 'es' 
        ? 'Lo siento, hubo un error. Por favor intenta de nuevo.'
        : 'Sorry, there was an error. Please try again.'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

function getSystemPrompt(visitedDemos: DemoType[], language: 'es' | 'en'): string {
  const demosContext = visitedDemos.length > 0 
    ? `El usuario ha visitado las siguientes demos: ${visitedDemos.join(', ')}.`
    : '';

  if (language === 'es') {
    return `Eres un asistente comercial de SpineDev, una empresa de desarrollo de software.

Tu objetivo es mantener una conversación natural y profesional para:
1. Entender qué necesita el usuario (primera respuesta)
2. Hacer 1-2 preguntas específicas para clarificar el proyecto (segunda respuesta)
3. Después de 2-3 intercambios, pedir sus datos de contacto de forma natural

${demosContext}

Servicios de SpineDev:
- Inteligencia Artificial: Asistentes, automatización inteligente, análisis de datos
- Automatización: Workflows, procesos automáticos, eficiencia operativa
- Integraciones: Conectar sistemas, APIs, sincronización de datos
- Desarrollo Web: Sitios corporativos, e-commerce, dashboards
- Software Empresarial: Sistemas internos personalizados, ERPs a medida
- MVP & SaaS: Productos digitales, validación de ideas, plataformas

Reglas:
- Responde en español, máximo 3-4 frases
- Primera respuesta: Confirma que entendiste y haz UNA pregunta específica
- Segunda respuesta: Profundiza con otra pregunta relevante
- Tercera respuesta: Resume el proyecto y di algo como "Me gustaría ayudarte con esto. ¿Podrías compartir tu nombre, email y WhatsApp para que un especialista revise tu caso?"
- Sé conversacional pero profesional
- NO pidas datos antes del tercer intercambio
- Si el usuario pregunta por WhatsApp, menciona: "También puedes escribirnos directamente al WhatsApp"`;
  } else {
    return `You are a sales assistant for SpineDev, a software development company.

Your goal is to:
1. Briefly understand what the user needs
2. Identify the most suitable service
3. Build trust by showing you understood the project
4. Quickly lead to contact data capture

${demosContext}

SpineDev Services:
- Artificial Intelligence: Assistants, intelligent automation, data analysis
- Automation: Workflows, automatic processes, operational efficiency
- Integrations: Connect systems, APIs, data synchronization
- Web Development: Corporate sites, e-commerce, dashboards
- Business Software: Custom internal systems, tailored ERPs
- MVP & SaaS: Digital products, idea validation, platforms

Rules:
- Respond in English
- Maximum 3-4 sentences
- Be direct and professional
- Identify the probable service
- Summarize what you understood
- Suggest capturing their data to review the case in more detail
- DO NOT maintain long conversations
- DO NOT answer general questions endlessly`;
  }
}

function detectService(messages: ChatMessage[], assistantResponse: string): ServiceType {
  const text = messages.map(m => m.content).join(' ').toLowerCase() + ' ' + assistantResponse.toLowerCase();

  if (text.includes('ia') || text.includes('inteligencia artificial') || text.includes('ai') || text.includes('artificial intelligence') || text.includes('chatbot') || text.includes('asistente')) {
    return 'ai';
  }
  if (text.includes('automatiz') || text.includes('automat') || text.includes('workflow') || text.includes('proceso')) {
    return 'automation';
  }
  if (text.includes('integra') || text.includes('conectar') || text.includes('api') || text.includes('sincroniz')) {
    return 'integrations';
  }
  if (text.includes('web') || text.includes('sitio') || text.includes('página') || text.includes('ecommerce') || text.includes('tienda')) {
    return 'web-development';
  }
  if (text.includes('erp') || text.includes('crm') || text.includes('sistema interno') || text.includes('software empresarial') || text.includes('gestión')) {
    return 'business-software';
  }
  if (text.includes('mvp') || text.includes('saas') || text.includes('producto') || text.includes('plataforma') || text.includes('idea') || text.includes('startup')) {
    return 'mvp-saas';
  }

  return 'other';
}

function generateProjectSummary(messages: ChatMessage[]): string {
  const userMessages = messages.filter(m => m.role === 'user').map(m => m.content).join(' ');
  return userMessages.substring(0, 300);
}
