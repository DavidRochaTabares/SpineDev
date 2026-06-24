import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { mvpIdeas } from './data/mvpData';
import { demoTracking } from '../../../services/demoTracking';

interface MvpBuilderDemoProps {
  language?: 'es' | 'en';
}

export default function MvpBuilderDemo({ language = 'es' }: MvpBuilderDemoProps) {
  const [selectedIdeaId, setSelectedIdeaId] = useState<string | null>(null);

  const selectedIdea = mvpIdeas.find(idea => idea.id === selectedIdeaId);

  useEffect(() => {
    demoTracking.track('mvp');
  }, []);

  return (
    <div className="space-y-4 p-4 sm:p-6">
      {/* Title */}
      <div className="text-center">
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 dark:text-white mb-2">
          {language === 'es' ? 'De Idea a MVP' : 'From Idea to MVP'}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {language === 'es' 
            ? 'Selecciona un tipo de proyecto para ver cómo lo convertimos en MVP'
            : 'Select a project type to see how we convert it to MVP'}
        </p>
      </div>

      {/* Idea Selector - Arriba */}
      <div>
        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
          {language === 'es' ? 'Tipos de Proyecto' : 'Project Types'}
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {mvpIdeas.map((idea) => {
            const Icon = (LucideIcons as any)[idea.icon];
            const isSelected = selectedIdeaId === idea.id;

            return (
              <button
                key={idea.id}
                onClick={() => setSelectedIdeaId(idea.id)}
                className={`
                  p-3 rounded-lg border-2 transition-all duration-300 text-left
                  ${isSelected
                    ? `bg-gradient-to-br ${idea.gradient} border-transparent text-white shadow-lg`
                    : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                  }
                `}
              >
                <div className="flex flex-col items-center gap-2">
                  {Icon && <Icon className="w-6 h-6" />}
                  <span className="text-xs font-semibold text-center">
                    {idea.name[language]}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Visualization - Horizontal en medio */}
      {selectedIdea ? (
        <motion.div
          key={selectedIdea.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
        >
          {/* Header con gradiente */}
          <div className={`bg-gradient-to-r ${selectedIdea.gradient} p-5`}>
            <div className="flex items-center gap-3">
              {(() => {
                const Icon = (LucideIcons as any)[selectedIdea.icon];
                return Icon && (
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                );
              })()}
              <div className="flex-1">
                <h4 className="text-white font-bold text-lg">{selectedIdea.name[language]}</h4>
                <p className="text-white/90 text-sm">{selectedIdea.description[language]}</p>
              </div>
            </div>
          </div>

          {/* Transformation Visual + Features - Horizontal */}
          <div className="p-5">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Left: Transformation */}
              <div className="flex items-center justify-center">
                <div className="flex items-center gap-4">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="relative flex flex-col items-center"
                  >
                    <div className="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                      <LucideIcons.Lightbulb className="w-10 h-10 text-gray-400" />
                    </div>
                    <div className="mt-2 text-xs font-semibold text-gray-600 dark:text-gray-400">IDEA</div>
                  </motion.div>

                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <LucideIcons.ArrowRight className="w-8 h-8 text-gray-400" />
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="relative flex flex-col items-center"
                  >
                    <div className={`w-20 h-20 bg-gradient-to-br ${selectedIdea.gradient} rounded-lg flex items-center justify-center shadow-lg`}>
                      <LucideIcons.Rocket className="w-10 h-10 text-white" />
                    </div>
                    <div className="mt-2 text-xs font-semibold text-gray-600 dark:text-gray-400">MVP</div>
                  </motion.div>
                </div>
              </div>

              {/* Right: MVP Features */}
              <div>
                <h5 className="text-sm font-bold text-gray-900 dark:text-white mb-3">
                  {language === 'es' ? 'Funcionalidades del MVP:' : 'MVP Features:'}
                </h5>
                <div className="space-y-2">
                  {selectedIdea.mvpFeatures[language].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className="flex items-start gap-2 text-sm"
                    >
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${selectedIdea.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        <div className="h-40 flex items-center justify-center bg-gray-50 dark:bg-gray-900/50 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700">
          <p className="text-gray-500 dark:text-gray-400 text-sm text-center px-4">
            {language === 'es' 
              ? 'Selecciona un tipo de proyecto para ver cómo lo convertimos en MVP'
              : 'Select a project type to see how we convert it to MVP'}
          </p>
        </div>
      )}

      {/* Important Message - Recuadro Azul Llamativo */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <LucideIcons.Info className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="text-white font-bold text-lg mb-2">
              {language === 'es' ? 'Importante' : 'Important'}
            </h4>
            <p className="text-white/90 text-sm leading-relaxed">
              {language === 'es' 
                ? 'Estos son solo ejemplos. Podemos convertir cualquier idea o sistema que estés pensando en un MVP funcional. No importa el tipo de proyecto, trabajamos contigo para definir y construir la primera versión correcta.'
                : 'These are just examples. We can turn any idea or system you\'re thinking of into a functional MVP. No matter the project type, we work with you to define and build the right first version.'}
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <a
          href="#contacto"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
        >
          {language === 'es' ? 'Hablemos de tu MVP' : 'Let\'s talk about your MVP'}
          <LucideIcons.ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
