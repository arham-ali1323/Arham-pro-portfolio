'use client';

import React, { useState } from 'react';
import FloatingButton from './FloatingButton';
import ChatWindow from './ChatWindow';
import { portfolioContext, Project } from '@/lib/portfolioContext';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showProjects, setShowProjects] = useState<Project[] | undefined>();
  const [showContactActions, setShowContactActions] = useState(false);

  const handleSendMessage = async (message: string) => {
    const newMessage: Message = { role: 'user', content: message };
    setMessages((prev) => [...prev, newMessage]);
    setIsTyping(true);
    setShowProjects(undefined);
    setShowContactActions(false);

    const lowerMessage = message.toLowerCase();
    let fallbackResponse: string | null = null;

    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      fallbackResponse = "Hello! I'm Arham's portfolio assistant. How can I help you today?";
    } else if (lowerMessage.includes('who') && lowerMessage.includes('arham')) {
      fallbackResponse = `Arham Ali is a Frontend Engineer & Full Stack Developer specializing in React, Next.js, and TypeScript. He builds modern web applications with AI integration.`;
    } else if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('stack')) {
      fallbackResponse = `Arham's skills include:\n\nFrontend: React 19, Next.js 14/15, TypeScript, TailwindCSS, Framer Motion, Shadcn UI\n\nBackend: Node.js, Express, API Development\n\nTools: Git, GitHub, Vercel, VS Code, Postman`;
    } else if (lowerMessage.includes('project') || lowerMessage.includes('work')) {
      fallbackResponse = "Here are some of Arham's recent projects:";
      setShowProjects(portfolioContext.projects.slice(0, 3));
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('hire')) {
      fallbackResponse = "You can contact Arham through:";
      setShowContactActions(true);
    } else if (lowerMessage.includes('service')) {
      fallbackResponse = `Arham provides:\n\n1. Frontend Development - Modern web apps with React & Next.js\n2. Full Stack Development - End-to-end solutions\n3. E-Commerce Solutions - Custom platforms\n4. Portfolio Websites - Professional sites`;
    } else if (lowerMessage.includes('github')) {
      fallbackResponse = `You can find Arham's GitHub at: ${portfolioContext.personal.github}`;
    } else if (lowerMessage.includes('linkedin')) {
      fallbackResponse = `You can find Arham's LinkedIn at: ${portfolioContext.personal.linkedin}`;
    } else if (lowerMessage.includes('resume') || lowerMessage.includes('cv')) {
      fallbackResponse = "You can download Arham's resume from the Resume page.";
    }

    if (fallbackResponse) {
      setTimeout(() => {
        const aiMessage: Message = { role: 'assistant', content: fallbackResponse! };
        setMessages((prev) => [...prev, aiMessage]);
        setIsTyping(false);
      }, 500);
      return;
    }

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, newMessage] }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error('API Error:', data.error);
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', content: 'I can help with questions about Arham\'s skills, projects, services, or contact information. Try asking about those!' },
        ]);
        return;
      }

      if (data.response) {
        const aiMessage: Message = { role: 'assistant', content: data.response };
        setMessages((prev) => [...prev, aiMessage]);

        const lowerResponse = data.response.toLowerCase();
        if (lowerResponse.includes('project') || lowerResponse.includes('work')) {
          setShowProjects(portfolioContext.projects.slice(0, 3));
        }

        if (lowerResponse.includes('contact') || lowerResponse.includes('hire') || lowerResponse.includes('reach')) {
          setShowContactActions(true);
        }
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'I can help with questions about Arham\'s skills, projects, services, or contact information. Try asking about those!' },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSuggestedQuestion = (question: string) => {
    const lowerQuestion = question.toLowerCase();

    if (lowerQuestion.includes('resume')) {
      window.open('/resume', '_blank');
      return;
    }

    if (lowerQuestion.includes('github')) {
      window.open(portfolioContext.personal.github, '_blank');
      return;
    }

    if (lowerQuestion.includes('linkedin')) {
      window.open(portfolioContext.personal.linkedin, '_blank');
      return;
    }

    if (lowerQuestion.includes('contact')) {
      setShowContactActions(true);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Here are the ways you can contact Arham:' },
      ]);
      return;
    }

    if (lowerQuestion.includes('project')) {
      setShowProjects(portfolioContext.projects.slice(0, 3));
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Here are some of Arham\'s recent projects:' },
      ]);
      return;
    }

    handleSendMessage(question);
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${portfolioContext.personal.email}`;
  };

  const handleGithubClick = () => {
    window.open(portfolioContext.personal.github, '_blank');
  };

  const handleLinkedinClick = () => {
    window.open(portfolioContext.personal.linkedin, '_blank');
  };

  const handleResumeClick = () => {
    window.open('/resume', '_blank');
  };

  return (
    <>
      <FloatingButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      <ChatWindow
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        messages={messages}
        isTyping={isTyping}
        onSendMessage={handleSendMessage}
        onSuggestedQuestion={handleSuggestedQuestion}
        showProjects={showProjects}
        showContactActions={showContactActions}
        onEmailClick={handleEmailClick}
        onGithubClick={handleGithubClick}
        onLinkedinClick={handleLinkedinClick}
        onResumeClick={handleResumeClick}
      />
    </>
  );
};

export default ChatBot;
