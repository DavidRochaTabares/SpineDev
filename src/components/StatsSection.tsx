import { motion } from 'framer-motion';

interface StatItem {
  number: string;
  label: string;
}

const stats: StatItem[] = [
  { number: '50+', label: 'Proyectos' },
  { number: '30+', label: 'Clientes' },
  { number: '5+', label: 'Años' },
  { number: '100%', label: 'Satisfacción' },
];

export const StatsSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
    >
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-3xl sm:text-4xl font-display font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            {stat.number}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {stat.label}
          </div>
        </div>
      ))}
    </motion.div>
  );
};
