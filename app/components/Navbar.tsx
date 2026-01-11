"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { hero, navLinks, socialLinks } from "../data";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center">
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        // FIX 1: Changed max-w-4xl to max-w-6xl to give more breathing room
        className="relative w-[95%] max-w-6xl bg-black/80 backdrop-blur-xl border border-white/10 rounded-full px-6 py-4 flex items-center justify-between shadow-2xl shadow-blue-900/10"
      >
        {/* 1. LEFT: LOGO */}
        <div className="flex items-center gap-4 z-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gray-800 overflow-hidden relative border border-gray-600 group-hover:border-blue-500 transition">
               <Image src={hero.avatar} alt="Profile" fill className="object-cover" />
            </div>
            {/* FIX 2: Changed 'sm:block' to 'xl:block'. 
               This hides your name on laptops/tablets to prevent collision, 
               but shows it on big desktop screens where there is space. */}
            <span className="font-bold text-lg tracking-tight text-white group-hover:text-blue-400 transition hidden xl:block">
              {hero.name.split(" ")[0]}
            </span>
          </Link>
        </div>

        {/* 2. CENTER: LINKS (ABSOLUTE LOCKED) */}
        <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center gap-8 text-sm font-medium text-gray-400 z-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`transition hover:text-white relative px-2 py-1 ${isActive ? "text-white font-bold" : ""}`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* 3. RIGHT: ICONS */}
        <div className="flex items-center gap-5 z-20">
          <div className="flex gap-4 text-gray-400">
            <a href={socialLinks.github} target="_blank" className="hover:text-white text-xl transition hover:scale-110"><FiGithub /></a>
            <a href={socialLinks.linkedin} target="_blank" className="hover:text-white text-xl transition hover:scale-110"><FiLinkedin /></a>
            <Link href="/contact" className="hover:text-white text-xl transition hover:scale-110"><FiMail /></Link>
          </div>
        </div>
      </motion.header>
    </div>
  );
}