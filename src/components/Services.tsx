import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Smartphone, Database, Cloud, ShoppingCart, Search, Zap } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Desarrollo Web',
    description: 'Sitios web modernos, rápidos y optimizados con las últimas tecnologías.',
    features: ['React/Vue/Astro', 'Responsive Design', 'SEO Optimizado', 'Performance']
  },
  {
    icon: Smartphone,
    title: 'Aplicaciones Móviles',
    description: 'Apps nativas y multiplataforma con experiencias de usuario excepcionales.',
    features: ['React Native', 'iOS & Android', 'UI/UX Design', 'Push Notifications']
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    description: 'Tiendas online completas con gestión de productos, pagos y envíos.',
    features: ['Shopify/WooCommerce', 'Pasarelas de Pago', 'Gestión de Inventario', 'Analytics']
  },
  {
    icon: Database,
    title: 'Backend & APIs',
    description: 'Arquitecturas escalables y APIs RESTful robustas y seguras.',
    features: ['Node.js/Express', 'PostgreSQL/MongoDB', 'Authentication', 'Microservicios']
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Diseños modernos y funcionales centrados en la experiencia del usuario.',
    features: ['Figma/Adobe XD', 'Prototipos', 'Design Systems', 'User Research']
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Despliegue, hosting y mantenimiento en la nube con alta disponibilidad.',
    features: ['AWS/Azure/GCP', 'Docker/Kubernetes', 'CI/CD', 'Monitoring']
  },
  {
    icon: Search,
    title: 'SEO & Marketing',
    description: 'Optimización para motores de búsqueda y estrategias de marketing digital.',
    features: ['SEO On-Page', 'Google Analytics', 'Content Strategy', 'Performance']
  },
  {
    icon: Zap,
    title: 'Consultoría Tech',
    description: 'Asesoramiento técnico y estratégico para tu proyecto digital.',
    features: ['Arquitectura', 'Code Review', 'Best Practices', 'Tech Stack']
  }
];

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = service.icon;

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
        <div className="inline-flex p-4 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-white" />
        </div>

        <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {service.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {service.description}
        </p>

        <ul className="space-y-2">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicios" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Nuestros{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Servicios
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Soluciones completas para llevar tu proyecto digital al siguiente nivel
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-200 font-semibold text-lg"
          >
            Solicitar Cotización
          </a>
        </motion.div>
      </div>
    </section>
  );
}
