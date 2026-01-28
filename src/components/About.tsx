import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Linkedin, Mail, Code2, Palette, Database } from 'lucide-react';

const developers = [
  {
    name: 'David Rocha',
    role: 'Full Stack Developer',
    image: 'https://scontent.fbog4-2.fna.fbcdn.net/v/t39.30808-6/445215173_10211204525465590_1275968151452512039_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=rAv3Rh4q4bwQ7kNvwGFJH05&_nc_oc=AdmTsHQGQ3NTzwGMGjqO6yZt6ehjFE6rZa5nZGlhlB5NhizzXvNJM2q7r6W3TI36N3I&_nc_zt=23&_nc_ht=scontent.fbog4-2.fna&_nc_gid=R9iVtwfcR7cahc1mAj56Jg&oh=00_Afow9KKoW6xvV7cTDcw4j-SRPO-zIsyXAL4khJfRkz1Z9A&oe=697EBD16',
    bio: 'Especializado en arquitecturas escalables y desarrollo backend con más de 5 años de experiencia.',
    skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS'],
    social: {
      github: '#',
      linkedin: '#',
      email: 'david@integria.com'
    },
    icon: Code2
  },
  {
    name: 'Brageanth Palencia',
    role: 'Frontend Developer & UI/UX',
    image: 'https://scontent.fbog4-1.fna.fbcdn.net/v/t39.30808-6/481931911_10228688033246041_543368795305891287_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=DSSjL-WfQHwQ7kNvwGay5AL&_nc_oc=Adk6YD8PepugmzeFqxUvvWiXycN0M-8hlmurckCOabww9XHjvnrDdPxCnYdzgIqu4x8&_nc_zt=23&_nc_ht=scontent.fbog4-1.fna&_nc_gid=_9iHayyD7k2l73LdR_NLYQ&oh=00_Afppn8kJQ63EnB4b0OO5N8rT8UghD5mna0XDpm_zhab_4w&oe=697ED9EB',
    bio: 'Apasionado por crear experiencias de usuario excepcionales con diseños modernos y funcionales.',
    skills: ['React', 'Vue.js', 'TailwindCSS', 'Figma', 'Framer Motion'],
    social: {
      github: '#',
      linkedin: '#',
      email: 'palen@integria.com'
    },
    icon: Palette
  }
];

function DeveloperCard({ developer, index }: { developer: typeof developers[0], index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = developer.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative p-8">
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <img
              src={developer.image}
              alt={developer.name}
              className="relative w-32 h-32 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-xl"
            />
            <div className="absolute -bottom-2 -right-2 p-2 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full shadow-lg">
              <Icon className="w-5 h-5 text-white" />
            </div>
          </div>

          <h3 className="text-2xl font-display font-bold mb-1">{developer.name}</h3>
          <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">{developer.role}</p>
          <p className="text-gray-600 dark:text-gray-300 mb-6">{developer.bio}</p>

          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {developer.skills.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href={developer.social.github}
              className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={developer.social.linkedin}
              className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${developer.social.email}`}
              className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="nosotros" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Conoce al{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Equipo
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Dos desarrolladores apasionados comprometidos con la excelencia y la innovación
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {developers.map((developer, index) => (
            <DeveloperCard key={index} developer={developer} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-lg">
            <Database className="w-5 h-5 text-primary-600" />
            <span className="text-gray-700 dark:text-gray-300">
              <strong className="text-primary-600 dark:text-primary-400">Stack tecnológico:</strong> React, Astro, Node.js, TypeScript, TailwindCSS, PostgreSQL, MongoDB
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
