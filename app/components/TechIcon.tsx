"use client";
import Image from "next/image";

export function TechIcon({ name, size = 40 }: { name: string; size?: number }) {
  // Map skill names to official colored SVG URLs
  const iconMap: Record<string, string> = {
    // Languages
    "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "R": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
    "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    "MATLAB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg",
    
    // Web
    "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    "FastAPI": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    
    // Cloud & DevOps
    "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    "Kubernetes": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    "AWS": "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    "GCP": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    "CI/CD": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg",

    // AI / ML / Data
    "TensorFlow": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    "PyTorch": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    "Scikit-learn": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
    "Keras": "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg",
    "OpenCV": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
    "Pandas": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    "NumPy": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
    
    // Tools
    "Power BI": "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
    "Tableau": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png",
    "Excel": "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg",
    "Streamlit": "https://streamlit.io/images/brand/streamlit-mark-color.svg",
    
    // Special AI Logos
    // FIX: Both point to the official GitHub Avatar now
    "LangChain": "https://avatars.githubusercontent.com/u/126733545?s=200&v=4",
    "LangGraph": "https://avatars.githubusercontent.com/u/126733545?s=200&v=4",
    "Hugging Face": "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
  };

  const url = iconMap[name];

  if (!url) {
    // If no icon matches (and to prevent crashing), show a simple placeholder
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-800 rounded-lg text-xs font-bold text-gray-400">
        {name.slice(0, 2)}
      </div>
    );
  }

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <Image 
        src={url} 
        alt={name} 
        fill 
        className="object-contain" 
        unoptimized 
      />
    </div>
  );
}