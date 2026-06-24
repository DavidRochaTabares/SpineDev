import { motion, AnimatePresence } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import type { BusinessModule } from './data/businessModulesData';

interface BusinessPlatformPreviewProps {
  selectedModules: BusinessModule[];
  onModuleClick: (moduleId: string) => void;
  activeModule: string | null;
  language: 'es' | 'en';
}

export default function BusinessPlatformPreview({
  selectedModules,
  onModuleClick,
  activeModule,
  language
}: BusinessPlatformPreviewProps) {
  if (selectedModules.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 bg-gray-50 dark:bg-gray-900/50 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700">
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          {language === 'es' 
            ? 'Selecciona módulos para construir tu plataforma'
            : 'Select modules to build your platform'}
        </p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
    >
      {/* Platform Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900 px-6 py-4 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
              <LucideIcons.Layers className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="text-white font-bold">
                {language === 'es' ? 'Tu Plataforma Empresarial' : 'Your Business Platform'}
              </h4>
              <p className="text-xs text-gray-400">
                {language === 'es' ? 'Sistema personalizado' : 'Custom system'}
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>
      </div>

      {/* Modules List */}
      <div className="p-6 space-y-2">
        <AnimatePresence>
          {selectedModules.map((module, index) => {
            const Icon = (LucideIcons as any)[module.icon];
            const isActive = activeModule === module.id;

            return (
              <motion.button
                key={module.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => onModuleClick(module.id)}
                className={`
                  w-full p-4 rounded-lg border-2 transition-all duration-300 text-left
                  ${isActive
                    ? `bg-gradient-to-r ${module.gradient} border-transparent text-white shadow-lg`
                    : 'bg-gray-50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                  }
                `}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {Icon && (
                      <div className={`
                        w-10 h-10 rounded-lg flex items-center justify-center
                        ${isActive ? 'bg-white/20' : `bg-${module.color}-500/10`}
                      `}>
                        <Icon className={`w-5 h-5 ${isActive ? 'text-white' : `text-${module.color}-600 dark:text-${module.color}-400`}`} />
                      </div>
                    )}
                    <div>
                      <h5 className={`font-semibold ${isActive ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                        {module.name[language]}
                      </h5>
                      <p className={`text-xs ${isActive ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'}`}>
                        {language === 'es' ? 'Haz clic para ver detalles' : 'Click to view details'}
                      </p>
                    </div>
                  </div>
                  <LucideIcons.ChevronRight className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                </div>
              </motion.button>
            );
          })}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
