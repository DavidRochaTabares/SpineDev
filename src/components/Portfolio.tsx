import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Plataforma de comercio electrónico completa con panel de administración, pasarela de pagos y gestión de inventario.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'web',
    link: '#',
    github: '#'
  },
  {
    id: 2,
    title: 'Dashboard Analytics',
    description: 'Dashboard interactivo para visualización de datos en tiempo real con gráficos y métricas personalizables.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['Vue.js', 'D3.js', 'PostgreSQL', 'WebSocket'],
    category: 'app',
    link: '#',
    github: '#'
  },
  {
    id: 3,
    title: 'Corporate Website',
    description: 'Sitio web corporativo moderno con CMS personalizado, blog y sistema de gestión de contenidos.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    tags: ['Astro', 'TailwindCSS', 'Sanity CMS'],
    category: 'web',
    link: '#',
    github: '#'
  },
  {
    id: 4,
    title: 'Mobile App Design',
    description: 'Diseño y desarrollo de aplicación móvil para gestión de tareas con sincronización en la nube.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
    tags: ['React Native', 'Firebase', 'Redux'],
    category: 'mobile',
    link: '#',
    github: '#'
  },
  {
    id: 5,
    title: 'API REST Backend',
    description: 'API RESTful escalable con autenticación JWT, documentación Swagger y tests automatizados.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'Docker'],
    category: 'app',
    link: '#',
    github: '#'
  },
  {
    id: 6,
    title: 'Landing Page SaaS',
    description: 'Landing page de alta conversión para producto SaaS con animaciones y optimización SEO.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop',
    tags: ['Next.js', 'Framer Motion', 'TailwindCSS'],
    category: 'web',
    link: '#',
    github: '#'
  }
];

const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'web', label: 'Web' },
  { id: 'app', label: 'Aplicaciones' },
  { id: 'mobile', label: 'Móvil' }
];

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex gap-3">
            <a
              href={project.link}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              Ver Proyecto
            </a>
            <a
              href={project.github}
              className="p-2 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portafolio" className="py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Nuestro{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Portafolio
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Proyectos que demuestran nuestra experiencia y compromiso con la calidad
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
