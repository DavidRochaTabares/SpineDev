import { useState, useEffect } from 'react';
import { translations, type Language, type Translations } from '../i18n/translations';

export function useTranslation() {
  const [language, setLanguage] = useState<Language>('es');
  const [t, setT] = useState<Translations>(translations.es);

  useEffect(() => {
    // Get initial language
    const savedLang = (localStorage.getItem('language') as Language) || 'es';
    setLanguage(savedLang);
    setT(translations[savedLang]);

    // Listen for language changes
    const handleLanguageChange = (e: CustomEvent<Language>) => {
      setLanguage(e.detail);
      setT(translations[e.detail]);
    };

    window.addEventListener('languageChange', handleLanguageChange as EventListener);
    
    return () => {
      window.removeEventListener('languageChange', handleLanguageChange as EventListener);
    };
  }, []);

  return { t, language };
}
