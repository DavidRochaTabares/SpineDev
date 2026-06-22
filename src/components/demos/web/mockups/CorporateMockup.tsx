import { motion } from 'framer-motion';

export default function CorporateMockup() {
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
          empresa-corporativa.com
        </div>
      </div>

      {/* Content */}
      <div className="h-[calc(100%-48px)] overflow-auto">
        {/* Navigation */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-indigo-600 dark:bg-indigo-700 px-6 py-4 flex items-center justify-between"
        >
          <div className="h-8 w-32 bg-white/30 rounded"></div>
          <div className="flex gap-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-4 w-16 bg-white/20 rounded"></div>
            ))}
          </div>
        </motion.div>

        <div className="p-6 space-y-6">
          {/* Hero */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex gap-6 items-center"
          >
            <div className="flex-1 space-y-4">
              <div className="h-10 w-3/4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded"></div>
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-10 w-40 bg-indigo-600 rounded-lg"></div>
            </div>
            <div className="w-64 h-48 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-lg"></div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <div className="h-6 w-48 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-lg mb-3"></div>
                  <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg p-6"
          >
            <div className="grid grid-cols-3 gap-6 text-center">
              {[1, 2, 3].map((i) => (
                <div key={i}>
                  <div className="h-8 w-20 bg-white/30 rounded mx-auto mb-2"></div>
                  <div className="h-4 w-24 bg-white/20 rounded mx-auto"></div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
