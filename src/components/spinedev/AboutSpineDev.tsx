import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "../../hooks/useTranslation";
import { Shield, Zap, Users, ArrowRight } from "lucide-react";
import { aboutSpineDev } from "../../data/spinedev";

const valueIcons: Record<string, any> = {
  Transparencia: Shield,
  Calidad: Zap,
  Agilidad: Users,
  Transparency: Shield,
  Quality: Zap,
  Agility: Users,
};

export default function AboutSpineDev() {
  const { t, language } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre-spinedev" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            {aboutSpineDev.values.map((value, index) => {
              const Icon = valueIcons[value.title.es] || Shield;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-center md:text-center"
                >
                  {/* Desktop: icono arriba centrado */}
                  <div className="hidden md:inline-flex p-4 bg-primary-600 rounded-xl mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Mobile: icono a la izquierda del título */}
                  <div className="flex md:hidden items-start gap-3 mb-3">
                    <div className="flex-shrink-0 p-2 bg-primary-600 rounded-lg">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white text-left">
                      {value.title[language]}
                    </h3>
                  </div>
                  
                  {/* Desktop: título centrado */}
                  <h3 className="hidden md:block text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {value.title[language]}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-left md:text-center">
                    {value.description[language]}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-3 gap-8 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700"
          >
            {aboutSpineDev.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label[language]}
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <a
              href="#contacto"
              className="inline-flex items-center gap-3 px-8 py-4 bg-secondary-600 hover:bg-secondary-700 dark:bg-secondary-500 dark:hover:bg-secondary-600 text-white text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              {language === 'es' ? '¡Trabajemos juntos!' : 'Let\'s work together!'}
              <ArrowRight className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
