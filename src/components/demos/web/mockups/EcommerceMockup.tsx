import { motion } from 'framer-motion';

export default function EcommerceMockup() {
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
          tienda-online.com
        </div>
      </div>

      {/* Content */}
      <div className="h-[calc(100%-48px)] overflow-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-green-600 dark:bg-green-700 px-6 py-3 flex items-center justify-between"
        >
          <div className="h-6 w-24 bg-white/30 rounded"></div>
          <div className="flex gap-4 items-center">
            <div className="h-8 w-48 bg-white/20 rounded-full"></div>
            <div className="h-8 w-8 bg-white/30 rounded-full"></div>
            <div className="h-8 w-8 bg-white/30 rounded-full"></div>
          </div>
        </motion.div>

        <div className="p-6 space-y-6">
          {/* Banner */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg p-8 flex items-center justify-between"
          >
            <div className="space-y-3">
              <div className="h-8 w-64 bg-white/30 rounded"></div>
              <div className="h-4 w-48 bg-white/20 rounded"></div>
              <div className="h-10 w-32 bg-white/90 rounded-lg"></div>
            </div>
            <div className="w-48 h-48 bg-white/20 rounded-lg"></div>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex gap-3"
          >
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-lg p-3 text-center border border-gray-200 dark:border-gray-700">
                <div className="w-8 h-8 bg-green-500/20 rounded-full mx-auto mb-2"></div>
                <div className="h-3 w-16 bg-gray-200 dark:bg-gray-700 rounded mx-auto"></div>
              </div>
            ))}
          </motion.div>

          {/* Products Grid */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-3"
          >
            <div className="h-6 w-40 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
                  <div className="w-full h-32 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30"></div>
                  <div className="p-3 space-y-2">
                    <div className="h-3 w-3/4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="h-4 w-20 bg-green-500 rounded"></div>
                    <div className="h-8 w-full bg-green-600 rounded-lg"></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
