export interface Education {
  id: number;
  title: string;
  institution: string;
  date: string;
  description?: string;
  skills?: string[];
}

export const education: Education[] = [
  {
    id: 1,
    title: "Diseño Web Profesional (Responsive, JS, WordPress, Git)",
    institution: "Udemy",
    date: "2023",
    skills: ["HTML5", "CSS3", "Responsive Design", "Figma", "SASS", "JavaScript", "jQuery", "Bootstrap 5", "WordPress", "Git", "GitHub", "Tailwind", "PHP"]
  },
  {
    id: 2,
    title: "Meta (Facebook) – Front-end Developer",
    institution: "Meta",
    date: "2023",
    skills: ["HTML", "CSS", "JavaScript", "React", "UI/UX", "Control de Versiones"]
  },
  {
    id: 3,
    title: "LangChain, LangGraph y Agentes IA con Python",
    institution: "Udemy",
    date: "2026",
    description: "Desarrollo de agentes con LLMs y herramientas, flujos de trabajo con LangGraph (multi-step), automatización y construcción de soluciones de IA con Python.",
    skills: ["Python", "LangChain", "LangGraph", "IA", "Automatización"]
  }
];
