import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Project } from '@/lib/portfolioContext';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-slate-300 dark:bg-[#27272c] rounded-lg overflow-hidden border border-orange-200 dark:border-orange-800 mb-4"
    >
      <div className="relative w-full h-40 sm:h-48">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
        />
      </div>
      <div className="p-4">
        <h4 className="text-lg font-bold text-orange-600 dark:text-orange-400 mb-1">
          {project.title}
        </h4>
        <p className="text-sm text-black/60 dark:text-gray-300 mb-2">
          {project.category}
        </p>
        <p className="text-xs sm:text-sm text-black/80 dark:text-gray-400 mb-3 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1 mb-3">
          {project.stack.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="text-xs bg-yellow-700 text-white dark:bg-yellow-600 dark:text-gray-900 px-2 py-1 rounded"
            >
              {tech.name}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <Link
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-orange-600 hover:bg-orange-700 text-white px-3 py-2 rounded text-sm transition-colors"
          >
            Live Demo
          </Link>
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-black dark:bg-white text-white dark:text-black px-3 py-2 rounded text-sm hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            GitHub
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
