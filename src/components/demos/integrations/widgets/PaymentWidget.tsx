import { motion } from 'framer-motion';
import { CreditCard, Check } from 'lucide-react';

interface PaymentWidgetProps {
  language: 'es' | 'en';
}

export default function PaymentWidget({ language }: PaymentWidgetProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: 'spring', duration: 0.6 }}
      className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/10 dark:to-indigo-900/10 rounded-xl border-2 border-purple-200 dark:border-purple-800 overflow-hidden"
    >
      {/* Header */}
      <div className="bg-purple-100 dark:bg-purple-900/20 px-4 py-2 border-b border-purple-200 dark:border-purple-800 flex items-center gap-2">
        <CreditCard className="w-4 h-4 text-purple-600 dark:text-purple-400" />
        <span className="text-sm font-semibold text-purple-900 dark:text-purple-100">
          {language === 'es' ? 'Pagos' : 'Payments'}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-purple-200 dark:border-purple-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {language === 'es' ? 'Plan Profesional' : 'Professional Plan'}
            </span>
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              $29<span className="text-sm text-gray-500">/{language === 'es' ? 'mes' : 'mo'}</span>
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
            <Check className="w-3 h-3 text-purple-600" />
            {language === 'es' ? 'Usuarios ilimitados' : 'Unlimited users'}
          </div>
        </div>

        <div className="flex gap-2">
          <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg px-3 py-2 border border-purple-200 dark:border-purple-800 flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600 dark:text-gray-400">•••• 4242</span>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium"
          >
            {language === 'es' ? 'Pagar' : 'Pay'}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
