import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import type { ProblemStep } from '../data/workflowData';

interface ProblemTimelineProps {
  steps: ProblemStep[];
  language: 'es' | 'en';
}

export default function ProblemTimeline({ steps, language }: ProblemTimelineProps) {
  return (
    <div className="space-y-3">
      {steps.map((step, index) => {
        const IconComponent = (LucideIcons as any)[step.icon] || LucideIcons.Circle;
        
        return (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/10 border-l-4 border-red-400 dark:border-red-600 rounded-r-lg"
          >
            <IconComponent className="w-5 h-5 flex-shrink-0 text-red-600 dark:text-red-400" />
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-900 dark:text-white text-sm">
                {step.problem[language]}
              </p>
              {step.consequence[language] && (
                <p className="text-xs text-red-700 dark:text-red-300 mt-1">
                  → {step.consequence[language]}
                </p>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
