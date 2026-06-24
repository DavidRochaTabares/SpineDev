import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import type { BusinessModule } from './data/businessModulesData';

interface DepartmentSelectorProps {
  modules: BusinessModule[];
  language: 'es' | 'en';
}

export default function DepartmentSelector({
  modules,
  language
}: DepartmentSelectorProps) {
  return (
    <div className="space-y-6">
      {/* Question */}
      <div className="text-center">
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 dark:text-white mb-2">
          {language === 'es' ? 'Módulos de Software Empresarial' : 'Business Software Modules'}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {language === 'es' 
            ? 'Diseñamos sistemas personalizados con los módulos que tu empresa necesita'
            : 'We design custom systems with the modules your company needs'}
        </p>
      </div>

      {/* Module Cards - Always expanded */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {modules.map((module, index) => {
          const Icon = (LucideIcons as any)[module.icon];

          return (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-gradient-to-br ${module.gradient} rounded-xl p-5 text-white shadow-lg`}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                {Icon && (
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                )}
                <h4 className="font-bold text-lg">{module.name[language]}</h4>
              </div>

              {/* Features */}
              <div className="space-y-2">
                {module.features[language].map((feature, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
