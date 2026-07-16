import React from 'react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

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
        {isUser ? (
          <p className="text-sm sm:text-base leading-relaxed whitespace-pre-wrap">
            {message}
          </p>
        ) : (
          <div className="text-sm sm:text-base leading-relaxed prose prose-invert max-w-none">
            <ReactMarkdown
              components={{
                code(props: any) {
                  const { inline, className, children, ...rest } = props;
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={oneDark}
                      language={match[1]}
                      PreTag="div"
                      className="rounded-lg"
                      {...rest}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  ) : (
                    <code
                      className={`${className} bg-black/20 dark:bg-white/20 px-1.5 py-0.5 rounded text-xs`}
                      {...rest}
                    >
                      {children}
                    </code>
                  );
                },
                p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                ul: ({ children }) => <ul className="list-disc list-inside mb-2">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal list-inside mb-2">{children}</ol>,
                li: ({ children }) => <li className="mb-1">{children}</li>,
                strong: ({ children }) => <strong className="font-bold">{children}</strong>,
                a: ({ children, href }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 dark:text-orange-400 hover:underline"
                  >
                    {children}
                  </a>
                ),
              }}
            >
              {message}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ChatMessage;
