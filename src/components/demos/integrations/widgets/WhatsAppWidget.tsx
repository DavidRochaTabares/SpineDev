import { motion } from 'framer-motion';
import { MessageCircle, CheckCheck } from 'lucide-react';

interface WhatsAppWidgetProps {
  language: 'es' | 'en';
}

export default function WhatsAppWidget({ language }: WhatsAppWidgetProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: 'spring', duration: 0.6 }}
      className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 rounded-xl border-2 border-green-200 dark:border-green-800 overflow-hidden"
    >
      {/* Header */}
      <div className="bg-green-100 dark:bg-green-900/20 px-4 py-2 border-b border-green-200 dark:border-green-800 flex items-center gap-2">
        <MessageCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
        <span className="text-sm font-semibold text-green-900 dark:text-green-100">
          WhatsApp
        </span>
        <div className="ml-auto w-2 h-2 bg-green-500 rounded-full animate-pulse" />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-start"
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg rounded-tl-none px-3 py-2 max-w-[80%]">
            <p className="text-sm text-gray-800 dark:text-gray-200">
              {language === 'es' ? '¿Cuándo llega mi pedido?' : 'When will my order arrive?'}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-end"
        >
          <div className="bg-green-500 text-white rounded-lg rounded-tr-none px-3 py-2 max-w-[80%]">
            <p className="text-sm">
              {language === 'es' ? 'Llega mañana 9-12 PM' : 'Arrives tomorrow 9-12 PM'}
            </p>
            <div className="flex items-center justify-end gap-1 mt-1">
              <CheckCheck className="w-3 h-3" />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
