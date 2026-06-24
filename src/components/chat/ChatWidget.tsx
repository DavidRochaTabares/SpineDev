import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import type { ChatMessage, ConversationContext, LeadCaptureData } from '../../types/lead.types';
import { demoTracking } from '../../services/demoTracking';
import { getOpenAIService } from '../../services/openaiService';
import LeadCaptureForm from './LeadCaptureForm';

const CHAT_SYSTEM_PROMPT = `You are a project advisor for SpineDev, a Colombian software development company.

Your goal is:
1. Understand what the user wants to build in a natural and conversational way
2. Ask follow-up questions when necessary to clarify
3. After 2-3 exchanges, offer to schedule a call or continue via WhatsApp

IMPORTANT LANGUAGE RULE:
- Detect the language the user is writing in (Spanish or English)
- ALWAYS respond in the SAME language the user is using
- If user writes in Spanish, respond in Spanish
- If user writes in English, respond in English
- Maintain consistency throughout the conversation

Keep responses concise (maximum 3-4 lines). Be friendly but professional.
Do NOT use emojis in your responses.`;

interface ChatWidgetProps {
  language?: 'es' | 'en';
}

export default function ChatWidget({ language: initialLanguage = 'es' }: ChatWidgetProps) {
  const [language, setLanguage] = useState<'es' | 'en'>(initialLanguage);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showLeadCapture, setShowLeadCapture] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [context, setContext] = useState<ConversationContext>({
    visitedDemos: [],
    language,
    messageCount: 0
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Leer idioma de localStorage y escuchar cambios
  useEffect(() => {
    const savedLang = localStorage.getItem('language') as 'es' | 'en' | null;
    if (savedLang) {
      setLanguage(savedLang);
      setContext(prev => ({ ...prev, language: savedLang }));
    }

    const handleLanguageChange = (e: CustomEvent<'es' | 'en'>) => {
      setLanguage(e.detail);
      setContext(prev => ({ ...prev, language: e.detail }));
    };

    window.addEventListener('languageChange', handleLanguageChange as EventListener);
    return () => {
      window.removeEventListener('languageChange', handleLanguageChange as EventListener);
    };
  }, []);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Initial greeting
      const greeting: ChatMessage = {
        role: 'assistant',
        content: language === 'es' 
          ? 'Hola\n\nCuéntame brevemente qué te gustaría construir o mejorar.'
          : 'Hi\n\nTell me briefly what you\'re looking to build or improve.',
        timestamp: Date.now()
      };
      setMessages([greeting]);

      // Load visited demos
      const visited = demoTracking.getVisited();
      setContext(prev => ({ ...prev, visitedDemos: visited }));
    }
  }, [isOpen, language]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      role: 'user',
      content: input.trim(),
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Save first user request
    if (!context.userRequest) {
      setContext(prev => ({ ...prev, userRequest: userMessage.content }));
    }

    try {
      const openAIService = getOpenAIService();
      
      const conversationHistory = messages.map(m => ({
        role: m.role as 'user' | 'assistant',
        content: m.content
      }));

      const responseText = await openAIService.sendMessageWithPrompt(
        userMessage.content,
        conversationHistory,
        CHAT_SYSTEM_PROMPT
      );

      const assistantMessage: ChatMessage = {
        role: 'assistant',
        content: responseText,
        timestamp: Date.now()
      };

      setMessages(prev => [...prev, assistantMessage]);

      // Update context
      const newMessageCount = context.messageCount + 1;
      setContext(prev => ({
        ...prev,
        messageCount: newMessageCount,
        userRequest: userMessage.content,
        projectSummary: responseText
      }));

      // Show lead capture after 3 exchanges
      if (newMessageCount >= 3) {
        setTimeout(() => setShowLeadCapture(true), 1500);
      }

    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: ChatMessage = {
        role: 'assistant',
        content: language === 'es' 
          ? 'Lo siento, hubo un error. Por favor intenta de nuevo.'
          : 'Sorry, there was an error. Please try again.',
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLeadSubmit = () => {
    // El guardado lo hace LeadCaptureForm directamente
    setLeadSubmitted(true);
    setShowLeadCapture(false);
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/573058260893', '_blank');
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-3"
          >
            <div className="relative">
              {/* Pulse animation ring */}
              <motion.div
                className="absolute inset-0 bg-primary-500 rounded-full"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.6, 0, 0.6]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Badge de notificación */}
              {!leadSubmitted && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center z-10 shadow-lg"
                >
                  1
                </motion.div>
              )}
              
              <button
                onClick={() => setIsOpen(true)}
                className="relative w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-primary-600 to-blue-600 text-white rounded-full shadow-lg hover:shadow-2xl transition-all flex items-center justify-center hover:scale-110"
              >
                <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-2 right-2 left-2 sm:bottom-6 sm:right-6 sm:left-auto sm:w-96 h-[calc(100vh-100px)] sm:h-[600px] max-h-[600px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-blue-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold">SpineDev</h3>
                  <p className="text-white/80 text-xs">
                    {language === 'es' ? 'Asesor de Proyectos' : 'Project Advisor'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.role === 'user'
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3">
                    <Loader2 className="w-5 h-5 animate-spin text-gray-600 dark:text-gray-400" />
                  </div>
                </div>
              )}

              {/* WhatsApp Quick Option - Mostrar después del segundo mensaje */}
              {context.messageCount >= 2 && !showLeadCapture && !leadSubmitted && (
                <div className="flex justify-center">
                  <button
                    onClick={handleWhatsApp}
                    className="text-xs text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors flex items-center gap-1"
                  >
                    <MessageCircle className="w-3 h-3" />
                    {language === 'es' ? 'O escríbenos por WhatsApp' : 'Or message us on WhatsApp'}
                  </button>
                </div>
              )}

              {/* Lead Capture Form */}
              {showLeadCapture && !leadSubmitted && (
                <LeadCaptureForm
                  language={language}
                  context={context}
                  onSubmit={handleLeadSubmit}
                  onCancel={() => setShowLeadCapture(false)}
                />
              )}

              {/* Success Message */}
              {leadSubmitted && (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                  <p className="text-sm text-green-800 dark:text-green-200 font-medium mb-3">
                    {language === 'es' 
                      ? 'Perfecto. Hemos recibido tu información. Un especialista de SpineDev se pondrá en contacto contigo.'
                      : 'Perfect. We\'ve received your information. A SpineDev specialist will contact you.'}
                  </p>
                  <button
                    onClick={handleWhatsApp}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm"
                  >
                    {language === 'es' ? 'Hablar por WhatsApp' : 'Chat on WhatsApp'}
                  </button>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            {!showLeadCapture && !leadSubmitted && (
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder={language === 'es' ? 'Escribe tu mensaje...' : 'Type your message...'}
                    className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm text-gray-900 dark:text-white"
                    disabled={isLoading}
                  />
                  <button
                    onClick={handleSend}
                    disabled={isLoading || !input.trim()}
                    className="bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white p-2 rounded-lg transition-colors"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
