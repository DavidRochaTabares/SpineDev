import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCcw, Sparkles, ArrowRight, AlertTriangle, PartyPopper } from 'lucide-react';
import { workflowScenarios } from './data/workflowData';
import WorkflowSelector from './workflow/WorkflowSelector';
import ProblemTimeline from './workflow/ProblemTimeline';
import TransformationAnimation from './workflow/TransformationAnimation';
import HowItWorks from './workflow/HowItWorks';
import ResultsContrast from './workflow/ResultsContrast';

interface WorkflowAutomationDemoProps {
  language?: 'es' | 'en';
}

type DemoStep = 'select' | 'problem' | 'transformation' | 'how-it-works' | 'results';

export default function WorkflowAutomationDemo({ language = 'es' }: WorkflowAutomationDemoProps) {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState<DemoStep>('select');
  const [transformationIndex, setTransformationIndex] = useState(0);
  const [isTransforming, setIsTransforming] = useState(false);

  const selectedScenario = workflowScenarios.find(s => s.id === selectedScenarioId);

  const handleScenarioSelect = (id: string) => {
    setSelectedScenarioId(id);
    setCurrentStep('problem');
    setTransformationIndex(0);
    setIsTransforming(false);
  };

  const handleStartTransformation = () => {
    setCurrentStep('transformation');
    setIsTransforming(true);
    setTransformationIndex(0);
  };

  useEffect(() => {
    if (isTransforming && selectedScenario) {
      if (transformationIndex < selectedScenario.transformations.length - 1) {
        const timer = setTimeout(() => {
          setTransformationIndex(prev => prev + 1);
        }, 2000);
        return () => clearTimeout(timer);
      } else {
        setTimeout(() => {
          setIsTransforming(false);
          setCurrentStep('how-it-works');
        }, 2000);
      }
    }
  }, [isTransforming, transformationIndex, selectedScenario]);

  const handleContinueToResults = () => {
    setCurrentStep('results');
  };

  const handleReset = () => {
    setSelectedScenarioId(null);
    setCurrentStep('select');
    setTransformationIndex(0);
    setIsTransforming(false);
  };

  const handleTryAnother = () => {
    setCurrentStep('select');
    setSelectedScenarioId(null);
    setTransformationIndex(0);
    setIsTransforming(false);
  };

  const handleScheduleClick = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-6 p-4 sm:p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900 dark:text-white">
            {language === 'es' ? 'Workflow Automation Studio' : 'Workflow Automation Studio'}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {language === 'es' 
              ? 'Descubre cómo resolver problemas empresariales con automatización'
              : 'Discover how to solve business problems with automation'}
          </p>
        </div>
        {selectedScenarioId && (
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            {language === 'es' ? 'Reiniciar' : 'Reset'}
          </button>
        )}
      </div>

      <AnimatePresence mode="wait">
        {/* PASO 1: SELECCIÓN */}
        {currentStep === 'select' && (
          <motion.div
            key="select"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <WorkflowSelector
              scenarios={workflowScenarios}
              selectedId={selectedScenarioId}
              onSelect={handleScenarioSelect}
              language={language}
            />
          </motion.div>
        )}

        {/* PASO 2: PROBLEMA */}
        {currentStep === 'problem' && selectedScenario && (
          <motion.div
            key="problem"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            <div className="bg-red-50 dark:bg-red-900/10 border-2 border-red-200 dark:border-red-800 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 flex-shrink-0 text-red-600 dark:text-red-400" />
                <div>
                  <h4 className="font-semibold text-red-900 dark:text-red-200 mb-1">
                    {language === 'es' ? 'Situación Actual' : 'Current Situation'}
                  </h4>
                  <p className="text-sm text-red-800 dark:text-red-300">
                    {selectedScenario.problemDescription[language]}
                  </p>
                </div>
              </div>
            </div>

            <ProblemTimeline
              steps={selectedScenario.problemSteps}
              language={language}
            />

            <div className="text-center">
              <button
                onClick={handleStartTransformation}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Sparkles className="w-5 h-5" />
                {language === 'es' ? 'Ver Transformación' : 'See Transformation'}
              </button>
            </div>
          </motion.div>
        )}

        {/* PASO 3: TRANSFORMACIÓN */}
        {currentStep === 'transformation' && selectedScenario && (
          <motion.div
            key="transformation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            <div className="text-center mb-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {language === 'es' ? 'Transformación en Progreso' : 'Transformation in Progress'}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {language === 'es' 
                  ? 'Observa cómo cada problema se convierte en una solución'
                  : 'Watch how each problem becomes a solution'}
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-8 border-2 border-blue-200 dark:border-blue-800">
              <TransformationAnimation
                transformations={selectedScenario.transformations}
                currentIndex={transformationIndex}
                language={language}
              />
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {transformationIndex + 1} / {selectedScenario.transformations.length}
              </p>
            </div>
          </motion.div>
        )}

        {/* PASO 4: CÓMO FUNCIONA */}
        {currentStep === 'how-it-works' && selectedScenario && (
          <motion.div
            key="how-it-works"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            <HowItWorks
              steps={selectedScenario.automationSteps}
              language={language}
            />

            <div className="text-center">
              <button
                onClick={handleContinueToResults}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {language === 'es' ? 'Ver Resultados' : 'See Results'}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}

        {/* PASO 5: RESULTADOS */}
        {currentStep === 'results' && selectedScenario && (
          <motion.div
            key="results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            <div className="text-center mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring' }}
                className="inline-flex items-center justify-center w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full mb-4"
              >
                <PartyPopper className="w-10 h-10 text-green-600 dark:text-green-400" />
              </motion.div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {language === 'es' ? '¡Transformación Completa!' : 'Transformation Complete!'}
              </h4>
            </div>

            <ResultsContrast
              before={selectedScenario.beforeAfter.before[language]}
              after={selectedScenario.beforeAfter.after[language]}
              benefits={selectedScenario.benefits[language]}
              language={language}
            />

            {/* CTA Final */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-xl p-6">
              <div className="text-center mb-4">
                <p className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {language === 'es' 
                    ? '¿Tienes un proceso similar en tu empresa?'
                    : 'Do you have a similar process in your company?'}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {language === 'es' 
                    ? 'Podemos ayudarte a identificar oportunidades y diseñar soluciones personalizadas'
                    : 'We can help you identify opportunities and design custom solutions'}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleScheduleClick}
                  className="flex-1 px-6 py-3 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
                >
                  {language === 'es' ? 'Solicitar Automatización' : 'Request Automation'}
                </button>
                <button
                  onClick={handleTryAnother}
                  className="flex-1 px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
                >
                  {language === 'es' ? 'Probar otra área' : 'Try another area'}
                </button>
              </div>
            </div>

            {/* Mensaje Final */}
            <div className="text-center">
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
                {language === 'es' 
                  ? '💬 Este es un ejemplo simplificado de cómo una automatización puede transformar un proceso empresarial. En un proyecto real, SpineDev puede conectar herramientas, sistemas, IA, APIs, CRM, ERP, correo electrónico y procesos internos para construir automatizaciones adaptadas a tu empresa.'
                  : '💬 This is a simplified example of how automation can transform a business process. In a real project, SpineDev can connect tools, systems, AI, APIs, CRM, ERP, email, and internal processes to build automations tailored to your company.'}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
