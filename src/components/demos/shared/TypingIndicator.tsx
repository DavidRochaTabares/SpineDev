import { motion } from 'framer-motion';

export default function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-4 py-3 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-2xl rounded-bl-sm max-w-[80px]">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className="w-2 h-2 bg-white rounded-full"
          animate={{
            y: [0, -8, 0],
            opacity: [0.4, 1, 0.4]
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: index * 0.15,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
