import { motion } from 'framer-motion';
import { MessageSquare, Send } from 'lucide-react';

interface CommunicationWidgetProps {
  language: 'es' | 'en';
}

export default function CommunicationWidget({ language }: CommunicationWidgetProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: 'spring', duration: 0.6 }}
      className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/10 dark:to-pink-900/10 rounded-xl border-2 border-red-200 dark:border-red-800 overflow-hidden"
    >
      {/* Header */}
      <div className="bg-red-100 dark:bg-red-900/20 px-4 py-2 border-b border-red-200 dark:border-red-800 flex items-center gap-2">
        <MessageSquare className="w-4 h-4 text-red-600 dark:text-red-400" />
        <span className="text-sm font-semibold text-red-900 dark:text-red-100">
          SMS
        </span>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-red-200 dark:border-red-800">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
              {language === 'es' ? 'Para:' : 'To:'}
            </span>
            <span className="text-sm text-gray-900 dark:text-white">+1 (555) 123-4567</span>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {language === 'es' 
              ? 'Tu pedido llegará mañana entre 9 AM y 12 PM'
              : 'Your order will arrive tomorrow between 9 AM and 12 PM'}
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium flex items-center justify-center gap-2"
        >
          <Send className="w-4 h-4" />
          {language === 'es' ? 'Enviar SMS' : 'Send SMS'}
        </motion.button>
      </div>
    </motion.div>
  );
}
