"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, AlertCircle, Scale, FileText, Code, ExternalLink, Bot, AlertTriangle, Clock, CheckCircle } from "lucide-react";

const TermsPage = () => {
  const sections = [
    {
      icon: <FileText size={24} />,
      title: "1. Website Purpose",
      content: (
        <div className="space-y-3">
          <p>This website is a personal portfolio created to showcase my skills, projects, experience, and professional services. The content is provided for informational purposes only.</p>
        </div>
      ),
    },
    {
      icon: <Code size={24} />,
      title: "2. Intellectual Property",
      content: (
        <div className="space-y-3">
          <p>Unless otherwise stated, all content on this website, including but not limited to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Source code</li>
            <li>Designs</li>
            <li>Images</li>
            <li>Graphics</li>
            <li>Logos</li>
            <li>Project descriptions</li>
            <li>Blog posts</li>
            <li>Documentation</li>
          </ul>
          <p className="text-orange-400 font-medium">is the property of Arham Ali or is used with appropriate permission.</p>
          <p className="text-orange-400 font-medium">You may not copy, reproduce, distribute, or reuse any content without prior written permission.</p>
        </div>
      ),
    },
    {
      icon: <CheckCircle size={24} />,
      title: "3. Project Information",
      content: (
        <div className="space-y-3">
          <p>The projects displayed on this website represent my work and experience. Some projects may contain placeholder data, demo content, or sample images for demonstration purposes.</p>
        </div>
      ),
    },
    {
      icon: <ExternalLink size={24} />,
      title: "4. External Links",
      content: (
        <div className="space-y-3">
          <p>This website may contain links to third-party websites such as GitHub, LinkedIn, or project demos.</p>
          <p className="text-orange-400 font-medium">I am not responsible for the content, security, or privacy practices of these external websites.</p>
        </div>
      ),
    },
    {
      icon: <Shield size={24} />,
      title: "5. Contact Form",
      content: (
        <div className="space-y-3">
          <p>If you contact me through the website, you agree to provide accurate information.</p>
          <p className="text-orange-400 font-medium">I reserve the right to ignore spam, abusive, or fraudulent messages.</p>
        </div>
      ),
    },
    {
      icon: <Bot size={24} />,
      title: "6. AI Assistant (If Available)",
      content: (
        <div className="space-y-3">
          <p>If this website includes an AI assistant:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Responses are generated automatically.</li>
            <li>The AI may occasionally provide incorrect or incomplete information.</li>
            <li>Do not rely on AI responses as professional, legal, financial, or medical advice.</li>
          </ul>
        </div>
      ),
    },
    {
      icon: <AlertTriangle size={24} />,
      title: "7. No Professional Advice",
      content: (
        <div className="space-y-3">
          <p>The information provided on this website is for general informational purposes only and should not be considered legal, financial, medical, or professional advice.</p>
        </div>
      ),
    },
    {
      icon: <Scale size={24} />,
      title: "8. Limitation of Liability",
      content: (
        <div className="space-y-3">
          <p>While I strive to keep the information accurate and up to date, I make no warranties regarding the completeness, accuracy, or reliability of the content.</p>
          <p className="text-orange-400 font-medium">I shall not be liable for any direct, indirect, or incidental damages resulting from the use of this website.</p>
        </div>
      ),
    },
    {
      icon: <AlertCircle size={24} />,
      title: "9. Website Availability",
      content: (
        <div className="space-y-3">
          <p>I do not guarantee that this website will always be available, uninterrupted, or error-free.</p>
          <p className="text-orange-400 font-medium">Maintenance, updates, or technical issues may temporarily affect accessibility.</p>
        </div>
      ),
    },
    {
      icon: <Clock size={24} />,
      title: "10. Changes to These Terms",
      content: (
        <div className="space-y-3">
          <p>I reserve the right to update or modify these Terms & Conditions at any time without prior notice.</p>
          <p className="text-orange-400 font-medium">Any changes will be posted on this page with the updated revision date.</p>
        </div>
      ),
    },
    {
      icon: <FileText size={24} />,
      title: "11. Contact",
      content: (
        <div className="space-y-3">
          <p>If you have any questions regarding these Terms & Conditions, please contact me:</p>
          <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg mt-4">
            <p className="font-bold text-gray-900 dark:text-white mb-2">Arham Ali</p>
            <ul className="space-y-2">
              <li><strong>Email:</strong> <a href="mailto:arhamali.dev@gmail.com" className="text-orange-400 hover:text-orange-500">arhamali.dev@gmail.com</a></li>
              <li><strong>Portfolio:</strong> <a href="https://arham-pro-portfolio.vercel.app" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-500">https://arham-pro-portfolio.vercel.app</a></li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.2, duration: 0.5, ease: "easeOut" },
        }}
        className="container mx-auto px-4 py-12 lg:py-20"
      >
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-orange-400">Terms</span> & Conditions
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
              Welcome to the Arham Ali Portfolio. By accessing or using this website, you agree to these Terms & Conditions.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              If you do not agree with these terms, please do not use this website.
            </p>
            <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              Last Updated: August 7, 2026
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.3 + index * 0.1, duration: 0.5 },
                }}
                className="bg-white dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-400/10 rounded-lg flex items-center justify-center text-orange-400">
                    {section.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                      {section.title}
                    </h2>
                    <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {section.content}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 1.2, duration: 0.5 },
            }}
            className="mt-12 p-6 bg-gradient-to-r from-orange-300/40 to-amber-400/30 dark:from-orange-800/10 dark:to-yellow-900/10 rounded-xl text-center"
          >
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
              Questions About These Terms?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you have any questions about these Terms & Conditions, please contact me.
            </p>
            <a
              href="mailto:arhamali.dev@gmail.com"
              className="inline-block px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors font-medium"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Acceptance */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 1.3, duration: 0.5 },
            }}
            className="mt-8 p-6 border border-gray-200 dark:border-gray-700 rounded-xl text-center"
          >
            <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Acceptance</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              By using this website, you acknowledge that you have read, understood, and agreed to these Terms & Conditions.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default TermsPage;