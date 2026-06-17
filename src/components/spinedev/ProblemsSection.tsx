import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useTranslation } from "../../hooks/useTranslation";
import {
  FileText,
  Unplug,
  Package,
  RotateCw,
  Clock,
  Users,
  ArrowRight,
} from "lucide-react";
import { problems } from "../../data/spinedev";

const iconMap: Record<string, any> = {
  FileText,
  Unplug,
  Package,
  RotateCw,
  Clock,
  Users,
};

// Mapeo de problemas a demos
const problemToDemoMap: Record<string, string> = {
  'manual-processes': 'workflow',
  'disconnected-systems': 'integrations',
  'generic-software': 'custom',
  'repetitive-tasks': 'automation',
  'slow-mvp': 'mvp',
  'no-tech-team': 'team'
};

function ProblemCard({
  problem,
  index,
  language,
}: {
  problem: (typeof problems)[0];
  index: number;
  language: 'es' | 'en';
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = iconMap[problem.icon];

  const handleOpenDemo = () => {
    const demoType = problemToDemoMap[problem.id];
    
    if (demoType) {
      // Disparar evento personalizado para abrir el modal
      const event = new CustomEvent('openDemoModal', { 
        detail: { type: demoType },
        bubbles: true,
        composed: true
      });
      window.dispatchEvent(event);
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative">
        <div className="flex items-center gap-3 mb-3">
          <div className="flex-shrink-0 p-2.5 bg-primary-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-lg sm:text-xl font-display font-bold group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {problem.title[language]}
          </h3>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
          {problem.description[language]}
        </p>

        <p className="text-xs text-gray-500 dark:text-gray-400 italic mb-4">
          {problem.impact[language]}
        </p>

        {/* Botón para ver solución */}
        <button
          onClick={handleOpenDemo}
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white rounded-lg font-semibold text-sm transition-all group-hover:shadow-lg"
        >
          {language === 'es' ? 'Ver solución' : 'See solution'}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}

export default function ProblemsSection() {
  const { t, language } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problemas" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            {t.spinedev.problems.title}{" "}
            <span className="text-secondary-600 dark:text-secondary-400">
              {t.spinedev.problems.titleHighlight}
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t.spinedev.problems.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <ProblemCard key={problem.id} problem={problem} index={index} language={language} />
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-3 px-8 py-4 bg-secondary-600 hover:bg-secondary-700 dark:bg-secondary-500 dark:hover:bg-secondary-600 text-white text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            {language === 'es' ? '¡Resolvamos tu problema ahora!' : 'Let\'s solve your problem now!'}
            <ArrowRight className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
