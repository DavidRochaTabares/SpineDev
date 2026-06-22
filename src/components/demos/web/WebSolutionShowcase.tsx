import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { webSolutions } from './data/webSolutionsData';
import LandingPageMockup from './mockups/LandingPageMockup';
import CorporateMockup from './mockups/CorporateMockup';
import EcommerceMockup from './mockups/EcommerceMockup';
import DashboardMockup from './mockups/DashboardMockup';
import PortalMockup from './mockups/PortalMockup';
import SaaSMockup from './mockups/SaaSMockup';

interface WebSolutionShowcaseProps {
  language?: 'es' | 'en';
}

export default function WebSolutionShowcase({ language = 'es' }: WebSolutionShowcaseProps) {
  const [activeSolution, setActiveSolution] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const autoRotateRef = useRef<number | null>(null);
  const pauseTimeoutRef = useRef<number | null>(null);

  const mockups: Record<string, JSX.Element> = {
    'landing': <LandingPageMockup />,
    'corporate': <CorporateMockup />,
    'ecommerce': <EcommerceMockup />,
    'dashboard': <DashboardMockup />,
    'portal': <PortalMockup />,
    'saas': <SaaSMockup />
  };

  // Auto-rotation logic
  useEffect(() => {
    if (isAutoRotating) {
      autoRotateRef.current = setInterval(() => {
        setActiveSolution((prev) => (prev + 1) % webSolutions.length);
      }, 6000); // 6 seconds per solution
    }

    return () => {
      if (autoRotateRef.current) {
        clearInterval(autoRotateRef.current);
      }
    };
  }, [isAutoRotating]);

  const handleManualChange = (index: number) => {
    setActiveSolution(index);
    
    // Pause auto-rotation
    setIsAutoRotating(false);
    if (autoRotateRef.current) {
      clearInterval(autoRotateRef.current);
    }
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }

    // Resume after 10 seconds
    pauseTimeoutRef.current = setTimeout(() => {
      setIsAutoRotating(true);
    }, 10000);
  };

  const currentSolution = webSolutions[activeSolution];

  return (
    <div className="space-y-6 p-4 sm:p-6">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 dark:text-white mb-2">
          {language === 'es' ? 'Soluciones Web' : 'Web Solutions'}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {language === 'es' 
            ? 'Explora los diferentes tipos de productos digitales que podemos construir'
            : 'Explore the different types of digital products we can build'}
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap gap-2 lg:justify-center">
        {webSolutions.map((solution, index) => (
          <button
            key={solution.id}
            onClick={() => handleManualChange(index)}
            className={`
              px-3 sm:px-4 py-2.5 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300
              ${activeSolution === index
                ? `bg-gradient-to-r ${solution.gradient} text-white shadow-lg scale-105`
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }
            `}
          >
            {solution.name[language]}
          </button>
        ))}
      </div>

      {/* Mockup Preview - 80% of space */}
      <div className="relative">
        <div className="aspect-[16/10] w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSolution.id}
              className="absolute inset-0"
            >
              {mockups[currentSolution.id]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Auto-rotation indicator */}
        {isAutoRotating && (
          <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            {language === 'es' ? 'Rotación automática' : 'Auto-rotating'}
          </div>
        )}
      </div>

      {/* Solution Info - 20% of space */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSolution.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Ideal For */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentSolution.gradient}`}></span>
              {language === 'es' ? 'Ideal para' : 'Ideal for'}
            </h4>
            <div className="flex flex-wrap gap-2">
              {currentSolution.idealFor[language].map((item, index) => (
                <span
                  key={index}
                  className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Capabilities */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentSolution.gradient}`}></span>
              {language === 'es' ? 'Capacidades' : 'Capabilities'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {currentSolution.capabilities[language].map((capability, index) => (
                <div key={index} className="flex items-center gap-2 text-xs">
                  <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Bottom CTA */}
      <div className="text-center pt-4">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          {language === 'es' 
            ? '¿Listo para construir tu solución digital?'
            : 'Ready to build your digital solution?'}
        </p>
        <a
          href="#contacto"
          className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${currentSolution.gradient} text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all`}
        >
          {language === 'es' ? 'Solicitar Consultoría Gratis' : 'Request Free Consultation'}
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}
