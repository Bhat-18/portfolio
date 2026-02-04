"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiGithub, FiArrowRight, FiBriefcase, FiAward, FiExternalLink, FiDownload } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa6";
import { hero, projects, certifications, experience, education, skills } from "./data";
import { TechIcon } from "./components/TechIcon";
import Card3D from "./components/Card3D";
import ProjectCarousel from "./components/ProjectCarousel";

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

                    <div className="grid lg:grid-cols-2 gap-12 items-center w-full">

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col justify-center"
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight leading-tight">
                                Hi, I'm {hero.name.split(" ")[0]}
                            </h1>

                            <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed max-w-xl">
                                <span className="highlight-text">Data Scientist & AI Engineer</span>{" "}
                                who thrives on innovation and creativity. I turn visionary ideas into seamless digital experiences.{" "}
                                <span className="highlight-text">Let's build something extraordinary together.</span>
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link href="/projects" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-bold text-sm md:text-base transition shadow-lg shadow-blue-900/30">
                                    View Projects
                                </Link>
                                <a href="https://github.com/Bhat-18" target="_blank" className="flex items-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-3 rounded-full font-bold text-sm md:text-base hover:bg-white/20 transition">
                                    <FiGithub /> Github
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="flex justify-center lg:justify-end relative"
                        >
                            {/* Circular Avatar */}
                            <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px]">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/30 to-purple-600/30 blur-2xl"></div>
                                <div className="relative w-full h-full rounded-full overflow-hidden avatar-circular">
                                    <Image
                                        src={hero.avatar}
                                        alt={hero.name}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </section>

                {/* === 2. PROJECTS === */}
                <section id="projects" className="relative pt-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-black" style={{ color: 'var(--text-primary)' }}>Projects</h2>
                    </div>

                    {/* Project Carousel - One at a time */}
                    <div className="max-w-5xl mx-auto px-4 md:px-12">
                        <ProjectCarousel projects={projects} />
                    </div>

                    <div className="mt-12 flex justify-center">
                        <Link href="/projects" className={buttonStyle}>
                            Show more <FiArrowRight />
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
                <section className="py-12">
                    <h2 className="text-4xl md:text-5xl font-black mb-16 text-center" style={{ color: 'var(--text-primary)' }}>
                        Education
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {education.map((edu, index) => (
                            <motion.div
                                key={edu.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                            >
                                <motion.div
                                    className="relative overflow-hidden rounded-3xl p-8 border h-full transition-all duration-500 group"
                                    style={{
                                        backgroundColor: 'var(--bg-card)',
                                        borderColor: 'var(--border-color)'
                                    }}
                                    whileHover={{
                                        scale: 1.02,
                                        borderColor: 'var(--accent-primary)'
                                    }}
                                >
                                    {/* Gradient Orb Background */}
                                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        {/* Logo - Full size, no white box */}
                                        <div className="flex items-start gap-6 mb-6">
                                            {edu.logo && (
                                                <div className="w-24 h-24 shrink-0 relative rounded-2xl overflow-hidden shadow-lg">
                                                    <Image
                                                        src={edu.logo}
                                                        alt={edu.school}
                                                        fill
                                                        className="object-contain"
                                                    />
                                                </div>
                                            )}
                                            <div className="flex-1 pt-2">
                                                <span className="inline-block px-4 py-1.5 text-sm font-bold rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-3">
                                                    {edu.date}
                                                </span>
                                                <h3 className="text-xl md:text-2xl font-bold leading-tight group-hover:text-blue-400 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                                                    {edu.degree}
                                                </h3>
                                            </div>
                                        </div>

                                        {/* School Name */}
                                        <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: 'var(--border-color)' }}>
                                            <FaGraduationCap className="text-blue-500 text-xl" />
                                            <span className="text-lg font-medium" style={{ color: 'var(--text-muted)' }}>
                                                {edu.school}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* === 5. TECHNOLOGY STACK === */}
                <section className="diagonal-lines-bg py-16 -mx-6 px-6 rounded-3xl">
                    <h2 className="text-4xl md:text-5xl font-black text-center mb-16 relative z-10">Technology Stack</h2>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 md:gap-8 max-w-5xl mx-auto relative z-10">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.03 }}
                                className="flex flex-col items-center gap-3 group"
                            >
                                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-xl bg-gray-900/80 border border-white/10 shadow-xl group-hover:border-blue-500/50 group-hover:bg-gray-800 group-hover:-translate-y-2 transition-all duration-300">
                                    <TechIcon name={skill} size={44} />
                                </div>
                                <span className="text-xs md:text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300 text-center">
                                    {skill}
                                </span>
                            </motion.div>
                        ))}
                        {/* Learning Continues Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: skills.length * 0.03 }}
                            className="flex flex-col items-center gap-3"
                        >
                            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-xl bg-gray-900/50 border border-dashed border-gray-600">
                                <span className="text-2xl text-gray-500">...</span>
                            </div>
                            <span className="text-xs md:text-sm font-medium text-gray-500 text-center">
                                Learning<br />Continues
                            </span>
                        </motion.div>
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