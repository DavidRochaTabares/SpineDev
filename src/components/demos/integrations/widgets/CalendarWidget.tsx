import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';

interface CalendarWidgetProps {
  language: 'es' | 'en';
}

export default function CalendarWidget({ language }: CalendarWidgetProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: 'spring', duration: 0.6 }}
      className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10 rounded-xl border-2 border-blue-200 dark:border-blue-800 overflow-hidden"
    >
      {/* Header */}
      <div className="bg-blue-100 dark:bg-blue-900/20 px-4 py-2 border-b border-blue-200 dark:border-blue-800 flex items-center gap-2">
        <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
        <span className="text-sm font-semibold text-blue-900 dark:text-blue-100">
          {language === 'es' ? 'Agenda' : 'Calendar'}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-blue-200 dark:border-blue-800">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-1">
              <h5 className="text-sm font-semibold text-gray-900 dark:text-white">
                {language === 'es' ? 'Reunión con cliente' : 'Client meeting'}
              </h5>
              <div className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400 mt-1">
                <Clock className="w-3 h-3" />
                {language === 'es' ? 'Hoy 2:00 PM' : 'Today 2:00 PM'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
