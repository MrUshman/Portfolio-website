import { Calendar, Clock, ArrowRight } from 'lucide-react';

// Color mapping for different blog tags (matching Projects.tsx)
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
  "Machine Learning": "bg-green-100 text-green-700",

  // Other topics
  "Feature Engineering": "bg-lime-100 text-lime-700",
  "REST API": "bg-violet-100 text-violet-700",
  "Dashboard": "bg-red-100 text-red-700",
  "Air Quality": "bg-sky-100 text-sky-700",
};

const getTagColor = (tag: string) => {
  return tagColors[tag] || 'bg-gray-100 text-gray-700';
};

type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  link?: string;
};

const blogPosts: BlogPost[] = [
  {
    title: 'Data Preprocessing in Housing Price Prediction',
    excerpt: 'Lessons learned from handling missing values, encoding categorical features, and feature scaling in the Ames Housing dataset.',
    date: '2026-01-15',
    readTime: '8 min read',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'Feature Engineering'],
    link: "#"
  },
  {
    title: 'Building REST APIs with FastAPI',
    excerpt: 'Step-by-step guide to creating a production-ready Todo API with authentication, database migrations, and deployment.',
    date: '2026-01-08',
    readTime: '10 min read',
    tags: ['FastAPI', 'PostgreSQL', 'REST API', 'Python'],
  },
  {
    title: 'Power BI Dashboard Design Best Practices',
    excerpt: 'Tips for creating interactive and insightful dashboards using real-world EV charging infrastructure data.',
    date: '2025-12-20',
    readTime: '6 min read',
    tags: ['Power BI', 'Data Visualization', 'Dashboard'],
  },
  {
    title: 'Analyzing Global Air Quality Trends',
    excerpt: 'Using Python and pandas to explore WHO air quality data and identify pollution patterns across regions.',
    date: '2025-12-10',
    readTime: '7 min read',
    tags: ['Python', 'Pandas', 'Data Analysis', 'Air Quality'],
  },
];

export function Blog() {
  const handleBlogClick = (post: BlogPost) => {
    if (post.link) {
      window.open(post.link, '_blank');
    } else {
      alert('Coming Soon! 📝\n\nThis blog post is currently being written. Check back later!');
    }
  };

  return (
    <main className="flex-1 overflow-auto">
      <div className="max-w-[1200px] mx-auto px-7 py-10">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl mb-3">Blog</h1>
          <p className="text-gray-600 text-base">
            Thoughts on machine learning, data science, and building intelligent systems.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              onClick={() => handleBlogClick(post)}
              className="border border-gray-200 rounded-xl p-5 hover:border-black transition-all duration-300 cursor-pointer group"
            >
              {/* Date Badge */}
              <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
              </div>

              <h2 className="text-xl mb-2.5 group-hover:text-[#FF6B6B] transition-colors">{post.title}</h2>
              <p className="text-gray-600 mb-3.5 text-sm">{post.excerpt}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-3.5">
                {post.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`px-2.5 py-1 text-xs rounded-full ${getTagColor(tag)}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Read More Link */}
              <div className="flex items-center gap-2 text-sm font-bold text-black group-hover:text-[#FF6B6B] transition-colors">
                <span>{post.link ? 'Read Article' : 'Coming Soon'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}