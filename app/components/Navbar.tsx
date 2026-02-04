"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { hero, navLinks, socialLinks } from "../data";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center">
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-[95%] max-w-6xl backdrop-blur-xl border rounded-full px-6 py-4 flex items-center justify-between shadow-2xl transition-colors duration-300"
        style={{
          backgroundColor: 'color-mix(in srgb, var(--bg-primary) 80%, transparent)',
          borderColor: 'var(--border-color)'
        }}
      >
        {/* 1. LEFT: LOGO */}
        <div className="flex items-center gap-4 z-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full overflow-hidden relative border-2 group-hover:border-[var(--accent-primary)] transition" style={{ borderColor: 'var(--border-color)' }}>
              <Image src={hero.avatar} alt="Profile" fill className="object-cover" />
            </div>
            <span className="font-bold text-lg tracking-tight group-hover:text-[var(--accent-primary)] transition hidden xl:block" style={{ color: 'var(--text-primary)' }}>
              {hero.name.split(" ")[0]}
            </span>
          </Link>
        </div>

        {/* 2. CENTER: LINKS (ABSOLUTE LOCKED) */}
        <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center gap-8 text-sm font-medium z-10" style={{ color: 'var(--text-muted)' }}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className="transition relative px-2 py-1 hover:opacity-100"
                style={{
                  color: isActive ? 'var(--text-primary)' : 'var(--text-muted)',
                  fontWeight: isActive ? 'bold' : 'normal'
                }}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[var(--accent-primary)] rounded-full shadow-[0_0_10px_var(--accent-glow)]"></span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* 3. RIGHT: ICONS + THEME TOGGLE */}
        <div className="flex items-center gap-4 z-20">
          <ThemeToggle />
          <div className="flex gap-4" style={{ color: 'var(--text-muted)' }}>
            <a href={socialLinks.github} target="_blank" className="hover:text-[var(--text-primary)] text-xl transition hover:scale-110"><FiGithub /></a>
            <a href={socialLinks.linkedin} target="_blank" className="hover:text-[var(--text-primary)] text-xl transition hover:scale-110"><FiLinkedin /></a>
            <Link href="/contact" className="hover:text-[var(--text-primary)] text-xl transition hover:scale-110"><FiMail /></Link>
          </div>
        </div>
      </motion.header>
    </div>
  );
}