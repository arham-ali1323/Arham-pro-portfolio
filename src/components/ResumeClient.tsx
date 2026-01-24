"use client"
import { Description } from '@radix-ui/react-dialog'
import React from 'react'

import {
  FaHtml5,
  FaCss3,
  FaGithub,
  FaReact,
  FaFigma,
  FaPython,FaDocker
} from 'react-icons/fa'
import {
  SiNextdotjs,
  SiTailwindcss, SiRedux, SiOpenai, SiStrapi, SiPostman, SiTypescript,
  SiFastapi ,SiGooglegemini,SiStreamlit,SiMicrosoftazure,
  SiStripe,
  SiShadcnui,
  SiClerk,
  SiPostgresql,
  SiVercel,
  SiPrisma,
  SiDrizzle
} from "react-icons/si"
import { ScrollArea } from "@/components/ui/scroll-area"
import { PiBirdBold } from "react-icons/pi";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { motion } from 'framer-motion'

const about =
{
  title: 'About me',
  description: "this ismine intro duction so write some of the documentation",
  info: [
    {
      fieldname: "Name",
      fieldValue: "Arham Ali"
    },
    {
      fieldname: "Skype",
      fieldValue: "arham-ali-973359289"
    },
    {
      fieldname: "Phone",
      fieldValue: "0321-1051323"
    },
    {
      fieldname: "Email",
      fieldValue: "arhamali.dev@gmail.com"
    },

    {
      fieldname: "Experience",
      fieldValue: "Fresher"
    },
  ]
}

const education =
{
  icons: "/asset/cap.svg",
  title: "Education",
  decription: "this is my education career secription",
  items: [
    {
      institutions: "University of Sahiwal",
      degree: "BS Economics",
      duration: "late 2020 - late 2024"
    },
     {
      institutions: "CAST Postgraduation College Sahiwal",
      degree: "Intermediate (I.C.S)",
      duration: "2018 - 2020",
    }, {
      institutions: "Govt High School Sahiwal",
      degree: "Matriculation",
      duration: "2016 - 2018",
    },
  ]

}

const skills = {
  title: "My Skills",
  Description: "this is the description for the my skill segment",
  skillList: [
    
    {
      icons: <SiNextdotjs/>,
      name: "Next.js 15"
    },{
      icons: <FaReact />,
      name: "React"
    },{
      icons: <SiTypescript />,
      name: "TypeScript"
    } 
     , {
      icons: <SiTailwindcss />,
      name: "TailwindCSS"
    },   {
      icons: <FaFigma />,
      name: "Figma"
    },  {
      icons: <SiRedux />,
      name: "Redux"
    },
    {
      icons: <SiPostman />,
      name: "Postman"
    },
    {
      icons: <SiOpenai />,
      name: "OpenAI"
    },
    {
      icons: <FaGithub />,
      name: "Git % Github"
    },
    {
      icons: <FaHtml5 />,
      name: "html 5"
    }, {
      icons: <FaCss3 />,
      name: "CSS"
    }, 
    {
      icons: <SiVercel/>,
      name: "Vercel"
    },
    
  ]

}

const enthusiast = [
   {
    icons: <SiOpenai />,
    name: "OpenAI"
  },
  {
    icons: <SiGooglegemini/>,
    name: "Gemini"
  },
  {
    icons: <SiStreamlit />,
    name: "Streamlit"
  },
 
  {
    icons: < FaDocker/>,
    name: "Docker"
  },  
  {
    icons: <SiNextdotjs />,
    name: "Next.js"
  },

]

const ResumeClient = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.5, duration: 0.4, ease: "easeIn" }
      }}
      className='min-h-[80vh] flex justify-center items-center py-8 lg:xl-py-0'
    >
      <div className=' container mx-auto'>
        <Tabs className=' flex  flex-col lg:xl:flex-row md:flex-row'
          defaultValue="Skills"
        >
          <TabsList
            className=' flex  flex-col w-full max-w-[380px] mx-auto lg:xl:mx-0 gap-6'>
            <TabsTrigger className='bg-slate-300 dark:text-white text-black/80 dark:bg-slate-900' value="Education">Education</TabsTrigger>
            <TabsTrigger  className='bg-slate-300 dark:text-white text-black/80 dark:bg-slate-900' value="Skills">Skills</TabsTrigger>
            <TabsTrigger className='bg-slate-300 dark:text-white text-black/80 dark:bg-slate-900' value="Learning Enthusiasm">Learning Enthusiasm</TabsTrigger>
          </TabsList>
          <div className=' w-full min-h-[]'>
            <TabsContent value="Education">
              <div className='flex flex-col mt-10 lg:xl:mt-0 md:mt-0 gap-[15px] text-center '>
                <h3 className='item-center  text-3xl font-bold text-orange-400'>{education.title}</h3>
                <ScrollArea className='h-[360px] mt-4'>
                  <ul className='grid grid-cols-1 lg:xl:md:grid-cols-2  gap-[30px]'>
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className=' bg-slate-700 dark:bg-slate-900 rounded-xl px-10 h-[180px] flex flex-col items-center justify-center lg:xl:item-start text-white/85 text-lg font-bold'>
                          <span className='text-orange-400' >{item.duration}</span>
                          <h3 className='text-xl max-w-[300px] pt-2 min-h-[50px] text-center '>{item.degree}</h3>
                          <div className='flex pr-4 flex-row items-center justify-start'>
                            <span className='w-[8px]  h-[8px] text-white/50 bg-orange-400 rounded-full'></span>
                            <p className='ml-4'>{item.institutions}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="Skills">
              <div className='flex flex-col mt-10 lg:xl:mt-0 md:mt-0 gap-[15px] text-center '>
                <h3 className='item-center  text-3xl font-bold text-orange-400'>{skills.title}</h3>
              </div>
              <ul className='grid mt-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:lg:gap-[30px]'>
                {skills.skillList.map((skill, index) => {
                  return (
                    <li key={index} >
                      <TooltipProvider
                        delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className='w-full h-[120px] bg-slate-300 dark:bg-slate-900 rounded-xl flex items-center justify-center group'>
                            <div className='text-5xl group-hover:text-orange-300 transition-all duration-300'>
                              {skill.icons}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  )
                })}
              </ul>
            </TabsContent>
            <TabsContent value="Learning Enthusiasm">
              <div className='flex flex-col  mt-10 lg:xl:mt-0 md:mt-0 gap-[15px] text-center '>
                <h3 className='item-center  text-3xl font-bold text-orange-400'>Enthusiast To!</h3>
                <div> 
                  <p>
                    As an <span className=" text-orange-400  font-bold">Learning Enthusiast</span>, I am currently learning <span className=" text-orange-400  font-bold">Cutting Edge</span>
                    Tecnologies such as <br /> <span className=" text-orange-500 text-xl font-bold"> Cloud Applied Generative AI Engineering (GenEng)</span>
                  </p>
                  <div className='mt-4'>Stack included <br /> 
                    <ul className='grid mt-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:lg:gap-[30px]'>
                      {enthusiast.map((icons, index) => {
                        return (
                          <li key={index} >
                            <TooltipProvider
                              delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className='w-full h-[120px] bg-slate-300 dark:bg-slate-900 rounded-xl flex items-center justify-center group'>
                                  <div className='text-5xl group-hover:text-orange-400 transition-all duration-300'>
                                    {icons.icons}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>{icons.name}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default ResumeClient
