"use client";

import { useTheme } from "./ThemeProvider";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            onClick={toggleTheme}
            className="relative w-10 h-10 rounded-full flex items-center justify-center bg-[var(--bg-tertiary)] border border-[var(--border-color)] hover:border-[var(--border-hover)] transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
            <motion.div
                initial={false}
                animate={{ rotate: theme === "dark" ? 0 : 180 }}
                transition={{ duration: 0.3 }}
            >
                {theme === "dark" ? (
                    <FiSun className="text-yellow-400 text-lg" />
                ) : (
                    <FiMoon className="text-blue-600 text-lg" />
                )}
            </motion.div>
        </motion.button>
    );
}
