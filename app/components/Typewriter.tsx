"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function Typewriter({ text }: { text: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));

  useEffect(() => {
    const controls = animate(count, text.length, {
      type: "tween",
      duration: 2, // Slightly faster for better UX
      ease: "easeOut",
      repeat: 0, // FIX: Run only once!
    });
    return controls.stop;
  }, [count, text.length]);

  return <motion.span>{displayText}</motion.span>;
}