import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useTranslation } from "../../hooks/useTranslation";
import { Calendar } from "lucide-react";
import BookingModal from "../BookingModal";

export default function CTAFinal() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <section id="contacto" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="flex items-center justify-center max-w-screen-xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Título */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6"
            >
              {t.spinedev.booking.title}
            </motion.h2>

            {/* Descripción */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8"
            >
              {t.spinedev.booking.description}
            </motion.p>

            {/* Puntos clave */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid sm:grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto"
            >
              {t.spinedev.booking.benefits.map((benefit: string, index: number) => (
                <div key={index} className="flex items-start gap-2 text-left">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary-100 dark:bg-secondary-900/30 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-secondary-600 dark:bg-secondary-400"></div>
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* Botón */}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsBookingOpen(true)}
              className="inline-flex items-center gap-3 px-10 py-5 bg-secondary-600 hover:bg-secondary-700 dark:bg-secondary-500 dark:hover:bg-secondary-600 text-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 font-bold text-lg group"
            >
              <Calendar className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              {t.spinedev.booking.button}
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </section>
  );
}
