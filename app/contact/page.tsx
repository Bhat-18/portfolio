"use client";
import Contact from "../components/Contact"; // Reusing the component we made earlier

export default function ContactPage() {
  return (
    <div className="pt-10 flex flex-col items-center justify-center min-h-[60vh] pb-20" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 pointer-events-none z-0"
        style={{ backgroundImage: "radial-gradient(var(--dot-color) 1px, transparent 1px)", backgroundSize: "40px 40px", opacity: 0.2 }}>
      </div>

      <div className="relative z-10 w-full px-6">
        <Contact />
      </div>
    </div>
  );
}