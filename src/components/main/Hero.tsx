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
              <div className=" ">
                <Image
                  src={eng}
                  height={230}
                  alt="image"
                  className=" pl-4 opacity-30 "
                />
              </div>
            </MouseParallaxChild>

            <MouseParallaxChild
              className="absolute xl:left- z-30"
              factorX={0.5}
              factorY={0.5}
            >
              <div className=" ">
                <Image
                  src={mm}
                  height={500}
                  alt="image"
                  className=" pt-24 lg:xl:pt-36  opacity- "
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
          <div className="flex flex-row items-center justify-center lg:md:justify-normal">
            <div className="hidden lg:flex xl:flex items-center">
              <Social />
            </div>

            <div className="opacity-75 text-center transition-all text-lg lg:pl-24 lg:text-left xl:text-left">
  <p className="text-gray-600 dark:text-gray-300">
    Building modern, fast, and scalable web interfaces
  </p>
  <p className="text-gray-600 dark:text-gray-300">
    Focused on clean UI, performance, and real-world usability.
  </p>

<div className="flex flex-col items-center lg:flex-row">
  <h1 className="text-3xl mt-3 font-medium text-slate-800 dark:text-gray-200">
    Frontend Development is my
  </h1>

  <h1 className="text-3xl mt-3 ml-2 text-orange-500 tracking-wide font-medium">
    <Typewriter
      options={{
        strings: [" Core Skill", "Strength", " Expertise"],
        autoStart: true,
        loop: true,
      }}
    />
  </h1>
</div>

</div>

          </div>

          <div className="lg:md:pl-36 pt-8">
            <Button 
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/Arham_Ali_Junior_React_Developer.pdf';
                link.download = 'Arham_Ali_Junior_React_Developer.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className=" text-lg hover:text-slate-200 rounded-2xl px-5  bg-transparent dark:bg-black font-medium text-orange-600 hover:bg-orange-600 border-2 border-orange-600"
            >
              Download CV
            </Button>
          </div>
          <div className=" md:hidden xl:lg:hidden items-center">
            <Social />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
