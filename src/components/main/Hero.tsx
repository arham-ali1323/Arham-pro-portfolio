"use client";
import Image from "next/image";
import React from "react";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import eng from "../../../public/3.svg";
import mm from "../../../public/mm2.svg";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import { Button } from "../ui/button";
import Social from "./Social";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.1, duration: 2, ease: "easeInOut" },
        }}
      >
        <div className="flex flex-col  pl-10  justify-center items-center z-20 ">
          <MouseParallaxContainer
            globalFactorX={0.1}
            globalFactorY={0.2}
            resetOnLeave
            className="relative flex items-center h-[220px] "
          >
            <MouseParallaxChild>
              <div>
                <Image
                  src={eng}
                  height={230}
                  alt="Decorative element - Frontend development pattern"
                  className="pl-4 opacity-30"
                  aria-hidden="true"
                />
              </div>
            </MouseParallaxChild>

            <MouseParallaxChild
              className="absolute xl:left- z-30"
              factorX={0.5}
              factorY={0.5}
            >
              <div>
                <Image
                  src={mm}
                  height={500}
                  alt="Abstract technology visualization - Next.js and React development"
                  className="pt-24 lg:xl:pt-36 opacity-"
                  aria-hidden="true"
                />
              </div>
            </MouseParallaxChild>
          </MouseParallaxContainer>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.3, duration: 2, ease: "easeInOut" },
          }}
        >
          {/* this is for the text beneth */}
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-normal">
            <div
              className="hidden lg:flex xl:flex items-center"
              role="region"
              aria-label="Social media links"
            >
              <Social />
            </div>

            <section className="opacity-75 text-center transition-all text-lg lg:pl-24 lg:text-left xl:text-left lg:mt-0 mt-4">
              <p className="text-gray-600 dark:text-gray-300">
                Building modern, fast, and scalable web interfaces
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Focused on clean UI, performance, and real-world usability.
              </p>

              <div className="flex flex-col items-center lg:flex-row lg:items-center">
                <h1 className="text-3xl mt-3 font-medium text-slate-800 dark:text-gray-200">
                  Frontend Development is my{" "}
                  <span
                    className="text-orange-500 tracking-wide font-medium"
                    aria-label="Passion, Specialty, Profession, Expertise, Purpose, and Superpower"
                  >
                    <Typewriter
                      options={{
                        strings: [
                          "Passion",
                          "Specialty",
                          "Expertise",
                          "Profession",
                          "Purpose",
                          "Superpower",
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </span>
                </h1>
              </div>
            </section>
          </div>

          <div className="lg:pl-36 pt-8 flex justify-center lg:justify-start">
            <Button
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Arham_Ali_Junior_React_Developer.pdf";
                link.download = "Arham_Ali_Junior_React_Developer.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className=" text-lg hover:text-slate-200 rounded-2xl px-5  bg-transparent dark:bg-black font-medium text-orange-600 hover:bg-orange-600 border-2 border-orange-600"
              aria-label="Download my CV in PDF format"
            >
              Download CV
            </Button>
          </div>
          <div
            className=" md:hidden xl:lg:hidden items-center"
            role="region"
            aria-label="Mobile social media links"
          >
            <Social />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
