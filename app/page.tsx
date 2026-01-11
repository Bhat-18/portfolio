"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiGithub, FiArrowRight, FiBriefcase, FiAward, FiExternalLink, FiDownload } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa6"; 
import { hero, projects, certifications, experience, education, skills } from "./data";
import { TechIcon } from "./components/TechIcon";
import Typewriter from "./components/Typewriter";
import Card3D from "./components/Card3D"; 

export default function Home() {
  const homeProjects = projects.slice(0, 2); 
  const homeExperience = experience.slice(0, 2); 
  const marqueeCerts = [...certifications, ...certifications]; 

  // --- MOUSE FOLLOW SPOTLIGHT LOGIC ---
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  // Shared Button Style
  const buttonStyle = "bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-10 rounded-full transition shadow-lg shadow-blue-900/20 transform hover:-translate-y-1 flex items-center gap-2 mx-auto";

  return (
    <main className="min-h-screen font-sans selection:bg-blue-500/30 pb-20 overflow-x-hidden relative text-gray-200 bg-black">
      
      {/* === GLOBAL MOUSE SPOTLIGHT === */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
        }}
      />

      {/* Reduced gap-32 to gap-24 for tighter flow */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-24 relative z-10">
        
        {/* === 1. HERO SECTION (RESIZED & TIGHTENED) === */}
        {/* Changed min-h-[85vh] to min-h-[75vh] and reduced pt-20 to pt-10 */}
        <section className="min-h-[75vh] flex items-center pt-10 relative">
            <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-blue-900/10 blur-[100px] rounded-full -z-10"></div>
            
            <div className="grid lg:grid-cols-2 gap-8 items-center w-full">
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8 }} 
                className="flex flex-col justify-center"
              >
                  <span className="text-blue-400 font-bold mb-3 text-base tracking-wide uppercase">
                    Hello, I'm
                  </span>
                  
                  {/* RESIZED HEADINGS: 7xl -> 6xl */}
                  <h1 className="text-4xl md:text-6xl font-black text-white mb-1 tracking-tight leading-tight min-h-[1.2em]">
                    <Typewriter text="Data Scientist" />
                  </h1>
                  
                  <h1 className="text-4xl md:text-6xl font-black text-gray-500 mb-6 tracking-tight leading-tight min-h-[1.2em]">
                    <Typewriter text="& AI Engineer" />
                  </h1>
                  
                  <p className="text-base md:text-lg text-gray-400 max-w-lg leading-relaxed mb-8">
                    I build production AI that drives ROI. Recently architected a Serverless GCP Agent saving ~$10.6k/year and I deploy scalable RAG & MLOps pipelines.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                      <Link href="/projects" className="bg-white text-black px-8 py-3 rounded-full font-bold text-sm md:text-base hover:bg-gray-200 transition shadow-lg shadow-white/10">
                        View Work
                      </Link>
                      <a href="/resume.pdf" target="_blank" className="flex items-center gap-2 border border-gray-600 text-white px-8 py-3 rounded-full font-bold text-sm md:text-base hover:bg-white/10 transition">
                        Download CV <FiDownload />
                      </a>
                  </div>
              </motion.div>

              <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }} 
                 animate={{ opacity: 1, scale: 1 }} 
                 transition={{ duration: 0.8 }} 
                 className="flex justify-center lg:justify-end relative"
              >
                  {/* RESIZED PHOTO CARD: Much smaller now */}
                  <Card3D className="w-[280px] h-[360px] md:w-[320px] md:h-[420px] rounded-[2rem]">
                      <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-gray-900 shadow-2xl">
                         <Image 
                           src={hero.avatar} 
                           alt={hero.name} 
                           fill 
                           className="object-cover" 
                           priority 
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                      </div>
                  </Card3D>
              </motion.div>

            </div>
        </section>

        {/* === 2. PROJECTS === */}
        <section id="projects" className="relative pt-4">
            <div className="flex items-center justify-between mb-10">
                 <h2 className="text-4xl md:text-5xl font-black">My Projects</h2>
                 <Link href="/projects" className="text-blue-400 hover:text-white flex items-center gap-2 font-bold transition">View All <FiArrowRight /></Link>
            </div>

            <div className="flex flex-col gap-12"> 
                {homeProjects.map((project, index) => (
                    <motion.div 
                        key={project.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <Card3D className="bg-[#050505] border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden">
                           <div className="grid md:grid-cols-2">
                                <div className="p-8 md:p-10 flex flex-col justify-center bg-[#050505] border-r border-white/5 relative z-10">
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">{project.title}</h3>
                                                <span className="bg-gray-800 text-gray-400 text-[10px] px-2 py-1 rounded border border-gray-700 uppercase font-bold">
                                                    {project.status || "Public"}
                                                </span>
                                            </div>
                                            <a href={project.link} target="_blank" className="text-blue-400 hover:text-white transition text-xl">
                                                <FiExternalLink />
                                            </a>
                                        </div>
                                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                          {project.description}
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-gray-500 font-bold text-xs mb-3 uppercase tracking-wider">Technology Stack</h4>
                                        <div className="flex flex-wrap gap-4">
                                          {project.stack.map(tech => (
                                             <div key={tech} className="flex flex-col items-center gap-1 group">
                                                 <div className={`text-2xl`}>
                                                     <TechIcon name={tech} size={28} />
                                                 </div>
                                             </div>
                                          ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="relative bg-black flex items-center justify-center min-h-[280px] md:h-full p-4 border-t md:border-t-0 md:border-l border-white/10">
                                   {project.video ? (
                                        <video src={project.video} autoPlay muted loop playsInline className="w-full h-full object-contain rounded-lg" />
                                    ) : project.image ? (
                                        <div className="relative w-full h-full">
                                            <Image src={project.image} alt={project.title} fill className="object-contain" />
                                        </div>
                                    ) : (
                                        <div className="text-gray-700 font-bold text-xl uppercase tracking-widest">Preview Loading</div>
                                    )}
                                </div>
                           </div>
                        </Card3D>
                    </motion.div>
                ))}
            </div>
            
            <div className="mt-16">
                <Link href="/projects" className={buttonStyle}>
                    Show More <FiArrowRight />
                </Link>
            </div>
        </section>

        {/* === 3. EXPERIENCE === */}
        <section>
             <div className="flex items-center justify-between mb-10">
                <h2 className="text-4xl md:text-5xl font-black">Experience</h2>
                <Link href="/experience" className="text-blue-400 hover:text-white flex items-center gap-2 font-bold transition">Full History <FiArrowRight /></Link>
            </div>
            <div className="flex flex-col gap-8">
                {homeExperience.map((job, index) => (
                    <motion.div 
                        key={job.id} 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="relative pl-6 border-l-2 border-gray-800 hover:border-blue-500 transition duration-500"
                    >
                         <div className="bg-[#0a0a0a] p-8 rounded-2xl border border-white/10 hover:border-blue-500/30 transition shadow-lg group">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                                <h3 className="text-xl md:text-2xl font-bold text-white">{job.role}</h3>
                                <span className="text-xs font-bold text-blue-400 bg-blue-900/20 px-3 py-1 rounded-full w-fit whitespace-nowrap">
                                  {job.date}
                                </span>
                            </div>
                            <div className="flex items-center gap-3 mb-6 text-gray-300">
                                <div className="flex items-center gap-2 font-semibold text-base md:text-lg">
                                  <FiBriefcase className="text-blue-500" /> 
                                  {job.company}
                                </div>
                                <span className="w-1 h-1 rounded-full bg-gray-600"></span> 
                                <span className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wide">
                                  {job.location}
                                </span>
                            </div>
                            <ul className="space-y-3">
                                {job.points && job.points.map((point, i) => (
                                  <li key={i} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span> 
                                    <span>{point}</span>
                                  </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className="mt-16">
                <Link href="/experience" className={buttonStyle}>
                    Show More <FiArrowRight />
                </Link>
            </div>
        </section>

        {/* === 4. EDUCATION === */}
        <section>
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-center">Education</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {education.map((edu, index) => (
                    <motion.div
                        key={edu.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card3D className="bg-[#050505] border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition duration-300 h-full flex items-center gap-5 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                            
                            <div className="w-16 h-16 shrink-0 rounded-lg bg-white p-2 flex items-center justify-center shadow-lg shadow-white/5">
                                {edu.logo ? (
                                    <div className="relative w-full h-full">
                                        <Image src={edu.logo} alt={edu.school} fill className="object-contain p-1" />
                                    </div>
                                ) : (
                                    <FaGraduationCap className="text-black text-3xl" />
                                )}
                            </div>
                            
                            <div className="z-10">
                                <h3 className="text-lg font-bold text-white leading-tight mb-1">{edu.degree}</h3>
                                <p className="text-gray-400 text-sm font-medium mb-2">{edu.school}</p>
                                <span className="text-xs font-bold text-blue-400 bg-blue-900/10 px-2 py-1 rounded border border-blue-500/20">
                                    {edu.date}
                                </span>
                            </div>
                        </Card3D>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* === 5. TECHNICAL ARSENAL === */}
        <section>
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16">Technical Arsenal</h2>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 max-w-5xl mx-auto">
                {skills.map((skill, index) => (
                    <motion.div 
                      key={skill} 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex flex-col items-center gap-3 group"
                    >
                        <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl bg-[#080808] border border-white/5 shadow-2xl group-hover:border-blue-500/30 group-hover:bg-[#111] group-hover:-translate-y-2 transition-all duration-300 relative">
                            <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500"></div>
                            <div className="relative z-10">
                                <TechIcon name={skill} size={40} />
                            </div>
                        </div>
                        <span className="text-xs md:text-sm font-medium text-gray-500 group-hover:text-white transition-colors duration-300">
                          {skill}
                        </span>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* === 6. CERTIFICATIONS === */}
        <section className="pb-20 overflow-hidden">
            <div className="flex items-center justify-between mb-10 px-2">
                <h2 className="text-4xl md:text-5xl font-black">Certifications</h2>
                <Link href="/certifications" className="text-blue-400 hover:text-white flex items-center gap-2 font-bold transition">View All <FiArrowRight /></Link>
            </div>
            <div className="relative w-full overflow-hidden mask-linear-gradient mb-12">
                <motion.div 
                    className="flex gap-6 w-max"
                    animate={{ x: ["0%", "-50%"] }} 
                    transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
                >
                    {marqueeCerts.map((cert, i) => (
                        <div key={`${cert.id}-${i}`} className="w-[280px] shrink-0">
                            <Card3D className="bg-[#0a0a0a] h-full flex flex-col border border-white/10 rounded-2xl overflow-hidden group">
                                <div className="relative h-[160px] w-full bg-[#050505] border-b border-white/5 p-4 flex items-center justify-center">
                                   {cert.image ? (
                                        <Image src={cert.image} alt={cert.title} fill className="object-contain" />
                                    ) : (
                                        <FiAward className="text-5xl text-gray-700" />
                                    )}
                                </div>
                                <div className="p-5 flex flex-col gap-2 flex-1">
                                    <h3 className="text-sm font-bold text-white line-clamp-1 group-hover:text-blue-400 transition">{cert.title}</h3>
                                    <p className="text-xs text-gray-400">{cert.issuer}</p>
                                </div>
                            </Card3D>
                        </div>
                    ))}
                </motion.div>
            </div>
            <div className="mt-16">
                <Link href="/certifications" className={buttonStyle}>
                    Show More <FiArrowRight />
                </Link>
            </div>
        </section>

      </div>
    </main>
  );
}