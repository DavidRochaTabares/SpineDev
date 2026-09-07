import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Smartphone, Play, Github, X, Image as ImageIcon } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

// ============================================================
// CONFIGURACIÓN DEL PROYECTO - EDITA AQUÍ
// ============================================================

// Screenshots de GeoReport (archivos en /public)
const SCREENSHOTS: (string | null)[] = [
  '/SS%201.jpeg', // SCREENSHOT 1
  '/SS%202.jpeg', // SCREENSHOT 2
  '/SS%203.jpeg', // SCREENSHOT 3
  '/SS%204.jpeg', // SCREENSHOT 4
];

// Video de demo (archivo en /public)
const DEMO_VIDEO_URL: string | null = '/VIDEO%20DEMO.mp4';

const GITHUB_URL = 'https://github.com/DavidRochaTabares/GeoReport-Mobile';

const TECHNOLOGIES = [
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
];

const FEATURES = [
  'Authentication',
  'CRUD',
  'Offline-first',
  'Camera',
  'Maps',
  'Sync',
];

// ============================================================

export default function PortfolioCV() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useTranslation();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

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

        {/* Project Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="p-6 sm:p-8">
              {/* Project Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary-600 dark:bg-primary-500 rounded-lg flex-shrink-0">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-1">
                    GeoReport
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-semibold">
                    {t.cvPortfolio.projectSubtitle}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {t.cvPortfolio.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {TECHNOLOGIES.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Screenshots */}
              <div className="mb-6">
                <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-6 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500"></span>
                  {t.cvPortfolio.screenshots}
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {SCREENSHOTS.map((src, i) => (
                    <div
                      key={i}
                      className="aspect-[9/16] rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800/50 flex flex-col items-center justify-center gap-2 overflow-hidden"
                    >
                      {src ? (
                        <img
                          src={src}
                          alt={`GeoReport screenshot ${i + 1}`}
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

              {/* What it demonstrates */}
              <div className="mb-6">
                <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-6 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500"></span>
                  {t.cvPortfolio.demonstrates}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {FEATURES.map((feature) => (
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
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-secondary-600 hover:bg-secondary-700 dark:bg-secondary-500 dark:hover:bg-secondary-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  aria-label={t.cvPortfolio.watchDemo}
                >
                  <Play className="w-5 h-5" />
                  {t.cvPortfolio.watchDemo}
                </button>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:border-primary-500 dark:hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                  {t.cvPortfolio.viewCode}
                </a>
              </div>
            </div>
          </div>
        </motion.div>
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
                  GeoReport — {t.cvPortfolio.watchDemo}
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
                {DEMO_VIDEO_URL ? (
                  isYouTubeUrl(DEMO_VIDEO_URL) ? (
                    <div className="w-full aspect-video">
                      <iframe
                        src={DEMO_VIDEO_URL}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="GeoReport demo video"
                      />
                    </div>
                  ) : (
                    <video
                      src={DEMO_VIDEO_URL}
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
