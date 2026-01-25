import { Github, Linkedin, Mail } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const menuItems = [
  { name: 'Home', id: 'home' },
  { name: 'Projects', id: 'projects' },
  { name: 'Blog', id: 'blog' },
  { name: 'About', id: 'about' },
  { name: 'Contact', id: 'contact' },
];

export function Header({ currentPage, onNavigate }: HeaderProps) {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-[1600px] mx-auto px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Left: Profile + Navigation */}
          <div className="flex items-center gap-8">
            {/* Profile */}
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1620216464663-29984da34a12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjY2MTk3NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Developer"
                className="w-10 h-10 rounded-full object-cover border-2 border-black"
              />
              <div>
                <h1 className="text-lg">Prashant Baral</h1>
                <p className="text-gray-500 text-xs">ML Engineer • Data Scientist</p>
              </div>
            </div>

            {/* Navigation - Always Visible */}
            <nav className="flex gap-6">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`text-sm transition-all ${
                    currentPage === item.id
                      ? 'text-black underline decoration-[#FF6B6B] decoration-2 underline-offset-4'
                      : 'text-gray-600 hover:text-black hover:underline hover:decoration-[#FF6B6B] hover:decoration-2 hover:underline-offset-4'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Right: Quick Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-gray-300 hover:border-black hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-gray-300 hover:border-black hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:hello@nepkal.dev"
              className="w-8 h-8 rounded-full border border-[#FF6B6B] text-[#FF6B6B] hover:bg-[#FF6B6B] hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}