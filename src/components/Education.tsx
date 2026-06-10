import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { education } from '../data/education';
import { useTranslation } from '../hooks/useTranslation';

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  return (
    <section id="educacion" className="py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            {t.education.title}{' '}
            <span className="text-secondary-600 dark:text-secondary-400">
              {t.education.titleHighlight}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t.education.subtitle}
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg">
                  {edu.id === 3 ? (
                    <Award className="w-6 h-6 text-white" />
                  ) : (
                    <GraduationCap className="w-6 h-6 text-white" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-1">
                    {edu.title}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium text-sm mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {edu.date}
                  </p>
                </div>
              </div>

              {edu.description && (
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {edu.description}
                </p>
              )}

              {edu.skills && (
                <div className="flex flex-wrap gap-2">
                  {edu.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
