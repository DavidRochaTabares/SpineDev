import { motion } from 'framer-motion';

export default function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full bg-gray-50 dark:bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700"
    >
      <div className="flex h-full">
        {/* Sidebar */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="w-56 bg-gray-900 dark:bg-gray-950 p-4 space-y-3"
        >
          <div className="h-8 w-32 bg-orange-500/30 rounded mb-6"></div>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className={`h-10 w-full rounded-lg ${i === 1 ? 'bg-orange-500' : 'bg-white/10'}`}></div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          {/* Header */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 px-6 py-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-700"
          >
            <div className="h-6 w-48 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="flex gap-3">
              <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
              <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
              <div className="h-8 w-32 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
            </div>
          </motion.div>

          <div className="p-6 space-y-6">
            {/* KPI Cards */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-4 gap-4"
            >
              {[
                { color: 'from-blue-500 to-cyan-500' },
                { color: 'from-green-500 to-emerald-500' },
                { color: 'from-orange-500 to-red-500' },
                { color: 'from-purple-500 to-pink-500' }
              ].map((card, i) => (
                <div key={i} className={`bg-gradient-to-br ${card.color} rounded-lg p-4 text-white`}>
                  <div className="h-3 w-20 bg-white/30 rounded mb-2"></div>
                  <div className="h-8 w-24 bg-white/40 rounded mb-1"></div>
                  <div className="h-3 w-16 bg-white/30 rounded"></div>
                </div>
              ))}
            </motion.div>

            {/* Charts */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                <div className="h-48 bg-gradient-to-t from-orange-500/20 to-transparent rounded flex items-end justify-around px-4 pb-4">
                  {[40, 60, 45, 80, 55, 70, 65].map((height, i) => (
                    <div key={i} style={{ height: `${height}%` }} className="w-8 bg-orange-500 rounded-t"></div>
                  ))}
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                <div className="h-48 flex items-center justify-center">
                  <div className="relative w-40 h-40">
                    <div className="absolute inset-0 rounded-full border-8 border-gray-200 dark:border-gray-700"></div>
                    <div className="absolute inset-0 rounded-full border-8 border-orange-500 border-t-transparent border-l-transparent rotate-45"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Table */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="h-4 w-40 bg-gray-200 dark:bg-gray-700 rounded"></div>
              </div>
              <div className="p-4 space-y-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                    <div className="flex-1 h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="w-20 h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="w-16 h-6 bg-green-500/20 rounded"></div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
