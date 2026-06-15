import { motion, AnimatePresence } from 'framer-motion';

interface SuggestedQuestion {
  id: string;
  text: string | { es: string; en: string };
  icon: string;
}

interface SuggestedQuestionsProps {
  questions: SuggestedQuestion[];
  onQuestionClick: (question: string) => void;
  visible: boolean;
  language?: 'es' | 'en';
}

export default function SuggestedQuestions({ 
  questions, 
  onQuestionClick, 
  visible,
  language = 'es'
}: SuggestedQuestionsProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="space-y-2"
        >
          <p className="text-xs text-gray-500 dark:text-gray-400 px-1">
            {language === 'es' ? 'Preguntas sugeridas:' : 'Suggested questions:'}
          </p>
          <div className="flex flex-wrap gap-2">
            {questions.map((question, index) => (
              <motion.button
                key={question.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onQuestionClick(typeof question.text === 'string' ? question.text : question.text[language])}
                className="px-4 py-2 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 rounded-xl text-sm text-gray-700 dark:text-gray-300 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <span className="mr-2">{question.icon}</span>
                {typeof question.text === 'string' ? question.text : question.text[language]}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
