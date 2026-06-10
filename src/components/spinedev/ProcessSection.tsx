import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "../../hooks/useTranslation";
import {
  Search,
  FileText,
  Palette,
  Code,
  CheckCircle,
  Rocket,
} from "lucide-react";
import { processSteps } from "../../data/spinedev";

const iconMap: Record<string, any> = {
  Search,
  FileText,
  Palette,
  Code,
  CheckCircle,
  Rocket,
};

function ProcessStep({
  step,
  index,
  isLast,
  language,
}: {
  step: (typeof processSteps)[0];
  index: number;
  isLast: boolean;
  language: 'es' | 'en';
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = iconMap[step.icon];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      <div className="flex gap-4 sm:gap-6">
        {/* Timeline */}
        <div className="flex flex-col items-center flex-shrink-0">
          <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary-600 text-white shadow-lg z-10">
            <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          {!isLast && (
            <div className="w-0.5 flex-1 bg-gradient-to-b from-primary-600 to-primary-300 mt-2 min-h-[24px]"></div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 pb-4 sm:pb-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <h3 className="text-lg sm:text-xl font-display font-bold text-gray-900 dark:text-white">
                {step.title[language]}
              </h3>
              <span className="inline-flex items-center px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs sm:text-sm font-medium">
                {step.duration[language]}
              </span>
            </div>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              {step.description[language]}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProcessSection() {
  const { t, language } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="proceso" className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            {t.spinedev.process.title}{" "}
            <span className="text-secondary-600 dark:text-secondary-400">
              {t.spinedev.process.titleHighlight}
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t.spinedev.process.subtitle}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto px-2 sm:px-0">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={step.id}
              step={step}
              index={index}
              isLast={index === processSteps.length - 1}
              language={language}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 px-6 sm:px-8 py-6 bg-primary-50 dark:bg-primary-900/20 rounded-xl max-w-3xl mx-auto">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0" />
              <span className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                {t.spinedev.process.weeklyDeliveries}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0" />
              <span className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                {t.spinedev.process.noSurprises}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0" />
              <span className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                {t.spinedev.process.constantCommunication}
              </span>
            </div>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 italic">
            * Los tiempos pueden ser menores según la complejidad del proyecto
          </p>
        </motion.div>
      </div>
    </section>
  );
}
