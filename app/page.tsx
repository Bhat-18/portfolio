"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiExternalLink, FiBriefcase, FiX, FiZoomIn, FiAward } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa6";
import { hero, navLinks, socialLinks, projects, experience, education, skills, certifications } from "./data";
import { TechIcon } from "./components/TechIcon";
// IMPORT ANIMATION LIBRARY
import { motion, AnimatePresence } from "framer-motion";
import Spotlight from "./components/Spotlight";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen font-sans selection:bg-blue-500/30 pb-20 overflow-x-hidden relative bg-black text-gray-200">
      
      {/* 1. REAL-TIME MOUSE SPOTLIGHT */}
      <Spotlight />

      {/* IMAGE POPUP (MODAL) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white text-4xl hover:text-red-400 transition z-50">
              <FiX />
            </button>
            
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-5xl h-[85vh] rounded-xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-gray-800 bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={selectedImage} 
                alt="Preview" 
                fill 
                className="object-contain" 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* NAVBAR */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl bg-black/60 backdrop-blur-md border border-gray-800 rounded-full px-6 py-3 flex items-center justify-between shadow-lg shadow-black/20"
      >
        <div className="flex items-center gap-4">
          <div className="hidden md:block w-10 h-10 rounded-full bg-gray-700 overflow-hidden relative border border-gray-600">
             <Image src={hero.avatar} alt="Profile" fill className="object-cover" />
          </div>
          <span className="font-bold text-lg tracking-tight text-white">{hero.name}</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-white transition">
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex gap-3 text-gray-400">
            <a href={socialLinks.github} target="_blank" className="hover:text-white text-xl transition"><FiGithub /></a>
            <a href={socialLinks.linkedin} target="_blank" className="hover:text-white text-xl transition"><FiLinkedin /></a>
            <a href={socialLinks.email} className="hover:text-white text-xl transition"><FiMail /></a>
          </div>
        </div>
      </motion.header>

      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-32">
        
        {/* HERO SECTION */}
        <section className="min-h-[90vh] flex items-center pt-28 md:pt-0 relative">
            {/* Background Glow */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full -z-10 hidden md:block"></div>

            <div className="grid md:grid-cols-2 gap-12 items-center w-full">
              {/* Left Column: Text */}
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="flex flex-col justify-center order-2 md:order-1"
              >
                  <motion.span variants={fadeInUp} className="text-blue-400 font-medium mb-4 block tracking-wider">Hello, I'm</motion.span>
                  
                  <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold bg-gradient-to-br from-white via-gray-200 to-gray-500 bg-clip-text text-transparent mb-6 leading-tight">
                    {hero.title}
                  </motion.h1>
                  
                  <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed mb-8">
                    {hero.text}
                  </motion.p>
                  
                  <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                      <a href="#projects" className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition shadow-lg shadow-white/10">View Work</a>
                      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="border border-gray-700 text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition">Download CV</a>
                  </motion.div>
              </motion.div>

              {/* Right Column: Animated Photo */}
              <motion.div 
                 initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                 animate={{ opacity: 1, scale: 1, rotate: 0 }}
                 transition={{ duration: 1, ease: "easeOut" }}
                 className="order-1 md:order-2 flex justify-center md:justify-end relative"
              >
                  <div className="relative w-full max-w-[300px] md:max-w-[360px] h-[400px] md:h-[480px] rounded-3xl overflow-hidden border border-gray-800 shadow-2xl shadow-blue-900/20 rotate-3 hover:rotate-0 transition-all duration-500 group z-10 bg-gray-900">
                     <Image
                         src={hero.avatar}
                         alt={hero.name}
                         fill
                         priority={true}
                         className="object-cover grayscale-[30%] group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-500"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent mix-blend-overlay"></div>
                  </div>
                  <div className="absolute inset-0 w-full max-w-[300px] md:max-w-[360px] h-[400px] md:h-[480px] rounded-3xl border-2 border-blue-500/30 -rotate-3 -z-10 scale-105 md:left-auto md:right-0 animate-pulse"></div>
              </motion.div>
            </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-12 flex items-center gap-3"
          >
            <span className="text-blue-400">/</span> Featured Projects
          </motion.h2>

          <div className="flex flex-col gap-12">
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-gray-900/30 border border-gray-800/80 p-8 rounded-3xl grid md:grid-cols-5 gap-8 hover:border-blue-500/50 hover:bg-gray-900/60 transition-all duration-300 relative overflow-hidden shadow-lg"
              >
                <div className="md:col-span-3 flex flex-col justify-between z-10 relative order-2 md:order-1">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-3xl font-bold group-hover:text-blue-400 transition">{project.title}</h3>
                        <span className="text-xs bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full border border-blue-500/20 w-fit">{project.status}</span>
                      </div>
                      <a href={project.link} target="_blank" className="text-gray-400 hover:text-white text-2xl bg-gray-800 p-2 rounded-full transition"><FiExternalLink /></a>
                    </div>
                    <p className="text-gray-300 mb-8 leading-relaxed text-base">{project.description}</p>
                  </div>
                  <div>
                   <h4 className="text-sm text-gray-500 font-bold mb-3 uppercase tracking-wider">Technologies</h4>
                   <div className="flex flex-wrap gap-3">
                      {project.stack.map((tech) => (
                        <div key={tech} className="bg-black/50 px-4 py-2 rounded-full border border-gray-700 hover:border-blue-400 transition flex items-center gap-2">
                           <TechIcon name={tech} size={16} />
                           <span className="text-sm font-medium text-gray-300">{tech}</span>
                        </div>
                      ))}
                   </div>
                  </div>
                </div>
                <div 
                   className="md:col-span-2 h-64 md:h-auto relative rounded-2xl overflow-hidden border border-gray-800 group-hover:border-blue-500/30 transition z-10 bg-gray-950 order-1 md:order-2 cursor-pointer"
                   onClick={() => project.image && setSelectedImage(project.image)}
                >
                  {project.image ? (
                      <div className="w-full h-full relative">
                        <Image src={project.image} alt={project.title} fill className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition duration-500" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300">
                             <FiZoomIn className="text-white text-4xl" />
                        </div>
                      </div>
                  ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-500 text-xs">No Image Found</div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience">
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-12 flex items-center gap-3"
            >
                <span className="text-blue-400">/</span> Work Experience
            </motion.h2>
            <div className="relative border-l-2 border-gray-800 ml-3 space-y-16">
                {experience.map((job, index) => (
                    <motion.div 
                      key={job.id} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="ml-12 relative group"
                    >
                        <span className="absolute -left-[59px] top-2 bg-black w-7 h-7 rounded-full border-[3px] border-blue-500 group-hover:scale-125 transition"></span>
                        <div className="bg-gray-900/30 p-8 rounded-3xl border border-gray-800 hover:border-blue-500/50 transition shadow-lg">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition">{job.role}</h3>
                                <span className="text-sm font-bold text-blue-300 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20 whitespace-nowrap">{job.date}</span>
                            </div>
                            <p className="text-lg text-gray-300 font-medium mb-6 flex items-center gap-2"><FiBriefcase className="text-blue-400" /> {job.company}</p>
                            <p className="text-gray-400 text-base leading-relaxed">{job.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* SKILLS */}
        <section id="skills">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 flex items-center gap-3"
          >
             <span className="text-purple-400">/</span> Technologies & Skills
          </motion.h2>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6"
          >
              {skills.map((skill) => (
                  <motion.div 
                    key={skill} 
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex flex-col items-center gap-4 p-6 rounded-3xl border border-gray-800 bg-gray-900/20 hover:bg-gray-800/80 hover:border-purple-500/50 transition-all group shadow-md"
                  >
                      <TechIcon name={skill} size={40} />
                      <span className="text-sm font-bold text-gray-400 group-hover:text-white">{skill}</span>
                  </motion.div>
              ))}
          </motion.div>
        </section>

        {/* EDUCATION & CERTS */}
        <section id="education" className="grid md:grid-cols-2 gap-16 pb-20">
            {/* EDUCATION COLUMN */}
            <div>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold mb-10 flex items-center gap-3"
                >
                    <span className="text-green-400">/</span> Education
                </motion.h2>
                <div className="space-y-6">
                    {education.map((edu, index) => (
                        <motion.div 
                          key={edu.id} 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-6 p-6 rounded-3xl border border-gray-800 bg-gray-900/20 hover:border-green-500/50 hover:bg-gray-800/80 transition shadow-md group"
                        >
                            <div className="relative w-16 h-16 shrink-0 rounded-2xl overflow-hidden bg-gray-800 border border-gray-700 p-1 flex items-center justify-center">
                                {edu.logo ? (
                                    <Image src={edu.logo} alt={edu.school} fill className="object-contain rounded-xl" />
                                ) : (
                                    <FaGraduationCap className="text-green-500 text-3xl" />
                                )}
                            </div>
                            <div>
                              <h3 className="text-xl font-bold mb-1 text-white group-hover:text-green-400 transition">{edu.degree}</h3>
                              <p className="text-gray-300 text-base mb-3">{edu.school}</p>
                              <span className="text-sm font-bold text-green-300 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20 inline-block">{edu.date}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* CERTIFICATES COLUMN */}
            <div id="certificates">
                <motion.h2 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   className="text-4xl font-bold mb-10 flex items-center gap-3"
                >
                    <span className="text-green-400">/</span> Certifications
                </motion.h2>
                <div className="space-y-4">
                    {certifications.map((cert, index) => (
                        <motion.div 
                            key={cert.id} 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            viewport={{ once: true }}
                            onClick={() => cert.image && setSelectedImage(cert.image)}
                            className="flex items-center gap-6 p-4 rounded-3xl border border-gray-800 bg-gray-900/20 hover:border-green-500/50 hover:bg-gray-800/80 transition group shadow-md cursor-pointer relative top-0 hover:-top-1"
                        >
                            <div className="relative w-16 h-16 shrink-0 rounded-2xl overflow-hidden bg-gray-800 border border-gray-700 p-1">
                                {cert.image ? (
                                    <Image src={cert.image} alt={cert.title} fill className="object-contain rounded-xl" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gray-800 text-green-500"><FiAward size={24}/></div>
                                )}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-base font-bold text-gray-200 group-hover:text-green-400 transition line-clamp-1 pr-8">{cert.title}</h3>
                                <p className="text-sm text-gray-400">{cert.issuer}</p>
                                <span className="text-xs text-gray-500 mt-1 block">{cert.date}</span>
                            </div>
                            <div className="absolute top-6 right-6 text-gray-600 group-hover:text-green-400 transition">
                                <FiZoomIn size={20} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

      </div>
    </main>
  );
}