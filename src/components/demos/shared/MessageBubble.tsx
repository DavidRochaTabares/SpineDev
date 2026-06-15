import { motion } from 'framer-motion';
import { Bot, User } from 'lucide-react';

interface MessageBubbleProps {
  message: string;
  isUser: boolean;
  timestamp?: string;
}

export default function MessageBubble({ message, isUser, timestamp }: MessageBubbleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, x: isUser ? 20 : -20 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`flex gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
    >
      {/* Avatar */}
      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
        isUser 
          ? 'bg-gray-200 dark:bg-gray-700' 
          : 'bg-gradient-to-br from-blue-500 to-purple-600'
      }`}>
        {isUser ? (
          <User className="w-4 h-4 text-gray-600 dark:text-gray-300" />
        ) : (
          <Bot className="w-4 h-4 text-white" />
        )}
      </div>

      {/* Message Content */}
      <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} max-w-[80%] sm:max-w-[70%]`}>
        <div
          className={`px-4 py-3 rounded-2xl ${
            isUser
              ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-br-sm'
              : 'bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-bl-sm'
          }`}
        >
          <p className="text-sm sm:text-base whitespace-pre-line leading-relaxed">
            {message}
          </p>
        </div>
        
        {timestamp && (
          <span className="text-xs text-gray-400 dark:text-gray-500 mt-1 px-1">
            {timestamp}
          </span>
        )}
      </div>
    </motion.div>
  );
}
