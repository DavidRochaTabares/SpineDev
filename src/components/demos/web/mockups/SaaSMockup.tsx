import { motion } from 'framer-motion';

export default function SaaSMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full bg-white dark:bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700"
    >
      <div className="flex flex-col h-full">
        {/* Top Bar */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-700 dark:to-blue-700 px-6 py-3 flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 bg-white/30 rounded-lg"></div>
            <div className="h-6 w-32 bg-white/20 rounded"></div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="h-8 w-8 bg-white/20 rounded-full"></div>
            <div className="h-8 w-8 bg-white/20 rounded-full"></div>
            <div className="h-8 w-24 bg-white/30 rounded-full"></div>
          </div>
        </motion.div>

        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-56 bg-gray-50 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4 space-y-2"
          >
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div key={i} className={`h-10 w-full rounded-lg ${i === 1 ? 'bg-cyan-500 text-white' : 'bg-white dark:bg-gray-700'}`}></div>
            ))}
          </motion.div>

          {/* Main Content */}
          <div className="flex-1 overflow-auto bg-gray-50 dark:bg-gray-900">
            <div className="p-6 space-y-6">
              {/* Welcome Banner */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg p-6 text-white"
              >
                <div className="h-6 w-64 bg-white/30 rounded mb-2"></div>
                <div className="h-4 w-96 bg-white/20 rounded"></div>
              </motion.div>

              {/* Metrics Grid */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-4 gap-4"
              >
                {[
                  { color: 'from-blue-500 to-cyan-500' },
                  { color: 'from-purple-500 to-pink-500' },
                  { color: 'from-green-500 to-emerald-500' },
                  { color: 'from-orange-500 to-red-500' }
                ].map((card, i) => (
                  <div key={i} className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                    <div className="h-3 w-16 bg-gray-200 dark:bg-gray-700 rounded mb-3"></div>
                    <div className={`h-8 w-20 bg-gradient-to-r ${card.color} rounded mb-2`}></div>
                    <div className="h-3 w-12 bg-green-500/30 rounded"></div>
                  </div>
                ))}
              </motion.div>

              {/* Chart and Activity */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-3 gap-4"
              >
                {/* Chart */}
                <div className="col-span-2 bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                  <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                  <div className="h-48 bg-gradient-to-t from-cyan-500/20 to-transparent rounded relative">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <motion.path
                        d="M 0 80 Q 25 60, 50 65 T 100 40"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-cyan-500"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 0.6 }}
                      />
                    </svg>
                  </div>
                </div>

                {/* Activity */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                  <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                  <div className="space-y-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mt-1"></div>
                        <div className="flex-1 space-y-1">
                          <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
                          <div className="h-2 w-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Users Table */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                  <div className="h-5 w-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  <div className="h-8 w-24 bg-cyan-600 rounded-lg"></div>
                </div>
                <div className="p-4 space-y-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-4 p-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full"></div>
                      <div className="flex-1 h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                      <div className="w-24 h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                      <div className="w-20 h-6 bg-green-500/20 rounded"></div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
