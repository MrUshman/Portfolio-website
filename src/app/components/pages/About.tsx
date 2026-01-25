import { Briefcase, GraduationCap, Award, Code, MapPin, Calendar, Zap, Target } from 'lucide-react';

// Color mapping for different tech tags
const tagColors: Record<string, string> = {
  Python: 'bg-blue-100 text-blue-700',
  JavaScript: 'bg-yellow-100 text-yellow-700',
  SQL: 'bg-orange-100 text-orange-700',
  R: 'bg-blue-100 text-blue-700',
  TensorFlow: 'bg-amber-100 text-amber-700',
  PyTorch: 'bg-red-100 text-red-700',
  'Scikit-learn': 'bg-orange-100 text-orange-700',
  Keras: 'bg-red-100 text-red-700',
  Docker: 'bg-cyan-100 text-cyan-700',
  AWS: 'bg-orange-100 text-orange-700',
  MLflow: 'bg-purple-100 text-purple-700',
  FastAPI: 'bg-teal-100 text-teal-700',
  Pandas: 'bg-indigo-100 text-indigo-700',
  NumPy: 'bg-blue-100 text-blue-700',
  'Apache Spark': 'bg-orange-100 text-orange-700',
  PostgreSQL: 'bg-blue-100 text-blue-700',
};

const getTagColor = (tag: string) => {
  return tagColors[tag] || 'bg-gray-100 text-gray-700';
};

export function About() {
  return (
    <main className="flex-1 overflow-auto">
      <div className="max-w-[1200px] mx-auto px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-6xl mb-4 inline-block relative">
            About Me

          </h1>
          <p className="text-gray-600 text-lg max-w-[800px]">
            ML Engineer and Data Scientist passionate about building intelligent systems that solve real-world problems.
          </p>
        </div>

        {/* Quick Facts Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-gradient-to-br from-[#FF6B6B] to-[#ff8787] text-white rounded-2xl p-6">
            <MapPin className="w-6 h-6 mb-3 opacity-90" />
            <h3 className="text-sm font-bold mb-1">Based In</h3>
            <p className="text-lg">Kathmandu, Nepal</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-6">
            <GraduationCap className="w-6 h-6 mb-3 opacity-90" />
            <h3 className="text-sm font-bold mb-1">Education</h3>
            <p className="text-lg">B.Tech Student</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl p-6">
            <Zap className="w-6 h-6 mb-3 opacity-90" />
            <h3 className="text-sm font-bold mb-1">Specialization</h3>
            <p className="text-lg">ML & Data Science</p>
          </div>
          
          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl p-6">
            <Target className="w-6 h-6 mb-3 opacity-90" />
            <h3 className="text-sm font-bold mb-1">Status</h3>
            <p className="text-lg">Seeking Opportunities</p>
          </div>
        </div>

        {/* Bio Section - Two Column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          <div className="border-2 border-gray-200 rounded-2xl p-8 hover:border-[#FF6B6B] transition-all duration-300">
            <h2 className="text-3xl mb-4 flex items-center gap-3">
              <span className="text-4xl">👨‍💻</span>
              Who I Am
            </h2>
            <p className="text-gray-700 mb-4">
              I'm a machine learning enthusiast with a strong foundation in data science and software engineering. 
              My work focuses on developing end-to-end ML solutions, from data preprocessing and model development 
              to deployment and monitoring in production environments.
            </p>
            <p className="text-gray-700">
              I specialize in deep learning, natural language processing, and computer vision, with hands-on experience 
              building scalable ML pipelines and RESTful APIs.
            </p>
          </div>

          <div className="border-2 border-gray-200 rounded-2xl p-8 hover:border-[#FF6B6B] transition-all duration-300">
            <h2 className="text-3xl mb-4 flex items-center gap-3">
              <span className="text-4xl">⚡</span>
              What Drives Me
            </h2>
            <p className="text-gray-700 mb-4">
              I'm passionate about MLOps practices and believe in writing clean, maintainable code that stands the test of time. 
              My goal is to bridge the gap between cutting-edge research and practical applications.
            </p>
            <p className="text-gray-700">
              Beyond tech, I'm a football enthusiast who believes teamwork, strategy, and continuous improvement 
              apply both on the field and in building ML systems. ⚽
            </p>
          </div>
        </div>

        {/* Skills - Modern Grid */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center">
              <Code className="w-6 h-6" />
            </div>
            <h2 className="text-4xl">Technical Arsenal</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-2xl p-6 hover:border-blue-500 transition-all duration-300">
              <h3 className="text-xl mb-3 font-bold text-blue-900">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'JavaScript', 'SQL', 'R'].map((skill, i) => (
                  <span key={i} className={`px-3 py-1.5 text-sm font-medium rounded-full ${getTagColor(skill)}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200 rounded-2xl p-6 hover:border-purple-500 transition-all duration-300">
              <h3 className="text-xl mb-3 font-bold text-purple-900">ML/DL Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras'].map((skill, i) => (
                  <span key={i} className={`px-3 py-1.5 text-sm font-medium rounded-full ${getTagColor(skill)}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-50 to-white border-2 border-cyan-200 rounded-2xl p-6 hover:border-cyan-500 transition-all duration-300">
              <h3 className="text-xl mb-3 font-bold text-cyan-900">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {['Docker', 'AWS', 'MLflow', 'FastAPI'].map((skill, i) => (
                  <span key={i} className={`px-3 py-1.5 text-sm font-medium rounded-full ${getTagColor(skill)}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-white border-2 border-indigo-200 rounded-2xl p-6 hover:border-indigo-500 transition-all duration-300">
              <h3 className="text-xl mb-3 font-bold text-indigo-900">Data Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['Pandas', 'NumPy', 'Apache Spark', 'PostgreSQL'].map((skill, i) => (
                  <span key={i} className={`px-3 py-1.5 text-sm font-medium rounded-full ${getTagColor(skill)}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-[#FF6B6B] text-white rounded-2xl flex items-center justify-center">
              <Briefcase className="w-6 h-6" />
            </div>
            <h2 className="text-4xl">Experience</h2>
          </div>
          
          <div className="space-y-4">
            <div className="relative border-l-4 border-[#FF6B6B] pl-8 pb-6">
              <div className="absolute left-[-12px] top-0 w-5 h-5 bg-[#FF6B6B] rounded-full border-4 border-white"></div>
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-[#FF6B6B] transition-all duration-300">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-2xl font-bold">Senior ML Engineer</h3>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">Current</span>
                </div>
                <p className="text-[#FF6B6B] mb-3 font-mono text-sm">Tech Company • 2024 - Present</p>
                <p className="text-gray-700">
                  Leading ML infrastructure projects and building production-ready models for real-time predictions. 
                  Focus on MLOps, model optimization, and scalable deployment strategies.
                </p>
              </div>
            </div>
            
            <div className="relative border-l-4 border-gray-300 pl-8">
              <div className="absolute left-[-12px] top-0 w-5 h-5 bg-gray-300 rounded-full border-4 border-white"></div>
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-gray-400 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-2">Data Scientist</h3>
                <p className="text-gray-600 mb-3 font-mono text-sm">Analytics Firm • 2022 - 2024</p>
                <p className="text-gray-700">
                  Developed predictive models and data pipelines for business intelligence applications. 
                  Worked on customer segmentation, churn prediction, and forecasting models.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Education & Certifications - Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-2xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h2 className="text-4xl">Education</h2>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-2xl p-6 hover:border-blue-500 transition-all duration-300">
              <h3 className="text-2xl mb-2 font-bold">M.S. in Computer Science</h3>
              <p className="text-blue-600 mb-3 font-mono text-sm flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                University • 2020 - 2022
              </p>
              <p className="text-gray-700">
                Specialized in Machine Learning and Artificial Intelligence. Focus on deep learning, 
                computer vision, and natural language processing.
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-purple-500 text-white rounded-2xl flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h2 className="text-4xl">Certifications</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-orange-50 to-white border-2 border-orange-200 rounded-2xl p-5 hover:border-orange-500 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🏆</span>
                  <p className="text-lg font-bold">AWS Certified Machine Learning - Specialty</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-amber-50 to-white border-2 border-amber-200 rounded-2xl p-5 hover:border-amber-500 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🎓</span>
                  <p className="text-lg font-bold">TensorFlow Developer Certificate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
