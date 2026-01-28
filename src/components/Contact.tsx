import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle } from "lucide-react";
import TitleContact from "./TitleContact";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const whatsappNumber = "573058260893";
  const whatsappMessage = encodeURIComponent(
    "¡Hola! Me gustaría obtener más información sobre sus servicios.",
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contacto" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* <TitleContact /> */}

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
            <div className="relative w-full max-w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur-xl opacity-50"></div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white dark:bg-gray-800 rounded-2xl p-12 shadow-2xl text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
                  className="inline-flex p-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full mb-6 shadow-lg"
                >
                  <MessageCircle className="w-16 h-16 text-white" />
                </motion.div>

                <h3 className="text-3xl font-display font-bold mb-4">
                  ¡Hablemos por{" "}
                  <span className="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
                    WhatsApp
                  </span>
                  !
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                  Estamos disponibles para responder todas tus preguntas y
                  ayudarte con tu proyecto
                </p>

                <motion.a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:shadow-2xl transition-all duration-300 font-bold text-lg group"
                >
                  <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                  Chatear Ahora
                </motion.a>

                <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                  +57 305 826 0893
                </p>

                <div className="mt-8 flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Disponible ahora
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
