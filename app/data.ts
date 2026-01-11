// app/data.ts
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export const hero = {
  name: "Bhanuprakash Bhat",
  title: "Data Scientist & AI Engineer",
  text: "I build production AI that drives ROI. Recently architected a Serverless GCP Agent saving ~$10.6k/year and I deploy scalable RAG & MLOps pipelines.",
  avatar: "/avatar.jpg",
};

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Certifications", href: "/certifications" },
  { name: "Contact", href: "/contact" },
];

export const socialLinks = {
  github: "https://github.com/Bhat-18",
  linkedin: "https://www.linkedin.com/in/bhanuprakashbhat",
  email: "mailto:bhanuprakashbhat@gmail.com",
};

export const projects = [
  {
    id: 1,
    title: "Serverless AI Triage Agent",
    description: "Architected a scalable AI agent on GCP using Docker and Python. Reduced support ticket response time by 40% and saved ~$10.6k annually in operational costs.",
    stack: ["Python", "GCP", "Docker", "LLMs"],
    link: "https://github.com/Bhat-18",
    image: "/projects/inbox.png",
    video: "", // <--- PUT YOUR VIDEO FILENAME HERE (e.g., "/videos/demo.mp4")
    status: "Production",
  },
  {
    id: 2,
    title: "Autonomous RAG Compliance Agent: Australian Innovation Auditor",
    description: "Engineered an autonomous agent to audit R&D Tax, EMDG, and ESIC claims, reducing preliminary legal assessment costs by ~95% (projected savings of $50,000+ annually in external consulting fees).",
    stack: ["LangChain", "OpenAI", "LangGraph", "Python"],
    link: "https://github.com/Bhat-18",
    image: "/projects/RAG.png",
    video: "", 
    status: "Prototype",
  },
  {
    id: 3,
    title: "Retail Analytics Dashboard",
    description: "Forecasting inventory demand using Prophet and visualizing data with Streamlit.",
    stack: ["Python", "Pandas", "Streamlit"],
    link: "https://github.com/Bhat-18",
    image: "/projects/retail.png",
    video: "",
    status: "Live",
  }
];

export const experience = [
  {
    id: 1,
    role: "Assessment & AI Transition Assistant",
    company: "The University of Sydney",
    location: "Sydney, Australia", // New Field
    date: "May 2025 - Present",
    // Changed from 'description' string to 'points' array
    points: [
      "Collaborate with Educational Designers and Unit Coordinators to maintain and optimize assessment data in the Sydney Curriculum system.",
      "Use Akari cloud systems to automate data validation, consistency checks, and updates across unit outlines.",
      "Evaluate course content to identify AI integration opportunities that improve learning and teaching outcomes.",
      "Conduct quality assurance and feature testing for curriculum systems, ensuring compliance with university standards.",
      "Stay current with AI in education, assessment design, and institutional technology practices."
    ],
  },
  {
    id: 2,
    role: "Sales Assistant",
    company: "David Jones Australia",
    location: "Sydney, Australia",
    date: "Oct 2024 - Aug 2025",
    points: [
      "Delivered exceptional customer service by understanding client needs and providing tailored product recommendations.",
      "Collaborated with cross-functional teams to streamline visual merchandising and store layout strategies.",
      "Contributed to retail performance reporting by gathering key sales metrics to optimize sales strategies aligned with customer behavior analytics."
    ],
  },
  {
    id: 3,
    role: "Data Analyst Intern",
    company: "Moog Inc",
    location: "Bengaluru, India",
    date: "Jan 2024 - May 2024",
    points: [
      "Designed and deployed dynamic Power BI dashboards to visualize critical sensor data (pressure, temperature, density).",
      "Processed and cleaned large datasets using Pandas and NumPy, ensuring high data integrity for analysis.",
      "Conducted exploratory data analysis (EDA) using Matplotlib and Seaborn to uncover hidden insights and detect anomalies in aerospace components."
    ],
  },
];

export const education = [
  {
    id: 1,
    degree: "Master of Data Science and AI",
    school: "University of Sydney",
    date: "2024 - 2026",
    logo: "/usyd.png",
  },
  {
    id: 2,
    degree: "B.Tech in Aerospace Engineering",
    school: "M. S. Ramaiah University",
    date: "2020 - 2024",
    logo: "/msruas.png",
  },
];

export const certifications = [
  {
    id: 1,
    title: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    date: "Nov 2025",
    link: "#",
    image: "/certs/aws-ai.png", 
  },
  {
    id: 2,
    title: "LangChain Essentials - Python",
    issuer: "LangChain",
    date: "Dec 2025",
    link: "#",
    image: "/certs/langchain.png", 
  },
  {
    id: 3,
    title: "Advanced Learning Algorithms",
    issuer: "Stanford Online",
    date: "Sep 2025",
    link: "#",
    image: "/certs/stanford.png", 
  },
];

export const skills = [
  "Python", "R", "Java", "SQL", "PostgreSQL",
  "Next.js", "FastAPI", "Docker", "GCP", "AWS",
  "TensorFlow", "PyTorch", "Scikit-learn", "Keras",
  "LangChain", "LangGraph", "Hugging Face", "OpenCV",
  "Power BI", "Tableau", "Excel", "Streamlit",
  "Git", "MATLAB" 
  // REMOVED: DuckDB, ChromaDB
];