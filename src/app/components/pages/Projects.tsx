import { ExternalLink, Github, Database } from "lucide-react";

/* ---------------- Tag Colors ---------------- */
const tagColors: Record<string, string> = {
  // Programming Languages - Blue shades
  Python: "bg-blue-100 text-blue-700",
  Cpp: "bg-blue-100 text-blue-700",
  SQL: "bg-blue-100 text-blue-700",
  Java: "bg-blue-100 text-blue-700",

  // Data Science/Analysis - Amber/Orange shades
  NumPy: "bg-amber-100 text-amber-700",
  Pandas: "bg-orange-100 text-orange-700",
  Matplotlib: "bg-amber-100 text-amber-700",
  "Scikit-learn": "bg-orange-100 text-orange-700",
  "Data Analysis": "bg-amber-100 text-amber-700",
  "Data Visualization": "bg-orange-100 text-orange-700",

  // BI/Spreadsheet Tools - Red/Rose shades
  Excel: "bg-rose-100 text-rose-700",
  "Power BI": "bg-red-100 text-red-700",
  "Pivot Tables": "bg-rose-100 text-rose-700",

  // Backend/API - Violet/Purple shades
  FastAPI: "bg-violet-100 text-violet-700",
  Django: "bg-purple-100 text-purple-700",
  SQLAlchemy: "bg-violet-100 text-violet-700",
  Alembic: "bg-purple-100 text-purple-700",
  Pydantic: "bg-violet-100 text-violet-700",

  // Databases - Sky/Cyan shades
  PostgreSQL: "bg-sky-100 text-sky-700",
  SQLite: "bg-cyan-100 text-cyan-700",

  // DevOps/Tools - Teal/Emerald shades
  Docker: "bg-teal-100 text-teal-700",
  Git: "bg-emerald-100 text-emerald-700",
  GitHub: "bg-teal-100 text-teal-700",

  // Web/Frontend - Indigo/Slate shades
  "HTML/CSS": "bg-indigo-100 text-indigo-700",
  "Web Design": "bg-slate-100 text-slate-700",
  Figma: "bg-fuchsia-100 text-fuchsia-700",
  Netlify: "bg-indigo-100 text-indigo-700",

  // AI/ML - Green shades
  "Google Gemini": "bg-green-100 text-green-700",
};

const getTagColor = (tag: string) =>
  tagColors[tag] || "bg-gray-100 text-gray-700";

/*Types  */
type Project = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  dataset?: string;
};

/* Data  */
const projects: Project[] = [
  {
    title: 'Money Tracking Website',
    description: 'You can manage your daily expenses and incomes through this website and also track daily records and monthly records',
    tags: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib'],
    demo: "https://grasus223-bot.github.io/Money-Track-Web/",
    github: "https://github.com/grasus223-bot/Money-Track-Web"

  },
  {
    title: 'EV Charging Infrastructure Analysis',
    description: 'Interactive Power BI dashboard analyzing electric vehicle charging station distribution, usage patterns, and infrastructure gaps across regions.',
    tags: ['Power BI', 'Data Analysis', 'Data Visualization'],
    github: 'https://github.com/Prashant-Baral/Electric-Vehicle-Charging-Stations-Analysis',
    demo: 'https://app.powerbi.com/view?r=eyJrIjoiZTljNjcwYjctMGExYi00ODdhLWFiM2YtODhmMWE0OTVmNzljIiwidCI6ImUxNGU3M2ViLTUyNTEtNDM4OC04ZDY3LThmOWYyZTJkNWE0NiIsImMiOjEwfQ%3D%3D',
    dataset: "https://afdc.energy.gov/data"
  },
  {
    title: 'Todo API with FastAPI',
    description: 'Full-featured RESTful API with JWT authentication, PostgreSQL database, user management, and admin controls. Deployed on Render with automated testing and migrations.',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Alembic', 'Pydantic'],
    github: 'https://github.com/Prashant-Baral/TodoApp_FastAPI',
    demo: 'https://todoapp-fastapi-2zwu.onrender.com/',
  },
  {
    title: 'Electric Vehicle Market Analysis',
    description: 'Comprehensive Excel dashboard examining EV adoption trends, market share, vehicle specifications, and growth patterns in the automotive industry.',
    tags: ['Excel', 'Data Analysis', 'Pivot Tables', 'Data Visualization'],
    github: 'https://github.com/Prashant-Baral/Electric-Vehicle-insights-Dashboard',
    dataset: "https://catalog.data.gov/dataset/electric-vehicle-population-data"
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio showcashing projects, blogs, and experience.",
    tags: ["Figma", "Web Design", "Netlify"],
    github: "https://github.com/Prashant-Baral/portfolio-website",
    demo: "https://baralprashant.com.np/",
  },
  {
    title: 'Global Air Quality Analysis',
    description: 'Data analysis pipeline examining worldwide air pollution patterns using WHO data. Includes statistical modeling, temporal trend analysis, correlation studies, and regional comparisons of PM2.5, PM10, and NO2 levels.',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Scikit-learn', 'Data Analysis'],
    github: 'https://github.com/Prashant-Baral/WHO-Air-Quality-Data-Analysis-Project',
  },
  {
    title: 'Grevinox - AI Complaint Portal',
    description: 'AI-powered complaint redressal system using Google Gemini to transform informal complaints into professional, well-structured statements.It was my fiirst in web dev, so it is not structured well.',
    tags: ['Python', 'Django', 'Google Gemini', 'SQLite', 'HTML/CSS'],
    github: 'https://github.com/Akshatageek/Grevonix',

  }

];


export function Projects() {
  return (
    <main className="flex-1 overflow-auto">
      <div className="max-w-[1200px] mx-auto px-7 py-10">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl mb-3">Projects</h1>
          <p className="text-gray-600 text-base">
            A selection of data Frontend And Backend projects built end-to-end.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-5 hover:border-black transition-all duration-300"
            >
              <h2 className="text-xl mb-2.5">{project.title}</h2>
              <p className="text-gray-600 mb-3.5 text-sm">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`px-2.5 py-1 text-xs rounded-full ${getTagColor(
                      tag
                    )}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-2.5">
                {/* GitHub */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-all text-sm"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                )}

                {/* Demo */}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-2 bg-[#FF6B6B] text-white rounded-lg hover:bg-black transition-all text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live
                  </a>
                )}

                {/* Dataset */}
                {project.dataset && (
                  <a
                    href={project.dataset}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-2 bg-teal-600 text-white rounded-lg hover:bg-emerald-500 transition-all text-sm"
                  >
                    <Database className="w-4 h-4" />
                    Dataset
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
