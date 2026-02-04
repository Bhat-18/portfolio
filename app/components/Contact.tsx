"use client";
import { FiSend } from "react-icons/fi";
import { socialLinks } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative flex flex-col items-center">
      <div className="max-w-3xl w-full backdrop-blur-md border p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden transition-colors duration-300" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}>
        {/* Glow Effect */}
        <div className="absolute top-0 right-0 w-64 h-64 blur-[80px] rounded-full -z-10 transition-colors duration-300" style={{ backgroundColor: 'var(--accent-glow)' }}></div>

        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Let's Get In Touch</h2>
          <p className="" style={{ color: 'var(--text-secondary)' }}>
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
              <label htmlFor="name" className="text-sm font-medium ml-1" style={{ color: 'var(--text-secondary)' }}>Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                className="w-full border rounded-xl px-4 py-3 outline-none transition focus:ring-1"
                style={{
                  backgroundColor: 'var(--bg-tertiary)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-primary)',
                  caretColor: 'var(--accent-primary)'
                }}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium ml-1" style={{ color: 'var(--text-secondary)' }}>Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="your@email.com"
                className="w-full border rounded-xl px-4 py-3 outline-none transition focus:ring-1"
                style={{
                  backgroundColor: 'var(--bg-tertiary)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-primary)',
                  caretColor: 'var(--accent-primary)'
                }}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium ml-1" style={{ color: 'var(--text-secondary)' }}>Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Project Inquiry"
              className="w-full border rounded-xl px-4 py-3 outline-none transition focus:ring-1"
              style={{
                backgroundColor: 'var(--bg-tertiary)',
                borderColor: 'var(--border-color)',
                color: 'var(--text-primary)',
                caretColor: 'var(--accent-primary)'
              }}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium ml-1" style={{ color: 'var(--text-secondary)' }}>Message</label>
            <textarea
              name="message"
              id="message"
              rows={5}
              placeholder="Type your message here..."
              className="w-full border rounded-xl px-4 py-3 outline-none transition resize-none focus:ring-1"
              style={{
                backgroundColor: 'var(--bg-tertiary)',
                borderColor: 'var(--border-color)',
                color: 'var(--text-primary)',
                caretColor: 'var(--accent-primary)'
              }}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full text-white font-bold py-4 rounded-xl hover:opacity-90 transition flex items-center justify-center gap-2 shadow-lg"
            style={{
              background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))',
              boxShadow: '0 10px 15px -3px var(--accent-glow)'
            }}
          >
            <FiSend /> Send Message
          </button>
        </form>
      </div>
    </section>
  );
}