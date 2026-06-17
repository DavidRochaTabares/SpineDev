import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from '../../hooks/useTranslation';
import { solutions } from '../../data/spinedev/solutions.data';
import SolutionCard from './SolutionCard';
import SolutionModal from './SolutionModal';
import type { Solution } from '../../data/spinedev/solutions.types';

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
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  // Ordenar soluciones por prioridad
  const sortedSolutions = [...solutions].sort((a, b) => {
    const priorityA = a.priority ?? 999;
    const priorityB = b.priority ?? 999;
    return priorityA - priorityB;
  });

  return (
    <>
      <section 
        id="soluciones" 
        ref={ref}
        className="py-20 sm:py-24 lg:py-32 bg-white dark:bg-gray-950"
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
                ? 'Descubre cómo podemos transformar tu negocio con tecnología de vanguardia. Haz clic en cualquier solución para ver más detalles.'
                : 'Discover how we can transform your business with cutting-edge technology. Click on any solution to see more details.'}
            </p>
          </motion.div>

          {/* Grid de soluciones */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedSolutions.map((solution, index) => (
              <SolutionCard
                key={solution.id}
                solution={solution}
                language={language}
                onClick={() => handleOpenModal(solution)}
                index={index}
              />
            ))}
          </div>

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
                  ? 'Cada proyecto es único. Cuéntanos tu idea y crearemos la solución perfecta para ti.' 
                  : 'Every project is unique. Tell us your idea and we\'ll create the perfect solution for you.'}
              </p>
              <a
                href="#contacto"
                className="inline-flex items-center gap-3 px-10 py-5 bg-secondary-600 hover:bg-secondary-700 dark:bg-secondary-500 dark:hover:bg-secondary-600 text-white text-xl font-bold rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
              >
                {language === 'es' ? '¡Cuéntanos tu proyecto!' : 'Tell us about your project!'}
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
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
