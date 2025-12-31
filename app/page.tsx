import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail, FiExternalLink, FiBriefcase } from "react-icons/fi";
import { hero, navLinks, socialLinks, projects, experience, education, skills, certifications } from "./data";
import { TechIcon } from "./components/TechIcon";

export default function Home() {
  return (
    <main className="min-h-screen font-sans selection:bg-blue-500/30 pb-20 overflow-x-hidden">
      
      {/* NAVBAR */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl bg-black/60 backdrop-blur-md border border-gray-800 rounded-full px-6 py-3 flex items-center justify-between shadow-lg shadow-black/20">
        <div className="flex items-center gap-4">
          {/* Small nav avatar hidden on mobile since big one is below */}
          <div className="hidden md:block w-10 h-10 rounded-full bg-gray-700 overflow-hidden relative border border-gray-600">
             <Image 
               src={hero.avatar} 
               alt="Profile" 
               fill 
               className="object-cover" 
             />
          </div>
          <span className="font-bold text-lg tracking-tight">{hero.name}</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-white transition">
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex gap-3 text-gray-400">
            <a href={socialLinks.github} target="_blank" className="hover:text-white text-xl transition"><FiGithub /></a>
            <a href={socialLinks.linkedin} target="_blank" className="hover:text-white text-xl transition"><FiLinkedin /></a>
            <a href={socialLinks.email} className="hover:text-white text-xl transition"><FiMail /></a>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-32">
        
        {/* === HERO SECTION (Adjusted Size) === */}
        <section className="min-h-[85vh] flex items-center pt-28 md:pt-0 relative">
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full -z-10 hidden md:block"></div>

            <div className="grid md:grid-cols-2 gap-12 items-center w-full">
              {/* Left Column: Text */}
              <div className="flex flex-col justify-center order-2 md:order-1">
                  <span className="text-blue-400 font-medium mb-4 block tracking-wider">Hello, I'm</span>
                  <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-br from-white via-gray-200 to-gray-500 bg-clip-text text-transparent mb-6 leading-tight">
                    {hero.title}
                  </h1>
                  <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed mb-8">
                    {hero.text}
                  </p>
                  <div className="flex flex-wrap gap-4">
                      <a href="#projects" className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition shadow-lg shadow-white/10">View Work</a>
                      
                      {/* === UPDATED BUTTON: DOWNLOAD RESUME === */}
                      <a 
                        href="/resume.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="border border-gray-700 text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition"
                      >
                        Download CV
                      </a>
                  </div>
              </div>

              {/* Right Column: PHOTO (Resized to Standard Portrait) */}
              <div className="order-1 md:order-2 flex justify-center md:justify-end relative">
                  <div className="relative w-full max-w-[300px] md:max-w-[360px] h-[400px] md:h-[480px] rounded-3xl overflow-hidden border border-gray-800 shadow-2xl shadow-blue-900/20 rotate-3 hover:rotate-0 transition-all duration-500 group z-10 bg-gray-900">
                     <Image
                         src={hero.avatar}
                         alt={hero.name}
                         fill
                         priority={true}
                         className="object-cover grayscale-[30%] group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-500"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent mix-blend-overlay"></div>
                  </div>
                  {/* Decorative border matched to new size */}
                  <div className="absolute inset-0 w-full max-w-[300px] md:max-w-[360px] h-[400px] md:h-[480px] rounded-3xl border-2 border-blue-500/30 -rotate-3 -z-10 scale-105 md:left-auto md:right-0"></div>
              </div>
            </div>
        </section>


        {/* PROJECTS */}
        <section id="projects">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <span className="text-blue-400">/</span> Featured Projects
          </h2>
          <div className="flex flex-col gap-12">
            {projects.map((project) => (
              <div key={project.id} className="group bg-gray-900/30 border border-gray-800/80 p-8 rounded-3xl grid md:grid-cols-5 gap-8 hover:border-blue-500/50 hover:bg-gray-900/60 transition-all duration-300 relative overflow-hidden shadow-lg">
                <div className="md:col-span-3 flex flex-col justify-between z-10 relative order-2 md:order-1">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-3xl font-bold group-hover:text-blue-400 transition">{project.title}</h3>
                        <span className="text-xs bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full border border-blue-500/20 w-fit">{project.status}</span>
                      </div>
                      <a href={project.link} target="_blank" className="text-gray-400 hover:text-white text-2xl bg-gray-800 p-2 rounded-full transition"><FiExternalLink /></a>
                    </div>
                    <p className="text-gray-300 mb-8 leading-relaxed text-base">{project.description}</p>
                  </div>
                  <div>
                   <h4 className="text-sm text-gray-500 font-bold mb-3 uppercase tracking-wider">Technologies</h4>
                   <div className="flex flex-wrap gap-3">
                      {project.stack.map((tech) => (
                        <div key={tech} className="bg-black/50 px-4 py-2 rounded-full border border-gray-700 hover:border-blue-400 transition flex items-center gap-2">
                           <TechIcon name={tech} size={16} />
                           <span className="text-sm font-medium text-gray-300">{tech}</span>
                        </div>
                      ))}
                   </div>
                  </div>
                </div>
                <div className="md:col-span-2 h-64 md:h-auto relative rounded-2xl overflow-hidden border border-gray-800 group-hover:border-blue-500/30 transition z-10 bg-gray-950 order-1 md:order-2">
                  {project.image ? (
                      <Image src={project.image} alt={project.title} fill className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition duration-500" />
                  ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-500 text-xs">No Image Found</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience">
            <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
                <span className="text-blue-400">/</span> Work Experience
            </h2>
            <div className="relative border-l-2 border-gray-800 ml-3 space-y-16">
                {experience.map((job) => (
                    <div key={job.id} className="ml-12 relative group">
                        <span className="absolute -left-[59px] top-2 bg-black w-7 h-7 rounded-full border-[3px] border-blue-500 group-hover:scale-125 transition"></span>
                        <div className="bg-gray-900/30 p-8 rounded-3xl border border-gray-800 hover:border-blue-500/50 transition shadow-lg">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition">{job.role}</h3>
                                <span className="text-sm font-bold text-blue-300 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20 whitespace-nowrap">{job.date}</span>
                            </div>
                            <p className="text-lg text-gray-300 font-medium mb-6 flex items-center gap-2"><FiBriefcase className="text-blue-400" /> {job.company}</p>
                            <p className="text-gray-400 text-base leading-relaxed">{job.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* SKILLS */}
        <section id="skills">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
             <span className="text-purple-400">/</span> Technologies & Skills
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
              {skills.map((skill) => (
                  <div key={skill} className="flex flex-col items-center gap-4 p-6 rounded-3xl border border-gray-800 bg-gray-900/20 hover:bg-gray-800/80 hover:border-purple-500/50 transition-all group hover:-translate-y-1 shadow-md">
                      <TechIcon name={skill} size={40} />
                      <span className="text-sm font-bold text-gray-400 group-hover:text-white">{skill}</span>
                  </div>
              ))}
          </div>
        </section>

        {/* EDUCATION & CERTS */}
        <section id="education" className="grid md:grid-cols-2 gap-16 pb-20">
            <div>
                <h2 className="text-4xl font-bold mb-10 flex items-center gap-3">
                    <span className="text-green-400">/</span> Education
                </h2>
                <div className="space-y-6">
                    {education.map((edu) => (
                        <div key={edu.id} className="p-8 rounded-3xl border border-gray-800 bg-gray-900/20 hover:border-green-500/50 transition shadow-md group">
                            <h3 className="text-xl font-bold mb-2 group-hover:text-green-400 transition">{edu.degree}</h3>
                            <p className="text-gray-300 text-lg mb-4">{edu.school}</p>
                            <span className="text-sm font-bold text-green-300 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">{edu.date}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div id="certificates">
                <h2 className="text-4xl font-bold mb-10 flex items-center gap-3">
                    <span className="text-green-400">/</span> Certifications
                </h2>
                <div className="space-y-4">
                    {certifications.map((cert) => (
                        <a href={cert.link} target="_blank" key={cert.id} className="flex items-center gap-6 p-4 rounded-3xl border border-gray-800 bg-gray-900/20 hover:border-green-500/50 hover:bg-gray-900/50 transition group shadow-md relative top-0 hover:-top-1">
                            <div className="relative w-16 h-16 shrink-0 rounded-2xl overflow-hidden bg-gray-800 border border-gray-700 p-1">
                                {cert.image ? (
                                    <Image src={cert.image} alt={cert.title} fill className="object-contain rounded-xl" />
                                ) : (
                                    <div className="w-full h-full bg-gray-700"></div>
                                )}
                            </div>
                            <div>
                                <h3 className="text-base font-bold group-hover:text-green-400 transition line-clamp-1 pr-8">{cert.title}</h3>
                                <p className="text-sm text-gray-400">{cert.issuer}</p>
                                <span className="text-xs text-gray-500 mt-1 block">{cert.date}</span>
                            </div>
                            <FiExternalLink className="absolute top-6 right-6 text-gray-600 group-hover:text-green-400 transition" />
                        </a>
                    ))}
                </div>
            </div>
        </section>

      </div>
    </main>
  );
}