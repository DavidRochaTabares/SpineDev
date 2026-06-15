import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import type { AutomationStep } from '../data/workflowData';

interface HowItWorksProps {
  steps: AutomationStep[];
  language: 'es' | 'en';
}

export default function HowItWorks({ steps, language }: HowItWorksProps) {
  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {language === 'es' ? '¿Qué ocurre detrás de escena?' : 'What happens behind the scenes?'}
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {language === 'es' 
            ? 'Así funciona la automatización de forma simple'
            : 'This is how automation works simply'}
        </p>
      </div>

      <div className="grid gap-3">
        {steps.map((step, index) => {
          const IconComponent = (LucideIcons as any)[step.icon] || LucideIcons.Circle;
          
          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/10 border-l-4 border-blue-500 dark:border-blue-400 rounded-r-lg"
            >
              <IconComponent className="w-5 h-5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {step.description[language]}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
