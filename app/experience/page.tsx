"use client";

import Link from "next/link";
import { motion } from "framer-motion";
// FIX: Added FiExternalLink to the import list below
import { FiArrowLeft, FiBriefcase, FiCalendar, FiMapPin, FiExternalLink } from "react-icons/fi";
import { experience } from "../data"; 
import Card3D from "../components/Card3D"; 

export default function ExperiencePage() {
  return (
    <main className="min-h-screen font-sans selection:bg-blue-500/30 bg-black text-gray-200 pb-20">
      
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 pointer-events-none z-0" 
           style={{ backgroundImage: "radial-gradient(#333 1px, transparent 1px)", backgroundSize: "40px 40px", opacity: 0.2 }}>
      </div>

      <div className="max-w-4xl mx-auto px-6 pt-24 relative z-10">
        
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
                Professional <span className="text-blue-500">Experience</span>
            </motion.h1>
            <p className="text-xl text-gray-400 max-w-2xl">
                A detailed timeline of my career journey, highlighting impactful projects and key contributions in AI, Data Science, and Engineering.
            </p>
        </div>

        {/* Experience List */}
        <div className="flex flex-col gap-12">
            {experience.map((job, index) => (
                <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                >
                    <Card3D className="bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition duration-500">
                        <div className="p-8 md:p-10">
                            
                            {/* Header: Role, Company, Date */}
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                                <div>
                                    <h2 className="text-3xl font-bold text-white mb-2">{job.role}</h2>
                                    <div className="flex flex-wrap items-center gap-4 text-lg text-gray-300 font-medium">
                                        <span className="flex items-center gap-2">
                                            <FiBriefcase className="text-blue-500" /> {job.company}
                                        </span>
                                        <span className="hidden md:inline text-gray-700">•</span>
                                        <span className="flex items-center gap-2 text-gray-400 text-base">
                                            <FiMapPin /> {job.location}
                                        </span>
                                    </div>
                                </div>
                                
                                <span className="inline-block bg-blue-900/20 text-blue-400 text-sm font-bold px-4 py-2 rounded-full border border-blue-500/20 whitespace-nowrap">
                                    {job.date}
                                </span>
                            </div>

                            {/* Divider */}
                            <div className="h-px w-full bg-white/5 mb-6"></div>

                            {/* Bullet Points */}
                            <ul className="space-y-4">
                                {job.points && job.points.map((point, i) => (
                                    <li key={i} className="flex items-start gap-4 text-gray-300 leading-relaxed group/point">
                                        <span className="mt-2.5 w-2 h-2 rounded-full bg-blue-600 shrink-0 group-hover/point:scale-125 transition"></span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </Card3D>
                </motion.div>
            ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 flex justify-center">
             <a href="/resume.pdf" target="_blank" className="flex items-center gap-2 bg-white text-black font-bold py-4 px-10 rounded-full hover:bg-gray-200 transition shadow-xl">
                 Download Full Resume <FiExternalLink />
             </a>
        </div>

      </div>
    </main>
  );
}