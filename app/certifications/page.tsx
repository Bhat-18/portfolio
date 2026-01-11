"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowLeft, FiAward, FiExternalLink, FiCalendar } from "react-icons/fi";
import { certifications } from "../data"; 
import Card3D from "../components/Card3D"; 

export default function CertificationsPage() {
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
                Professional <span className="text-blue-500">Certifications</span>
            </motion.h1>
            <p className="text-xl text-gray-400 max-w-2xl">
                Credentials and courses I've completed to stay at the forefront of AI and Data Science.
            </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
                <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                >
                    <Card3D className="bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden h-full flex flex-col hover:border-blue-500/50 transition duration-500 group">
                        
                        {/* Image Area */}
                        <div className="relative h-[220px] w-full bg-[#050505] border-b border-white/5 p-6 flex items-center justify-center">
                            {cert.image ? (
                                <Image 
                                    src={cert.image} 
                                    alt={cert.title} 
                                    fill 
                                    className="object-contain transition duration-500 group-hover:scale-105" 
                                />
                            ) : (
                                <FiAward className="text-6xl text-gray-700" />
                            )}
                        </div>

                        {/* Content Area */}
                        <div className="p-6 flex flex-col flex-1">
                            <h3 className="text-lg font-bold text-white leading-tight mb-2 group-hover:text-blue-400 transition">
                                {cert.title}
                            </h3>
                            <p className="text-sm text-gray-400 mb-4">{cert.issuer}</p>
                            
                            <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                                <span className="text-gray-500 flex items-center gap-2">
                                    <FiCalendar /> {cert.date}
                                </span>
                                <FiExternalLink className="text-gray-500 group-hover:text-white transition text-lg" />
                            </div>
                        </div>
                    </Card3D>
                </motion.div>
            ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 flex justify-center pb-10">
             <a href="/resume.pdf" target="_blank" className="flex items-center gap-2 bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-500 transition shadow-lg shadow-blue-900/20">
                 View Credentials on Resume <FiExternalLink />
             </a>
        </div>

      </div>
    </main>
  );
}