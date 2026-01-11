"use client";
import Contact from "../components/Contact"; // Reusing the component we made earlier

export default function ContactPage() {
  return (
    <div className="pt-10 flex flex-col items-center justify-center min-h-[60vh]">
      <Contact />
    </div>
  );
}