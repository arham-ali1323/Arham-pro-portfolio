"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Head from "next/head";

const page = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Schedule Meeting | Arham Ali</title>
        <meta
          name="description"
          content="Schedule a meeting with Arham Ali. Book a 30-minute consultation to discuss your project needs."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Schedule Meeting",
            description: "Schedule a meeting with Arham Ali",
            url: "https://arhamali.me/schedule",
          })}
        </script>
      </Head>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.5, duration: 0.5, ease: "easeOut" },
        }}
        className="container py-12"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-orange-500 mb-4">
              Schedule a Meeting
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Book a 30-minute consultation to discuss your project needs and how I can help bring your ideas to life.
            </p>
          </div>
          
          <div className="bg-slate-300 dark:bg-[#27272c] rounded-xl p-8">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/arham-ali1323/30min"
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-300">
              Can't find a suitable time? <a href="/contact" className="text-orange-500 hover:text-orange-600 underline">Contact me directly</a> and we'll work something out.
            </p>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default page;
