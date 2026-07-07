import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';

interface ContactActionsProps {
  onEmailClick: () => void;
  onGithubClick: () => void;
  onLinkedinClick: () => void;
  onResumeClick: () => void;
}

const ContactActions: React.FC<ContactActionsProps> = ({
  onEmailClick,
  onGithubClick,
  onLinkedinClick,
  onResumeClick,
}) => {
  const actions = [
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      label: 'Email',
      onClick: onEmailClick,
      color: 'bg-orange-600 hover:bg-orange-700',
    },
    {
      icon: <FaGithub className="w-5 h-5" />,
      label: 'GitHub',
      onClick: onGithubClick,
      color: 'bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-black',
    },
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      onClick: onLinkedinClick,
      color: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      icon: <FaFileDownload className="w-5 h-5" />,
      label: 'Resume',
      onClick: onResumeClick,
      color: 'bg-green-600 hover:bg-green-700',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-2 gap-2 p-4 bg-slate-300 dark:bg-[#27272c] rounded-lg"
    >
      {actions.map((action, index) => (
        <motion.button
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          onClick={action.onClick}
          className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-white text-sm transition-colors ${action.color}`}
        >
          {action.icon}
          <span>{action.label}</span>
        </motion.button>
      ))}
    </motion.div>
  );
};

export default ContactActions;
