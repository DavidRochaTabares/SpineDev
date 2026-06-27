import { motion } from 'framer-motion';
import { Bot, Send } from 'lucide-react';

interface AIAssistantWidgetProps {
  language: 'es' | 'en';
}

export default function AIAssistantWidget({ language }: AIAssistantWidgetProps) {
  const messages = [
    {
      role: 'user',
      text: language === 'es' ? '¿Cuándo llega mi pedido?' : 'When will my order arrive?'
    },
    {
      role: 'assistant',
      text: language === 'es' 
        ? 'Tu pedido llegará mañana entre 9 AM y 12 PM' 
        : 'Your order will arrive tomorrow between 9 AM and 12 PM'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: 'spring', duration: 0.6 }}
      className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/10 dark:to-green-900/10 rounded-xl border-2 border-emerald-200 dark:border-emerald-800 overflow-hidden"
    >
      {/* Header */}
      <div className="bg-emerald-100 dark:bg-emerald-900/20 px-4 py-2 border-b border-emerald-200 dark:border-emerald-800 flex items-center gap-2">
        <Bot className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
        <span className="text-sm font-semibold text-emerald-900 dark:text-emerald-100">
          {language === 'es' ? 'Asistente IA' : 'AI Assistant'}
        </span>
        <div className="ml-auto w-2 h-2 bg-green-500 rounded-full animate-pulse" />
      </div>

      {/* Messages */}
      <div className="p-4 space-y-2">
        {messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: message.role === 'user' ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.3 }}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
              message.role === 'user'
                ? 'bg-primary-600 dark:bg-primary-500 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200'
            }`}>
              {message.text}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Input */}
      <div className="px-4 pb-4">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder={language === 'es' ? 'Escribe tu pregunta...' : 'Type your question...'}
            className="flex-1 px-3 py-2 bg-white dark:bg-gray-800 border border-emerald-200 dark:border-emerald-800 rounded-lg text-base"
            disabled
          />
          <button className="px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg">
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
