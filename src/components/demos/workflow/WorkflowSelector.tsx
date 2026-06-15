import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import type { WorkflowScenario } from '../data/workflowData';

interface WorkflowSelectorProps {
  scenarios: WorkflowScenario[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  language: 'es' | 'en';
}

export default function WorkflowSelector({
  scenarios,
  selectedId,
  onSelect,
  language
}: WorkflowSelectorProps) {
  const getColorClasses = (color: string, isSelected: boolean) => {
    const colors = {
      blue: isSelected
        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
        : 'border-gray-200 dark:border-gray-700 hover:border-blue-400',
      purple: isSelected
        ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
        : 'border-gray-200 dark:border-gray-700 hover:border-purple-400',
      green: isSelected
        ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
        : 'border-gray-200 dark:border-gray-700 hover:border-green-400',
      orange: isSelected
        ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20'
        : 'border-gray-200 dark:border-gray-700 hover:border-orange-400'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {language === 'es' ? 'Selecciona un área empresarial' : 'Select a business area'}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {language === 'es' 
            ? 'Explora cómo la automatización puede transformar diferentes procesos'
            : 'Explore how automation can transform different processes'}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {scenarios.map((scenario, index) => {
          const isSelected = selectedId === scenario.id;
          const IconComponent = (LucideIcons as any)[scenario.icon] || LucideIcons.Circle;
          
          return (
            <motion.button
              key={scenario.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSelect(scenario.id)}
              className={`
                p-4 rounded-xl border-2 transition-all duration-200
                ${getColorClasses(scenario.color, isSelected)}
                ${isSelected ? 'shadow-lg' : 'shadow-sm hover:shadow-md'}
              `}
            >
              <IconComponent className="w-10 h-10 mx-auto mb-2 text-gray-700 dark:text-gray-300" />
              <div className="font-semibold text-sm text-gray-900 dark:text-white">
                {scenario.name[language]}
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
