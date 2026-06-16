import { motion } from 'framer-motion';
import { Users, TrendingUp } from 'lucide-react';

interface CRMWidgetProps {
  language: 'es' | 'en';
}

export default function CRMWidget({ language }: CRMWidgetProps) {
  const leads = [
    { name: 'Ana Martínez', value: '$15,000', status: 'hot' },
    { name: 'Carlos Silva', value: '$8,500', status: 'warm' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: 'spring', duration: 0.6 }}
      className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/10 dark:to-red-900/10 rounded-xl border-2 border-orange-200 dark:border-orange-800 overflow-hidden"
    >
      {/* Header */}
      <div className="bg-orange-100 dark:bg-orange-900/20 px-4 py-2 border-b border-orange-200 dark:border-orange-800 flex items-center gap-2">
        <Users className="w-4 h-4 text-orange-600 dark:text-orange-400" />
        <span className="text-sm font-semibold text-orange-900 dark:text-orange-100">
          CRM
        </span>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        {leads.map((lead, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-orange-200 dark:border-orange-800"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center">
                  <span className="text-xs font-semibold text-orange-700 dark:text-orange-300">
                    {lead.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {lead.name}
                  </p>
                  <div className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                    <TrendingUp className="w-3 h-3" />
                    {lead.value}
                  </div>
                </div>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                lead.status === 'hot' 
                  ? 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300'
                  : 'bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300'
              }`}>
                {lead.status === 'hot' 
                  ? (language === 'es' ? 'Caliente' : 'Hot')
                  : (language === 'es' ? 'Tibio' : 'Warm')}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
