import { motion } from 'framer-motion';

export default function LandingPageMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full bg-white dark:bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700"
    >
      {/* Browser Bar */}
      <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 flex items-center gap-2 border-b border-gray-200 dark:border-gray-700">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-1 bg-white dark:bg-gray-700 rounded px-3 py-1 text-xs text-gray-500 dark:text-gray-400">
          tuempresa.com
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6 overflow-auto h-[calc(100%-48px)]">
        {/* Hero Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg p-8 text-white"
        >
          <div className="max-w-2xl">
            <div className="h-8 w-3/4 bg-white/30 rounded mb-4"></div>
            <div className="h-4 w-full bg-white/20 rounded mb-2"></div>
            <div className="h-4 w-5/6 bg-white/20 rounded mb-6"></div>
            <div className="flex gap-3">
              <div className="h-10 w-32 bg-white/90 rounded-lg"></div>
              <div className="h-10 w-32 bg-white/20 rounded-lg border-2 border-white/50"></div>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-3 gap-4"
        >
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg mb-3"></div>
              <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
              <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded mb-1"></div>
              <div className="h-3 w-5/6 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 text-center"
        >
          <div className="h-6 w-64 bg-white/30 rounded mx-auto mb-3"></div>
          <div className="h-4 w-96 bg-white/20 rounded mx-auto mb-4"></div>
          <div className="h-10 w-40 bg-white/90 rounded-lg mx-auto"></div>
        </motion.div>
      </div>
    </motion.div>
  );
}
