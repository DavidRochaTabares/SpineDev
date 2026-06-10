import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { experiences } from '../data/experience';
import { useTranslation } from '../hooks/useTranslation';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t, language } = useTranslation();

  const formatDate = (date: string) => {
    const [year, month] = date.split('-');
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    return `${months[parseInt(month) - 1]} ${year}`;
  };

  return (
    <section id="experiencia" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            {t.experience.title}{' '}
            <span className="text-secondary-600 dark:text-secondary-400">
              {t.experience.titleHighlight}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t.experience.subtitle}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line - centered in mobile, left in desktop */}
            <div className="absolute left-1/2 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500 -translate-x-1/2 md:translate-x-0"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative md:pl-20"
                >
                  {/* Timeline dot - centered in mobile, left in desktop */}
                  <div className="absolute left-1/2 md:left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 border-4 border-white dark:border-gray-900 shadow-lg -translate-x-1/2 md:translate-x-0 -z-10"></div>

                  <div className="relative z-10 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-1">
                          {exp.position[language]}
                        </h3>
                        <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold mb-2">
                          <Briefcase className="w-4 h-4" />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : t.experience.present}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location[language]}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {exp.description[language]}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{t.experience.achievements}</h4>
                      <ul className="space-y-2">
                        {exp.achievements[language].map((achievement: string, i: number) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                            <span className="text-primary-500 mt-1.5">•</span>
                            <span className="flex-1">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
