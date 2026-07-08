import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import type { SolutionCategory } from '../../data/spinedev/solutionCategories.data';
import SolutionCard from './SolutionCard';
import type { Solution } from '../../data/spinedev/solutions.types';

interface CategoryCardProps {
  category: SolutionCategory;
  language: 'es' | 'en';
  onSolutionClick: (solution: Solution) => void;
  delay?: number;
}

export default function CategoryCard({ category, language, onSolutionClick, delay = 0 }: CategoryCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Get the icon component dynamically
  const IconComponent = (LucideIcons as any)[category.icon] || LucideIcons.Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      {/* Category Card */}
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className={`
          relative overflow-hidden rounded-2xl border-2 transition-all duration-300 cursor-pointer h-full
          ${isExpanded 
            ? 'border-primary-500 dark:border-primary-400 bg-gradient-to-br from-primary-50 to-white dark:from-primary-950/50 dark:to-gray-900' 
            : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-primary-300 dark:hover:border-primary-600 hover:shadow-xl'
          }
        `}
      >
        {/* Gradient Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
        
        <div className="relative p-6 sm:p-8">
          {/* Header with Icon and Title */}
          <div className="flex items-center gap-4 mb-6">
            {/* Icon */}
            <div className={`
              flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center
              bg-gradient-to-br ${category.gradient} shadow-lg
            `}>
              <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            
            {/* Title, Badge & Expand Icon */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {category.title[language]}
                  </h3>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold">
                    <span>{category.solutions.length}</span>
                    <span>{language === 'es' ? 'soluciones incluidas' : 'solutions included'}</span>
                  </div>
                </div>
                
                {/* Expand Icon */}
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 mt-1"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                    <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            {category.description[language]}
          </p>

          {/* Benefit Box */}
          <div className={`
            p-5 rounded-xl border-2 transition-all duration-300
            ${isExpanded 
              ? 'border-primary-300 dark:border-primary-700 bg-gradient-to-br from-primary-50 to-primary-100/50 dark:from-primary-900/30 dark:to-primary-900/10' 
              : 'border-gray-200 dark:border-gray-700 bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-800/30'
            }
          `}>
            <div className="flex items-start gap-3">
              <div className={`
                flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center
                ${isExpanded 
                  ? 'bg-primary-600 dark:bg-primary-500' 
                  : 'bg-gray-400 dark:bg-gray-600'
                }
              `}>
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200 leading-relaxed">
                {category.benefit[language]}
              </p>
            </div>
          </div>

          {/* Expand Hint */}
          {!isExpanded && (
            <div className="mt-6 text-center">
              <div className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold">
                <span>{language === 'es' ? 'Click para explorar las soluciones' : 'Click to explore solutions'}</span>
                <ChevronDown className="w-4 h-4 animate-bounce" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Expanded Solutions */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
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
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
