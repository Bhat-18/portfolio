"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowLeft, FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";
import { projects } from "../data"; 
import Card3D from "../components/Card3D"; 
import { TechIcon } from "../components/TechIcon";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen font-sans selection:bg-blue-500/30 bg-black text-gray-200 pb-20">
      
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 pointer-events-none z-0" 
           style={{ backgroundImage: "radial-gradient(#333 1px, transparent 1px)", backgroundSize: "40px 40px", opacity: 0.2 }}>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-24 relative z-10">
        
        {/* Navigation & Header */}
        <div className="mb-16">
            <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition mb-8 group">
                <FiArrowLeft className="group-hover:-translate-x-1 transition" /> Back to Home
            </Link>
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-6xl font-black text-white mb-6"
            >
                My <span className="text-blue-500">Projects</span>
            </motion.h1>
            <p className="text-xl text-gray-400 max-w-2xl">
                A complete archive of my engineering projects, featuring full-stack applications, AI agents, and data engineering pipelines.
            </p>
        </div>

        {/* Projects List */}
        <div className="flex flex-col gap-16">
            {projects.map((project, index) => (
                <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <Card3D className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden hover:border-blue-500/30 transition duration-500">
                        <div className="grid md:grid-cols-2 items-stretch">
                            
                            {/* LEFT: Content */}
                            <div className="p-8 md:p-10 flex flex-col justify-between bg-[#0a0a0a] border-r border-white/5">
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <h3 className="text-3xl font-bold text-white leading-tight">{project.title}</h3>
                                            <span className="bg-gray-800 text-gray-400 text-[10px] px-2 py-1 rounded border border-gray-700 uppercase font-bold">
                                                {project.status || "Public"}
                                            </span>
                                        </div>
                                        {/* Links */}
                                        <div className="flex gap-3">
                                            {project.link && (
                                                <a href={project.link} target="_blank" className="text-gray-400 hover:text-white transition text-xl">
                                                    <FiGithub />
                                                </a>
                                            )}
                                            {project.link && (
                                                <a href={project.link} target="_blank" className="text-blue-400 hover:text-white transition text-xl">
                                                    <FiExternalLink />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                    <p className="text-gray-400 text-base leading-relaxed mb-8">
                                      {project.description}
                                    </p>
                                </div>
                                
                                {/* Tech Stack */}
                                <div>
                                    <h4 className="text-gray-500 font-bold text-sm mb-4 uppercase tracking-wider">Built With</h4>
                                    <div className="flex flex-wrap gap-4">
                                      {project.stack.map(tech => (
                                         <div key={tech} className="flex flex-col items-center gap-1 group">
                                             <div className="text-2xl transition hover:scale-110">
                                                 <TechIcon name={tech} size={28} />
                                             </div>
                                         </div>
                                      ))}
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT: Media */}
                            <div className="relative bg-black flex items-center justify-center min-h-[350px] md:h-full p-4 border-t md:border-t-0 md:border-l border-white/10">
                                {project.video ? (
                                    <video 
                                      src={project.video} 
                                      autoPlay muted loop playsInline 
                                      className="w-full h-full object-contain rounded-lg shadow-2xl" 
                                    />
                                ) : project.image ? (
                                    <div className="relative w-full h-full">
                                        <Image 
                                          src={project.image} 
                                          alt={project.title} 
                                          fill 
                                          className="object-contain" 
                                        />
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

        {/* Bottom CTA */}
        <div className="mt-24 flex justify-center pb-10">
             <a href="https://github.com/Bhat-18" target="_blank" className="flex items-center gap-2 bg-gray-900 border border-gray-700 text-white font-bold py-4 px-10 rounded-full hover:bg-gray-800 transition">
                 View More on GitHub <FiGithub />
             </a>
        </div>

      </div>
    </main>
  );
}