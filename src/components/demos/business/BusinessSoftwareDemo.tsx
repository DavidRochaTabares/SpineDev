import { useEffect } from 'react';
import { businessModules } from './data/businessModulesData';
import DepartmentSelector from './DepartmentSelector';
import { demoTracking } from '../../../services/demoTracking';

interface BusinessSoftwareDemoProps {
  language?: 'es' | 'en';
}

export default function BusinessSoftwareDemo({ language = 'es' }: BusinessSoftwareDemoProps) {
  useEffect(() => {
    demoTracking.track('business');
  }, []);

  return (
    <div className="space-y-6 p-4 sm:p-6">
      {/* Module Cards */}
      <DepartmentSelector
        modules={businessModules}
        language={language}
      />

      {/* Message and CTA */}
      <div className="space-y-4">
        {/* Message */}
        <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-xl p-5 border border-primary-200 dark:border-primary-800 text-center">
          <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2">
            {language === 'es' 
              ? 'Software adaptado a tu empresa'
              : 'Software adapted to your company'}
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {language === 'es' 
              ? 'Cada módulo se diseña específicamente para tus procesos y necesidades. Tu sistema será único, como tu negocio.'
              : 'Each module is designed specifically for your processes and needs. Your system will be unique, like your business.'}
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            {language === 'es' ? 'Solicitar Consultoría Gratis' : 'Request Free Consultation'}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
