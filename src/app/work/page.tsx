"use client";

import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import projects from "../../../public/data/projects.json";

const Page = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-[80vh]"
      >
        <div className="container mx-auto mt-10 mb-20 flex flex-col gap-10 px-4 sm:px-6 lg:px-8">
          <h1 className="text-center text-4xl font-bold text-orange-500">
            React and Next.js Projects
          </h1>

          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-lg text-gray-600 dark:text-gray-300">
              A selection of web applications I have designed and built, from
              e-commerce platforms and booking systems to portfolio sites and
              business management tools. Every project below was shipped with a
              focus on clean architecture, responsive interfaces, and
              real-world usability.
            </p>

            <p className="mb-4 text-gray-600 dark:text-gray-300">
              Each application showcases how I apply modern React and Next.js
              patterns in practice — component-driven development, efficient
              data fetching, state management, and attention to performance.
              The tech stack badges on each card reflect the tools used to
              bring the product to life.
            </p>

            <p className="mb-4 text-gray-600 dark:text-gray-300">
              Want to see how a project like one of these could work for your
              idea?{" "}
              <Link
                href="/services"
                className="text-orange-500 underline"
              >
                Browse my web development services
              </Link>{" "}
              or{" "}
              <Link
                href="/contact"
                className="text-orange-500 underline"
              >
                start a conversation about your requirements
              </Link>
              .
            </p>
          </div>

          <h2 className="text-center text-2xl font-bold text-slate-800 dark:text-gray-100">
            Featured Frontend Work
          </h2>

          {projects.map((project, index) => (
            <div key={project.title ?? index} className="flex flex-col">
              <Project {...project} />
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Page;

type ProjectProps = (typeof projects)[number];

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
    <section className="group relative overflow-hidden rounded-lg bg-orange-200 transition hover:bg-orange-300 dark:bg-orange-950/50 dark:hover:bg-orange-900/70">
      <div className="flex flex-col lg:flex-row">
        {/* Content Section */}
        <div className="flex flex-1 flex-col p-6 sm:p-8 lg:p-10">
          <h2 className="text-2xl font-bold sm:text-3xl">
            {title}
          </h2>

          <h3 className="mt-2 text-lg font-bold leading-relaxed text-white/80 dark:text-orange-300 sm:text-xl">
            {category}
          </h3>

          <p className="mt-2 leading-relaxed text-black/60 dark:text-gray-300">
            {description}
          </p>

          <ul className="flex flex-wrap gap-2 pt-4">
            {stack.map((tag, index) => (
              <li
                key={index}
                className="rounded-lg bg-yellow-700 px-4 py-2 font-bold text-white dark:bg-yellow-600 dark:text-gray-900"
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex gap-4">
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-black px-6 py-3 text-white transition hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              GitHub
            </Link>

            <Link
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-6 py-3 text-white transition hover:bg-orange-700"
            >
              Live Demo
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative aspect-video w-full sm:aspect-[4/3] lg:h-auto lg:w-1/2">
          <Link
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={image}
              alt={title}
              quality={85}
              width={800}
              height={600}
              className="h-full w-full rounded-lg object-cover shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}