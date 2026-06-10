import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = [
    { href: '#inicio', label: t.navigation.home },
    { href: '#servicios', label: t.navigation.services },
    { href: '#portafolio', label: t.navigation.portfolio },
    { href: '#proceso', label: t.navigation.process },
    { href: '#tecnologias', label: t.navigation.technologies },
    { href: '#sobre-spinedev', label: t.navigation.about },
    { href: '#faq', label: t.navigation.faq },
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
                          // Pequeño delay para que la animación de cierre se vea
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

                {/* Botón CTA llamativo */}
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
                    href="#contacto"
                    onClick={(e) => {
                      handleLinkClick();
                      setTimeout(() => {
                        const element = document.querySelector('#contacto');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }, 100);
                    }}
                    className="block w-full px-6 py-3.5 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white rounded-lg text-center font-bold transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-95"
                  >
                    {t.navigation.cta}
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
