// app/components/TechIcon.tsx

import { 
    SiPython, SiTensorflow, SiLangchain, SiDatabricks, SiAmazon,
    SiGooglecloud, SiDocker, SiPostgresql, SiGit, 
    SiLinux, SiDuckdb, SiJavascript, SiFastapi, 
    SiStreamlit, SiPandas, SiNumpy, SiScikitlearn 
} from "react-icons/si";

// We import stable alternatives for the broken Microsoft icons
import { FaFileExcel, FaChartBar } from "react-icons/fa";

export const TechIcon = ({ name, size = 24 }: { name: string; size?: number }) => {
  const iconMap: Record<string, any> = {
    "Python": SiPython,
    "TensorFlow": SiTensorflow,
    "LangChain": SiLangchain,
    "Databricks": SiDatabricks,
    "AWS": SiAmazon,
    "GCP": SiGooglecloud,
    "Docker": SiDocker,
    "SQL": SiPostgresql, 
    "PowerBI": FaChartBar,     // FIXED: Using FontAwesome
    "Git": SiGit,
    "Excel": FaFileExcel,      // FIXED: Using FontAwesome
    "Linux": SiLinux,
    "DuckDB": SiDuckdb,
    "JavaScript": SiJavascript,
    "FastAPI": SiFastapi,
    "Streamlit": SiStreamlit,
    "Pandas": SiPandas,
    "NumPy": SiNumpy,
    "Scikit-Learn": SiScikitlearn
  };

  const IconComponent = iconMap[name];

  if (!IconComponent) {
    return <span className="font-bold text-gray-500">{name.charAt(0)}</span>;
  }

  return <IconComponent size={size} className="text-gray-300 group-hover:text-white transition" />;
};