import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCcw } from 'lucide-react';
import { integrations } from './data/integrationsData';
import ProductPlatform from './ProductPlatform';
import EmptyState from './EmptyState';
import IntegrationCarousel from './IntegrationCarousel';
import IntegrationAnimation from './IntegrationAnimation';
import IntegrationBenefits from './IntegrationBenefits';
import AIAssistantWidget from './widgets/AIAssistantWidget';
import PaymentWidget from './widgets/PaymentWidget';
import CommunicationWidget from './widgets/CommunicationWidget';
import CalendarWidget from './widgets/CalendarWidget';
import WhatsAppWidget from './widgets/WhatsAppWidget';
import CRMWidget from './widgets/CRMWidget';

interface IntegrationPlaygroundProps {
  language?: 'es' | 'en';
}

export default function IntegrationPlayground({ language = 'es' }: IntegrationPlaygroundProps) {
  const [activeIntegrations, setActiveIntegrations] = useState<string[]>([]);
  const [isIntegrating, setIsIntegrating] = useState(false);
  const [integratingId, setIntegratingId] = useState<string | null>(null);
  const [selectedIntegrationId, setSelectedIntegrationId] = useState<string | null>(null);
  const widgetsRef = useRef<HTMLDivElement>(null);

  const integratingIntegration = integrations.find(i => i.id === integratingId);

  const handleSelectIntegration = (id: string) => {
    // No permitir duplicados
    if (activeIntegrations.includes(id)) return;
    
    // Mostrar beneficios primero
    setSelectedIntegrationId(id);
  };

  const handleConfirmIntegration = () => {
    if (!selectedIntegrationId) return;
    
    setIntegratingId(selectedIntegrationId);
    setIsIntegrating(true);
    setSelectedIntegrationId(null);
  };

  useEffect(() => {
    const handleCancel = () => setSelectedIntegrationId(null);
    const handleConfirm = () => handleConfirmIntegration();

    window.addEventListener('cancelIntegration', handleCancel);
    window.addEventListener('confirmIntegration', handleConfirm);

    return () => {
      window.removeEventListener('cancelIntegration', handleCancel);
      window.removeEventListener('confirmIntegration', handleConfirm);
    };
  }, [selectedIntegrationId]);

  useEffect(() => {
    if (isIntegrating && integratingId) {
      const timer = setTimeout(() => {
        setActiveIntegrations(prev => [...prev, integratingId]);
        setIsIntegrating(false);
        setIntegratingId(null);
        
        // Scroll al nuevo widget
        setTimeout(() => {
          if (widgetsRef.current) {
            widgetsRef.current.scrollTop = widgetsRef.current.scrollHeight;
          }
        }, 100);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [isIntegrating, integratingId]);

  const handleReset = () => {
    setActiveIntegrations([]);
    setIsIntegrating(false);
    setIntegratingId(null);
  };

  const renderWidget = (id: string) => {
    const widgets: Record<string, JSX.Element> = {
      'openai': <AIAssistantWidget language={language} />,
      'stripe': <PaymentWidget language={language} />,
      'twilio': <CommunicationWidget language={language} />,
      'google-calendar': <CalendarWidget language={language} />,
      'whatsapp': <WhatsAppWidget language={language} />,
      'hubspot': <CRMWidget language={language} />
    };
    return widgets[id] || null;
  };

  return (
    <div className="space-y-3 p-4 sm:p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900 dark:text-white">
            Integration Playground
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {language === 'es' 
              ? 'Construye tu producto agregando capacidades'
              : 'Build your product by adding capabilities'}
          </p>
        </div>
        {activeIntegrations.length > 0 && (
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            {language === 'es' ? 'Reiniciar' : 'Reset'}
          </button>
        )}
      </div>

      {/* Producto con capacidades acumulativas */}
      <ProductPlatform
        language={language}
        activeIntegrations={activeIntegrations}
      >
        <div ref={widgetsRef}>
          <AnimatePresence mode="wait">
            {isIntegrating && integratingIntegration ? (
              <motion.div
                key="integrating"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center min-h-[300px]"
              >
                <IntegrationAnimation
                  integration={integratingIntegration}
                  language={language}
                />
              </motion.div>
            ) : activeIntegrations.length === 0 ? (
              <EmptyState language={language} key="empty" />
            ) : (
              <motion.div
                key="widgets"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                {activeIntegrations.map((id) => (
                  <div key={id}>
                    {renderWidget(id)}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </ProductPlatform>

      {/* Selector de integraciones */}
      <IntegrationCarousel
        integrations={integrations}
        selectedId={selectedIntegrationId}
        onSelect={handleSelectIntegration}
        language={language}
        activeIntegrations={activeIntegrations}
      />

      {/* Beneficios de integración seleccionada */}
      <AnimatePresence>
        {selectedIntegrationId && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-3"
          >
            <IntegrationBenefits
              integration={integrations.find(i => i.id === selectedIntegrationId)!}
              language={language}
            />
            
            {/* Explicación sobre más integraciones */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="px-4"
            >
              <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-xl p-4 sm:p-6 border border-primary-200 dark:border-primary-800">
                <div className="text-left">
                  <h5 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-1">
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
