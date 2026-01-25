import { Code2, Sparkles, Trophy, Briefcase, Heart } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const sampleResponses = [
  "I'm Prashant Baral, a Data Scientist from Nepal who loves turning data into insights!",
  "I specialize in Python, Machine Learning, and building end-to-end ML solutions. Check out my projects!",
  "My philosophy? Clean code, meaningful insights, and continuous learning. Football keeps me balanced! ⚽",
  "I'm currently seeking opportunities in data science and ML engineering. Let's connect!",
  "I work with TensorFlow, PyTorch, Scikit-learn, and MLOps tools. The full stack is in my skills!",
];

// Color mapping for different tech tags
const tagColors: Record<string, string> = {
  Python: 'bg-blue-100 text-blue-700',
  JavaScript: 'bg-yellow-100 text-yellow-700',
  TensorFlow: 'bg-amber-100 text-amber-700',
  PyTorch: 'bg-red-100 text-red-700',
  'Scikit-learn': 'bg-orange-100 text-orange-700',
  Pandas: 'bg-indigo-100 text-indigo-700',
  Docker: 'bg-cyan-100 text-cyan-700',
  AWS: 'bg-orange-100 text-orange-700',
  MLflow: 'bg-purple-100 text-purple-700',
  FastAPI: 'bg-teal-100 text-teal-700',
};

const getTagColor = (tag: string) => {
  return tagColors[tag] || 'bg-gray-100 text-gray-700';
};

export function Home() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hey! Ask me anything about my work, skills, or what I'm looking for. I'll give you the straight answer.",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: sampleResponses[Math.floor(Math.random() * sampleResponses.length)],
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <main className="flex-1 overflow-auto">
      <div className="max-w-[1400px] mx-auto px-8 py-12">
        {/* Hero Section */}

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Quick Stats */}
          <div className="border border-gray-200 rounded-2xl p-4 hover:border-black transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#FF6B6B] text-white rounded-xl flex items-center justify-center">
                <Code2 className="w-5 h-5" />
              </div>
              <h2 className="text-2xl">Skills</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'Docker'].map((skill, i) => (
                <span key={i} className={`px-3 py-1 text-xs rounded-full ${getTagColor(skill)}`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="border border-gray-200 rounded-2xl p-4 hover:border-black transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center">
                <Briefcase className="w-5 h-5" />
              </div>
              <h2 className="text-2xl">Focus Areas</h2>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[#FF6B6B] mt-1">→</span>
                <span>Machine Learning & Deep Learning</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF6B6B] mt-1">→</span>
                <span>Data Analysis & Visualization</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF6B6B] mt-1">→</span>
                <span>MLOps & Model Deployment</span>
              </li>
            </ul>
          </div>

          {/* Current Status */}
          <div className="border border-gray-200 rounded-2xl p-4 hover:border-black transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-100 text-green-700 rounded-xl flex items-center justify-center">
                <Trophy className="w-5 h-5" />
              </div>
              <h2 className="text-2xl">Currently</h2>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-gray-700">Seeking opportunities</span>
              </div>
              <p className="text-gray-600 text-sm">
                Open to Data Science, ML Engineering, and Research roles
              </p>
            </div>
          </div>
        </div>

        {/* Two Column Layout: Chat + About */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Compact Chat */}
          <div className="border border-gray-200 rounded-2xl overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-[#1E1E1E] px-4 py-2.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
                <span className="ml-2 text-gray-400 font-mono text-xs">chat@prashant</span>
              </div>
              <Sparkles className="w-3.5 h-3.5 text-[#FF6B6B]" />
            </div>

            {/* Chat Messages */}
            <div className="h-[320px] overflow-y-auto p-4 space-y-3 bg-white">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-xl px-3.5 py-2.5 ${
                      message.sender === 'user'
                        ? 'bg-black text-white'
                        : 'bg-gray-50 text-black border border-gray-200'
                    }`}
                  >
                    {message.sender === 'bot' && (
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <span className="w-1.5 h-1.5 bg-[#00FF00] rounded-full"></span>
                        <span className="font-mono text-gray-500 text-xs">Prashant</span>
                      </div>
                    )}
                    <p className="whitespace-pre-wrap text-xs">{message.text}</p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-50 rounded-xl px-3.5 py-2.5 border border-gray-200">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <span className="w-1.5 h-1.5 bg-[#00FF00] rounded-full animate-pulse"></span>
                      <span className="font-mono text-gray-500 text-xs">Prashant</span>
                    </div>
                    <div className="flex gap-1.5">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                      <span
                        className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: '0.1s' }}
                      ></span>
                      <span
                        className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: '0.2s' }}
                      ></span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-200 p-3 bg-gray-50">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:border-[#FF6B6B] focus:outline-none bg-white transition-colors text-xs"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="px-4 py-2 bg-black text-white rounded-lg hover:bg-[#FF6B6B] transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-black flex items-center gap-1.5 text-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* My Story */}
          <div className="border border-gray-200 rounded-2xl p-6 hover:border-black transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 text-purple-700 rounded-xl flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <h2 className="text-2xl">My Story</h2>
            </div>
            <div className="space-y-3 text-gray-700">
              <p className="text-sm">
                📚 <strong>Education:</strong> B.Tech student specializing in Data Science and Machine Learning
              </p>
              <p className="text-sm">
                🎯 <strong>Goal:</strong> Building ML solutions that solve real-world problems and create impact
              </p>
              <p className="text-sm">
                ⚽ <strong>Beyond Tech:</strong> Football enthusiast who believes in teamwork both on and off the field
              </p>
              <p className="text-sm">
                🌏 <strong>From:</strong> Kathmandu, Nepal - bringing unique perspectives to global challenges
              </p>
              <p className="text-sm">
                🚀 <strong>Next:</strong> Seeking opportunities to contribute to innovative ML projects and grow as a data scientist
              </p>
            </div>
          </div>
        </div>

        {/* What I'm Looking For */}
        <div className="mt-6 border border-gray-200 rounded-2xl p-6 bg-gradient-to-r from-gray-50 to-white hover:border-[#FF6B6B] transition-all duration-300">
          <h2 className="text-2xl mb-4">What I'm Looking For 🎯</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">💼</span>
              <div>
                <h3 className="font-bold mb-1">Opportunities</h3>
                <p className="text-sm text-gray-600">Data Science & ML Engineering roles</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🤝</span>
              <div>
                <h3 className="font-bold mb-1">Collaboration</h3>
                <p className="text-sm text-gray-600">Open source ML projects & research</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">📈</span>
              <div>
                <h3 className="font-bold mb-1">Growth</h3>
                <p className="text-sm text-gray-600">Learning from experienced teams</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
