import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import type { BusinessModule } from './data/businessModulesData';

interface ModulePreviewProps {
  module: BusinessModule;
  language: 'es' | 'en';
}

export default function ModulePreview({ module, language }: ModulePreviewProps) {
  const Icon = (LucideIcons as any)[module.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
    >
      {/* Module Header */}
      <div className={`bg-gradient-to-r ${module.gradient} px-6 py-4`}>
        <div className="flex items-center gap-3">
          {Icon && (
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <Icon className="w-6 h-6 text-white" />
            </div>
          )}
          <div>
            <h4 className="text-white font-bold text-lg">
              {module.name[language]}
            </h4>
            <p className="text-white/80 text-sm">
              {language === 'es' ? 'Módulo personalizado' : 'Custom module'}
            </p>
          </div>
        </div>
      </div>

      {/* Module Content - Simple Mockup */}
      <div className="p-6 space-y-4">
        {/* Features List */}
        <div>
          <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
            {language === 'es' ? 'Funcionalidades incluidas:' : 'Included features:'}
          </h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {module.features[language].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-900/50 rounded-lg"
              >
                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${module.gradient}`}></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Visual Mockup */}
        <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="flex gap-2">
              <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-8 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
          </div>

          {/* Table-like structure */}
          <div className="space-y-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${module.gradient} opacity-20`}></div>
                <div className="flex-1 space-y-2">
                  <div className="h-3 w-3/4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  <div className="h-2 w-1/2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                </div>
                <div className="h-8 w-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className={`bg-gradient-to-r ${module.gradient} bg-opacity-10 dark:bg-opacity-20 rounded-lg p-4`}>
          <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
            {language === 'es' 
              ? 'Este módulo se adaptará completamente a tus procesos y necesidades específicas'
              : 'This module will be fully adapted to your specific processes and needs'}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
