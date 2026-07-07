import React from 'react';
import { motion } from 'framer-motion';

const TypingIndicator: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex justify-start mb-4"
    >
      <div className="bg-slate-300 dark:bg-[#27272c] text-black dark:text-white p-4 rounded-2xl rounded-bl-sm border border-orange-200 dark:border-orange-800">
        <div className="flex gap-1">
          <motion.span
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
            className="w-2 h-2 bg-orange-400 rounded-full"
          />
          <motion.span
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
            className="w-2 h-2 bg-orange-400 rounded-full"
          />
          <motion.span
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
            className="w-2 h-2 bg-orange-400 rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default TypingIndicator;
