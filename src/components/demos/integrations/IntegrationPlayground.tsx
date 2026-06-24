import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { integrations } from './data/integrationsData';
import IntegrationCarousel from './IntegrationCarousel';
import IntegrationBenefits from './IntegrationBenefits';
import { demoTracking } from '../../../services/demoTracking';

interface IntegrationPlaygroundProps {
  language?: 'es' | 'en';
}

export default function IntegrationPlayground({ language = 'es' }: IntegrationPlaygroundProps) {
  const [selectedIntegrationId, setSelectedIntegrationId] = useState<string | null>(null);

  useEffect(() => {
    demoTracking.track('integrations');
  }, []);

  const handleSelectIntegration = (id: string) => {
    setSelectedIntegrationId(id);
  };

  return (
    <div className="space-y-4 p-4 sm:p-6">
      {/* Header */}
      <div>
        <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900 dark:text-white">
          Integration Playground
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          {language === 'es' 
            ? 'Selecciona una integración para ver cómo funciona'
            : 'Select an integration to see how it works'}
        </p>
      </div>

      {/* Selector de integraciones */}
      <IntegrationCarousel
        integrations={integrations}
        selectedId={selectedIntegrationId}
        onSelect={handleSelectIntegration}
        language={language}
        activeIntegrations={[]}
      />

      {/* Beneficios de integración seleccionada */}
      <AnimatePresence>
        {selectedIntegrationId && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <IntegrationBenefits
              integration={integrations.find(i => i.id === selectedIntegrationId)!}
              language={language}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Explicación sobre más integraciones */}
      <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-xl p-4 sm:p-6 border border-primary-200 dark:border-primary-800">
        <h5 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-2">
          {language === 'es' 
            ? 'Cientos de integraciones disponibles'
            : 'Hundreds of integrations available'}
        </h5>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
          {language === 'es' 
            ? 'Estas son solo ejemplos. Trabajamos con cualquier API o servicio que tu proyecto necesite. Implementamos las integraciones específicas para tu caso de uso.'
            : 'These are just examples. We work with any API or service your project needs. We implement specific integrations for your use case.'}
        </p>
      </div>
    </div>
  );
}
