"use client";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const projects = [
  {
    num: "01",
    category: "E-Commerce",
    title: "ShopHub",
    description:
      "A modern e-commerce platform with sleek design and seamless shopping experience, featuring product listings, cart management, and secure checkout.",
    stack: [
      { name: "React 19" },
      { name: "Next.js 15" },
      { name: "TypeScript" },
      { name: "TailwindCSS" },
      { name: "Shadcn UI" },
      { name: "Framer Motion" },
    ],
    image: "/asset/ShopHub.png",
    live: "https://shop-hub-demo.vercel.app/",
    github: "https://github.com/arham-ali1323/shop-hub",
  },
  {
    num: "02",
    category: "Travel & Booking",
    title: "CarRental Pro",
    description:
      "A comprehensive car rental booking platform with vehicle search, availability checking, and reservation management system.",
    stack: [
      { name: "React 19" },
      { name: "Next.js 15" },
      { name: "TypeScript" },
      { name: "TailwindCSS" },
      { name: "React Hook Form" },
      { name: "Zustand" },
    ],
    image: "/asset/CarRental.png",
    live: "https://car-rental-pro.vercel.app/",
    github: "https://github.com/arham-ali1323/car-rental-pro",
  },

  {
    num: "03",
    category: "Portfolio",
    title: "Personal Portfolio",
    description:
      "Professional portfolio website showcasing personal projects, skills, and experience with modern design and smooth animations.",
    stack: [
      { name: "React 19" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "TailwindCSS" },
      { name: "Framer Motion" },
      { name: "React Icons" },
    ],
    image: "/asset/portofolio.png",
    live: "https://portfolio-demo.vercel.app/",
    github: "https://github.com/arham-ali1323/personal-portfolio",
  },
  {
    num: "04",
    category: "German Fitness",
    title: "Gym Manager",
    description:
      "A comprehensive fitness and gym management platform with workout tracking, class scheduling, and membership management.",
    stack: [
      { name: "React 19" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "TailwindCSS" },
      { name: "Chart.js" },
      { name: "React Query" },
    ],
    image: "/asset/Gym &.png",
    live: "https://fitlife-manager.vercel.app/",
    github: "https://github.com/arham-ali1323/fitlife-manager",
  },
  {
    num: "05",
    category: "Business Management",
    title: "AlphaSoft 360",
    description:
      "A versatile business management solution for companies, featuring CRM, project tracking, and team collaboration tools.",
    stack: [
      { name: "React 19" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "TailwindCSS" },
      { name: "React DnD" },
      { name: "Date-fns" },
    ],
    image: "/asset/AlphaSoft360.png",
    live: "https://alphasoft-360.vercel.app/",
    github: "https://github.com/arham-ali1323/alphasoft-360",
  },
];
const page = () => {
  return (
    <>
      {/* SEO META TAGS */}
      <Head>
        <title>Projects | Arham Ali - Software Engineer Portfolio</title>
        <meta
          name="description"
          content="Explore full-stack projects by Arham Ali including Next.js apps, e-commerce platforms, and more."
        />
        <meta
          name="keywords"
          content="Arham Ali, Software Engineer, Full Stack Developer, Next.js, Portfolio, Projects"
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-[80vh] "
      >
        <div className="container mb-20 flex flex-col gap-10 mt-10 mx-auto px-4 sm:px-6 lg:px-8">
          {projects.map((project, index) => {
            return (
              <div key={index} className="flex flex-col">
                <Project {...project} />
              </div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default page;

type ProjectProps = (typeof projects)[0];
function Project({
  category,
  title,
  description,
  stack,
  image,
  live,
  github,
}: ProjectProps) {
  return (
    <section className="group bg-orange-200 dark:bg-orange-950/50 rounded-lg overflow-hidden relative hover:bg-orange-300 dark:hover:bg-orange-900/70 transition">
      <div className="flex flex-col lg:flex-row">
        {/* Content Section */}
        <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col">
          <h3 className="text-2xl sm:text-3xl font-bold">{title}</h3>
          <h4 className="mt-2 text-lg sm:text-xl leading-relaxed font-bold text-white/80 dark:text-orange-300">
            {category}
          </h4>
          <p className="mt-2 leading-relaxed dark:text-gray-300 text-black/60">
            {description}
          </p>
          <ul className="flex gap-2 pt-4 flex-wrap">
            {stack.map((tag, index) => {
              return (
                <li
                  key={index}
                  className="font-bold bg-yellow-700 py-2 px-4 rounded-lg text-white dark:bg-yellow-600 dark:text-gray-900"
                >
                  {tag.name}
                </li>
              );
            })}
          </ul>
          <div className="flex gap-4 mt-6">
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              GitHub
            </Link>
            <Link
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition"
            >
              Live Demo
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-full lg:w-1/2 aspect-video sm:aspect-[4/3] lg:aspect-auto lg:h-auto">
          <Link href={github} target="_blank" rel="noopener noreferrer">
            <Image
              src={image}
              alt={title}
              quality={85}
              width={800}
              height={600}
              className="w-full h-full object-cover rounded-lg shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
