import { ExternalLink, Github } from 'lucide-react';

// Color mapping for different tech tags
const tagColors: Record<string, string> = {
  Python: 'bg-blue-100 text-blue-700',
  'Scikit-learn': 'bg-orange-100 text-orange-700',
  Docker: 'bg-cyan-100 text-cyan-700',
  MLflow: 'bg-purple-100 text-purple-700',
  TensorFlow: 'bg-amber-100 text-amber-700',
  Kafka: 'bg-gray-800 text-white',
  FastAPI: 'bg-teal-100 text-teal-700',
  PyTorch: 'bg-red-100 text-red-700',
  React: 'bg-sky-100 text-sky-700',
  OpenCV: 'bg-green-100 text-green-700',
  Redis: 'bg-rose-100 text-rose-700',
  Keras: 'bg-red-100 text-red-700',
  Pandas: 'bg-indigo-100 text-indigo-700',
  PostgreSQL: 'bg-blue-100 text-blue-700',
};

const getTagColor = (tag: string) => {
  return tagColors[tag] || 'bg-gray-100 text-gray-700';
};

const projects = [
  {
    title: 'ML Pipeline Automation',
    description: 'End-to-end machine learning pipeline with automated feature engineering and model selection.',
    tags: ['Python', 'Scikit-learn', 'Docker', 'MLflow'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Real-time Sentiment Analysis',
    description: 'NLP model for analyzing social media sentiment with streaming data processing.',
    tags: ['Python', 'TensorFlow', 'Kafka', 'FastAPI'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Computer Vision Dashboard',
    description: 'Interactive dashboard for object detection and image classification models.',
    tags: ['PyTorch', 'React', 'OpenCV', 'Redis'],
    github: 'https://github.com',
  },
  {
    title: 'Time Series Forecasting',
    description: 'Forecasting system for predicting energy consumption using LSTM networks.',
    tags: ['Python', 'Keras', 'Pandas', 'PostgreSQL'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
];

export function Projects() {
  return (
    <main className="flex-1 overflow-auto">
      <div className="max-w-[1200px] mx-auto px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-6xl mb-4">Projects</h1>
          <p className="text-gray-600">
            A collection of machine learning and data science projects showcasing end-to-end solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl p-6 hover:border-black transition-all duration-300"
            >
              <h2 className="text-2xl mb-3">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 text-xs rounded-full ${getTagColor(tag)}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition-all text-sm"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#FF6B6B] text-white rounded-xl hover:bg-black transition-all text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
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