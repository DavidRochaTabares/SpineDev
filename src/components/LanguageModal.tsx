import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LanguageModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('language');
    
    // Si no hay idioma guardado, mostrar modal
    if (!savedLang) {
      setTimeout(() => setIsOpen(true), 500);
    }
  }, []);

  const selectLanguage = (lang: 'es' | 'en') => {
    localStorage.setItem('language', lang);
    document.documentElement.setAttribute('data-language', lang);
    window.dispatchEvent(new CustomEvent('languageChange', { detail: lang }));
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            onClick={() => {}}
          />
          
          <div className="fixed inset-0 flex items-center justify-center z-[101] p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full p-8 border border-gray-200 dark:border-gray-700"
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-2">
                  Choose your language
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Elige tu idioma preferido
                </p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => selectLanguage('es')}
                  className="group w-full flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-750 hover:from-primary-50 hover:to-secondary-50 dark:hover:from-primary-900/20 dark:hover:to-secondary-900/20 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex-shrink-0 text-4xl">🇪🇸</div>
                  <div className="flex-1 text-left">
                    <div className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      Español
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Continuar en español
                    </div>
                  </div>
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                <button
                  onClick={() => selectLanguage('en')}
                  className="group w-full flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-750 hover:from-primary-50 hover:to-secondary-50 dark:hover:from-primary-900/20 dark:hover:to-secondary-900/20 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex-shrink-0 text-4xl">🇺🇸</div>
                  <div className="flex-1 text-left">
                    <div className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      English
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Continue in English
                    </div>
                  </div>
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
