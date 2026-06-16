import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface EmptyStateProps {
  language: 'es' | 'en';
}

export default function EmptyState({ language }: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-12 sm:py-16 text-center px-4"
    >
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="mb-6"
      >
        <Sparkles className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 dark:text-gray-600" />
      </motion.div>

      <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
        {language === 'es' 
          ? 'Plataforma Base' 
          : 'Base Platform'}
      </h4>

      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-md">
        {language === 'es'
          ? 'Selecciona integraciones abajo para agregar capacidades'
          : 'Select integrations below to add capabilities'}
      </p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 flex items-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-500"
      >
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" />
        {language === 'es' ? 'Listo para crecer' : 'Ready to grow'}
      </motion.div>
    </motion.div>
  );
}
