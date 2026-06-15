import { useEffect, useState, useMemo } from 'react';
import { X, ExternalLink, CheckCircle, Clock, DollarSign } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import type { Solution, SolutionTab, TabConfig } from '../../data/spinedev/solutions.types';
import AiAssistantDemo from '../demos/AiAssistantDemo';
import WorkflowAutomationDemo from '../demos/WorkflowAutomationDemo';

interface SolutionModalProps {
  solution: Solution | null;
  isOpen: boolean;
  onClose: () => void;
  language: 'es' | 'en';
}

export default function SolutionModal({ solution, isOpen, onClose, language }: SolutionModalProps) {
  // Sistema de tabs (preparado, sin UI visible todavía)
  const [activeTab, setActiveTab] = useState<SolutionTab>('overview');
  
  // Calcular tabs disponibles dinámicamente según contenido
  const availableTabs = useMemo<TabConfig[]>(() => {
    if (!solution) return [];
    
    const tabs: TabConfig[] = [
      {
        id: 'overview' as SolutionTab,
        label: { es: 'Información', en: 'Overview' },
        icon: 'Info',
        visible: true // Siempre visible
      },
      {
        id: 'demos' as SolutionTab,
        label: { es: 'Demos', en: 'Demos' },
        icon: 'Play',
        visible: !!(solution.demos && solution.demos.length > 0)
      },
      {
        id: 'case-studies' as SolutionTab,
        label: { es: 'Casos de Éxito', en: 'Case Studies' },
        icon: 'Award',
        visible: !!(solution.caseStudies && solution.caseStudies.length > 0)
      },
      {
        id: 'projects' as SolutionTab,
        label: { es: 'Proyectos', en: 'Projects' },
        icon: 'Folder',
        visible: !!(solution.relatedProjects && solution.relatedProjects.length > 0)
      },
      {
        id: 'technologies' as SolutionTab,
        label: { es: 'Tecnologías', en: 'Technologies' },
        icon: 'Code',
        visible: !!(solution.technologies && solution.technologies.length > 0)
      }
    ];
    
    return tabs.filter(tab => tab.visible);
  }, [solution]);

  // Cerrar con ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!solution) return null;

  const Icon = LucideIcons[solution.icon as keyof typeof LucideIcons] as React.ComponentType<{ className?: string }>;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[201] overflow-y-auto">
            <div className="min-h-full flex items-center justify-center p-0 sm:p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="relative w-full max-w-5xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header con gradiente */}
                <div className={`relative bg-gradient-to-br ${solution.gradient} p-4 sm:p-6 text-white`}>
                  <button
                    onClick={onClose}
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                    aria-label="Cerrar"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold">
                          {solution.title[language]}
                        </h2>
                        {solution.demos && solution.demos.length > 0 && solution.demos.some(d => d.enabled) && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            {language === 'es' ? 'Demo Interactiva' : 'Interactive Demo'}
                          </span>
                        )}
                      </div>
                      <p className="text-sm sm:text-base text-white/90 line-clamp-2">
                        {solution.shortDescription[language]}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Demos section (soporta múltiples demos) - FULL WIDTH en mobile, con padding en desktop */}
                {solution.demos && solution.demos.length > 0 && (
                  <div className="w-full">
                    {/* Lista de demos disponibles */}
                    <div className="w-full px-0 md:px-8 lg:px-12 py-6">
                      {solution.demos.map((demo, index) => (
                        <div
                          key={demo.id}
                          className="w-full"
                        >
                          {demo.enabled ? (
                            <div className="w-full py-0 md:py-6">
                              {/* Renderizar demo según el componente */}
                              {demo.component === 'AiAssistantDemo' && <AiAssistantDemo language={language} />}
                              {demo.component === 'WorkflowAutomationDemo' && <WorkflowAutomationDemo language={language} />}
                              {/* Futuras demos se agregarán aquí */}
                            </div>
                          ) : (
                            <div className="p-6 text-center bg-gray-50 dark:bg-gray-800">
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                {language === 'es' ? 'Próximamente' : 'Coming Soon'}
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Contenido */}
                <div className="p-8 sm:p-12 space-y-10">
                  {/* Descripción completa */}
                  <div>
                    <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">
                      {language === 'es' ? '¿Qué es esto?' : 'What is this?'}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      {solution.fullDescription[language]}
                    </p>
                  </div>

                  {/* Beneficios */}
                  <div>
                    <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">
                      {language === 'es' ? 'Beneficios Clave' : 'Key Benefits'}
                    </h3>
                    <div className="grid sm:grid-cols-3 gap-6">
                      {solution.benefits.map((benefit, index) => {
                        const BenefitIcon = benefit.icon 
                          ? LucideIcons[benefit.icon as keyof typeof LucideIcons] as React.ComponentType<{ className?: string }>
                          : CheckCircle;
                        
                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl"
                          >
                            <BenefitIcon className="w-8 h-8 text-primary-600 dark:text-primary-400 mb-3" />
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                              {benefit.title[language]}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {benefit.description[language]}
                            </p>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Características */}
                  {solution.features && (
                    <div>
                      <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">
                        {language === 'es' ? 'Características' : 'Features'}
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {solution.features[language].map((feature, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tecnologías */}
                  <div>
                    <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">
                      {language === 'es' ? 'Tecnologías' : 'Technologies'}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {solution.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg text-sm font-medium"
                        >
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Información adicional */}
                  <div className="flex flex-wrap gap-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    {solution.estimatedTime && (
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-gray-400" />
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {language === 'es' ? 'Tiempo estimado' : 'Estimated time'}
                          </p>
                          <p className="font-semibold text-gray-900 dark:text-white">
                            {solution.estimatedTime[language]}
                          </p>
                        </div>
                      </div>
                    )}
                    
                    {solution.startingPrice && (
                      <div className="flex items-center gap-3">
                        <DollarSign className="w-5 h-5 text-gray-400" />
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {language === 'es' ? 'Desde' : 'Starting at'}
                          </p>
                          <p className="font-semibold text-gray-900 dark:text-white">
                            ${solution.startingPrice.amount.toLocaleString()} {solution.startingPrice.currency}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="#contacto"
                      onClick={onClose}
                      className="flex-1 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold text-center transition-colors"
                    >
                      {language === 'es' ? 'Solicitar Consultoría Gratis' : 'Request Free Consultation'}
                    </a>
                    <button
                      onClick={onClose}
                      className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 hover:border-primary-500 dark:hover:border-primary-500 text-gray-700 dark:text-gray-300 rounded-xl font-semibold transition-colors"
                    >
                      {language === 'es' ? 'Cerrar' : 'Close'}
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
