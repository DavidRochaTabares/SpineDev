import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { getTechLogo } from './icons/TechLogos';
import type { Integration } from './data/integrationsData';

interface IntegrationAnimationProps {
  integration: Integration;
  language: 'es' | 'en';
}

export default function IntegrationAnimation({
  integration,
  language
}: IntegrationAnimationProps) {
  return (
    <div className="flex flex-col items-center justify-center py-8 sm:py-12 space-y-6">
      {/* Título */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="inline-block mb-4"
        >
          <Sparkles className="w-12 h-12 text-yellow-500" />
        </motion.div>
        <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
          {language === 'es' ? 'Integrando capacidad' : 'Integrating capability'}
        </h4>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
          {integration.name}
        </p>
      </motion.div>

      {/* Animación de Transformación */}
      <div className="flex items-center gap-4 sm:gap-8">
        {/* Producto Base */}
        <motion.div
          initial={{ scale: 1, opacity: 1 }}
          animate={{ 
            scale: [1, 0.9, 1],
            opacity: [1, 0.5, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="flex flex-col items-center"
        >
          <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center border-2 border-gray-300 dark:border-gray-600 relative overflow-hidden">
            <motion.div
              animate={{
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/20 to-transparent"
            />
            <span className="text-4xl relative z-10">📦</span>
          </div>
          <p className="text-xs font-medium text-gray-700 dark:text-gray-300 mt-3">
            {language === 'es' ? 'Tu Producto' : 'Your Product'}
          </p>
        </motion.div>

        {/* Flecha de Transformación */}
        <motion.div
          animate={{ 
            x: [0, 10, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ArrowRight className="w-8 h-8 text-primary-600 dark:text-primary-400" />
        </motion.div>

        {/* Producto Evolucionado */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: [0.8, 1.1, 1],
            opacity: [0, 1, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="flex flex-col items-center"
        >
          <div className={`w-24 h-24 bg-gradient-to-br from-${integration.color}-100 to-${integration.color}-200 dark:from-${integration.color}-900/20 dark:to-${integration.color}-800/20 rounded-2xl flex items-center justify-center border-2 border-${integration.color}-500 dark:border-${integration.color}-400 relative overflow-hidden shadow-lg`}>
            <motion.div
              animate={{
                rotate: [0, 360]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              className={`absolute inset-0 bg-gradient-to-r from-transparent via-${integration.color}-500/30 to-transparent`}
            />
            <div className="relative z-10">
              {getTechLogo(integration.icon, 'w-10 h-10')}
            </div>
          </div>
          <p className="text-xs font-medium text-gray-700 dark:text-gray-300 mt-3">
            {language === 'es' ? 'Producto Evolucionado' : 'Evolved Product'}
          </p>
        </motion.div>
      </div>

      {/* Mensaje de Evolución */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center"
      >
        <p className="text-sm font-medium text-primary-700 dark:text-primary-300">
          {language === 'es' 
            ? `Integrando ${integration.name}...`
            : `Integrating ${integration.name}...`}
        </p>
      </motion.div>

      {/* Barra de progreso mejorada */}
      <div className="w-80 h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          className={`h-full bg-gradient-to-r from-primary-600 via-${integration.color}-500 to-primary-600 dark:from-primary-500 dark:via-${integration.color}-400 dark:to-primary-500 relative`}
        >
          <motion.div
            animate={{
              x: ['-100%', '200%']
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
          />
        </motion.div>
      </div>
    </div>
  );
}
