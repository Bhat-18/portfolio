"use client";
import { Tilt } from 'react-tilt';

const defaultOptions = {
  reverse: false,
  max: 5,     // Reduced tilt so it's subtle, not dizzy
  perspective: 1000,
  scale: 1.01,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

export default function Card3D({ children, className, style }: { children: React.ReactNode, className?: string, style?: React.CSSProperties }) {
  return (
    <Tilt options={defaultOptions} className={`relative group`}>
      {/* Background Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-10 group-hover:opacity-50 transition duration-500"></div>

      {/* The Content Container - Added better border and background */}
      <div
        className={`relative h-full rounded-2xl border border-white/10 shadow-xl overflow-hidden ${className}`}
        style={{ backgroundColor: '#050505', ...style }}
      >
        {children}
      </div>
    </Tilt>
  );
}