import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Send, Sparkles, Lightbulb } from 'lucide-react';

interface OpenAIFeatureProps {
  language: 'es' | 'en';
}

export default function OpenAIFeature({ language }: OpenAIFeatureProps) {
  const [messages] = useState([
    {
      role: 'assistant',
      content: language === 'es' 
        ? '¡Hola! Soy tu asistente IA. ¿En qué puedo ayudarte hoy?'
        : 'Hello! I\'m your AI assistant. How can I help you today?'
    },
    {
      role: 'user',
      content: language === 'es'
        ? '¿Cuál es el estado de mi pedido #1234?'
        : 'What\'s the status of my order #1234?'
    },
    {
      role: 'assistant',
      content: language === 'es'
        ? 'Tu pedido #1234 está en camino y llegará mañana entre 9 AM y 12 PM. ¿Necesitas algo más?'
        : 'Your order #1234 is on its way and will arrive tomorrow between 9 AM and 12 PM. Need anything else?'
    }
  ]);

  const useCases = language === 'es' 
    ? [
        'Atención al cliente',
        'Asistentes virtuales',
        'Generación de respuestas',
        'Búsqueda de información'
      ]
    : [
        'Customer support',
        'Virtual assistants',
        'Response generation',
        'Information search'
      ];

  const benefits = language === 'es' 
    ? [
        'Asistentes virtuales',
        'Atención automatizada',
        'Análisis de texto',
        'IA personalizada'
      ]
    : [
        'Virtual assistants',
        'Automated support',
        'Text analysis',
        'Custom AI'
      ];

  return (
    <div className="space-y-6">
      {/* Header Minimalista */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', delay: 0.1 }}
          className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/20 px-4 py-2 rounded-full mb-3"
        >
          <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
            {language === 'es' ? 'Nueva Capacidad Desbloqueada' : 'New Capability Unlocked'}
          </span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-3"
        >
          <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/20 rounded-xl flex items-center justify-center">
            <Bot className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            {language === 'es' ? 'Asistente IA' : 'AI Assistant'}
          </h3>
        </motion.div>
      </motion.div>

      {/* EXPERIENCIA VISUAL - PROTAGONISTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 overflow-hidden"
      >
        <div className="bg-gray-50 dark:bg-gray-900 px-4 py-3 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {language === 'es' ? 'Asistente activo' : 'Assistant active'}
            </span>
          </div>
        </div>

        <div className="p-6 space-y-4 min-h-[300px]">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: message.role === 'user' ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.2 }}
              className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {message.role === 'assistant' && (
                <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Bot className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
              )}
              <div className={`max-w-[75%] rounded-xl p-4 ${
                message.role === 'user'
                  ? 'bg-primary-600 dark:bg-primary-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200'
              }`}>
                <p className="text-sm leading-relaxed">
                  {message.content}
                </p>
              </div>
              {message.role === 'user' && (
                <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-semibold text-primary-700 dark:text-primary-300">
                    {language === 'es' ? 'Tú' : 'You'}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="p-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder={language === 'es' ? 'Escribe tu pregunta...' : 'Type your question...'}
              className="flex-1 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-emerald-500"
              disabled
            />
            <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg flex items-center gap-2 text-sm font-medium transition-colors">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Casos de Uso Real */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-blue-50 dark:bg-blue-900/10 rounded-xl p-6 border-2 border-blue-200 dark:border-blue-800"
      >
        <h5 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          {language === 'es' ? 'Casos de Uso Real' : 'Real Use Cases'}
        </h5>
        <div className="grid sm:grid-cols-2 gap-3">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="flex items-center gap-2 bg-white dark:bg-gray-800 rounded-lg p-3"
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {useCase}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-emerald-50 dark:bg-emerald-900/10 rounded-xl p-6 border-2 border-emerald-200 dark:border-emerald-800"
      >
        <h5 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          {language === 'es' ? 'Capacidades Agregadas' : 'Added Capabilities'}
        </h5>
        <div className="grid sm:grid-cols-2 gap-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="flex items-center gap-2 bg-white dark:bg-gray-800 rounded-lg p-3"
            >
              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {benefit}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
