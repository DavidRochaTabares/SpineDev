import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2 } from 'lucide-react';
import { CALENDLY_CONFIG } from '../config/calendly';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Bloquear scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Cerrar con ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Cargar script de Calendly cuando el modal se abre
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      
      const loadCalendly = () => {
        // Esperar a que Calendly esté disponible
        const checkCalendly = setInterval(() => {
          if ((window as any).Calendly) {
            clearInterval(checkCalendly);
            setIsLoading(false);
          }
        }, 100);

        // Timeout de seguridad
        setTimeout(() => {
          clearInterval(checkCalendly);
          setIsLoading(false);
        }, 5000);
      };

      const existingScript = document.querySelector('script[src*="calendly"]');
      
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        script.onload = loadCalendly;
        document.head.appendChild(script);
      } else {
        loadCalendly();
      }
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999]"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, type: 'spring', damping: 25 }}
              className="relative w-full max-w-6xl h-[100vh] sm:h-[95vh] bg-white dark:bg-gray-900 rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden pointer-events-auto pt-safe"
              onClick={(e) => e.stopPropagation()}
              style={{ paddingTop: 'env(safe-area-inset-top)' }}
            >
              {/* Header con botón de cerrar - Mejorado para móvil */}
              <div className="sticky top-0 left-0 right-0 z-10 flex justify-between items-center p-3 sm:p-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 sm:hidden">
                  Agendar reunión
                </span>
                <button
                  onClick={onClose}
                  className="ml-auto p-2.5 bg-gray-900/10 dark:bg-white/10 hover:bg-gray-900/20 dark:hover:bg-white/20 rounded-full transition-colors"
                  aria-label="Cerrar"
                >
                  <X className="w-5 h-5 text-gray-900 dark:text-white font-bold" strokeWidth={2.5} />
                </button>
              </div>

              {/* Calendly Embed */}
              <div className="w-full h-[calc(100%-60px)] relative">
                {/* Loading State */}
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-10">
                    <div className="text-center">
                      <Loader2 className="w-12 h-12 animate-spin text-primary-600 dark:text-primary-400 mx-auto mb-4" />
                      <p className="text-gray-600 dark:text-gray-400 text-lg">
                        Cargando calendario...
                      </p>
                    </div>
                  </div>
                )}
                
                {/* Calendly Widget */}
                <div 
                  className="calendly-inline-widget h-full w-full" 
                  data-url={CALENDLY_CONFIG.eventUrl}
                />
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
