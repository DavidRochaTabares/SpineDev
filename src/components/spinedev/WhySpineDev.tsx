import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "../../hooks/useTranslation";
import {
  Wrench,
  MessageSquare,
  RefreshCw,
  TrendingUp,
  Cpu,
  Target,
} from "lucide-react";
import { whySpineDev } from "../../data/spinedev";

const iconMap: Record<string, any> = {
  Wrench,
  MessageSquare,
  RefreshCw,
  TrendingUp,
  Cpu,
  Target,
};

function FeatureCard({
  feature,
  index,
  language,
}: {
  feature: (typeof whySpineDev)[0];
  index: number;
  language: 'es' | 'en';
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = iconMap[feature.icon];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex-shrink-0 p-3 bg-primary-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-bold group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {feature.title[language]}
          </h3>
        </div>

        <p className="text-gray-600 dark:text-gray-300">
          {feature.description[language]}
        </p>
      </div>
    </motion.div>
  );
}

export default function WhySpineDev() {
  const { t, language } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-spinedev" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            {t.spinedev.why.title}{" "}
            <span className="text-secondary-600 dark:text-secondary-400">
              {t.spinedev.why.titleHighlight}
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t.spinedev.why.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {whySpineDev.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} language={language} />
          ))}
        </div>
      </div>
    </section>
  );
}
