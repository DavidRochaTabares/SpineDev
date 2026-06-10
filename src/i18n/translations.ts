export const translations = {
  es: {
    // Hero
    hero: {
      badge: "Full Stack Developer | AWS | React | Node.js",
      title: "David Rocha",
      subtitle: "Tabares",
      description: "Desarrollador Full Stack con especialización en Frontend. Experto en React, Next.js, AWS y arquitecturas modernas.",
      downloadCV: "Descargar CV",
      contact: "¡Hablemos por WhatsApp!"
    },
    // Technologies
    technologies: {
      title: "Stack",
      titleHighlight: "Tecnológico",
      subtitle: "Tecnologías y herramientas con las que trabajo",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        cloud: "Cloud (AWS)",
        tools: "Herramientas",
        ai: "Inteligencia Artificial"
      }
    },
    // Experience
    experience: {
      title: "Experiencia",
      titleHighlight: "Laboral",
      subtitle: "Mi trayectoria profesional en desarrollo web",
      present: "Presente",
      achievements: "Logros principales:"
    },
    // Education
    education: {
      title: "Educación y",
      titleHighlight: "Certificaciones",
      subtitle: "Formación académica y cursos especializados"
    }
  },
  en: {
    // Hero
    hero: {
      badge: "Full Stack Developer | AWS | React | Node.js",
      title: "David Rocha",
      subtitle: "Tabares",
      description: "Full Stack Developer with Frontend specialization. Expert in React, Next.js, AWS and modern architectures.",
      downloadCV: "Download CV",
      contact: "Let's talk on WhatsApp!"
    },
    // Technologies
    technologies: {
      title: "Tech",
      titleHighlight: "Stack",
      subtitle: "Technologies and tools I work with",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        cloud: "Cloud (AWS)",
        tools: "Tools",
        ai: "Artificial Intelligence"
      }
    },
    // Experience
    experience: {
      title: "Work",
      titleHighlight: "Experience",
      subtitle: "My professional journey in web development",
      present: "Present",
      achievements: "Key achievements:"
    },
    // Education
    education: {
      title: "Education &",
      titleHighlight: "Certifications",
      subtitle: "Academic background and specialized courses"
    }
  }
};

export type Language = 'es' | 'en';
export type Translations = typeof translations.es;
