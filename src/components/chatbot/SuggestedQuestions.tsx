import React from 'react';
import { motion } from 'framer-motion';

interface SuggestedQuestionsProps {
  onSelect: (question: string) => void;
}

const SuggestedQuestions: React.FC<SuggestedQuestionsProps> = ({ onSelect }) => {
  const questions = [
    'Tell me about yourself',
    'Show your projects',
    'What technologies do you use?',
    'Tell me about German Fitness',
    'Show my resume',
    'What services do you offer?',
    'How can I contact you?',
    'Are you available for freelance work?',
  ];

  return (
    <div className="flex flex-wrap gap-2 p-4 border-b border-orange-200 dark:border-orange-800 bg-slate-300 dark:bg-[#27272c]">
      {questions.map((question, index) => (
        <motion.button
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05 }}
          onClick={() => onSelect(question)}
          className="text-xs sm:text-sm px-3 py-2 bg-white dark:bg-[#1a1a2e] text-black dark:text-white border border-orange-300 dark:border-orange-700 rounded-full hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors"
        >
          {question}
        </motion.button>
      ))}
    </div>
  );
};

export default SuggestedQuestions;
