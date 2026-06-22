import { motion } from 'framer-motion';

export default function PortalMockup() {
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
          className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4 space-y-4"
        >
          <div className="flex items-center gap-3 pb-4 border-b border-gray-200 dark:border-gray-700">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
            <div className="flex-1">
              <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded mb-1"></div>
              <div className="h-3 w-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
          </div>
          {[
            { icon: '📄', active: true },
            { icon: '💳', active: false },
            { icon: '📊', active: false },
            { icon: '🎫', active: false },
            { icon: '⚙️', active: false }
          ].map((item, i) => (
            <div key={i} className={`flex items-center gap-3 p-3 rounded-lg ${item.active ? 'bg-purple-500 text-white' : 'bg-gray-100 dark:bg-gray-700'}`}>
              <div className="text-xl">{item.icon}</div>
              <div className={`h-4 w-24 rounded ${item.active ? 'bg-white/30' : 'bg-gray-200 dark:bg-gray-600'}`}></div>
            </div>
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
            <div>
              <div className="h-6 w-48 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
              <div className="h-3 w-64 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
            <div className="h-10 w-32 bg-purple-600 rounded-lg"></div>
          </motion.div>

          <div className="p-6 space-y-6">
            {/* Stats */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-3 gap-4"
            >
              {[
                { color: 'from-purple-500 to-pink-500' },
                { color: 'from-blue-500 to-cyan-500' },
                { color: 'from-green-500 to-emerald-500' }
              ].map((card, i) => (
                <div key={i} className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                  <div className="h-3 w-20 bg-gray-200 dark:bg-gray-700 rounded mb-3"></div>
                  <div className={`h-8 w-24 bg-gradient-to-r ${card.color} rounded mb-2`}></div>
                  <div className="h-3 w-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
                </div>
              ))}
            </motion.div>

            {/* Documents List */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                <div className="h-5 w-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="flex gap-2">
                  <div className="h-8 w-24 bg-gray-100 dark:bg-gray-700 rounded"></div>
                  <div className="h-8 w-24 bg-gray-100 dark:bg-gray-700 rounded"></div>
                </div>
              </div>
              <div className="p-4 space-y-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center gap-4 p-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center text-xl">
                      📄
                    </div>
                    <div className="flex-1">
                      <div className="h-4 w-48 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                      <div className="h-3 w-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    </div>
                    <div className="h-8 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="h-8 w-8 bg-purple-500/20 rounded"></div>
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
