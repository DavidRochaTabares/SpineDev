import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import type { TransformationPair } from '../data/workflowData';

interface TransformationAnimationProps {
  transformations: TransformationPair[];
  currentIndex: number;
  language: 'es' | 'en';
}

export default function TransformationAnimation({
  transformations,
  currentIndex,
  language
}: TransformationAnimationProps) {
  const currentTransformation = transformations[currentIndex];

  if (!currentTransformation) return null;

  const BeforeIcon = (LucideIcons as any)[currentTransformation.before.icon] || LucideIcons.Circle;
  const AfterIcon = (LucideIcons as any)[currentTransformation.after.icon] || LucideIcons.Circle;

  return (
    <div className="flex items-center justify-center gap-6 py-8">
      {/* ANTES */}
      <motion.div
        key={`before-${currentIndex}`}
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: 0.3, scale: 0.9 }}
        className="flex flex-col items-center gap-3"
      >
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl">
          <BeforeIcon className="w-10 h-10 text-gray-600 dark:text-gray-400" />
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 text-center max-w-[120px]">
          {currentTransformation.before.text[language]}
        </p>
      </motion.div>

      {/* FLECHA */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        <ArrowRight className="w-8 h-8 text-primary-600 dark:text-primary-400" />
      </motion.div>

      {/* DESPUÉS */}
      <motion.div
        key={`after-${currentIndex}`}
        initial={{ opacity: 0, scale: 0.8, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col items-center gap-3"
      >
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="p-4 bg-green-100 dark:bg-green-900/20 rounded-xl"
        >
          <AfterIcon className="w-10 h-10 text-green-600 dark:text-green-400" />
        </motion.div>
        <p className="text-sm font-semibold text-green-700 dark:text-green-300 text-center max-w-[120px]">
          {currentTransformation.after.text[language]}
        </p>
      </motion.div>
    </div>
  );
}
