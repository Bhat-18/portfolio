// app/data.ts

// --- NEW HERO SECTION ---
// This fixes the missing avatar and defines your bio text
export const hero = {
    name: "Bhanuprakash Bhat",
    title: "Data Scientist & AI Engineer",
    text: "Postgrad Student in Data Science & AI at USyd. Experienced in building ML pipelines, integrating AI into curriculum systems, and solving real-world aerospace problems.",
    avatar: "/avatar.jpg", 
    resume: "/resume.pdf", // Ensure you have a resume.pdf in public, or remove this line
};

export const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
];

export const socialLinks = {
    github: "https://github.com/Bhat-18",
    linkedin: "https://www.linkedin.com/in/bhanuprakashbhat",
    email: "bhanuprakashbhat@gmail.com",
};

export const projects = [
    {
      id: 1,
      title: "RetailBoost Sales Forecasting",
      status: "Open Source",
      description: "An end-to-end ML pipeline for store sales forecasting. It uses Random Forest for high accuracy (0.96 R²) and SHAP for explainable AI, deployed via an interactive Streamlit dashboard.",
      date: "2024",
      stack: ["Python", "Scikit-Learn", "Streamlit", "Pandas", "Matplotlib"],
      image: "/projects/retail.png", // Ensure this file exists in public/projects
      link: "https://github.com/Bhat-18/RetailBoost-Intelligent-Store-Sales-Forecasting-with-Explainable-Machine-Learning-and-Streamlit",
    },
    {
      id: 2,
      title: "ASX Stock Prediction",
      status: "Open Source",
      description: "A real-time ML pipeline predicting ASX stock signals. Fetches live market data, applies technical indicators, and serves TensorFlow model predictions via a FastAPI backend.",
      date: "2024",
      stack: ["Python", "TensorFlow", "FastAPI", "Streamlit", "Scikit-Learn"], 
      image: "/projects/stock.png", // Renamed for simplicity
      link: "https://github.com/Bhat-18/ASX-Real-time-Stock-Signal-Prediction-System-FastAPI-TensorFlow-Streamlit-",
    },
    {
      id: 3,
      title: "AI Smart Inbox Router",
      status: "Open Source",
      description: "An autonomous AI agent that ingests emails via IMAP, analyzes intent using GPT-4o, and automatically routes alerts to Slack. Deployed as a serverless job on Google Cloud Platform.",
      date: "2024",
      stack: ["Python", "Docker", "GCP", "OpenAI", "Git"],
      image: "/projects/inbox.png", // Renamed for simplicity
      link: "https://github.com/Bhat-18/smart-inbox-router",
    },
];

export const experience = [
    {
      id: 1,
      role: "Assessment and AI Transition Assistant",
      company: "The University of Sydney",
      date: "May 2025 - Present",
      description: "Collaborating with Educational Designers to modernize curriculum systems. Using Akari cloud for data validation and identifying AI integration opportunities to improve learning outcomes.",
    },
    {
      id: 2,
      role: "Data Analyst Intern",
      company: "Moog Inc",
      date: "Jan 2024 - May 2024",
      description: "Designed dynamic Power BI dashboards to visualize critical sensor data (pressure, temperature). Processed large datasets using Pandas/NumPy and conducted EDA to detect anomalies in aerospace components.",
    },
    {
      id: 3,
      role: "Sales Assistant (Data Focus)",
      company: "David Jones Australia",
      date: "Oct 2024 - Aug 2025",
      description: "Contributed to retail performance reporting by gathering key sales metrics and helping the team optimize sales strategies based on customer behavior analytics.",
    },
];

export const education = [
    {
        id: 1,
        degree: "Master's in Data Science and AI",
        school: "The University of Sydney",
        date: "2024 - 2026",
    },
    {
        id: 2,
        degree: "B.Tech in Aerospace Engineering",
        school: "MS Ramaiah University",
        date: "2020 - 2024",
    }
];

export const skills = [
    "Python", "TensorFlow", "LangChain", "Databricks", "AWS", "GCP", 
    "Docker", "SQL", "PowerBI", "Git", "Excel", "Linux", "DuckDB", "JavaScript",
    "FastAPI", "Streamlit", "Pandas", "NumPy"
];

export const certifications = [
    {
        id: 1,
        title: "AWS Certified AI Practitioner",
        issuer: "Amazon Web Services",
        date: "Nov 2025",
        image: "/certs/aws-ai.png", 
        link: "https://www.credly.com/badges/e8685a11-634f-41ee-9bbd-f834475439d6/linked_in_profile" 
    },
    {
        id: 2,
        title: "LangChain Essentials - Python",
        issuer: "LangChain",
        date: "Dec 2025",
        image: "/certs/langchain.png", 
        link: "https://academy.langchain.com/certificates/hje8evmix6" 
    },
    {
        id: 3,
        title: "Advanced Learning Algorithms",
        issuer: "Stanford Online",
        date: "Sep 2025",
        image: "/certs/stanford.png", 
        link: "https://www.coursera.org/account/accomplishments/verify/BY66Y3USQLPN" 
    },
    {
        id: 4,
        title: "Databricks Fundamentals",
        issuer: "Databricks",
        date: "Sep 2025",
        image: "/certs/databricks.png", 
        link: "https://customer-academy.databricks.com/learn/courses/2308/databricks-fundamentals-accreditation?hash=cc54a3c07e5ad92e6f2718b2d995501f8d3125c1&generated_by=1228377" 
    },
    {
        id: 5,
        title: "Introduction to Docker",
        issuer: "Google Cloud Skills Boost",
        date: "Oct 2025",
        image: "/certs/docker.png", 
        link: "https://www.coursera.org/account/accomplishments/verify/7K1CJ2KWX2XP"
    },
    {
        id: 6,
        title: "Data Analysis with Python",
        issuer: "Besant Technologies",
        date: "Mar 2024",
        image: "/certs/python-besant.png", 
        link: "#"
    },
    {   id: 7,
        title: "Advanced RAG Applications with Vector Databases",
        issuer: "LinkedIn Learning",
        date: "Dec 2025",
        image: "/certs/RAG.png", 
        link: "https://www.linkedin.com/learning/certificates/79ef14ca40abf0ee5a0d396211dcb5805c5b1e729452e3437de5b0c1531376d6"
    },
];