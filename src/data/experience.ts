export interface Experience {
  id: number;
  company: string;
  position: {
    es: string;
    en: string;
  };
  startDate: string;
  endDate: string | null;
  description: {
    es: string;
    en: string;
  };
  achievements: {
    es: string[];
    en: string[];
  };
  technologies: string[];
  location: {
    es: string;
    en: string;
  };
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Global Medicine Foundation",
    position: {
      es: "Desarrollador Frontend – Full Stack & DevOps",
      en: "Frontend Developer – Full Stack & DevOps"
    },
    startDate: "2024-10",
    endDate: "2025-10",
    description: {
      es: "Desarrollo de aplicación web completa desde cero con enfoque en usabilidad y arquitectura escalable.",
      en: "Complete web application development from scratch with focus on usability and scalable architecture."
    },
    achievements: {
      es: [
        "Desarrollo de aplicación web desde cero, incluyendo diseño, arquitectura y enfoque en usabilidad",
        "Implementación del frontend con Next.js, React, Tailwind CSS y manejo de estado global con Redux y Thunks",
        "Integración con backend en Node.js y servicios de AWS: Lambda, AppSync, DynamoDB, Cognito, Amplify, SNS, S3, CloudWatch, API Gateway e IAM",
        "Integración de videollamadas (Twilio), control de versiones con GitHub y despliegue continuo (DevOps y QA)",
        "Creación y mantenimiento de documentación técnica del proyecto utilizando Docusaurus"
      ],
      en: [
        "Web application development from scratch, including design, architecture and usability focus",
        "Frontend implementation with Next.js, React, Tailwind CSS and global state management with Redux and Thunks",
        "Integration with Node.js backend and AWS services: Lambda, AppSync, DynamoDB, Cognito, Amplify, SNS, S3, CloudWatch, API Gateway and IAM",
        "Video call integration (Twilio), version control with GitHub and continuous deployment (DevOps and QA)",
        "Creation and maintenance of technical project documentation using Docusaurus"
      ]
    },
    technologies: ["Next.js", "React", "Tailwind CSS", "Redux", "Node.js", "AWS", "Twilio", "Docusaurus"],
    location: {
      es: "Remoto",
      en: "Remote"
    }
  },
  {
    id: 2,
    company: "Revista Poder",
    position: {
      es: "Desarrollador Web – Diseñador Gráfico",
      en: "Web Developer – Graphic Designer"
    },
    startDate: "2023-11",
    endDate: "2024-10",
    description: {
      es: "Diseño y desarrollo de portales web funcionales con enfoque en experiencia de usuario.",
      en: "Design and development of functional web portals with focus on user experience."
    },
    achievements: {
      es: [
        "Diseño y desarrollo de portales web funcionales para Revista Poder",
        "Implementación y mantenimiento de sitios usando PHP, HTML, CSS, JavaScript y React",
        "Optimización visual e integración de elementos gráficos interactivos (widgets, banners, secciones dinámicas)",
        "Diseño de piezas para redes sociales y campañas publicitarias",
        "Maquetación y diseño completo de la revista impresa en cada edición mensual"
      ],
      en: [
        "Design and development of functional web portals for Revista Poder",
        "Implementation and maintenance of sites using PHP, HTML, CSS, JavaScript and React",
        "Visual optimization and integration of interactive graphic elements (widgets, banners, dynamic sections)",
        "Design of pieces for social networks and advertising campaigns",
        "Layout and complete design of the printed magazine in each monthly edition"
      ]
    },
    technologies: ["PHP", "HTML", "CSS", "JavaScript", "React", "Diseño Gráfico"],
    location: {
      es: "Bogotá, Colombia",
      en: "Bogotá, Colombia"
    }
  },
  {
    id: 3,
    company: "Trebol",
    position: {
      es: "Desarrollador Web Junior – QA",
      en: "Junior Web Developer – QA"
    },
    startDate: "2018-02",
    endDate: "2023-07",
    description: {
      es: "Desarrollo web y control de calidad con interacción directa con clientes.",
      en: "Web development and quality control with direct client interaction."
    },
    achievements: {
      es: [
        "Interacción directa con clientes para levantamiento de requerimientos y soporte técnico",
        "Creación y mantenimiento de páginas web orientadas a necesidades específicas del negocio",
        "Procesamiento y validación de datos utilizando HTML, SASS y JavaScript",
        "Apoyo en pruebas, depuración, control de calidad y documentación básica de cambios"
      ],
      en: [
        "Direct interaction with clients for requirements gathering and technical support",
        "Creation and maintenance of web pages oriented to specific business needs",
        "Data processing and validation using HTML, SASS and JavaScript",
        "Support in testing, debugging, quality control and basic change documentation"
      ]
    },
    technologies: ["HTML", "SASS", "JavaScript", "QA"],
    location: {
      es: "Bogotá, Colombia",
      en: "Bogotá, Colombia"
    }
  }
];
