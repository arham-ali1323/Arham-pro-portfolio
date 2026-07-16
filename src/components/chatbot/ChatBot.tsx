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

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          messages: [...messages, newMessage],
          stream: true 
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('API Error:', errorData.error);
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', content: 'I can help with questions about Arham\'s skills, projects, services, or contact information. Try asking about those!' },
        ]);
        setIsTyping(false);
        return;
      }

      // Handle streaming response
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      
      if (!reader) {
        throw new Error('Response body is not readable');
      }

      let aiMessage: Message = { role: 'assistant', content: '' };
      setMessages((prev) => [...prev, aiMessage]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            ...updated[updated.length - 1],
            content: updated[updated.length - 1].content + chunk,
          };
          return updated;
        });
      }

      // Check if response contains project-related keywords
      const finalMessage = messages[messages.length - 1];
      const lowerResponse = finalMessage.content.toLowerCase();
      if (lowerResponse.includes('project') || lowerResponse.includes('work')) {
        setShowProjects(portfolioContext.projects.slice(0, 3));
      }

      if (lowerResponse.includes('contact') || lowerResponse.includes('hire') || lowerResponse.includes('reach')) {
        setShowContactActions(true);
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
