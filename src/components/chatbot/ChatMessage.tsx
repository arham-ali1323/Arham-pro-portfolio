import React from 'react';
import { motion } from 'framer-motion';

interface ChatMessageProps {
  message: string;
  isUser: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isUser }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
    >
      <div
        className={`max-w-[80%] sm:max-w-[70%] p-3 sm:p-4 rounded-2xl ${
          isUser
            ? 'bg-orange-600 text-white rounded-br-sm'
            : 'bg-slate-300 dark:bg-[#27272c] text-black dark:text-white rounded-bl-sm border border-orange-200 dark:border-orange-800'
        }`}
      >
        <p className="text-sm sm:text-base leading-relaxed whitespace-pre-wrap">
          {message}
        </p>
      </div>
    </motion.div>
  );
};

export default ChatMessage;
