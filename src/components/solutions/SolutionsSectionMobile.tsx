import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { solutionCategories } from '../../data/spinedev/solutionCategories.data';
import SolutionCard from './SolutionCard';
import type { Solution } from '../../data/spinedev/solutions.types';

interface SolutionsSectionMobileProps {
  language: 'es' | 'en';
  onSolutionClick: (solution: Solution) => void;
}

export default function SolutionsSectionMobile({ language, onSolutionClick }: SolutionsSectionMobileProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <div className="space-y-4">
      {solutionCategories.map((category) => {
        const IconComponent = (LucideIcons as any)[category.icon] || LucideIcons.Sparkles;
        const isExpanded = expandedCategory === category.id;

        return (
          <div
            key={category.id}
            className="border-2 border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-800"
          >
            {/* Header - Clickeable para expandir/colapsar */}
            <button
              onClick={() => toggleCategory(category.id)}
              className="w-full p-4 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
            >
              <div className="flex items-center gap-3 flex-1">
                {/* Icon */}
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${category.gradient} shadow-md`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>

                {/* Title & Badge */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {category.title[language]}
                  </h3>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                    <span>{category.solutions.length}</span>
                    <span>{language === 'es' ? 'soluciones' : 'solutions'}</span>
                  </div>
                </div>
              </div>

              {/* Chevron Icon */}
              <ChevronDown
                className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-300 flex-shrink-0 ml-2 ${
                  isExpanded ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Contenido expandible */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-gray-200 dark:border-gray-700">
                    {/* Description & Benefit - Con padding normal */}
                    <div className="p-4 space-y-3">
                      {/* Description */}
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {category.description[language]}
                      </p>

                      {/* Benefit Box */}
                      <div className="p-3 rounded-lg border border-primary-200 dark:border-primary-800 bg-primary-50 dark:bg-primary-900/20">
                        <div className="flex items-start gap-2">
                          <div className="flex-shrink-0 w-4 h-4 rounded-full bg-primary-600 dark:bg-primary-500 flex items-center justify-center mt-0.5">
                            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 leading-relaxed">
                            {category.benefit[language]}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Lista de Soluciones - Sin padding lateral para máximo ancho */}
                    <div className="px-2 pb-4 space-y-3">
                      {category.solutions.map((solution, index) => (
                        <SolutionCard
                          key={solution.id}
                          solution={solution}
                          onClick={() => onSolutionClick(solution)}
                          language={language}
                          index={index}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
