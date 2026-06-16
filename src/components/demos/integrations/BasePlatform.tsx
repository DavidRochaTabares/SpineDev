import { motion } from 'framer-motion';
import { Box } from 'lucide-react';

interface BasePlatformProps {
  language: 'es' | 'en';
}

export default function BasePlatform({ language }: BasePlatformProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white dark:bg-gray-900 rounded-xl border-2 border-gray-200 dark:border-gray-700 p-8"
    >
      <div className="text-center space-y-4">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-2xl"
        >
          <Box className="w-10 h-10 text-gray-400 dark:text-gray-600" />
        </motion.div>

        {/* Title */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {language === 'es' ? 'Tu Producto' : 'Your Product'}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {language === 'es' 
              ? 'Plataforma base con funcionalidades limitadas'
              : 'Base platform with limited capabilities'}
          </p>
        </div>

        {/* Limitation Message */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700"
        >
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {language === 'es' 
              ? 'Selecciona una integración para agregar nuevas capacidades a tu producto'
              : 'Select an integration to add new capabilities to your product'}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
