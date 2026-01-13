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
    description: "Architected a scalable AI agent on GCP using Docker and Python. Integrated OpenAI (GPT-4o) to automate 100% of manual email triage, reducing response times by 40% and saving ~$10.6k annually in operational costs.",
    stack: ["Python", "GCP", "Docker", "OpenAI"],
    status: "Production",
    image: "/projects/inbox.png", // Ensure you have an image or remove this line to show preview text
    link: "https://github.com/Bhat-18/smart-inbox-router",
  },
  {
    id: 2,
    title: "Australian Innovation Auditor",
    description: "Engineered an autonomous RAG agent to audit R&D Tax and EMDG claims. Utilized LangGraph and ChromaDB for hybrid search, reducing preliminary legal assessment costs by ~95% (projected $50k+ savings).",
    stack: ["LangChain", "LangGraph", "ChromaDB", "Python"],
    status: "Production",
    image: "/projects/RAG.png",
    link: "https://github.com/Bhat-18/auto-auditor-rag-agent",
  },
  {
    id: 3,
    title: "ASX Real-time Stock Signal System",
    description: "Designed an end-to-end ML pipeline for financial signal prediction using a TensorFlow CNN1D model. Deployed via FastAPI with a Streamlit dashboard for real-time visualization of market data.",
    stack: ["FastAPI", "TensorFlow", "Streamlit", "Python", "Docker"],
    status: "Production",
    image: "/projects/stock.png",
    // No image? It will show "Preview Loading" or you can add one later
    link: "https://github.com/Bhat-18/ASX-Real-time-Stock-Signal-Prediction-System-FastAPI-TensorFlow-Streamlit-",
  },
  {
    id: 4,
    title: "RetailBoost: Sales Forecasting",
    description: "Developed a full-stack ML solution to forecast daily retail store sales. Implemented Random Forests with SHAP for model explainability and visualized insights on an interactive Streamlit dashboard.",
    stack: ["Python", "Scikit-learn", "Streamlit", "Pandas"],
    status: "Completed",
    image: "/projects/retail.png",
    link: "https://github.com/Bhat-18/RetailBoost-Intelligent-Store-Sales-Forecasting-with-Explainable-Machine-Learning-and-Streamlit",
  },
  {
    id: 5,
    title: "Electricity Sector Data Pipeline",
    description: "Built a spatial data engineering pipeline using DuckDB to integrate national electricity and emissions datasets. Performed geocoding and schema normalization for high-performance spatial analysis.",
    stack: ["DuckDB", "Python", "SQL", "Matplotlib"],
    status: "Completed",
    link: "https://github.com/Bhat-18",
  },
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
    date: "2025",
    image: "/certs/aws-ai.png",
    link: "https://www.credly.com/badges/e8685a11-634f-41ee-9bbd-f834475439d6/linked_in_profile", // <--- UPDATE THIS
  },
  {
    id: 2,
    title: "Advanced RAG Applications with Vector Databases",
    issuer: "LinkedIn Learning",
    date: "2025",
    image: "/certs/RAG.png",
    link: "https://www.linkedin.com/learning/certificates/79ef14ca40abf0ee5a0d396211dcb5805c5b1e729452e3437de5b0c1531376d6", // <--- UPDATE THIS
  },
  {
    id: 3,
    title: "Databricks Certified Data Engineer",
    issuer: "Databricks",
    date: "2025",
    image: "/certs/databricks.png",
    link: "https://customer-academy.databricks.com/learn/courses/2308/databricks-fundamentals-accreditation?hash=cc54a3c07e5ad92e6f2718b2d995501f8d3125c1&generated_by=1228377", // <--- UPDATE THIS
  },
  {
    id: 4,
    title: "Advanced Learning Algorithms",
    issuer: "Stanford Online",
    date: "2025",
    image: "/certs/stanford.png",
    link: "https://www.coursera.org/account/accomplishments/verify/BY66Y3USQLPN", // <--- UPDATE THIS
  },
  {
    id: 5,
    title: "LangChain Essentials: Python ",
    issuer: "LangChain",
    date: "2025",
    image: "/certs/langchain.png",
    link: "https://academy.langchain.com/certificates/hje8evmix6", // <--- UPDATE THIS
  },
  {
    id: 6,
    title: "Introduction to Docker",
    issuer: "Docker Inc.",
    date: "2025",
    image: "/certs/docker.png",
    link: "https://www.coursera.org/account/accomplishments/verify/7K1CJ2KWX2XP", // <--- UPDATE THIS
  },
  {
    id: 7,
    title: "Python Data Science Master Program",
    issuer: "Besant Technologies",
    date: "2024",
    image: "/certs/python-besant.png",
    link: "https://www.besanttechnologies.com/", // <--- UPDATE THIS
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