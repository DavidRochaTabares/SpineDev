import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import type { Solution } from '../../data/spinedev/solutions.types';

interface SolutionCardProps {
  solution: Solution;
  language: 'es' | 'en';
  onClick: () => void;
  index: number;
}

export default function SolutionCard({ solution, language, onClick, index }: SolutionCardProps) {
  const Icon = LucideIcons[solution.icon as keyof typeof LucideIcons] as React.ComponentType<{ className?: string }>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={onClick}
      className="group relative cursor-pointer"
    >
      {/* Card */}
      <div className="relative h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 shadow-md hover:shadow-2xl">
        {/* Gradiente de fondo (sutil) */}
        <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
        
        {/* Badge de estado */}
        {solution.status === 'coming-soon' && (
          <div className="absolute top-4 right-4 z-10">
            <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-full text-xs font-semibold">
              {language === 'es' ? 'Próximamente' : 'Coming Soon'}
            </span>
          </div>
        )}

        {/* Contenido */}
        <div className="relative p-8 space-y-6">
          {/* Icono */}
          <div className={`inline-flex p-4 bg-gradient-to-br ${solution.gradient} rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-8 h-8 text-white" />
          </div>

          {/* Título y descripción */}
          <div>
            <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {solution.title[language]}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {solution.shortDescription[language]}
            </p>
          </div>

          {/* Beneficio principal */}
          {solution.benefits[0] && (
            <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
              {solution.benefits[0].icon && (() => {
                const BenefitIcon = LucideIcons[solution.benefits[0].icon as keyof typeof LucideIcons] as React.ComponentType<{ className?: string }>;
                return <BenefitIcon className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />;
              })()}
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                  {solution.benefits[0].title[language]}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {solution.benefits[0].description[language]}
                </p>
              </div>
            </div>
          )}

          {/* Tecnologías (máximo 4) */}
          <div className="flex flex-wrap gap-2">
            {solution.technologies.slice(0, 4).map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium"
              >
                {tech.name}
              </span>
            ))}
            {solution.technologies.length > 4 && (
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-lg text-xs font-medium">
                +{solution.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Botón explorar */}
          <div className="pt-4">
            <div className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold group-hover:gap-3 transition-all">
              <span>{language === 'es' ? 'Explorar' : 'Explore'}</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Borde animado en hover */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl`}></div>
      </div>
    </motion.div>
  );
}
