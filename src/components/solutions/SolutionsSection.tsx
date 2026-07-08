import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../../hooks/useTranslation';
import { solutions } from '../../data/spinedev/solutions.data';
import { solutionCategories } from '../../data/spinedev/solutionCategories.data';
import SolutionCard from './SolutionCard';
import SolutionModal from './SolutionModal';
import SolutionsSectionMobile from './SolutionsSectionMobile';
import type { Solution } from '../../data/spinedev/solutions.types';
import { openBookingModal } from '../../utils/bookingModal';
import * as LucideIcons from 'lucide-react';

// Mapeo de tipos de demo a IDs de soluciones
const demoToSolutionMap: Record<string, string> = {
  'workflow': 'automation-solutions',
  'integrations': 'integration-solutions',
  'custom': 'enterprise-software',
  'automation': 'automation-solutions',
  'mvp': 'mvp-saas',
  'team': 'web-development-solutions'
};

export default function SolutionsSection() {
  const { t, language } = useTranslation();
  const ref = useRef(null);
  const solutionsGridRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    
    // Scroll suave hacia las tarjetas tabs primero para verlas completas
    setTimeout(() => {
      if (tabsRef.current) {
        const yOffset = -120; // Offset para mostrar las tabs completas
        const element = tabsRef.current;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 150);
  };

  const handleOpenModal = (solution: Solution) => {
    setSelectedSolution(solution);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Delay para que la animación de salida se complete
    setTimeout(() => setSelectedSolution(null), 300);
  };

  // Escuchar eventos para abrir modal desde otras secciones
  useEffect(() => {
    const handleOpenDemoModal = (event: CustomEvent) => {
      const { type } = event.detail;
      const solutionId = demoToSolutionMap[type];
      
      if (solutionId) {
        const solution = solutions.find(s => s.id === solutionId);
        if (solution) {
          handleOpenModal(solution);
        }
      }
    };

    window.addEventListener('openDemoModal', handleOpenDemoModal as EventListener);
    
    return () => {
      window.removeEventListener('openDemoModal', handleOpenDemoModal as EventListener);
    };
  }, []);

  return (
    <>
      <section 
        id="soluciones" 
        ref={ref}
        className="py-20 sm:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold mb-6"
            >
              <span className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full animate-pulse"></span>
              {language === 'es' ? 'Soluciones Interactivas' : 'Interactive Solutions'}
            </motion.div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
              {language === 'es' ? 'Explora Nuestras ' : 'Explore Our '}
              <span className="text-secondary-600 dark:text-secondary-400">
                {language === 'es' ? 'Soluciones' : 'Solutions'}
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {language === 'es' 
                ? 'Descubre cómo podemos transformar tu negocio con tecnología de vanguardia. Explora nuestras categorías de soluciones.'
                : 'Discover how we can transform your business with cutting-edge technology. Explore our solution categories.'}
            </p>
          </motion.div>

          {/* Versión Mobile - Solo visible en pantallas pequeñas */}
          <div className="block md:hidden">
            <SolutionsSectionMobile
              language={language}
              onSolutionClick={handleOpenModal}
            />
          </div>

          {/* Versión Desktop - Solo visible en pantallas medianas y grandes */}
          <div ref={tabsRef} className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {solutionCategories.map((category) => {
              const IconComponent = (LucideIcons as any)[category.icon] || LucideIcons.Sparkles;
              const isActive = activeCategory === category.id;
              
              return (
                <motion.button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  whileHover={{ scale: isActive ? 1 : 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`
                    relative p-6 sm:p-8 rounded-2xl border-3 transition-all duration-300 text-left overflow-hidden
                    ${isActive
                      ? 'border-primary-500 dark:border-primary-400 bg-gradient-to-br from-primary-100 via-primary-50 to-white dark:from-primary-900/50 dark:via-primary-900/30 dark:to-gray-900 shadow-2xl ring-4 ring-primary-200 dark:ring-primary-800/50'
                      : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:border-primary-400 dark:hover:border-primary-500 hover:shadow-xl'
                    }
                  `}
                >
                  {/* Gradient Background Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} transition-opacity duration-300 ${isActive ? 'opacity-10' : 'opacity-0 group-hover:opacity-5'}`} />
                  
                  <div className="relative">
                    {/* Icon & Title */}
                    <div className="flex items-start gap-5 mb-4">
                      <div className={`
                        flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center transition-all duration-300
                        bg-gradient-to-br ${category.gradient} 
                        ${isActive ? 'shadow-2xl scale-110 ring-4 ring-white dark:ring-gray-800' : 'shadow-lg scale-100'}
                      `}>
                        <IconComponent className={`w-8 h-8 sm:w-10 sm:h-10 text-white transition-transform duration-300 ${isActive ? 'scale-110' : 'scale-100'}`} />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className={`text-xl sm:text-2xl lg:text-3xl font-bold transition-all duration-300 mb-2 ${
                          isActive ? 'text-primary-700 dark:text-primary-300' : 'text-gray-900 dark:text-white'
                        }`}>
                          {category.title[language]}
                        </h3>
                        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold transition-all duration-300 ${
                          isActive 
                            ? 'bg-secondary-600 dark:bg-secondary-500 text-white shadow-lg'
                            : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                        }`}>
                          <span>{category.solutions.length}</span>
                          <span>{language === 'es' ? 'soluciones' : 'solutions'}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className={`text-sm sm:text-base leading-relaxed mb-4 transition-all duration-300 ${
                      isActive ? 'text-gray-800 dark:text-gray-100 font-medium' : 'text-gray-600 dark:text-gray-400'
                    }`}>
                      {category.description[language]}
                    </p>

                    {/* Benefit Box - Solo en tab activa */}
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-xl border-2 border-primary-200 dark:border-primary-800 bg-gradient-to-br from-primary-50 to-primary-100/50 dark:from-primary-900/30 dark:to-primary-900/10"
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-600 dark:bg-primary-500 flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200 leading-relaxed">
                            {category.benefit[language]}
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {/* CTA Button - Solo en tab inactiva */}
                    {!isActive && (
                      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="w-full px-6 py-3 bg-secondary-600 hover:bg-secondary-700 dark:bg-secondary-500 dark:hover:bg-secondary-600 text-white text-center font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group">
                          <span>{language === 'es' ? 'Explorar Servicios' : 'Explore Services'}</span>
                          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Grid de Soluciones - Solo se muestra cuando hay una categoría activa (Desktop only) */}
          {activeCategory && (
            <div className="hidden md:block">
              <AnimatePresence mode="wait">
              {solutionCategories.map((category) => {
                if (category.id !== activeCategory) return null;
                
                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {category.solutions.map((solution, index) => (
                      <SolutionCard
                        key={solution.id}
                        solution={solution}
                        onClick={() => handleOpenModal(solution)}
                        language={language}
                        index={index}
                      />
                    ))}
                  </motion.div>
                );
              })}
            </AnimatePresence>
            </div>
          )}

          {/* CTA adicional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-8 sm:p-12 border border-primary-200 dark:border-primary-800">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {language === 'es' 
                  ? '¿No encuentras lo que buscas?' 
                  : "Can't find what you're looking for?"}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                {language === 'es' 
                  ? 'Cada proyecto es único. Cuéntanos tu idea y crearemos la solución que necesitas.' 
                  : 'Every project is unique. Tell us your idea and we\'ll create the solution you need.'}
              </p>
              <button
                onClick={openBookingModal}
                className="inline-flex items-center gap-3 px-10 py-5 bg-secondary-600 hover:bg-secondary-700 dark:bg-secondary-500 dark:hover:bg-secondary-600 text-white text-xl font-bold rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
              >
                {language === 'es' ? '¡Cuéntanos tu proyecto!' : 'Tell us about your project!'}
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <SolutionModal
        solution={selectedSolution}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        language={language}
      />
    </>
  );
}
