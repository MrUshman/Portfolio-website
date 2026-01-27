import {
  Briefcase,
  GraduationCap,
  Award,
  Code,
  MapPin,
  Calendar,
  Zap,
  Target,
  X,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";

// Color mapping for different tech tags
const tagColors: Record<string, string> = {
  Python: "bg-blue-100 text-blue-700",
  Cpp: "bg-blue-100 text-blue-700",
  SQL: "bg-blue-100 text-blue-700",
  Java: "bg-blue-100 text-blue-700",

  NumPy: "bg-amber-100 text-amber-700",
  Excel: "bg-rose-100 text-rose-700",
  "Scikit-learn": "bg-orange-100 text-orange-700",
  Matplotlib: "bg-amber-100 text-amber-700",
  Pandas: "bg-orange-100 text-orange-700",
  "Power BI": "bg-red-100 text-red-700",
  "Apache Hadoop": "bg-orange-100 text-orange-700",

  FastAPI: "bg-violet-100 text-violet-700",
  PostgreSQL: "bg-sky-100 text-sky-700",
  SQLAlchemy: "bg-violet-100 text-violet-700",
  Alembic: "bg-purple-100 text-purple-700",
  Pydantic: "bg-violet-100 text-violet-700",

  GitHub: "bg-teal-100 text-teal-700",
  Docker: "bg-teal-100 text-teal-700",
  Git: "bg-emerald-100 text-emerald-700",
};

const getTagColor = (tag: string) => {
  return tagColors[tag] || "bg-gray-100 text-gray-700";
};

// Certificate data structure
type Certificate = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  color: string;
  verifyLink?: string;
};


const certificates: Certificate[] = [
  {
    id: 1,
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "Oct 2025",
    image: "assets/certificates/nptel_cloud.jpg",
    color: "from-blue-50 to-white border-blue-200",
  },
  {
    id: 2,
    title: "FastAPI - The Complete Course 2026 (Beginner + Advanced)",
    issuer: "Udemy",
    date: "Nov 2025",
    image: "assets/certificates/fastapi.jpg",
    color: "from-violet-50 to-white border-violet-200",
    verifyLink: "https://www.udemy.com/certificate/UC-47a8e984-053d-4af1-b646-31407294171d/",
  },
  {
    id: 3,
    title: "Full Stack with AI Agents",
    issuer: "Angaar+3 2025 (W3grads)",
    date: "Jul 2025",
    image: "assets/certificates/summer_training.jpg",
    color: "from-green-50 to-white border-green-200",
  },
  {
    id: 4,
    title: "Packet Switching Networks and Algorithms",
    issuer: "University of Colorado System (Coursera)",
    date: "Oct 2024",
    image: "assets/certificates/Coursera AY3AT4TWPREX.jpg",
    color: "from-blue-50 to-white border-blue-200",
    verifyLink: "https://coursera.org/verify/AY3AT4TWPREX",
  },
  {
    id: 5,
    title: "Peer-to-Peer Protocols and Local Area Networks",
    issuer: "University of Colorado System (Coursera)",
    date: "Oct 2024",
    image: "assets/certificates/Coursera JQ7RROWZ29KF.jpg",
    color: "from-blue-50 to-white border-blue-200",
    verifyLink: "https://coursera.org/verify/JQ7RROWZ29KF",
  },
  {
    id: 6,
    title: "Digital Systems: From Logic Gates to Processors",
    issuer: "Universitat Autònoma de Barcelona (Coursera)",
    date: "Oct 2024",
    image: "assets/certificates/Coursera EQO54M75QKY0.jpg",
    color: "from-blue-50 to-white border-blue-200",
    verifyLink: "https://coursera.org/verify/EQO54M75QKY0",
  },
  {
    id: 7,
    title: "Introduction to Hardware and Operating Systems",
    issuer: "IBM (Coursera)",
    date: "Sep 2024",
    image: "assets/certificates/Coursera CP3VGU4VH70Z-1.png",
    color: "from-blue-50 to-white border-blue-200",
    verifyLink: "https://coursera.org/verify/CP3VGU4VH70Z",
  },
  {
    id: 8,
    title: "Fundamentals of Network Communication",
    issuer: "University of Colorado System (Coursera)",
    date: "Sep 2024",
    image: "assets/certificates/Coursera 42RYEK72R5JH-1.png",
    color: "from-blue-50 to-white border-blue-200",
    verifyLink: "https://coursera.org/verify/42RYEK72R5JH",
  },
  {
    id: 9,
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Google (Coursera)",
    date: "Sep 2024",
    image: "assets/certificates/Coursera DS87NRHCWK1V-1.png",
    color: "from-blue-50 to-white border-blue-200",
    verifyLink: "https://coursera.org/verify/DS87NRHCWK1V",
  },
  {
    id: 10,
    title: "Unrevealing Basic Python towards ML/AI",
    issuer: "CSE Pathshala",
    date: "Mar 2024",
    image: "assets/certificates/CP-20240203-PY439.png",
    color: "from-amber-50 to-white border-amber-200",
  },
];

export function About() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  return (
    <main className="flex-1 overflow-auto">
      <div className="max-w-[1100px] mx-auto px-6 py-8 scale-92 origin-top">
        {/* Header */}
        <div className="mb-4">
          <h1 className="text-4xl mb-3 inline-block relative">
            About Me
          </h1>
        </div>

        {/* Quick Facts Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-8">
          <div className="bg-gradient-to-br from-[#FF6B6B] to-[#ff8787] text-white rounded-xl p-4">
            <MapPin className="w-5 h-5 mb-2 opacity-90" />
            <h3 className="text-xs font-bold mb-0.5">Based In</h3>
            <p className="text-base">Pokhara,Nepal</p>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-4">
            <GraduationCap className="w-5 h-5 mb-2 opacity-90" />
            <h3 className="text-xs font-bold mb-0.5">
              Education
            </h3>
            <p className="text-base">B.Tech CSE</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-4">
            <Zap className="w-5 h-5 mb-2 opacity-90" />
            <h3 className="text-xs font-bold mb-0.5">
              Specialization
            </h3>
            <p className="text-base">Data Science & ML</p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-4">
            <Target className="w-5 h-5 mb-2 opacity-90" />
            <h3 className="text-xs font-bold mb-0.5">Status</h3>
            <p className="text-base">Seeking Opportunities</p>
          </div>
        </div>

        {/* Bio Section - Two Column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
          <div className="border-2 border-gray-200 rounded-xl p-5 hover:border-[#FF6B6B] transition-all duration-300">
            <h2 className="text-2xl mb-3 flex items-center gap-2">
              <span className="text-3xl">👨‍💻</span>
              Who I Am
            </h2>
            <p className="text-gray-700 mb-3 text-sm">
              I'm a data science practitioner focused on
              extracting value from real-world, messy data.
              My work centers on data cleaning, exploratory analysis,
              feature engineering, and building reliable machine
              learning models using Python and core statistical methods.
            </p>
            <p className="text-gray-700 text-sm">
              I specialize in data preprocessing,exploratory
              data analysis, feature engineering,and classical
              machine learning techniques, with experience
              building reproducible pipelines and delivering
              insights through RESTful APIs for real-world use.
            </p>
          </div>

          <div className="border-2 border-gray-200 rounded-xl p-5 hover:border-[#FF6B6B] transition-all duration-300">
            <h2 className="text-2xl mb-3 flex items-center gap-2">
              <span className="text-3xl">⚡</span>
              What Drives Me
            </h2>
            <p className="text-gray-700 mb-3 text-sm">
              In tech, I'm driven by understanding how things
              work under the hood, not just using libraries
              or syntax. I focus on fundamentals—data flow,
              algorithms, and system behavior—so the solutions
              I build are explainable, debuggable, and
              reliable in real-world use.
            </p>
            <p className="text-gray-700 text-sm">
              Beyond tech, When I'm not building or learning,
              I'm usually traveling, listening to good music,
              or hanging out with friends. I enjoy leadership
              and team environments—they balance things out
              and shape how I collaborate and communicate.
            </p>
          </div>
        </div>

        {/* Skills - Modern Grid */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 bg-black text-white rounded-xl flex items-center justify-center">
              <Code className="w-5 h-5" />
            </div>
            <h2 className="text-3xl">Technical Arsenal</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-xl p-4 hover:border-blue-500 transition-all duration-300">
              <h3 className="text-base mb-2 font-bold text-blue-900">
                Languages
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {["Python", "Cpp", "SQL", "Java"].map(
                  (skill, i) => (
                    <span
                      key={i}
                      className={`px-2 py-1 text-xs font-medium rounded-full ${getTagColor(skill)}`}
                    >
                      {skill}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200 rounded-xl p-4 hover:border-purple-500 transition-all duration-300">
              <h3 className="text-base mb-2 font-bold text-purple-900">
                DataScience
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Pandas",
                  "NumPy",
                  "Matplotlib",
                  "Excel",
                  "Power BI",
                  "Scikit-learn",
                ].map((skill, i) => (
                  <span
                    key={i}
                    className={`px-2 py-1 text-xs font-medium rounded-full ${getTagColor(skill)}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-white border-2 border-indigo-200 rounded-xl p-4 hover:border-indigo-500 transition-all duration-300">
              <h3 className="text-base mb-2 font-bold text-indigo-900">
                Backend
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "FastAPI",
                  "PostgreSQL",
                  "Pydantic",
                  "Alembic",
                  "SQLAlchemy",
                ].map((skill, i) => (
                  <span
                    key={i}
                    className={`px-2 py-1 text-xs font-medium rounded-full ${getTagColor(skill)}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-white border-2 border-cyan-200 rounded-xl p-4 hover:border-cyan-500 transition-all duration-300">
              <h3 className="text-base mb-2 font-bold text-cyan-900">
                Tools & Platforms
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {["Docker", "Git", "GitHub"].map(
                  (skill, i) => (
                    <span
                      key={i}
                      className={`px-2 py-1 text-xs font-medium rounded-full ${getTagColor(skill)}`}
                    >
                      {skill}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 bg-[#FF6B6B] text-white rounded-xl flex items-center justify-center">
              <Briefcase className="w-5 h-5" />
            </div>
            <h2 className="text-3xl">Experience/Training</h2>
          </div>

          <div className="space-y-3">
            <div className="relative border-l-4 border-gray-300 pl-6">
              <div className="absolute left-[-10px] top-0 w-4 h-4 bg-gray-300 rounded-full border-4 border-white"></div>
              <div className="bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all duration-300">
                <h3 className="text-xl font-bold mb-1">
                  Summer Training
                </h3>
                <p className="text-gray-600 mb-2 font-mono text-xs">
                  Angaar Batch • Jun/July-2024
                </p>
                <p className="text-gray-700 text-sm">
                  Developed backend features using Django MVT,
                  implementing authentication, CRUD operations,
                  and REST APIs with Django REST Framework
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 bg-blue-500 text-white rounded-xl flex items-center justify-center">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h2 className="text-3xl">Education</h2>
          </div>

          {/* Education Timeline */}
          <div className="space-y-3">
            {/* B.Tech - Current */}
            <div className="relative border-l-4 border-blue-500 pl-6 pb-4">
              <div className="absolute left-[-10px] top-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>
              <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-xl p-4 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-xl font-bold">
                    B.Tech in Computer Science
                  </h3>
                  <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-bold">
                    Current
                  </span>
                </div>
                <p className="text-blue-600 mb-2 font-mono text-xs flex items-center gap-1.5">
                  <Calendar className="w-3 h-3" />
                  LPU,Punjab • 2023 - 2027
                </p>
                <p className="text-gray-700 text-sm">
                  Specializing in Data Science and Machine Learning. Strong foundation in
                  algorithms, data structures, and building scalable ML solutions.
                </p>
              </div>
            </div>

            {/* +2 - Completed */}
            <div className="relative border-l-4 border-gray-300 pl-6 pb-4">
              <div className="absolute left-[-10px] top-0 w-4 h-4 bg-gray-300 rounded-full border-4 border-white"></div>
              <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-xl p-4 hover:border-blue-500 transition-all duration-300">
                <h3 className="text-xl font-bold mb-1">
                  (+2) NEB
                </h3>
                <p className="text-blue-600 mb-2 font-mono text-xs flex items-center gap-1.5">
                  <Calendar className="w-3 h-3" />
                  Sagarmatha School,Pokhara • 2021 - 2023
                </p>
                <p className="text-gray-700 text-sm">
                  Science stream with Mathematics and Computer Science.
                </p>
              </div>
            </div>

            {/* SEE - Completed */}
            <div className="relative border-l-4 border-gray-300 pl-6">
              <div className="absolute left-[-10px] top-0 w-4 h-4 bg-gray-300 rounded-full border-4 border-white"></div>
              <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-xl p-4 hover:border-blue-500 transition-all duration-300">
                <h3 className="text-xl font-bold mb-1">
                  Secondary Education Examination (SEE)
                </h3>
                <p className="text-blue-600 mb-2 font-mono text-xs flex items-center gap-1.5">
                  <Calendar className="w-3 h-3" />
                  Tarakunj Secondary School,Pokhara • 2021
                </p>
                <p className="text-gray-700 text-sm">
                  Completed secondary level education.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications - NEW DESIGN WITH IMAGE PREVIEWS */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 bg-purple-500 text-white rounded-xl flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h2 className="text-3xl">Certificates & Certifications</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setSelectedCertificate(cert)}
                className="group cursor-pointer border-2 border-gray-200 rounded-xl overflow-hidden hover:border-purple-500 hover:shadow-lg transition-all duration-300"
              >
                {/* Certificate Image Preview */}
                <div className="relative h-40 bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/400x200?text=Certificate';
                    }}
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <span className="bg-white text-purple-600 px-3 py-1 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Certificate
                    </span>
                  </div>
                </div>

                {/* Certificate Info */}
                <div className="p-4">
                  <h3 className="text-base font-bold mb-1 line-clamp-2 group-hover:text-purple-600 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-gray-600 mb-2">
                    {cert.issuer}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 font-mono">
                      {cert.date}
                    </span>
                    {cert.verifyLink && (
                      <a
                        href={cert.verifyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-purple-600 hover:text-purple-700 transition-colors"
                        title="Verify Certificate"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center z-10 transition-all duration-300 hover:scale-110"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Certificate content */}
            <div className="p-6">
              <div className="mb-4">
                <h2 className="text-2xl font-bold mb-2">{selectedCertificate.title}</h2>
                <p className="text-gray-600">{selectedCertificate.issuer} • {selectedCertificate.date}</p>
              </div>

              {/* Certificate Image */}
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="w-full h-auto rounded-xl border-2 border-gray-200"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/800x600?text=Certificate+Image';
                }}
              />

              {/* Verify Link */}
              {selectedCertificate.verifyLink && (
                <div className="mt-4">
                  <a
                    href={selectedCertificate.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-all duration-300"
                  >
                    Verify Certificate
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}