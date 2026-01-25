import { Calendar, Clock } from 'lucide-react';

// Color mapping for different blog tags
const tagColors: Record<string, string> = {
  'Machine Learning': 'bg-blue-100 text-blue-700',
  'MLOps': 'bg-purple-100 text-purple-700',
  'Python': 'bg-blue-100 text-blue-700',
  'Deep Learning': 'bg-indigo-100 text-indigo-700',
  'NLP': 'bg-green-100 text-green-700',
  'Transformers': 'bg-amber-100 text-amber-700',
  'Data Science': 'bg-cyan-100 text-cyan-700',
  'Pandas': 'bg-indigo-100 text-indigo-700',
  'API': 'bg-teal-100 text-teal-700',
  'Docker': 'bg-cyan-100 text-cyan-700',
};

const getTagColor = (tag: string) => {
  return tagColors[tag] || 'bg-gray-100 text-gray-700';
};

const blogPosts = [
  {
    title: 'Building ML Pipelines with MLflow',
    excerpt: 'A comprehensive guide to creating production-ready machine learning pipelines with experiment tracking and model versioning.',
    date: '2026-01-15',
    readTime: '8 min read',
    tags: ['Machine Learning', 'MLOps', 'Python'],
  },
  {
    title: 'Understanding Transformers Architecture',
    excerpt: 'Deep dive into the transformer architecture that revolutionized NLP and computer vision tasks.',
    date: '2026-01-08',
    readTime: '12 min read',
    tags: ['Deep Learning', 'NLP', 'Transformers'],
  },
  {
    title: 'Data Preprocessing Best Practices',
    excerpt: 'Essential techniques for cleaning and preparing data to improve model performance.',
    date: '2025-12-20',
    readTime: '6 min read',
    tags: ['Data Science', 'Python', 'Pandas'],
  },
  {
    title: 'Deploying Models with FastAPI',
    excerpt: 'Step-by-step tutorial on creating REST APIs for ML models using FastAPI and Docker.',
    date: '2025-12-10',
    readTime: '10 min read',
    tags: ['MLOps', 'API', 'Docker'],
  },
];

export function Blog() {
  return (
    <main className="flex-1 overflow-auto">
      <div className="max-w-[1200px] mx-auto px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-6xl mb-4">Blog</h1>
          <p className="text-gray-600">
            Thoughts on machine learning, data science, and building intelligent systems.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="space-y-6">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="border border-gray-200 rounded-2xl p-8 hover:border-black transition-all duration-300 cursor-pointer"
            >
              <h2 className="text-3xl mb-3">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 text-xs rounded-full ${getTagColor(tag)}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Metadata */}
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </div>
                <span>•</span>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}