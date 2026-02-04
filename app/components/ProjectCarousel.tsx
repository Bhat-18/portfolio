"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiArrowRight, FiExternalLink, FiGithub } from "react-icons/fi";
import { TechIcon } from "./TechIcon";

interface Project {
  id: number;
  title: string;
  description: string;
  stack: string[];
  status?: string;
  image?: string | null;
  video?: string | null;
  link: string;
}

interface ProjectCarouselProps {
  projects: Project[];
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[currentIndex];

  return (
    <div className="relative">
      {/* Navigation Arrows */}
      <div className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 z-20">
        <button
          onClick={prevProject}
          className="w-12 h-12 rounded-full bg-gray-900/80 border border-white/10 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-500 transition-all shadow-lg"
        >
          <FiArrowLeft size={20} />
        </button>
      </div>
      <div className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 z-20">
        <button
          onClick={nextProject}
          className="w-12 h-12 rounded-full bg-gray-900/80 border border-white/10 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-500 transition-all shadow-lg"
        >
          <FiArrowRight size={20} />
        </button>
      </div>

      {/* Project Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={project.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Description at top */}
          <div className="p-6 md:p-8 border-b border-white/5">
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Main content: Tech stack left, Preview right */}
          <div className="grid md:grid-cols-2">
            {/* Left: Tech Stack */}
            <div className="p-6 md:p-8 flex flex-col justify-center border-r border-white/5">
              <h4 className="text-white font-bold text-lg mb-6">Technology Stack</h4>
              <div className="flex flex-wrap gap-6">
                {project.stack.map((tech) => (
                  <div key={tech} className="flex flex-col items-center gap-2 group">
                    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gray-900/50 border border-white/10 group-hover:border-blue-500/50 group-hover:bg-gray-800 transition-all">
                      <TechIcon name={tech} size={32} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Preview */}
            <div className="relative bg-black/50 min-h-[250px] md:min-h-[300px] flex items-center justify-center p-4">
              {project.video ? (
                <video
                  src={project.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-contain rounded-lg"
                />
              ) : project.image ? (
                <div className="relative w-full h-[250px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
              ) : (
                <div className="text-gray-700 font-bold text-lg uppercase tracking-widest">
                  Preview
                </div>
              )}
            </div>
          </div>

          {/* Bottom: Title and links */}
          <div className="p-6 md:p-8 border-t border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h3 className="text-xl md:text-2xl font-bold text-white">{project.title}</h3>
              <span className="bg-gray-800 text-gray-400 text-[10px] px-3 py-1 rounded border border-gray-700 uppercase font-bold">
                {project.status || "Public"}
              </span>
            </div>
            <div className="flex items-center gap-4">
              {project.link && (
                <>
                  <a
                    href={project.link}
                    target="_blank"
                    className="text-gray-400 hover:text-white transition text-xl"
                    title="GitHub"
                  >
                    <FiGithub />
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    className="text-blue-400 hover:text-white transition text-xl"
                    title="View Project"
                  >
                    <FiExternalLink />
                  </a>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-blue-500 w-6"
                : "bg-gray-600 hover:bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
