import { useEffect, useRef, type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ChatInterfaceProps {
  children: ReactNode;
  height?: string;
  autoScroll?: boolean;
  language?: 'es' | 'en';
  chatInput?: ReactNode;
}

export default function ChatInterface({ 
  children, 
  height = "500px",
  autoScroll = true,
  language = 'es',
  chatInput
}: ChatInterfaceProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (autoScroll) {
      scrollToBottom();
    }
  }, [children, autoScroll]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col bg-gray-50 dark:bg-gray-900 rounded-xl border-2 border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg"
      style={{ height }}
    >
      {/* Header */}
      <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white border-b border-blue-600">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-xs sm:text-sm md:text-base truncate">
            {language === 'es' ? 'Asistente de IA Empresarial' : 'AI Business Assistant'}
          </h3>
          <p className="text-[10px] sm:text-xs text-blue-100">
            {language === 'es' ? 'En línea' : 'Online'}
          </p>
        </div>
        <div className="hidden sm:block ml-auto">
          <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
            {language === 'es' ? 'Impulsado por IA Generativa' : 'Powered by Generative AI'}
          </span>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4">
        {children}
        <div ref={messagesEndRef} />
      </div>

      {/* Chat Input dentro del contenedor */}
      {chatInput && (
        <div className="border-t border-gray-200 dark:border-gray-700">
          {chatInput}
        </div>
      )}
    </motion.div>
  );
}
