import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useTranslation } from "../../hooks/useTranslation";
import { ArrowRight } from "lucide-react";

const techCategories = [
  {
    id: "frontend",
    title: "Frontend",
    technologies: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Astro", logo: "https://astro.build/assets/press/astro-icon-dark.svg" },
      { name: "TailwindCSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    technologies: [
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    technologies: [
      { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Supabase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
    ],
  },
  {
    id: "ai",
    title: "Inteligencia Artificial",
    technologies: [
      { name: "OpenAI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "LangChain", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "Automation", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    ],
  },
];

function TechGrid({ technologies }: { technologies: typeof techCategories[0]['technologies'] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
      {technologies.map((tech, i) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="group"
        >
          <div className="flex flex-col items-center gap-3 bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-primary-400 dark:hover:border-primary-500 hover:shadow-lg transition-all duration-300">
            <img
              src={tech.logo}
              alt={tech.name}
              className={`w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300 ${
                tech.name === "GitHub" || tech.name === "AWS" || tech.name === "Astro"
                  ? "dark:brightness-0 dark:invert"
                  : ""
              }`}
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <span className="font-semibold text-sm text-center text-gray-900 dark:text-white">
              {tech.name}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function TechnologiesSpineDev() {
  const { t, language } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("frontend");

  // Cambio automático de tabs cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((current) => {
        const currentIndex = techCategories.findIndex(cat => cat.id === current);
        const nextIndex = (currentIndex + 1) % techCategories.length;
        return techCategories[nextIndex].id;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const activeCategory = techCategories.find(cat => cat.id === activeTab);

  return (
    <section id="tecnologias" className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            {t.spinedev.technologies.title}{" "}
            <span className="text-secondary-600 dark:text-secondary-400">
              {t.spinedev.technologies.titleHighlight}
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t.spinedev.technologies.subtitle}
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-12 flex-wrap">
          {techCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 ${
                activeTab === category.id
                  ? 'bg-primary-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Carrusel automático */}
        <div className="max-w-6xl mx-auto overflow-hidden">
          <AnimatePresence mode="wait">
            {activeCategory && (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <TechGrid technologies={activeCategory.technologies} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 italic max-w-2xl mx-auto mb-8">
            "{t.spinedev.technologies.quote}"
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-3 px-8 py-4 bg-secondary-600 hover:bg-secondary-700 dark:bg-secondary-500 dark:hover:bg-secondary-600 text-white text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            {language === 'es' ? '¡Construyamos algo increíble!' : 'Let\'s build something amazing!'}
            <ArrowRight className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
