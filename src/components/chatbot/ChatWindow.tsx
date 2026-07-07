import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChatMessage from './ChatMessage';
import TypingIndicator from './TypingIndicator';
import ChatInput from './ChatInput';
import SuggestedQuestions from './SuggestedQuestions';
import ProjectCard from './ProjectCard';
import ContactActions from './ContactActions';
import { Project } from '@/lib/portfolioContext';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
  messages: Message[];
  isTyping: boolean;
  onSendMessage: (message: string) => void;
  onSuggestedQuestion: (question: string) => void;
  showProjects?: Project[];
  showContactActions?: boolean;
  onEmailClick: () => void;
  onGithubClick: () => void;
  onLinkedinClick: () => void;
  onResumeClick: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({
  isOpen,
  onClose,
  messages,
  isTyping,
  onSendMessage,
  onSuggestedQuestion,
  showProjects,
  showContactActions,
  onEmailClick,
  onGithubClick,
  onLinkedinClick,
  onResumeClick,
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, showProjects, showContactActions]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-24 left-6 z-40 w-[calc(100%-3rem)] sm:w-96 h-[500px] sm:h-[600px] bg-slate-300 dark:bg-[#27272c] rounded-2xl shadow-2xl flex flex-col border border-orange-200 dark:border-orange-800 overflow-hidden"
        >
          <div className="flex items-center justify-between p-4 bg-orange-600 text-white">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-xl">🤖</span>
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-orange-600" />
              </div>
              <div>
                <h3 className="font-bold">Arham's Assistant</h3>
                <p className="text-xs text-orange-100">Online • Ready to help</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="hover:bg-white/20 p-2 rounded-full transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {messages.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-8"
              >
                <p className="text-black/60 dark:text-gray-400 mb-2">
                  👋 Hi! I'm Arham's portfolio assistant
                </p>
                <p className="text-sm text-black/40 dark:text-gray-500">
                  Ask me anything about Arham's work, projects, or skills
                </p>
              </motion.div>
            )}

            {messages.map((message, index) => (
              <ChatMessage
                key={index}
                message={message.content}
                isUser={message.role === 'user'}
              />
            ))}

            {isTyping && <TypingIndicator />}

            {showProjects && showProjects.length > 0 && (
              <div className="mt-4">
                <p className="text-sm font-bold text-orange-600 dark:text-orange-400 mb-2">
                  Projects:
                </p>
                {showProjects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            )}

            {showContactActions && (
              <div className="mt-4">
                <ContactActions
                  onEmailClick={onEmailClick}
                  onGithubClick={onGithubClick}
                  onLinkedinClick={onLinkedinClick}
                  onResumeClick={onResumeClick}
                />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {messages.length === 0 && (
            <SuggestedQuestions onSelect={onSuggestedQuestion} />
          )}

          <ChatInput onSend={onSendMessage} disabled={isTyping} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChatWindow;
