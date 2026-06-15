import { motion } from 'framer-motion';
import { XCircle, CheckCircle, Sparkles } from 'lucide-react';

interface ResultsContrastProps {
  before: string;
  after: string;
  benefits: string[];
  language: 'es' | 'en';
}

export default function ResultsContrast({
  before,
  after,
  benefits,
  language
}: ResultsContrastProps) {
  return (
    <div className="space-y-6">
      {/* Contraste ANTES vs DESPUÉS */}
      <div className="grid md:grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border-2 border-gray-300 dark:border-gray-700"
        >
          <div className="flex items-center gap-2 mb-2">
            <XCircle className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <h5 className="font-semibold text-gray-900 dark:text-white text-sm">
              {language === 'es' ? 'ANTES' : 'BEFORE'}
            </h5>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {before}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-2 border-green-400 dark:border-green-600"
        >
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
            <h5 className="font-semibold text-gray-900 dark:text-white text-sm">
              {language === 'es' ? 'DESPUÉS' : 'AFTER'}
            </h5>
          </div>
          <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
            {after}
          </p>
        </motion.div>
      </div>

      {/* Beneficios */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border-2 border-blue-200 dark:border-blue-800">
        <h5 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          {language === 'es' ? 'Beneficios Obtenidos' : 'Benefits Achieved'}
        </h5>
        <div className="grid sm:grid-cols-2 gap-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="flex items-start gap-2 bg-white/50 dark:bg-gray-800/50 rounded-lg p-3"
            >
              <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {benefit}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
