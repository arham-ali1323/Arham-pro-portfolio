import React, { useState, KeyboardEvent } from 'react';
import { FiSend } from 'react-icons/fi';

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSend, disabled }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() && !disabled) {
      onSend(input.trim());
      setInput('');
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex gap-2 p-4 border-t border-orange-200 dark:border-orange-800 bg-slate-300 dark:bg-[#27272c]">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type your message..."
        disabled={disabled}
        rows={1}
        className="flex-1 resize-none bg-white dark:bg-[#1a1a2e] text-black dark:text-white rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50 text-sm sm:text-base"
      />
      <button
        onClick={handleSend}
        disabled={disabled || !input.trim()}
        className="bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 disabled:cursor-not-allowed text-white p-2 rounded-lg transition-colors"
      >
        <FiSend className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ChatInput;
