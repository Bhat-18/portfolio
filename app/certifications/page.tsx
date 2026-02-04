"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowLeft, FiAward, FiExternalLink, FiCalendar } from "react-icons/fi";
import { certifications } from "../data";
import Card3D from "../components/Card3D";

export default function CertificationsPage() {
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
                        Professional <span style={{ color: 'var(--accent-primary)' }}>Certifications</span>
                    </motion.h1>
                    <p className="text-xl max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
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
                            <Card3D className="border rounded-2xl overflow-hidden h-full flex flex-col transition duration-500 group hover:shadow-blue-500/10" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}>

                                {/* Image Area */}
                                <div className="relative h-[220px] w-full border-b p-6 flex items-center justify-center" style={{ backgroundColor: 'black', borderColor: 'var(--border-color)' }}>
                                    {cert.image ? (
                                        <Image
                                            src={cert.image}
                                            alt={cert.title}
                                            fill
                                            className="object-contain transition duration-500 group-hover:scale-105"
                                        />
                                    ) : (
                                        <FiAward className="text-6xl" style={{ color: 'var(--text-muted)' }} />
                                    )}
                                </div>

                                {/* Content Area */}
                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="text-lg font-bold leading-tight mb-2 transition" style={{ color: 'var(--text-primary)' }}>
                                        {cert.title}
                                    </h3>
                                    <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>{cert.issuer}</p>

                                    <div className="mt-auto pt-4 border-t flex items-center justify-between text-xs font-bold uppercase tracking-wider" style={{ borderColor: 'var(--border-color)' }}>
                                        <span className="flex items-center gap-2" style={{ color: 'var(--text-dim)' }}>
                                            <FiCalendar /> {cert.date}
                                        </span>
                                        <FiExternalLink className="transition text-lg" style={{ color: 'var(--text-muted)' }} />
                                    </div>
                                </div>
                            </Card3D>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-24 flex justify-center pb-10">
                    <a href="/resume.pdf" target="_blank" className="flex items-center gap-2 text-white font-bold py-4 px-10 rounded-full transition shadow-lg shadow-blue-900/20" style={{ backgroundColor: 'var(--accent-primary)' }}>
                        View Credentials on Resume <FiExternalLink />
                    </a>
                </div>

            </div>
        </main>
    );
}