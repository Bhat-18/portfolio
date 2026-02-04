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
        <main className="min-h-screen font-sans selection:bg-blue-500/30 pb-20" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>

            {/* Background Grid Pattern */}
            <div className="fixed inset-0 pointer-events-none z-0"
                style={{ backgroundImage: "radial-gradient(var(--dot-color) 1px, transparent 1px)", backgroundSize: "40px 40px", opacity: 0.2 }}>
            </div>

            <div className="max-w-6xl mx-auto px-6 pt-24 relative z-10">

                {/* Navigation & Header */}
                <div className="mb-16">
                    <Link href="/" className="inline-flex items-center gap-2 transition mb-8 group" style={{ color: 'var(--text-muted)' }}>
                        <FiArrowLeft className="group-hover:-translate-x-1 transition" /> Back to Home
                    </Link>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-black mb-6"
                        style={{ color: 'var(--text-primary)' }}
                    >
                        My <span style={{ color: 'var(--accent-primary)' }}>Projects</span>
                    </motion.h1>
                    <p className="text-xl max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
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
                            <Card3D className="border rounded-[2rem] shadow-2xl overflow-hidden transition duration-500 hover:shadow-blue-500/10" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}>
                                <div className="grid md:grid-cols-2 items-stretch">

                                    {/* LEFT: Content */}
                                    <div className="p-8 md:p-10 flex flex-col justify-between border-r" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}>
                                        <div>
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="flex items-center gap-3">
                                                    <h3 className="text-3xl font-bold leading-tight" style={{ color: 'var(--text-primary)' }}>{project.title}</h3>
                                                    <span className="text-[10px] px-2 py-1 rounded border uppercase font-bold" style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-muted)', borderColor: 'var(--border-color)' }}>
                                                        {project.status || "Public"}
                                                    </span>
                                                </div>
                                                {/* Links */}
                                                <div className="flex gap-3">
                                                    {project.link && (
                                                        <a href={project.link} target="_blank" className="transition text-xl hover:scale-110" style={{ color: 'var(--text-muted)' }}>
                                                            <FiGithub />
                                                        </a>
                                                    )}
                                                    {project.link && (
                                                        <a href={project.link} target="_blank" className="transition text-xl hover:scale-110" style={{ color: 'var(--accent-primary)' }}>
                                                            <FiExternalLink />
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
                                                {project.description}
                                            </p>
                                        </div>

                                        {/* Tech Stack */}
                                        <div>
                                            <h4 className="font-bold text-sm mb-4 uppercase tracking-wider" style={{ color: 'var(--text-dim)' }}>Built With</h4>
                                            <div className="flex flex-wrap gap-4">
                                                {project.stack.map(tech => (
                                                    <div key={tech} className="flex flex-col items-center gap-1 group">
                                                        <div className="text-2xl transition hover:scale-110" style={{ color: 'var(--text-primary)' }}>
                                                            <TechIcon name={tech} size={28} />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* RIGHT: Media */}
                                    <div className="relative flex items-center justify-center min-h-[350px] md:h-full p-4 border-t md:border-t-0 md:border-l" style={{ backgroundColor: 'black', borderColor: 'var(--border-color)' }}>
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
                                            <div className="font-bold text-xl uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>Preview Loading</div>
                                        )}
                                    </div>
                                </div>
                            </Card3D>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-24 flex justify-center pb-10">
                    <a href="https://github.com/Bhat-18" target="_blank" className="flex items-center gap-2 border font-bold py-4 px-10 rounded-full transition hover:opacity-90" style={{ backgroundColor: 'var(--bg-tertiary)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}>
                        View More on GitHub <FiGithub />
                    </a>
                </div>

            </div>
        </main>
    );
}