import { motion } from 'framer-motion';
import { Calendar, MessageCircle } from 'lucide-react';

interface DemoCTAProps {
  visible: boolean;
  onScheduleClick?: () => void;
  onContinueExploring?: () => void;
  language?: 'es' | 'en';
}

export default function DemoCTA({ 
  visible, 
  onScheduleClick,
  onContinueExploring,
  language = 'es'
}: DemoCTAProps) {
  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="p-6 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 border-2 border-primary-200 dark:border-primary-800 rounded-xl"
    >
      <div className="flex items-start gap-3 mb-4">
        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
          <MessageCircle className="w-5 h-5 text-white" />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
            {language === 'es' 
              ? '¿Te interesa implementar esto en tu empresa?' 
              : 'Interested in implementing this in your company?'}
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {language === 'es'
              ? 'Nuestro equipo puede ayudarte a diseñar una solución específica para tu negocio.'
              : 'Our team can help you design a specific solution for your business.'}
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href="#contacto"
          onClick={onScheduleClick}
          className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-br from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
        >
          <Calendar className="w-4 h-4" />
          {language === 'es' ? 'Agendar Consultoría Gratis' : 'Schedule Free Consultation'}
        </a>
        <button
          onClick={onContinueExploring}
          className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 hover:border-primary-500 dark:hover:border-primary-500 text-gray-700 dark:text-gray-300 rounded-xl font-semibold transition-colors"
        >
          {language === 'es' ? 'Seguir Explorando' : 'Continue Exploring'}
        </button>
      </div>
    </motion.div>
  );
}
