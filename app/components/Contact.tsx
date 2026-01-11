"use client";
import { FiSend } from "react-icons/fi";
import { socialLinks } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative flex flex-col items-center">
      <div className="max-w-3xl w-full bg-gray-900/50 backdrop-blur-md border border-gray-800 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
        {/* Glow Effect */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[80px] rounded-full -z-10"></div>

        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Get In Touch</h2>
          <p className="text-gray-400">
            Have a project in mind or just want to say hi? Send me a message!
          </p>
        </div>

        <form 
          action={`mailto:${socialLinks.email}`} 
          method="post" 
          encType="text/plain"
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1">Name</label>
              <input 
                type="text" 
                name="name" 
                id="name"
                placeholder="Your Name"
                className="w-full bg-black/40 border border-gray-800 rounded-xl px-4 py-3 text-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
                required 
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">Email Address</label>
              <input 
                type="email" 
                name="email" 
                id="email"
                placeholder="your@email.com"
                className="w-full bg-black/40 border border-gray-800 rounded-xl px-4 py-3 text-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
                required 
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium text-gray-300 ml-1">Subject</label>
            <input 
              type="text" 
              name="subject" 
              id="subject"
              placeholder="Project Inquiry"
              className="w-full bg-black/40 border border-gray-800 rounded-xl px-4 py-3 text-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
              required 
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">Message</label>
            <textarea 
              name="message" 
              id="message"
              rows={5}
              placeholder="Type your message here..."
              className="w-full bg-black/40 border border-gray-800 rounded-xl px-4 py-3 text-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition resize-none"
              required
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold py-4 rounded-xl hover:opacity-90 transition flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
          >
            <FiSend /> Send Message
          </button>
        </form>
      </div>
    </section>
  );
}