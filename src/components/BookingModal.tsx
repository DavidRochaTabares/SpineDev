import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2, Calendar } from 'lucide-react';
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
            // Forzar reinicialización del widget
            setTimeout(() => setIsLoading(false), 300);
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
        // Si el script ya existe, reinicializar el widget
        if ((window as any).Calendly) {
          // Forzar reinicialización
          setTimeout(() => {
            const widget = document.querySelector('.calendly-inline-widget');
            if (widget && (window as any).Calendly) {
              (window as any).Calendly.initInlineWidget({
                url: CALENDLY_CONFIG.eventUrl,
                parentElement: widget
              });
            }
            setIsLoading(false);
          }, 300);
        } else {
          loadCalendly();
        }
      }
    } else {
      // Resetear loading cuando se cierra
      setIsLoading(true);
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
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999]"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[10000] overflow-y-auto">
            <div className="min-h-full flex items-center justify-center p-0 sm:p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="relative w-full max-w-6xl max-h-[100vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header con botón de cerrar */}
                <div className="relative bg-gradient-to-br from-secondary-500 to-secondary-600 p-4 sm:p-6 text-white">
                  <button
                    onClick={onClose}
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors z-20"
                    aria-label="Cerrar"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="flex items-center gap-3 pr-12">
                    <Calendar className="w-8 h-8 sm:w-10 sm:h-10" />
                    <div>
                      <h2 className="text-xl sm:text-2xl font-display font-bold">
                        Agenda tu consulta
                      </h2>
                      <p className="text-sm text-white/90 mt-1">
                        30 minutos • 100% gratis
                      </p>
                    </div>
                  </div>
                </div>

                {/* Calendly Embed */}
                <div className="w-full h-[calc(100vh-120px)] sm:h-[700px] relative">
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
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
