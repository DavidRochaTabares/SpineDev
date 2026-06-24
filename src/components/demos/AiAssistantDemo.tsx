import { useState, useEffect } from 'react';
import { RotateCcw } from 'lucide-react';
import ChatInterface from './shared/ChatInterface';
import MessageBubble from './shared/MessageBubble';
import TypingIndicator from './shared/TypingIndicator';
import SuggestedQuestions from './shared/SuggestedQuestions';
import ChatInput from './shared/ChatInput';
import DemoCTA from './shared/DemoCTA';
import { getOpenAIService, type ChatMessage } from '../../services/openaiService';
import { 
  initialSuggestedQuestions, 
  welcomeMessage,
  findResponse,
  type SuggestedQuestion 
} from './data/aiAssistantData.i18n';
import { demoTracking } from '../../services/demoTracking';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: string;
}

interface AiAssistantDemoProps {
  language?: 'es' | 'en';
}

const FALLBACK_MESSAGE = {
  es: "Actualmente la demostración no está disponible. Por favor intenta nuevamente en unos momentos.",
  en: "Currently the demonstration is not available. Please try again in a few moments."
};

export default function AiAssistantDemo({ language = 'es' }: AiAssistantDemoProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [suggestedQuestions, setSuggestedQuestions] = useState<SuggestedQuestion[]>(initialSuggestedQuestions);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [showCTA, setShowCTA] = useState(false);
  const [interactionCount, setInteractionCount] = useState(0);
  const [useFallback, setUseFallback] = useState(false);
  const [conversationHistory, setConversationHistory] = useState<ChatMessage[]>([]);
  const [enableAutoScroll, setEnableAutoScroll] = useState(false);

  useEffect(() => {
    demoTracking.track('ai');
    
    const timer = setTimeout(() => {
      addAssistantMessage(welcomeMessage[language]);
    }, 500);

    return () => clearTimeout(timer);
  }, [language]);

  const addMessage = (text: string, isUser: boolean) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser,
      timestamp: new Date().toLocaleTimeString('es-ES', { 
        hour: '2-digit', 
        minute: '2-digit' 
      })
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const addAssistantMessage = (text: string) => {
    addMessage(text, false);
  };

  const handleSendMessage = async (userMessage: string) => {
    addMessage(userMessage, true);
    setShowSuggestions(false);
    setIsTyping(true);
    
    const newInteractionCount = interactionCount + 1;
    setInteractionCount(newInteractionCount);

    // Agregar mensaje del usuario al historial
    const newUserMessage: ChatMessage = {
      role: 'user',
      content: userMessage
    };
    setConversationHistory(prev => [...prev, newUserMessage]);

    try {
      const openAIService = getOpenAIService();
      
      if (!openAIService.isConfigured() || useFallback) {
        throw new Error('API no configurada o usando fallback');
      }

      const response = await openAIService.sendMessage(userMessage, conversationHistory, language);
      
      setIsTyping(false);
      addAssistantMessage(response);

      // Agregar respuesta del asistente al historial
      const assistantMessage: ChatMessage = {
        role: 'assistant',
        content: response
      };
      setConversationHistory(prev => [...prev, assistantMessage]);

    } catch (error) {
      console.error('Error al obtener respuesta:', error);
      setIsTyping(false);
      setUseFallback(true);
      
      // Usar respuesta de fallback del sistema de datos
      const fallbackData = findResponse(userMessage, language);
      addAssistantMessage(fallbackData.response[language]);
      
      // Actualizar preguntas sugeridas si hay followUp
      if (fallbackData.followUpQuestions && fallbackData.followUpQuestions.length > 0) {
        setSuggestedQuestions(fallbackData.followUpQuestions);
        setShowSuggestions(true);
      }
    }

    checkForCTA(newInteractionCount, userMessage);
  };

  const checkForCTA = (count: number, message: string) => {
    const intentKeywords = [
      'agendar', 'consultoría', 'contacto', 'hablar', 'reunión',
      'implementar', 'contratar', 'precio', 'costo', 'presupuesto'
    ];
    
    const hasIntent = intentKeywords.some(keyword => 
      message.toLowerCase().includes(keyword)
    );

    if (count >= 3 || hasIntent) {
      setTimeout(() => {
        setShowCTA(true);
      }, 2000);
    }
  };

  const handleQuestionClick = (question: string) => {
    handleSendMessage(question);
  };

  const handleReset = () => {
    setMessages([]);
    setSuggestedQuestions(initialSuggestedQuestions);
    setShowSuggestions(true);
    setShowCTA(false);
    setInteractionCount(0);
    setIsTyping(false);
    setConversationHistory([]);
    setUseFallback(false);
    
    setTimeout(() => {
      addAssistantMessage(welcomeMessage[language]);
    }, 300);
  };

  const handleScheduleClick = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContinueExploring = () => {
    setShowCTA(false);
  };

  return (
    <div className="space-y-3 sm:space-y-4">
      {/* Reset Button */}
      <div className="flex justify-end">
        <button
          onClick={handleReset}
          className="flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          <RotateCcw className="w-3 h-3 sm:w-4 sm:h-4" />
          {language === 'es' ? 'Reiniciar conversación' : 'Restart conversation'}
        </button>
      </div>

      {/* Chat Interface */}
      <ChatInterface 
        height="600px sm:700px md:800px lg:900px" 
        autoScroll={enableAutoScroll} 
        language={language}
        chatInput={
          <ChatInput
            onSendMessage={handleSendMessage}
            disabled={isTyping}
            placeholder={language === 'es' ? 'Escribe tu pregunta...' : 'Type your question...'}
          />
        }
      >
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message.text}
            isUser={message.isUser}
            timestamp={message.timestamp}
          />
        ))}

        {isTyping && <TypingIndicator />}

        {showSuggestions && !isTyping && messages.length > 0 && (
          <SuggestedQuestions
            questions={suggestedQuestions}
            onQuestionClick={handleQuestionClick}
            visible={showSuggestions}
            language={language}
          />
        )}

        {showCTA && (
          <DemoCTA
            visible={showCTA}
            onScheduleClick={handleScheduleClick}
            onContinueExploring={handleContinueExploring}
            language={language}
          />
        )}
      </ChatInterface>

      {/* Demo Info */}
      <div className="space-y-2">
        <div className="flex flex-wrap items-center justify-center gap-2 text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
          <span>{language === 'es' ? '💬 Demostración Empresarial Interactiva' : '💬 Interactive Business Demo'}</span>
          <span>•</span>
          <span>{language === 'es' ? '🔒 Tus preguntas no se guardan' : '🔒 Your questions are not saved'}</span>
        </div>
        <div className="flex items-center justify-center gap-2 text-[10px] sm:text-xs text-gray-400 dark:text-gray-500 px-2">
          <span className="text-center">
            {language === 'es' 
              ? 'Esta es una demostración controlada orientada a mostrar casos de uso empresariales de IA, automatización e integración de sistemas.'
              : 'This is a controlled demonstration focused on showing business use cases of AI, automation, and system integration.'}
          </span>
        </div>
      </div>
    </div>
  );
}
