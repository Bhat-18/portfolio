// app/data.ts


export const hero = {
  name: "Bhanuprakash Bhat",
  title: "Cloud Data Engineer",
  text: "3x Cloud-Certified Data Engineer with hands-on experience designing production-grade data pipelines and ML systems across GCP, Azure, and AWS. From serverless cloud pipelines to autonomous AI agents — delivering measurable business impact.",
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
    video: null, // <--- ADDED THIS
    link: "https://github.com/Bhat-18/smart-inbox-router",
  },
  {
    id: 2,
    title: "Australian Innovation Auditor",
    description: "Engineered an autonomous RAG agent to audit R&D Tax and EMDG claims. Utilized LangGraph and ChromaDB for hybrid search, reducing preliminary legal assessment costs by ~95% (projected $50k+ savings).",
    stack: ["LangChain", "LangGraph", "ChromaDB", "Python"],
    status: "Production",
    image: "/projects/RAG.png",
    video: null, // <--- ADDED THIS
    link: "https://github.com/Bhat-18/auto-auditor-rag-agent",
  },
  {
    id: 3,
    title: "ASX Real-time Stock Signal System",
    description: "Designed an end-to-end ML pipeline for financial signal prediction using a TensorFlow CNN1D model. Deployed via FastAPI with a Streamlit dashboard for real-time visualization of market data.",
    stack: ["FastAPI", "TensorFlow", "Streamlit", "Python", "Docker"],
    status: "Production",
    image: "/projects/stock.png",
    video: null, // <--- ADDED THIS
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
    video: null, // <--- ADDED THIS
    link: "https://github.com/Bhat-18/RetailBoost-Intelligent-Store-Sales-Forecasting-with-Explainable-Machine-Learning-and-Streamlit",
  },
  {
    id: 5,
    title: "Electricity Sector Data Pipeline",
    description: "Built a spatial data engineering pipeline using DuckDB to integrate national electricity and emissions datasets. Performed geocoding and schema normalization for high-performance spatial analysis.",
    stack: ["DuckDB", "Python", "SQL", "Matplotlib"],
    status: "Completed",
    image: null,
    video: null, // <--- ADDED THIS
    link: "https://github.com/Bhat-18",
  },
];

export const experience = [
  {
    id: 1,
    role: "Cloud Data Engineer",
    company: "Demografy",
    location: "Sydney, Australia",
    date: "Jan 2026 - Present",
    points: [
      "Designed and implemented scalable data pipelines integrating Google Places API with authentication, smart caching, and cost monitoring, reducing API overhead and optimizing cloud resource usage.",
      "Built cloud-native database architecture on Supabase and PostgreSQL, designing schemas for raw JSON ingestion and suburb-level real estate metrics with indexing strategies for high-performance geospatial lookups.",
      "Developed modular dbt Core transformation models (staging, intermediate, and mart layers) to convert raw API data into analytics-ready datasets, enabling real-time metric computation and BI reporting.",
      "Deployed and maintained cloud-hosted data applications using Streamlit, implementing CI/CD-ready workflows and backend integration with sub-15-second processing time."
    ],
  },
  {
    id: 2,
    role: "Assessment & AI Transition Assistant",
    company: "The University of Sydney",
    location: "Sydney, Australia",
    date: "May 2025",
    points: [
      "Supported enterprise-wide transition to AI-enabled assessment systems, collaborating with Educational Designers and Unit Coordinators across curriculum platforms and policy-aligned workflows.",
      "Validated, standardised, and governed assessment metadata within the Sydney Curriculum Management System, ensuring data integrity, schema consistency, and policy compliance.",
      "Conducted assessment data quality audits, identifying structural inconsistencies, rule violations, and dependency issues across hundreds of unit outlines.",
      "Contributed to responsible AI adoption and change management, supporting evaluation of emerging EdTech platforms and workflow automation capabilities."
    ],
  },
  {
    id: 3,
    role: "Data Engineer",
    company: "Clinic to Cloud",
    location: "Sydney, Australia",
    date: "Oct 2024 - Mar 2025",
    points: [
      "Migrated patient records from on-premise clinical systems to Azure by designing end-to-end data pipelines using Azure Data Factory (ADF), landing raw CSV exports in Blob Storage and structuring a medallion architecture (bronze/silver/gold) in ADLS Gen2, reducing manual data handling by 80%.",
      "Built and optimised ETL workflows in Azure Synapse Analytics using dedicated SQL pools and PySpark-based Spark pools for data cleansing, deduplication, and transformation of patient demographics, visit histories, and clinical interaction data.",
      "Consolidated transformed datasets into a Microsoft Fabric Lakehouse using notebooks and Dataflows Gen2, creating a unified analytics layer that replaced fragmented spreadsheet-based reporting.",
      "Developed interactive Power BI dashboards connected to the Fabric Lakehouse for clinicians and operational staff, enabling real-time trend analysis of patient visits and clinic performance metrics."
    ],
  },
  {
    id: 4,
    role: "Data Analyst Intern",
    company: "Moog Inc",
    location: "Bengaluru, India",
    date: "Jan 2024 - May 2024",
    points: [
      "Designed and deployed dynamic Power BI dashboards to visualize critical sensor data (pressure, temperature, and density), enabling engineers and managers to track real-time trends and optimize system performance.",
      "Processed and cleaned large datasets using Pandas and NumPy, ensuring high data integrity before feeding into visualization pipelines and statistical analysis.",
      "Conducted exploratory data analysis (EDA) using Matplotlib and Seaborn to uncover hidden insights in system behavior, supporting early detection of anomalies in aerospace components."
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