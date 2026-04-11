"use client";

import Link from "next/link";
import { motion } from "framer-motion";
// FIX: Added FiExternalLink to the import list below
import { FiArrowLeft, FiBriefcase, FiMapPin, FiExternalLink } from "react-icons/fi";
import { experience } from "../data";
import Card3D from "../components/Card3D";

export default function ExperiencePage() {
    return (
        <main className="min-h-screen font-sans selection:bg-blue-500/30 pb-20" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>

            {/* Background Grid Pattern */}
            <div className="fixed inset-0 pointer-events-none z-0"
                style={{ backgroundImage: "radial-gradient(var(--dot-color) 1px, transparent 1px)", backgroundSize: "40px 40px", opacity: 0.2 }}>
            </div>

            <div className="max-w-4xl mx-auto px-6 pt-24 relative z-10">

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
                        Professional <span style={{ color: 'var(--accent-primary)' }}>Experience</span>
                    </motion.h1>
                    <p className="text-xl max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
                        A detailed timeline of my career journey, highlighting impactful projects and key contributions in Cloud Data Engineering, AI, and Data Science.
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
                            <Card3D className="border rounded-2xl overflow-hidden transition duration-500 hover:shadow-blue-500/10" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}>
                                <div className="p-8 md:p-10">

                                    {/* Header: Role, Company, Date */}
                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                                        <div>
                                            <h2 className="text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{job.role}</h2>
                                            <div className="flex flex-wrap items-center gap-4 text-lg font-medium" style={{ color: 'var(--text-secondary)' }}>
                                                <span className="flex items-center gap-2">
                                                    <FiBriefcase style={{ color: 'var(--accent-primary)' }} /> {job.company}
                                                </span>
                                                <span className="hidden md:inline" style={{ color: 'var(--text-dim)' }}>•</span>
                                                <span className="flex items-center gap-2 text-base" style={{ color: 'var(--text-muted)' }}>
                                                    <FiMapPin /> {job.location}
                                                </span>
                                            </div>
                                        </div>

                                        <span className="inline-block text-sm font-bold px-4 py-2 rounded-full border whitespace-nowrap" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent-primary)', borderColor: 'rgba(59, 130, 246, 0.2)' }}>
                                            {job.date}
                                        </span>
                                    </div>

                                    {/* Divider */}
                                    <div className="h-px w-full mb-6" style={{ backgroundColor: 'var(--border-color)' }}></div>

                                    {/* Bullet Points */}
                                    <ul className="space-y-4">
                                        {job.points && job.points.map((point, i) => (
                                            <li key={i} className="flex items-start gap-4 leading-relaxed group/point" style={{ color: 'var(--text-secondary)' }}>
                                                <span className="mt-2.5 w-2 h-2 rounded-full shrink-0 group-hover/point:scale-125 transition" style={{ backgroundColor: 'var(--accent-primary)' }}></span>
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
                    <a href="/resume.pdf" target="_blank" className="flex items-center gap-2 font-bold py-4 px-10 rounded-full transition shadow-xl" style={{ backgroundColor: 'var(--text-primary)', color: 'var(--bg-primary)' }}>
                        Download Full Resume <FiExternalLink />
                    </a>
                </div>

            </div>
        </main>
    );
}