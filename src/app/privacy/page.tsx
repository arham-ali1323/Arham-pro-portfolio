"use client";

import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { Shield, Eye, Database, Lock, User, Cookie, Server, Bot, ExternalLink, Clock } from "lucide-react";

const PrivacyPage = () => {
  const sections = [
    {
      icon: <Database size={24} />,
      title: "1. Information We Collect",
      content: (
        <div className="space-y-3">
          <p>We may collect the following information when you use this website:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Name (if submitted through a contact form)</li>
            <li>Email address</li>
            <li>Phone number (if provided)</li>
            <li>Messages sent through the contact form</li>
            <li>Technical information such as browser type, device information, IP address, and pages visited (through analytics tools, if enabled)</li>
          </ul>
          <p className="text-orange-400 font-medium">We only collect information that is necessary to provide our services and improve your experience.</p>
        </div>
      ),
    },
    {
      icon: <Eye size={24} />,
      title: "2. How We Use Your Information",
      content: (
        <div className="space-y-3">
          <p>Your information may be used to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Respond to your inquiries</li>
            <li>Communicate regarding freelance projects or job opportunities</li>
            <li>Improve website performance and user experience</li>
            <li>Monitor website traffic and usage</li>
            <li>Prevent spam, abuse, or unauthorized activities</li>
          </ul>
          <p className="text-orange-400 font-medium">We do not sell or rent your personal information to third parties.</p>
        </div>
      ),
    },
    {
      icon: <Cookie size={24} />,
      title: "3. Cookies",
      content: (
        <div className="space-y-3">
          <p>This website may use cookies and similar technologies to improve functionality and analyze website traffic.</p>
          <p className="font-semibold text-orange-400">Cookies may be used to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Remember user preferences</li>
            <li>Improve website performance</li>
            <li>Analyze visitor behavior</li>
          </ul>
          <p>You can disable cookies through your browser settings at any time.</p>
        </div>
      ),
    },
    {
      icon: <Server size={24} />,
      title: "4. Third-Party Services",
      content: (
        <div className="space-y-3">
          <p>This website may use trusted third-party services such as:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Google Fonts</li>
            <li>Vercel</li>
            <li>GitHub</li>
            <li>LinkedIn</li>
            <li>Google Analytics (if enabled)</li>
            <li>OpenAI API (if an AI chatbot is available)</li>
          </ul>
          <p>These services may collect information according to their own privacy policies.</p>
        </div>
      ),
    },
    {
      icon: <User size={24} />,
      title: "5. Contact Form",
      content: (
        <div className="space-y-3">
          <p>If you submit information through the contact form, the information is used only to respond to your inquiry.</p>
          <p className="text-orange-400 font-medium">Your information will never be shared with third parties unless required by law.</p>
        </div>
      ),
    },
    {
      icon: <Bot size={24} />,
      title: "6. AI Assistant",
      content: (
        <div className="space-y-3">
          <p>If this website includes an AI assistant, conversations may be temporarily processed to generate responses.</p>
          <p className="font-semibold text-orange-400">Please avoid sharing sensitive information such as:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Passwords</li>
            <li>Credit card information</li>
            <li>National ID numbers</li>
            <li>Banking information</li>
            <li>Confidential business data</li>
          </ul>
        </div>
      ),
    },
    {
      icon: <Lock size={24} />,
      title: "7. Data Security",
      content: (
        <div className="space-y-3">
          <p>Reasonable technical and organizational measures are implemented to protect your information from unauthorized access, disclosure, alteration, or destruction.</p>
          <p className="text-orange-400 font-medium">However, no method of data transmission over the internet can be guaranteed to be completely secure.</p>
        </div>
      ),
    },
    {
      icon: <ExternalLink size={24} />,
      title: "8. External Links",
      content: (
        <div className="space-y-3">
          <p>This website may contain links to external websites such as GitHub, LinkedIn, or other project demonstrations.</p>
          <p className="text-orange-400 font-medium">We are not responsible for the privacy practices or content of those external websites.</p>
        </div>
      ),
    },
    {
      icon: <User size={24} />,
      title: "9. Your Rights",
      content: (
        <div className="space-y-3">
          <p>Depending on your location, you may have the right to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Request access to your personal data</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Withdraw consent where applicable</li>
          </ul>
          <p>To exercise these rights, please contact us using the information below.</p>
        </div>
      ),
    },
    {
      icon: <Shield size={24} />,
      title: "10. Children's Privacy",
      content: (
        <div className="space-y-3">
          <p>This website is not intended for children under the age of 13.</p>
          <p className="text-orange-400 font-medium">We do not knowingly collect personal information from children.</p>
        </div>
      ),
    },
    {
      icon: <Clock size={24} />,
      title: "11. Changes to This Privacy Policy",
      content: (
        <div className="space-y-3">
          <p>This Privacy Policy may be updated from time to time to reflect changes in legal requirements, website functionality, or business practices.</p>
          <p className="text-orange-400 font-medium">The updated version will always be published on this page with the latest revision date.</p>
        </div>
      ),
    },
    {
      icon: <User size={24} />,
      title: "12. Contact",
      content: (
        <div className="space-y-3">
          <p>If you have any questions about this Privacy Policy or your personal information, you may contact:</p>
          <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg mt-4">
            <p className="font-bold text-gray-900 dark:text-white mb-2">Arham Ali</p>
            <ul className="space-y-2">
              <li><strong>Email:</strong> <a href="mailto:arhamali.dev@gmail.com" className="text-orange-400 hover:text-orange-500">arhamali.dev@gmail.com</a></li>
              <li><strong>Portfolio:</strong> <a href="https://arham-pro-portfolio.vercel.app" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-500">https://arham-pro-portfolio.vercel.app</a></li>
              <li><strong>GitHub:</strong> <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-500">https://github.com/yourusername</a></li>
              <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-500">https://linkedin.com/in/yourusername</a></li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>Privacy Policy | Arham Ali</title>
        <meta
          name="description"
          content="Privacy policy for the Arham Ali portfolio website. Learn how I collect, use, and protect your personal information."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Privacy Policy | Arham Ali"
        />
        <meta
          property="og:description"
          content="Privacy policy for the Arham Ali portfolio website."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://arhamali.me/privacy" />
        <link rel="canonical" href="https://arhamali.me/privacy" />
      </Head>

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
              <span className="text-orange-400">Privacy</span> Policy
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
              Welcome to <strong>Arham Ali Portfolio</strong>. Your privacy is important to us.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              This Privacy Policy explains how information is collected, used, and protected when you visit this website.
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
              transition: { delay: 1.4, duration: 0.5 },
            }}
            className="mt-12 p-6 bg-gradient-to-r from-orange-300/40 to-amber-400/30 dark:from-orange-800/10 dark:to-yellow-900/10 rounded-xl text-center"
          >
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
              Privacy Questions?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you have any questions about this Privacy Policy or my data practices, please reach out.
            </p>
            <a
              href="mailto:arhamali.dev@gmail.com"
              className="inline-block px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors font-medium"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 1.5, duration: 0.5 },
            }}
            className="mt-8 p-6 border border-gray-200 dark:border-gray-700 rounded-xl text-center"
          >
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              <strong>By using this website, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.</strong>
            </p>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default PrivacyPage;