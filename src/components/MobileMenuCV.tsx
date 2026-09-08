import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';

export default function MobileMenuCV() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { language } = useTranslation();

  useEffect(() => {
    setMounted(true);
  }, []);

  const translations = {
    es: {
      home: "Inicio",
      technologies: "Tecnologías",
      experience: "Experiencia",
      portfolio: "Portafolio",
      education: "Educación",
      contact: "Contáctame"
    },
    en: {
      home: "Home",
      technologies: "Technologies",
      experience: "Experience",
      portfolio: "Portfolio",
      education: "Education",
      contact: "Contact Me"
    }
  };

  const txt = translations[language];

  const menuItems = [
    { href: '#inicio', label: txt.home },
    { href: '#tecnologias', label: txt.technologies },
    { href: '#experiencia', label: txt.experience },
    { href: '#portafolio', label: txt.portfolio },
    { href: '#educacion', label: txt.education },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const menuContent = (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 z-[110] md:hidden"
            style={{ top: '64px' }}
          />

          {/* Menú */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ 
              height: { type: 'spring', stiffness: 400, damping: 35 },
              opacity: { duration: 0.2 }
            }}
            className="fixed left-0 right-0 bg-white dark:bg-gray-950 shadow-lg z-[120] md:hidden border-b border-gray-200 dark:border-gray-800 overflow-hidden"
            style={{ top: '64px' }}
          >
            <nav className="container mx-auto px-4 py-5">
              <ul className="flex flex-col gap-1 mb-4 max-w-md mx-auto">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ 
                      delay: index * 0.08,
                      type: 'spring',
                      stiffness: 300,
                      damping: 25
                    }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => {
                        handleLinkClick();
                        setTimeout(() => {
                          const element = document.querySelector(item.href);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }
                        }, 100);
                      }}
                      className="block py-3 px-4 text-center text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-all duration-200 font-medium"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Botón CTA WhatsApp */}
              <motion.div
                initial={{ y: 20, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 0.35,
                  type: 'spring',
                  stiffness: 400,
                  damping: 25
                }}
                className="max-w-md mx-auto"
              >
                <a
                  href={`https://wa.me/573058260893?text=${language === 'es' ? 'Hola%20David%2C%20vi%20tu%20perfil%20y%20me%20gustar%C3%ADa%20conversar%20sobre%20oportunidades%20laborales' : 'Hi%20David%2C%20I%20saw%20your%20profile%20and%20would%20like%20to%20talk%20about%20job%20opportunities'}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg font-bold transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-95"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {txt.contact}
                </a>
              </motion.div>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <>
      {/* Botón hamburguesa - solo visible en móvil */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Renderizar menú en el body usando portal */}
      {mounted && createPortal(menuContent, document.body)}
    </>
  );
}
