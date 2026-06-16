import { motion } from 'framer-motion';
import { MessageCircle, Send, Sparkles, CheckCheck } from 'lucide-react';

interface WhatsAppFeatureProps {
  language: 'es' | 'en';
}

export default function WhatsAppFeature({ language }: WhatsAppFeatureProps) {
  const benefits = language === 'es' 
    ? [
        'Atención omnicanal',
        'Soporte directo',
        'Seguimiento',
        'Conversaciones'
      ]
    : [
        'Omnichannel support',
        'Direct support',
        'Follow-up',
        'Conversations'
      ];

  const conversations = [
    {
      name: 'María González',
      message: { es: '¿Cuándo llega mi pedido?', en: 'When will my order arrive?' },
      time: '10:30',
      unread: true
    },
    {
      name: 'Carlos Ruiz',
      message: { es: 'Gracias por la información', en: 'Thanks for the information' },
      time: '09:15',
      unread: false
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-green-500 to-emerald-600 dark:from-green-600 dark:to-emerald-700 rounded-xl p-6 text-white"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
            <MessageCircle className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xl font-bold">
              {language === 'es' ? 'Mensajería' : 'Messaging'}
            </h4>
            <p className="text-sm text-green-100">
              {language === 'es' ? 'Capacidad desbloqueada' : 'Capability unlocked'}
            </p>
          </div>
        </div>
        <p className="text-sm text-green-50">
          {language === 'es' 
            ? 'Tu plataforma ahora puede comunicarse por WhatsApp con clientes'
            : 'Your platform can now communicate via WhatsApp with customers'}
        </p>
      </motion.div>

      {/* Conversations List */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 overflow-hidden"
      >
        <div className="bg-green-50 dark:bg-green-900/20 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h5 className="font-semibold text-gray-900 dark:text-white">
            {language === 'es' ? 'Conversaciones Activas' : 'Active Conversations'}
          </h5>
        </div>

        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {conversations.map((conv, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="p-4 hover:bg-gray-50 dark:hover:bg-gray-900 cursor-pointer transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-semibold text-green-700 dark:text-green-300">
                    {conv.name.charAt(0)}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h6 className="font-semibold text-gray-900 dark:text-white">
                      {conv.name}
                    </h6>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {conv.time}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                      {conv.message[language]}
                    </p>
                    {conv.unread && (
                      <div className="w-2 h-2 bg-green-500 rounded-full ml-2 flex-shrink-0" />
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Chat Interface */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 overflow-hidden"
      >
        <div className="bg-green-600 dark:bg-green-700 px-6 py-4 text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <span className="font-semibold">M</span>
            </div>
            <div>
              <h6 className="font-semibold">María González</h6>
              <p className="text-xs text-green-100">
                {language === 'es' ? 'En línea' : 'Online'}
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 space-y-3 min-h-[200px] bg-gray-50 dark:bg-gray-900">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-2"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg rounded-tl-none p-3 max-w-[70%] shadow-sm">
              <p className="text-sm text-gray-800 dark:text-gray-200">
                {language === 'es' ? '¿Cuándo llega mi pedido?' : 'When will my order arrive?'}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">10:30</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="flex gap-2 justify-end"
          >
            <div className="bg-green-500 text-white rounded-lg rounded-tr-none p-3 max-w-[70%] shadow-sm">
              <p className="text-sm">
                {language === 'es' 
                  ? 'Tu pedido llegará mañana entre 9 AM y 12 PM'
                  : 'Your order will arrive tomorrow between 9 AM and 12 PM'}
              </p>
              <div className="flex items-center justify-end gap-1 mt-1">
                <p className="text-xs text-green-100">10:31</p>
                <CheckCheck className="w-4 h-4 text-green-100" />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder={language === 'es' ? 'Escribe un mensaje...' : 'Type a message...'}
              className="flex-1 px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg text-sm"
              disabled
            />
            <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg flex items-center gap-2 transition-colors">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-green-50 dark:bg-green-900/10 rounded-xl p-6 border-2 border-green-200 dark:border-green-800"
      >
        <h5 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-green-600 dark:text-green-400" />
          {language === 'es' ? 'Capacidades Agregadas' : 'Added Capabilities'}
        </h5>
        <div className="grid sm:grid-cols-2 gap-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              className="flex items-center gap-2 bg-white dark:bg-gray-800 rounded-lg p-3"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full" />
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
