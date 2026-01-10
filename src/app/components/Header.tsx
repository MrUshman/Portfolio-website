import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

const menuItems = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blog', href: '#blog' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-[1600px] mx-auto px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Left: Hamburger + Profile */}
          <div className="flex items-center gap-4">
            {/* Hamburger Menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-9 h-9 rounded-lg border border-gray-300 hover:border-black hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>

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
            <span className="ml-2 px-2 py-0.5 bg-black text-white rounded text-xs">BETA</span>
          </div>
        </div>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="border-t border-gray-200 bg-white">
          <div className="max-w-[1600px] mx-auto px-8 py-3">
            <nav className="flex gap-6">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm text-gray-600 hover:text-black hover:underline hover:decoration-[#FF6B6B] hover:decoration-2 hover:underline-offset-4 transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}