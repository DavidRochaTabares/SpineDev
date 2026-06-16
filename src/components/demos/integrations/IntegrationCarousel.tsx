import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { getTechLogo } from './icons/TechLogos';
import type { Integration } from './data/integrationsData';

interface IntegrationCarouselProps {
  integrations: Integration[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  language: 'es' | 'en';
  activeIntegrations?: string[];
}

export default function IntegrationCarousel({
  integrations,
  selectedId,
  onSelect,
  language,
  activeIntegrations = []
}: IntegrationCarouselProps) {

  const getColorClasses = (color: string, isSelected: boolean) => {
    const colors = {
      emerald: isSelected
        ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20'
        : 'border-gray-200 dark:border-gray-700 hover:border-emerald-400',
      red: isSelected
        ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
        : 'border-gray-200 dark:border-gray-700 hover:border-red-400',
      purple: isSelected
        ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
        : 'border-gray-200 dark:border-gray-700 hover:border-purple-400',
      blue: isSelected
        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
        : 'border-gray-200 dark:border-gray-700 hover:border-blue-400',
      green: isSelected
        ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
        : 'border-gray-200 dark:border-gray-700 hover:border-green-400',
      orange: isSelected
        ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20'
        : 'border-gray-200 dark:border-gray-700 hover:border-orange-400'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="space-y-2">
      <div className="text-center px-4">
        <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-0.5">
          {language === 'es' 
            ? 'Integraciones Disponibles'
            : 'Available Integrations'}
        </h4>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          {language === 'es' 
            ? 'Selecciona para agregar capacidades'
            : 'Select to add capabilities'}
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 pt-2">
        {integrations.map((integration, index) => {
          const isActive = activeIntegrations.includes(integration.id);
          const isSelected = selectedId === integration.id;
          
          return (
            <motion.button
              key={integration.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: isActive ? 1 : 1.05 }}
              whileTap={{ scale: isActive ? 1 : 0.95 }}
              onClick={() => !isActive && onSelect(integration.id)}
              disabled={isActive}
              className={`
                relative p-3 sm:p-4 rounded-xl border-2 transition-all duration-200
                ${isActive 
                  ? 'border-green-500 bg-green-50 dark:bg-green-900/20 opacity-75 cursor-not-allowed'
                  : getColorClasses(integration.color, isSelected)
                }
                ${isSelected ? 'shadow-lg' : 'shadow-sm hover:shadow-md'}
              `}
            >
              {isActive && (
                <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                </div>
              )}
              <div className="mb-2 sm:mb-3 flex items-center justify-center">
                {getTechLogo(integration.icon, 'w-10 h-10 sm:w-12 sm:h-12')}
              </div>
              <div className="font-semibold text-[10px] sm:text-xs text-gray-900 dark:text-white mb-1">
                {integration.name}
              </div>
              <div className="text-[9px] sm:text-[10px] text-gray-600 dark:text-gray-400">
                {integration.category[language]}
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
