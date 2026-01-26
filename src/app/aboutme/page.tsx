"use client";

import Stats from "@/components/main/Stats";
import { Code, Cpu, Database, BrainCircuit } from "lucide-react";
import Head from "next/head";
import Link from "next/link";

const AboutPage = () => {
  const techStack = [
    {
      icon: <Code size={20} />,
      category: "Frontend Development",
      items: ["React", "Next.js", "JavaScript (ES6+)", "Tailwind CSS"],
    },
    {
      icon: <Database size={20} />,
      category: "UI & Styling",
      items: ["HTML5", "CSS3", "Bootstrap", "Responsive Design"],
    },
    {
      icon: <Cpu size={20} />,
      category: "Tools & Workflow",
      items: ["Git & GitHub", "REST APIs", "Component Architecture"],
    },
    {
      icon: <BrainCircuit size={20} />,
      category: "Current Learning",
      items: ["Next.js Optimization", "UI Performance", "Modern UX Patterns"],
    },
  ];

  return (
    <>
      <Head>
        <title>
          About – Arham Ali | Frontend Developer | React | Next.js | Tailwind
        </title>
        <meta
          name="description"
          content="Learn more about Arham Ali, a Frontend Developer specializing in React, Next.js, and modern responsive web interfaces."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="About – Arham Ali | Frontend Developer"
        />
        <meta
          property="og:description"
          content="Frontend-focused developer building fast, modern, and pixel-perfect web experiences."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://arhamali.me/about" />
        <meta
          property="og:image"
          content="https://arhamali.me/NewAvatar.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About – Arham Ali | Frontend Developer"
        />
        <meta
          name="twitter:description"
          content="Get to know Arham Ali – a Frontend Developer focused on React, Next.js, and Tailwind CSS."
        />
        <meta
          name="twitter:image"
          content="https://arhamali.me/NewAvatar.png"
        />
        <link rel="canonical" href="https://arhamali.me/about" />
      </Head>

      <section className="relative h-full overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10 opacity-10 dark:opacity-5">
          <div className="absolute top-0 left-20 w-64 h-64 bg-orange-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-32 w-48 h-48 bg-yellow-500 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 py-12 lg:py-20">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-orange-400">Crafting</span> Modern
              <br />
              Web Interfaces
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mx-auto">
              Frontend Developer focused on React, Next.js, and scalable UI
              development
            </p>
          </div>

          {/* Bio */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-8 h-1 bg-orange-400 mr-4" />
                My Journey
              </h2>
              <div className="space-y-6 text-gray-700 dark:text-gray-300">
                <p>
                  I started my journey in web development with a strong interest
                  in building clean and interactive user interfaces using{" "}
                  <span className="text-orange-400 font-medium">
                    HTML, CSS, and JavaScript
                  </span>
                  .
                </p>
                <p>
                  Over time, I specialized in{" "}
                  <span className="text-orange-400 font-medium">
                    React and Next.js
                  </span>
                  , focusing on component-based architecture, performance, and
                  responsive layouts.
                </p>
                <p>
                  Currently, I work as a{" "}
                  <span className="text-orange-400 font-medium">
                    Frontend Developer
                  </span>
                  , building modern web applications and continuously improving
                  my skills through real-world projects.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-8 h-1 bg-orange-400 mr-4" />
                My Approach
              </h2>
              <div className="space-y-6 text-gray-700 dark:text-gray-300">
                <p>
                  I focus on writing{" "}
                  <span className="text-orange-400 font-medium">
                    clean, maintainable code
                  </span>{" "}
                  with reusable components and consistent design patterns.
                </p>
                <p>
                  Performance, responsiveness, and accessibility are always
                  priorities to ensure smooth user experiences across devices.
                </p>
                <p>
                  I believe in{" "}
                  <span className="text-orange-400 font-medium">
                    continuous learning
                  </span>{" "}
                  and staying up-to-date with modern frontend tools and best
                  practices.
                </p>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Technical Stack
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {techStack.map((stack) => (
                <div
                  key={stack.category}
                  className="bg-white dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center mb-4 text-orange-400">
                    {stack.icon}
                    <h3 className="ml-2 font-semibold">
                      {stack.category}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {stack.items.map((item) => (
                      <li key={item} className="flex items-center">
                        <span className="w-2 h-2 bg-orange-400 rounded-full mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Current Focus */}
          <div className="bg-gradient-to-r from-orange-400/10 to-yellow-500/10 p-8 rounded-2xl mb-20">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Current Focus
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-orange-400">
                  Modern Frontend Development
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Building fast, responsive, and scalable interfaces using
                  React, Next.js, and Tailwind CSS.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-orange-400">
                  UI Performance & Optimization
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Improving performance, component reusability, and overall user
                  experience in production-ready web applications.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/work"
              className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-medium transition-colors"
            >
              View My Projects
            </Link>
          </div>
        </div>

        <div className="mb-20">
          <Stats />
        </div>
      </section>
    </>
  );
};

export default AboutPage;
