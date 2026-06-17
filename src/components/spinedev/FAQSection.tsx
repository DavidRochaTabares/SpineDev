import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useTranslation } from "../../hooks/useTranslation";
import { ChevronDown, ArrowRight } from "lucide-react";
import { faqs } from "../../data/spinedev";

function FAQItem({ faq, index, language }: { faq: (typeof faqs)[0]; index: number; language: 'es' | 'en' }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-gray-200 dark:border-gray-700 last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors pr-4">
          {faq.question[language]}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-gray-600 dark:text-gray-300 leading-relaxed">
          {faq.answer[language]}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function FAQSection() {
  const { t, language } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            {t.spinedev.faq.title}{" "}
            <span className="text-secondary-600 dark:text-secondary-400">
              {t.spinedev.faq.titleHighlight}
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t.spinedev.faq.subtitle}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 dark:border-gray-700">
          {faqs.map((faq, index) => (
            <FAQItem key={faq.id} faq={faq} index={index} language={language} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-8 sm:p-10 border border-primary-200 dark:border-primary-800">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
              {t.spinedev.faq.otherQuestion}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-xl mx-auto">
              {language === 'es' 
                ? 'Estamos aquí para ayudarte. Contáctanos y resolveremos todas tus dudas.' 
                : 'We\'re here to help. Contact us and we\'ll answer all your questions.'}
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-3 px-10 py-5 bg-secondary-600 hover:bg-secondary-700 dark:bg-secondary-500 dark:hover:bg-secondary-600 text-white text-xl font-bold rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              {t.spinedev.faq.contactUs}
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
