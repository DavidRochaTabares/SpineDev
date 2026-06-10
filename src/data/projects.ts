export interface Project {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: 'web' | 'app' | 'mobile' | 'automation' | 'ai';
  technologies: string[];
  images: string[];
  video?: string;
  demoUrl?: string;
  githubUrl?: string;
  problem: string;
  solution: string;
  result: string;
  architecture?: string;
  learnings?: string[];
  date: string;
  featured: boolean;
  showInPersonal: boolean;
  showInCompany: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    shortDescription: "Plataforma de comercio electrónico completa con panel de administración y pasarela de pagos.",
    fullDescription: "Desarrollo de plataforma e-commerce escalable con gestión de inventario, procesamiento de pagos con Stripe, panel de administración completo y sistema de notificaciones en tiempo real.",
    category: "web",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS S3"],
    images: ["https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop"],
    demoUrl: "#",
    githubUrl: "#",
    problem: "Cliente necesitaba migrar su tienda física a digital con gestión completa de inventario y pagos.",
    solution: "Desarrollo de plataforma full-stack con React, Node.js y MongoDB, integración de Stripe para pagos y AWS S3 para almacenamiento de imágenes.",
    result: "Incremento del 200% en ventas mensuales, reducción del 80% en tiempo de gestión de inventario.",
    date: "2024-06",
    featured: true,
    showInPersonal: true,
    showInCompany: true
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    shortDescription: "Dashboard interactivo para visualización de datos en tiempo real.",
    fullDescription: "Sistema de analytics con visualización de datos en tiempo real usando WebSockets, gráficos interactivos y métricas personalizables.",
    category: "app",
    technologies: ["Vue.js", "D3.js", "PostgreSQL", "WebSocket", "Node.js"],
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"],
    demoUrl: "#",
    githubUrl: "#",
    problem: "Empresa necesitaba visualizar métricas de negocio en tiempo real para toma de decisiones.",
    solution: "Dashboard con WebSockets para actualizaciones en tiempo real, D3.js para visualizaciones y PostgreSQL para almacenamiento.",
    result: "Reducción del 60% en tiempo de generación de reportes, mejora en toma de decisiones basada en datos.",
    date: "2024-03",
    featured: true,
    showInPersonal: true,
    showInCompany: true
  },
  {
    id: 3,
    title: "Corporate Website",
    shortDescription: "Sitio web corporativo moderno con CMS personalizado.",
    fullDescription: "Desarrollo de sitio corporativo con Astro, CMS headless (Sanity), blog integrado y optimización SEO avanzada.",
    category: "web",
    technologies: ["Astro", "TailwindCSS", "Sanity CMS", "TypeScript"],
    images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"],
    demoUrl: "#",
    githubUrl: "#",
    problem: "Cliente necesitaba presencia web profesional con capacidad de actualizar contenido sin conocimientos técnicos.",
    solution: "Sitio estático con Astro para performance, Sanity CMS para gestión de contenido y optimización SEO.",
    result: "Mejora del 300% en velocidad de carga, incremento del 150% en tráfico orgánico.",
    date: "2024-01",
    featured: false,
    showInPersonal: true,
    showInCompany: true
  }
];
