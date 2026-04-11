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
          className="w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-lg hover:opacity-80"
          style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-primary)', border: '1px solid var(--border-color)' }}
        >
          <FiArrowLeft size={20} />
        </button>
      </div>
      <div className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 z-20">
        <button
          onClick={nextProject}
          className="w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-lg hover:opacity-80"
          style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-primary)', border: '1px solid var(--border-color)' }}
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
          className="rounded-2xl overflow-hidden shadow-2xl border"
          style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
        >
          {/* Description at top */}
          <div className="p-6 md:p-8 border-b" style={{ borderColor: 'var(--border-color)' }}>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {project.description}
            </p>
          </div>

          {/* Main content: Tech stack left, Preview right */}
          <div className="grid md:grid-cols-2">
            {/* Left: Tech Stack */}
            <div className="p-6 md:p-8 flex flex-col justify-center border-r" style={{ borderColor: 'var(--border-color)' }}>
              <h4 className="font-bold text-lg mb-6" style={{ color: 'var(--text-primary)' }}>Technology Stack</h4>
              <div className="flex flex-wrap gap-6">
                {project.stack.map((tech) => (
                  <div key={tech} className="flex flex-col items-center gap-2 group">
                    <div className="w-14 h-14 flex items-center justify-center rounded-xl border transition-all" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}>
                      <TechIcon name={tech} size={32} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Preview */}
            <div className="relative min-h-[250px] md:min-h-[300px] flex items-center justify-center p-4" style={{ backgroundColor: 'var(--bg-secondary)' }}>
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
                <div className="font-bold text-lg uppercase tracking-widest" style={{ color: 'var(--text-dim)' }}>
                  Preview
                </div>
              )}
            </div>
          </div>

          {/* Bottom: Title and links */}
          <div className="p-6 md:p-8 border-t flex items-center justify-between" style={{ borderColor: 'var(--border-color)' }}>
            <div className="flex items-center gap-4">
              <h3 className="text-xl md:text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>{project.title}</h3>
              <span className="text-[10px] px-3 py-1 rounded border uppercase font-bold" style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-muted)', borderColor: 'var(--border-color)' }}>
                {project.status || "Public"}
              </span>
            </div>
            <div className="flex items-center gap-4">
              {project.link && (
                <>
                  <a
                    href={project.link}
                    target="_blank"
                    className="transition text-xl hover:opacity-70"
                    title="GitHub"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    <FiGithub />
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    className="transition text-xl hover:opacity-70"
                    title="View Project"
                    style={{ color: 'var(--accent-primary)' }}
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
            className="h-2 rounded-full transition-all"
            style={{
              width: index === currentIndex ? '24px' : '8px',
              backgroundColor: index === currentIndex ? 'var(--accent-primary)' : 'var(--text-dim)'
            }}
          />
        ))}
      </div>
    </div>
  );
}
