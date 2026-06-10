import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { caseStudies } from "../../data/spinedev";

export default function CaseStudiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  if (caseStudies.length === 0) {
    return (
      <section id="casos" className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
              Casos de{" "}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                éxito
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
              Actualmente estamos documentando proyectos para compartir estudios
              de caso más detallados
            </p>
            <div className="max-w-3xl mx-auto bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-12 border-2 border-dashed border-primary-300 dark:border-primary-700">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Próximamente compartiremos casos de éxito con resultados medibles
                y testimonios de clientes satisfechos.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="casos" className="py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Resultados que{" "}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              hablan por sí solos
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Proyectos que han transformado negocios
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold mb-2">{caseStudy.title.es}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {caseStudy.client.es}
              </p>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    Problema:
                  </span>
                  <p className="text-gray-600 dark:text-gray-300">
                    {caseStudy.problem.es}
                  </p>
                </div>
                <div>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    Solución:
                  </span>
                  <p className="text-gray-600 dark:text-gray-300">
                    {caseStudy.solution.es}
                  </p>
                </div>
                <div>
                  <span className="font-semibold text-primary-600 dark:text-primary-400">
                    Resultado:
                  </span>
                  <p className="text-gray-600 dark:text-gray-300">
                    {caseStudy.result.es}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
