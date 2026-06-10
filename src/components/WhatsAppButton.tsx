import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Mostrar después de 3 segundos
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Mostrar tooltip automáticamente la primera vez
      setTimeout(() => {
        setShowTooltip(true);
        // Ocultar tooltip después de 5 segundos
        setTimeout(() => setShowTooltip(false), 5000);
      }, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const whatsappNumber = "573058260893";
  const whatsappMessage = encodeURIComponent(
    "¡Hola! Me gustaría obtener más información sobre sus servicios de desarrollo."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[60] flex flex-col items-end gap-2 sm:gap-3">
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="relative"
              >
                <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-4 py-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 max-w-xs">
                  <button
                    onClick={() => setShowTooltip(false)}
                    className="absolute -top-2 -right-2 p-1 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Cerrar"
                  >
                    <X className="w-3 h-3" />
                  </button>
                  <p className="text-sm font-medium mb-1">¿Necesitas ayuda?</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Escríbenos por WhatsApp y te responderemos pronto
                  </p>
                </div>
                {/* Flecha */}
                <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white dark:bg-gray-800 border-r border-b border-gray-200 dark:border-gray-700 transform rotate-45"></div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Botón de WhatsApp */}
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="group relative p-3 sm:p-4 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
            aria-label="Contactar por WhatsApp"
          >
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
            
            {/* Pulso animado */}
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
          </motion.a>
        </div>
      )}
    </AnimatePresence>
  );
}
