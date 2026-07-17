'use client';

import React, { useState, useEffect } from 'react';
import FloatingButton from './FloatingButton';
import ChatWindow from './ChatWindow';
import { portfolioContext, Project } from '@/lib/portfolioContext';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface FAQ {
  question: string;
  answer: string;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showProjects, setShowProjects] = useState<Project[] | undefined>();
  const [showContactActions, setShowContactActions] = useState(false);
  const [faqData, setFaqData] = useState<FAQ[]>([]);

  // Load FAQ data from file
  useEffect(() => {
    fetch('/data/faq.json')
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        console.log('FAQ data loaded:', data);
        setFaqData(data);
      })
      .catch(err => {
        console.error('Failed to load FAQ:', err);
        // Set empty array as fallback
        setFaqData([]);
      });
  }, []);

  // Simple keyword matching for FAQ fallback
  function findFAQAnswer(query: string): string | null {
    const lowerQuery = query.toLowerCase();
    
    // Check for exact or partial matches
    for (const faq of faqData) {
      const lowerQuestion = faq.question.toLowerCase();
      
      // Exact match
      if (lowerQuery === lowerQuestion) {
        return faq.answer;
      }
      
      // Check if query contains the entire question (or most of it)
      if (lowerQuery.includes(lowerQuestion) || lowerQuestion.includes(lowerQuery)) {
        return faq.answer;
      }
      
      // Check for key word matches
      const questionWords = lowerQuestion.split(' ').filter(w => w.length > 3);
      const matchCount = questionWords.filter(word => lowerQuery.includes(word)).length;
      
      if (matchCount >= 2) {
        return faq.answer;
      }
    }
    
    return null;
  }

  const handleSendMessage = async (message: string) => {
    const newMessage: Message = { role: 'user', content: message };
    setMessages((prev) => [...prev, newMessage]);
    setIsTyping(true);
    setShowProjects(undefined);
    setShowContactActions(false);

    // Try FAQ matching first (primary method since OpenAI API has insufficient quota)
    const faqAnswer = findFAQAnswer(message);
    if (faqAnswer) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', content: faqAnswer },
        ]);
        setIsTyping(false);
        
        // Check if answer contains project-related keywords
        const lowerAnswer = faqAnswer.toLowerCase();
        if (lowerAnswer.includes('project') || lowerAnswer.includes('work')) {
          setShowProjects(portfolioContext.projects.slice(0, 3));
        }
        
        if (lowerAnswer.includes('contact') || lowerAnswer.includes('hire') || lowerAnswer.includes('reach')) {
          setShowContactActions(true);
        }
      }, 500);
      return;
    }

    // Fallback to OpenAI API if no FAQ match
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
