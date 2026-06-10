import { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';

export default function LanguageSelector() {
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as 'es' | 'en' | null;
    if (savedLang) {
      setLanguage(savedLang);
      document.documentElement.setAttribute('data-language', savedLang);
    }
  }, []);

  const changeLanguage = (lang: 'es' | 'en') => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    document.documentElement.setAttribute('data-language', lang);
    setIsOpen(false);
    
    // Dispatch custom event for other components to listen
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
    </div>
  );
}
