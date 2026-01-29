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
        <div className="container  mb-20 flex flex-col  gap-10  mt-10 mx-auto">
          {projects.map((project, index) => {
            return (
              <div key={index} className="flex flex-col mx-20 ">
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
    <section className=" group bg-orange-200 dark:bg-orange-950/50  max-h-[220rem] max-w-[142rem] borer-2 rounded-lg overflow-hidden sm:pr-8  sm:h-[20rem] relative  even:pl-8 hover:bg-orange-300 dark:hover:bg-orange-900/70 transition">
      <div className="py-2 px-4 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col  ">
        <h3 className="text-2xl font-bold ">{title}</h3>
        <h4 className="mt-2 text-xl leading-relaxed font-bold  text-white/80 dark:text-orange-300">
          {category}
        </h4>
        <p className="mt-2 leading-relaxed dark:text-gray-300  text-black/60">
          {description}
        </p>
        <ul className="flex gap-2 pt-4 flex-wrap  ml-6">
          {stack.map((tag, index) => {
            return (
              <li
                key={index}
                className="font-bold flex    bg-yellow-700 py-2 px-4 rounded-lg text-white dark:bg-yellow-600 dark:text-gray-900"
              >
                {tag.name}
              </li>
            );
          })}
        </ul>
        <Link href={github} className="">
          <Image
            src={image}
            alt={title}
            quality={10}
            width={2000}
            height={2000}
            className=" absolute  lg:xl:top-8 lg:xl:-right-40 lg:xl:w-[38.25rem] lg:xl:rounded-t-lg
md:top-8 md:-right-40 md:w-[28.25rem] w-[22rem] md:rounded-t-lg shadow-2xl  
transition
lg:xl:group-hover:scale-[1.04]
 lg:xl:group-hover:-translate-x-6
 lg:xl:group-hover:-translate-y-6
 lg:xl:group-hover:-rotate-2

 md:group-hover:scale-[1.04]
 md:group-hover:-translate-x-6
 md:group-hover:-translate-y-6
 md:group-hover:-rotate-2
   
  
  group-hover:bottom-1
group-hover:-rotate-2
group-hover:scale-[1.0]
   
  "
          />
        </Link>
      </div>
    </section>
  );
}
