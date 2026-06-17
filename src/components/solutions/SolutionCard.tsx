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
          {/* Icono, Título y descripción en horizontal */}
          <div className="flex gap-4">
            {/* Icono */}
            <div className={`flex-shrink-0 p-4 bg-gradient-to-br ${solution.gradient} rounded-2xl group-hover:scale-110 transition-transform duration-300 h-fit`}>
              <Icon className="w-8 h-8 text-white" />
            </div>

            {/* Título y descripción */}
            <div className="flex-1">
              <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {solution.title[language]}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {solution.shortDescription[language]}
              </p>
            </div>
          </div>

          {/* Problema que resuelve */}
          <div className="p-4 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/10 dark:to-red-900/10 rounded-xl border-l-4 border-orange-500 dark:border-orange-400">
            <div className="flex items-start gap-3 mb-2">
              <svg className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div className="flex-1">
                <p className="text-xs font-semibold text-orange-700 dark:text-orange-300 mb-1">
                  {language === 'es' ? 'Problema que podrías estar teniendo' : 'Problem you might be facing'}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {solution.problem[language]}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-3 pt-3 border-t border-orange-200 dark:border-orange-800/30">
              <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-xs font-semibold text-green-700 dark:text-green-300">
                {language === 'es' ? 'Tenemos la solución perfecta para ti' : 'We have the perfect solution for you'}
              </p>
            </div>
          </div>

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

          {/* Botón ver solución */}
          <div className="pt-4">
            <div className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-bold rounded-lg shadow-md hover:shadow-lg group-hover:scale-105 transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{language === 'es' ? 'Probar solución' : 'Try solution'}</span>
            </div>
          </div>
        </div>

        {/* Borde animado en hover */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl`}></div>
      </div>
    </motion.div>
  );
}
