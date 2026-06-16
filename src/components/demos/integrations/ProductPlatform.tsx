import { motion } from 'framer-motion';
import { Box } from 'lucide-react';
import { getTechLogo } from './icons/TechLogos';
import { integrations } from './data/integrationsData';

interface ProductPlatformProps {
  language: 'es' | 'en';
  activeIntegrations: string[];
  children: React.ReactNode;
}

export default function ProductPlatform({ 
  language, 
  activeIntegrations,
  children 
}: ProductPlatformProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white dark:bg-gray-900 rounded-2xl border-2 border-gray-200 dark:border-gray-700 overflow-hidden shadow-xl"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Box className="w-5 h-5 text-primary-600 dark:text-primary-400" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                {language === 'es' ? 'Representación de tu producto' : 'Representation of your product'}
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {language === 'es' ? 'Tu web, app o sistema con nuevas capacidades' : 'Your web, app or system with new capabilities'}
              </p>
            </div>
          </div>
          
          {/* Badges de capacidades activas */}
          {activeIntegrations.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap">
              {activeIntegrations.map((integrationId, index) => {
                const integration = integrations.find(i => i.id === integrationId);
                return (
                  <motion.div
                    key={integrationId}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: index * 0.1, type: 'spring' }}
                    className="w-8 h-8 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center shadow-sm border border-gray-200 dark:border-gray-700"
                  >
                    {integration && getTechLogo(integration.icon, 'w-5 h-5')}
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Área de capacidades */}
      <div className="p-4 sm:p-6 min-h-[300px] sm:min-h-[400px] max-h-[500px] sm:max-h-[600px] overflow-y-auto space-y-4">
        {children}
      </div>
    </motion.div>
  );
}
