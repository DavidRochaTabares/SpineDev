import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FooterCV() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const [showCopied, setShowCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('rochaandresdavid@gmail.com');
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  const { language } = useTranslation();

  const translations = {
    es: {
      quickLinks: "Enlaces Rápidos",
      home: "Inicio",
      technologies: "Tecnologías",
      experience: "Experiencia",
      education: "Educación",
      contact: "Contacto",
      rights: "Todos los derechos reservados",
      madeWith: "Hecho"
    },
    en: {
      quickLinks: "Quick Links",
      home: "Home",
      technologies: "Technologies",
      experience: "Experience",
      education: "Education",
      contact: "Contact",
      rights: "All rights reserved",
      madeWith: "Made"
    }
  };

  const txt = translations[language];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              David Rocha Tabares
            </h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Full Stack Developer | Frontend Specialist
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/DavidRochaTabares" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors" 
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/david-andres-rocha-tabares-770205224/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors" 
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <button 
                onClick={copyEmail}
                className="relative p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors" 
                aria-label="Copy Email"
              >
                <Mail className="w-5 h-5" />
                <AnimatePresence>
                  {showCopied && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 5 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute -top-14 left-0 bg-green-500 text-white text-sm font-semibold px-4 py-2.5 rounded-xl whitespace-nowrap shadow-xl z-50"
                      style={{
                        boxShadow: '0 10px 40px rgba(34, 197, 94, 0.4)'
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {language === 'es' ? '¡Copiado!' : 'Copied!'}
                      </div>
                      <div className="absolute -bottom-1.5 left-6 w-3 h-3 bg-green-500 rotate-45"></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{txt.quickLinks}</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="hover:text-primary-400 transition-colors">{txt.home}</a></li>
              <li><a href="#tecnologias" className="hover:text-primary-400 transition-colors">{txt.technologies}</a></li>
              <li><a href="#experiencia" className="hover:text-primary-400 transition-colors">{txt.experience}</a></li>
              <li><a href="#educacion" className="hover:text-primary-400 transition-colors">{txt.education}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {currentYear} David Rocha Tabares. {txt.rights}.
          </p>
          <p className="text-sm text-gray-400 flex items-center gap-2">
            {txt.madeWith} {language === 'es' ? 'en Colombia' : 'in Colombia'}
          </p>
        </div>
      </div>
    </footer>
  );
}
