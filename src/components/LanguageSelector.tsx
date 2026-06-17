import { useState, useEffect } from 'react';
import { Globe, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LanguageSelector() {
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as 'es' | 'en' | null;
    if (savedLang) {
      setLanguage(savedLang);
      document.documentElement.setAttribute('data-language', savedLang);
    }

    // Escuchar cambios de idioma desde otros componentes
    const handleLanguageChange = (e: CustomEvent<'es' | 'en'>) => {
      setLanguage(e.detail);
    };

    window.addEventListener('languageChange', handleLanguageChange as EventListener);
    
    // Mostrar tooltip informativo ocasionalmente (cada 3 visitas) después de estar un rato en la página
    const tooltipCount = parseInt(localStorage.getItem('languageTooltipCount') || '0');
    if (tooltipCount % 3 === 0 && tooltipCount < 9) {
      // Esperar 15 segundos antes de mostrar el tooltip
      const tooltipTimer = setTimeout(() => {
        setShowTooltip(true);
        // Auto-cerrar después de 5 segundos
        setTimeout(() => setShowTooltip(false), 5000);
      }, 15000);
      
      return () => {
        clearTimeout(tooltipTimer);
        window.removeEventListener('languageChange', handleLanguageChange as EventListener);
      };
    }
    localStorage.setItem('languageTooltipCount', String(tooltipCount + 1));
    
    return () => {
      window.removeEventListener('languageChange', handleLanguageChange as EventListener);
    };
  }, []);

  const changeLanguage = (lang: 'es' | 'en') => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    document.documentElement.setAttribute('data-language', lang);
    setIsOpen(false);
    window.dispatchEvent(new CustomEvent('languageChange', { detail: lang }));
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        aria-label="Cambiar idioma"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium uppercase">{language}</span>
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden z-50">
            <button
              onClick={() => changeLanguage('es')}
              className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                language === 'es' ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 font-semibold' : ''
              }`}
            >
              🇪🇸 Español
            </button>
            <button
              onClick={() => changeLanguage('en')}
              className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                language === 'en' ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 font-semibold' : ''
              }`}
            >
              🇺🇸 English
            </button>
          </div>
        </>
      )}

      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="absolute right-0 top-full mt-2 z-[70]"
          >
            <div className="relative">
              <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-4 py-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 max-w-xs">
                <button
                  onClick={() => setShowTooltip(false)}
                  className="absolute -top-2 -right-2 p-1 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  aria-label="Cerrar"
                >
                  <X className="w-3 h-3" />
                </button>
                <p className="text-sm font-medium mb-1">
                  {language === 'es' ? '¿Cambiar idioma?' : 'Change language?'}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {language === 'es' 
                    ? 'Haz clic aquí para ver las opciones disponibles'
                    : 'Click here to see available options'
                  }
                </p>
              </div>
              {/* Flecha */}
              <div className="absolute -top-2 right-6 w-4 h-4 bg-white dark:bg-gray-800 border-l border-t border-gray-200 dark:border-gray-700 transform rotate-45"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
