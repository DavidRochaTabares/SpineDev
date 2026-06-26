import { motion } from 'framer-motion';
import { Users, Phone, FileText, CheckCircle, XCircle } from 'lucide-react';
import type { LeadStats as Stats } from '../../types/crm.types';

interface LeadStatsProps {
  stats: Stats;
  language?: 'es' | 'en';
}

export default function LeadStats({ stats, language = 'es' }: LeadStatsProps) {
  const t = {
    es: {
      nuevo: 'Nuevos',
      contactado: 'Contactados',
      propuesta: 'Propuestas',
      cliente: 'Clientes',
      cerrado: 'Cerrados',
      total: 'Total Leads'
    },
    en: {
      nuevo: 'New',
      contactado: 'Contacted',
      propuesta: 'Proposals',
      cliente: 'Clients',
      cerrado: 'Closed',
      total: 'Total Leads'
    }
  };

  const cards = [
    { key: 'nuevo', icon: Users, color: 'bg-blue-500', lightBg: 'bg-blue-50 dark:bg-blue-900/20', textColor: 'text-blue-600 dark:text-blue-400' },
    { key: 'contactado', icon: Phone, color: 'bg-cyan-500', lightBg: 'bg-cyan-50 dark:bg-cyan-900/20', textColor: 'text-cyan-600 dark:text-cyan-400' },
    { key: 'propuesta', icon: FileText, color: 'bg-orange-500', lightBg: 'bg-orange-50 dark:bg-orange-900/20', textColor: 'text-orange-600 dark:text-orange-400' },
    { key: 'cliente', icon: CheckCircle, color: 'bg-green-500', lightBg: 'bg-green-50 dark:bg-green-900/20', textColor: 'text-green-600 dark:text-green-400' },
    { key: 'cerrado', icon: XCircle, color: 'bg-gray-500', lightBg: 'bg-gray-50 dark:bg-gray-900/20', textColor: 'text-gray-600 dark:text-gray-400' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
      {cards.map((card, index) => {
        const Icon = card.icon;
        const value = stats[card.key as keyof Stats];
        
        return (
          <motion.div
            key={card.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`${card.lightBg} rounded-lg px-3 py-2 border border-gray-200 dark:border-gray-700 flex items-center gap-2`}
          >
            <div className={`p-1.5 ${card.color} rounded-md flex-shrink-0`}>
              <Icon className="w-3.5 h-3.5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className={`text-xl font-bold ${card.textColor} leading-none`}>
                {value}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400 truncate">
                {t[language][card.key as keyof typeof t.es]}
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* Total */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-primary-50 dark:bg-primary-900/20 rounded-lg px-3 py-2 border-2 border-primary-200 dark:border-primary-800 flex items-center gap-2"
      >
        <div className="p-1.5 bg-primary-600 rounded-md flex-shrink-0">
          <Users className="w-3.5 h-3.5 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-xl font-bold text-primary-600 dark:text-primary-400 leading-none">
            {stats.total}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400 truncate">
            {t[language].total}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
