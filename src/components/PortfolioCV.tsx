import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Smartphone, Play, Github, X, Image as ImageIcon, Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

// ============================================================
// CONFIGURACIÓN DE PROYECTOS
// ============================================================

interface Project {
  id: string;
  name: string;
  subtitle: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  icon: typeof Smartphone | typeof Globe;
  screenshots: (string | null)[];
  videoUrl: string | null;
  githubUrl?: string;
  liveUrl?: string;
  technologies: string[];
  features: string[];
}

const PROJECTS: Project[] = [
  {
    id: 'georeport',
    name: 'GeoReport',
    subtitle: {
      es: 'Android Mobile Application',
      en: 'Android Mobile Application'
    },
    description: {
      es: 'Aplicación Android para reportar incidencias urbanas con geolocalización, evidencia fotográfica, CRUD y funcionamiento offline-first con sincronización con servicios remotos.',
      en: 'Android application for reporting urban incidents with geolocation, photographic evidence, CRUD and offline-first functionality with remote services synchronization.'
    },
    icon: Smartphone,
    screenshots: [
      '/SS%201.jpeg',
      '/SS%202.jpeg',
      '/SS%203.jpeg',
      '/SS%204.jpeg',
    ],
    videoUrl: '/VIDEO%20DEMO.mp4',
    githubUrl: 'https://github.com/DavidRochaTabares/GeoReport-Mobile',
    technologies: [
      'Kotlin',
      'Jetpack Compose',
      'Firebase Auth',
      'Firestore',
      'Room',
      'CameraX',
      'OpenStreetMap',
      'Supabase Storage',
      'WorkManager',
      'MVVM',
    ],
    features: [
      'Authentication',
      'CRUD',
      'Offline-first',
      'Camera',
      'Maps',
      'Sync',
    ],
  },
  {
    id: 'spinedev',
    name: 'SpineDev',
    subtitle: {
      es: 'Landing Page & Booking System',
      en: 'Landing Page & Booking System'
    },
    description: {
      es: 'Sitio web profesional para agencia de desarrollo con sistema de reservas integrado, modal de demostración interactivo, secciones dinámicas y diseño responsive moderno.',
      en: 'Professional website for development agency with integrated booking system, interactive demo modal, dynamic sections and modern responsive design.'
    },
    icon: Globe,
    screenshots: [],
    videoUrl: '/video%20demo%20spinedev.mp4',
    liveUrl: 'https://spinedev.pro',
    technologies: [
      'Astro',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Lucide React',
      'Supabase',
      'Google Calendar API',
      'OpenAI API',
    ],
    features: [
      'Responsive Design',
      'Booking System',
      'Interactive Demos',
      'Dark Mode',
      'i18n (ES/EN)',
      'AI Integration',
    ],
  },
];

// ============================================================

export default function PortfolioCV() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t, language } = useTranslation();
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);

  const currentProject = PROJECTS[currentProjectIndex];

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % PROJECTS.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  };

  const openVideoModal = (videoUrl: string | null) => {
    if (videoUrl) {
      setSelectedVideoUrl(videoUrl);
      setIsVideoModalOpen(true);
    }
  };

  const isYouTubeUrl = (url: string) =>
    url.includes('youtube.com') || url.includes('youtu.be');

  return (
    <section id="portafolio" className="py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            {t.cvPortfolio.title}{' '}
            <span className="text-secondary-600 dark:text-secondary-400">
              {t.cvPortfolio.titleHighlight}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t.cvPortfolio.subtitle}
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Buttons - Desktop (a los lados) */}
          {PROJECTS.length > 1 && (
            <>
              <button
                onClick={prevProject}
                className="hidden lg:block absolute -left-16 top-1/3 z-10 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg border border-gray-300 dark:border-gray-600 hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-300 group"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
              </button>
              <button
                onClick={nextProject}
                className="hidden lg:block absolute -right-16 top-1/3 z-10 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg border border-gray-300 dark:border-gray-600 hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-300 group"
                aria-label="Next project"
              >
                <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
              </button>
            </>
          )}

          {/* Project Card with AnimatePresence */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <div className="p-6 sm:p-8">
                {/* Project Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary-600 dark:bg-primary-500 rounded-lg flex-shrink-0">
                    <currentProject.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-1">
                      {currentProject.name}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold">
                      {currentProject.subtitle[language]}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {currentProject.description[language]}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {currentProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Screenshots (solo para proyectos con screenshots) */}
                {currentProject.screenshots.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider flex items-center gap-2">
                      <span className="w-6 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500"></span>
                      {t.cvPortfolio.screenshots}
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {currentProject.screenshots.map((src, i) => (
                        <div
                          key={i}
                          className="aspect-[9/16] rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800/50 flex flex-col items-center justify-center gap-2 overflow-hidden"
                        >
                          {src ? (
                            <img
                              src={src}
                              alt={`${currentProject.name} screenshot ${i + 1}`}
                              className="w-full h-full object-contain"
                              loading="lazy"
                            />
                          ) : (
                            <>
                              <ImageIcon className="w-6 h-6 text-gray-400 dark:text-gray-500" />
                              <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">
                                Screenshot {i + 1}
                              </span>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Video Preview (solo para proyectos sin screenshots) */}
                {currentProject.screenshots.length === 0 && currentProject.videoUrl && (
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider flex items-center gap-2">
                      <span className="w-6 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500"></span>
                      {language === 'es' ? 'Vista Previa' : 'Preview'}
                    </h4>
                    <div className="rounded-lg overflow-hidden border-2 border-gray-300 dark:border-gray-600 bg-black">
                      <video
                        src={currentProject.videoUrl}
                        autoPlay
                        loop
                        muted
                        playsInline
                        controls
                        className="w-full h-auto min-h-[300px] sm:min-h-[400px]"
                      />
                    </div>
                  </div>
                )}

                {/* What it demonstrates */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-6 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500"></span>
                    {t.cvPortfolio.demonstrates}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-secondary-50 dark:bg-secondary-900/20 text-secondary-700 dark:text-secondary-300 rounded-full text-sm font-medium border border-secondary-200 dark:border-secondary-800"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:justify-center gap-3 sm:gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {/* Botón Ver demo solo para proyectos con screenshots (GeoReport) */}
                  {currentProject.screenshots.length > 0 && (
                    <button
                      onClick={() => openVideoModal(currentProject.videoUrl)}
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-secondary-600 hover:bg-secondary-700 dark:bg-secondary-500 dark:hover:bg-secondary-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto"
                      aria-label={t.cvPortfolio.watchDemo}
                    >
                      <Play className="w-5 h-5" />
                      {t.cvPortfolio.watchDemo}
                    </button>
                  )}
                  {currentProject.githubUrl && (
                    <a
                      href={currentProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:border-primary-500 dark:hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 w-full sm:w-auto"
                    >
                      <Github className="w-5 h-5" />
                      {t.cvPortfolio.viewCode}
                    </a>
                  )}
                  {currentProject.liveUrl && (
                    <a
                      href={currentProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 w-full ${
                        currentProject.screenshots.length === 0
                          ? 'bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white sm:w-auto sm:min-w-[200px]'
                          : 'border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary-500 dark:hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400 sm:w-auto'
                      }`}
                    >
                      <Globe className="w-5 h-5" />
                      {language === 'es' ? 'Ver sitio' : 'View site'}
                    </a>
                  )}
                </div>

                {/* Project Indicators */}
                {PROJECTS.length > 1 && (
                  <div className="flex justify-center gap-2 mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    {PROJECTS.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentProjectIndex(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === currentProjectIndex
                            ? 'w-8 bg-primary-600 dark:bg-primary-400'
                            : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                        }`}
                        aria-label={`Go to project ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons - Mobile (abajo) */}
          {PROJECTS.length > 1 && (
            <div className="flex lg:hidden justify-center gap-4 mt-6">
              <button
                onClick={prevProject}
                className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg border border-gray-300 dark:border-gray-600 hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-300 group"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
              </button>
              <button
                onClick={nextProject}
                className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg border border-gray-300 dark:border-gray-600 hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-300 group"
                aria-label="Next project"
              >
                <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsVideoModalOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={t.cvPortfolio.watchDemo}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="relative w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {currentProject.name} — {t.cvPortfolio.watchDemo}
                </h3>
                <button
                  onClick={() => setIsVideoModalOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 transition-colors"
                  aria-label={t.cvPortfolio.closeModal}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="bg-black flex items-center justify-center">
                {selectedVideoUrl ? (
                  isYouTubeUrl(selectedVideoUrl) ? (
                    <div className="w-full aspect-video">
                      <iframe
                        src={selectedVideoUrl}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Project demo video"
                      />
                    </div>
                  ) : (
                    <video
                      src={selectedVideoUrl}
                      controls
                      className="w-full max-h-[75vh] object-contain"
                    />
                  )
                ) : (
                  <div className="flex flex-col items-center gap-3 text-gray-400 dark:text-gray-500">
                    <Play className="w-12 h-12" />
                    <p className="font-medium">{t.cvPortfolio.videoPlaceholder}</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
