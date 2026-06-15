import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from '../../hooks/useTranslation';
import { solutions } from '../../data/spinedev/solutions.data';
import SolutionCard from './SolutionCard';
import SolutionModal from './SolutionModal';
import type { Solution } from '../../data/spinedev/solutions.types';

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
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {language === 'es' 
                ? '¿No encuentras lo que buscas?' 
                : "Can't find what you're looking for?"}
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              {language === 'es' ? 'Cuéntanos tu proyecto' : 'Tell us about your project'}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
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
