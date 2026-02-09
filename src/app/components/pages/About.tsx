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
  Javascript: "bg-yellow-100 text-yellow-700",
  PHP: "bg-indigo-100 text-indigo-700",

  React: "bg-cyan-100 text-cyan-700",
  "Next.js": "bg-gray-100 text-gray-700",
  Tailwind: "bg-sky-100 text-sky-700",
  Redux: "bg-purple-100 text-purple-700",

  "Node.js": "bg-green-100 text-green-700",
  Express: "bg-gray-100 text-gray-700",
  MongoDB: "bg-emerald-100 text-emerald-700",
  MySQL: "bg-blue-100 text-blue-700",
  "Socket.io": "bg-slate-100 text-slate-700",

  FastAPI: "bg-violet-100 text-violet-700",
  PostgreSQL: "bg-sky-100 text-sky-700",
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
    image: "assets/certificates/NPTEL certificate.jpg",
    color: "from-blue-50 to-white border-blue-200",
  },
  {
    id: 2,
    title: "The bits and Bytes of Computer Networking",
    issuer: "Coursera",
    date: "Sep-13 2024",
    image: "assets/certificates/bit and bytes.png",
    color: "from-violet-50 to-white border-violet-200",
    verifyLink: "https://coursera.org/verify/FLT1SWMI2DG2 ",
  },
  {
    id: 3,
    title: "Computer Programming",
    issuer: "LPU",
    date: "March-16 2024",
    image: "assets/certificates/C Programming.png",
    color: "from-green-50 to-white border-green-200",
  },
  {
    id: 4,
    title: "Community services",
    issuer: "Green Youth Of Lumbini",
    date: "July-20 2024",
    image: "assets/certificates/Coursera AY3AT4TWPREX.jpg",
    color: "from-blue-50 to-white border-blue-200",
  },
  {
    id: 5,
    title: "Peer-to-Peer Protocols and Local Area Networks",
    issuer: "University of Colorado System (Coursera)",
    date: "Oct 2024",
    image: "assets/certificates/Peer To Peer.png",
    color: "from-blue-50 to-white border-blue-200",
    verifyLink: "https://coursera.org/verify/HVN9H9LRTU9M ",
  },
  {
    id: 6,
    title: "Java programming",
    issuer: "Lovely professional university",
    date: "May-05 2025",
    image: "assets/certificates/Java Programming.png",
    color: "from-blue-50 to-white border-blue-200",
    verifyLink: "https://lpucolab438.examly.io/certificate/U2FsdGVkX1%2BpjzxvmPbL5ga91FNrAK4LxxqusP%2F1IBg%3D",
  },
  {
    id: 7,
    title: "Introduction to Hardware and Operating Systems",
    issuer: "IBM (Coursera)",
    date: "Sep 2024",
    image: "assets/certificates/Introduction to hardware.png",
    color: "from-blue-50 to-white border-blue-200",
    verifyLink: "https://coursera.org/verify/OH5J3ZA6XQWP",
  },
  {
    id: 8,
    title: "Fundamentals of Network Communication",
    issuer: "University of Colorado System (Coursera)",
    date: "Sep 2024",
    image: "assets/certificates/Network communication.png",
    color: "from-blue-50 to-white border-blue-200",
    verifyLink: "https://coursera.org/verify/MYNPD0C04TUF",
  },
  {
    id: 9,
    title: "Data Structure And Algorithm",
    issuer: "Google (Coursera)",
    date: "Dec-5 2024",
    image: "assets/certificates/DSA.png",
    color: "from-blue-50 to-white border-blue-200",
    verifyLink: "https://lpucolab438.examly.io/certificate/U2FsdGVkX1%2BsOThPQXtiG4AdqSCoVKIOWwVSVt8mizw%3D",
  },
  {
    id: 10,
    title: "Object oriented programming",
    issuer: "Lovely professional University",
    date: "Mar 2024",
    image: "assets/certificates/Cpp.png",
    color: "from-amber-50 to-white border-amber-200",
    verifyLink: "https://lpucolab438.examly.io/certificate/U2FsdGVkX1%2BvCyLRLFSGTwN7fEFNifHu2o6mL1BEaSI%3D",
  
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
            <p className="text-base">Bhairahwa,Nepal</p>
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
            <p className="text-base">Full Stack Web Development</p>
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
              I’m a full stack web developer focused on building clean, responsive, and user-friendly web applications. My work revolves around creating scalable front-end interfaces and reliable back-end systems using modern web technologies.
            </p>
            <p className="text-gray-700 text-sm">
              I have hands-on experience with React, Node.js, Express, and databases like MongoDB and MySQL. I enjoy turning ideas into real products, working on authentication systems, dashboards, and performance-optimized web solutions that solve real-world problems.
            </p>
          </div>

          <div className="border-2 border-gray-200 rounded-xl p-5 hover:border-[#FF6B6B] transition-all duration-300">
            <h2 className="text-2xl mb-3 flex items-center gap-2">
              <span className="text-3xl">⚡</span>
              What Drives Me
            </h2>
            <p className="text-gray-700 mb-3 text-sm">
              In tech, I’m driven by building things that actually work well in real-world use—not just visually, but functionally. I focus on writing clean code, improving user experience, and understanding how frontend and backend systems connect together.
            </p>
            <p className="text-gray-700 text-sm">
              Beyond coding, I enjoy collaborating in team environments, learning new tools, and continuously improving my skills. When I’m not working on projects, I like exploring new ideas, improving my portfolio, and staying curious about how technology can create better digital experiences.
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
                {["Python", "Cpp", "SQL", "Java", "PHP", "Javascript"].map(
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

            {/* Front-End Box */}
            <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-xl p-4 hover:border-orange-500 transition-all duration-300">
              <h3 className="text-base mb-2 font-bold text-orange-900">
                Front-End
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "React",
                  "Next.js",
                  "Tailwind",
                  "Redux",
                  "HTML5",
                  "CSS3",
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

            {/* Back-End Box */}
            <div className="bg-gradient-to-br from-indigo-50 to-white border-2 border-indigo-200 rounded-xl p-4 hover:border-indigo-500 transition-all duration-300">
              <h3 className="text-base mb-2 font-bold text-indigo-900">
                Back-End
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "MySQL",
                  "Socket.io",
                  "FastAPI",
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
                  Specializing in Full Stack Web Development. Strong foundation in frontend and backend technologies, and building scalable, user-focused web applications.
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
                  Sai Global College,Bhairahawa • 2020 - 2022
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
                  Modern Vision Academy,Kanchan-3,Haraiya • 2020
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