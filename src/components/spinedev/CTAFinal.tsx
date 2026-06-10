import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "../../hooks/useTranslation";
import { MessageCircle, CheckCircle } from "lucide-react";

export default function CTAFinal() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const whatsappNumber = "573058260893";
  const whatsappMessage = encodeURIComponent(
    "¡Hola! Me gustaría agendar una consultoría gratuita para mi proyecto."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contacto" className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="flex items-center justify-center max-w-screen-xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center w-full"
          >
            <div className="relative w-full max-w-4xl">
              <div className="absolute inset-0 bg-primary-500 rounded-2xl blur-xl opacity-30"></div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 lg:p-12 shadow-2xl text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
                  className="inline-flex p-4 sm:p-5 lg:p-6 bg-green-500 rounded-full mb-4 sm:mb-6 shadow-lg"
                >
                  <MessageCircle className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-white" />
                </motion.div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mb-3 sm:mb-4">
                  {t.spinedev.cta.title}{" "}
                  <span className="text-secondary-600 dark:text-secondary-400">
                    {t.spinedev.cta.titleHighlight}
                  </span>
                </h2>

                <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
                  {t.spinedev.cta.subtitle}
                </p>

                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl mx-auto mb-6 sm:mb-8">
                  <div className="flex items-start gap-3 text-left">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                      {t.spinedev.cta.benefit1}
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-left">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                      {t.spinedev.cta.benefit2}
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-left">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                      {t.spinedev.cta.benefit3}
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-left">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                      {t.spinedev.cta.benefit4}
                    </span>
                  </div>
                </div>

                <motion.a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-10 py-5 bg-green-500 hover:bg-green-600 text-white rounded-xl hover:shadow-2xl transition-all duration-300 font-bold text-lg group"
                >
                  <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                  {t.spinedev.cta.button}
                </motion.a>

                <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                  {t.spinedev.cta.whatsapp}
                </p>

                <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-green-700 dark:text-green-400">
                    {t.spinedev.cta.free}
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
