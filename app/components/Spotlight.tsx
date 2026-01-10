"use client";
import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function Spotlight() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Use spring physics for smooth movement
  const springConfig = { damping: 25, stiffness: 700 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX - 200); // Center the 400px circle
      mouseY.set(e.clientY - 200);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none z-0 hidden md:block mix-blend-screen"
      style={{ x: mouseX, y: mouseY }}
    />
  );
}