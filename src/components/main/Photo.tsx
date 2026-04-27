"use client";
import { motion } from "framer-motion";
import Image from 'next/image';
import { useTheme } from '@/hooks/useTheme';

const Photo = () => {
  const isDarkMode = useTheme();

  return (
    <div className='w-full h-full relative'>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.2, ease: "easeIn" }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.2, ease: "easeIn" }}
          className='w-[220px] h-[200px] md:w-[450px] md:h-[400px] lg:w-[450px] lg:h-[500px]'
          whileHover={{
            scale: 1.05, // 5% larger on hover
            rotate: 2, // subtle rotation on hover
            transition: { 
              duration: 0.3,
              ease: "easeOut"
            }
          }}
        >
          <Image
            src={isDarkMode ? "/asset/arham-dark.png" : "/asset/arham-light.png"}
            alt="Portrait of Arham Ali"
            fill
            priority
            className={`object-contain opacity-90 rounded-b-full ${isDarkMode ? 'mix-blend-lighten' : 'mix-blend-darken'} hover:mix-blend-normal transition-all duration-300`}
            sizes="(max-width: 768px) 220px, (max-width: 1024px) 450px, 450px"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Photo;