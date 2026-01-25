import { Mail, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    alert('Message sent! (This is a demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <main className="flex-1 overflow-auto">
      <div className="max-w-[900px] mx-auto px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-6xl mb-4">Get In Touch</h1>
          <p className="text-gray-600 text-lg">
            Have a project in mind or want to discuss ML solutions? Let's connect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="border border-gray-200 rounded-2xl p-8">
            <h2 className="text-2xl mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-black focus:outline-none transition-all"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-black focus:outline-none transition-all"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-black focus:outline-none transition-all resize-none"
                  rows={5}
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#FF6B6B] text-white px-6 py-3 rounded-xl hover:bg-black transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Email */}
            <div className="border border-gray-200 rounded-2xl p-6 hover:border-black transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#FF6B6B] text-white rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="text-lg">Email</h3>
              </div>
              <a
                href="mailto:hello@nepkal.dev"
                className="text-[#FF6B6B] hover:underline"
              >
                hello@nepkal.dev
              </a>
            </div>

            {/* Location */}
            <div className="border border-gray-200 rounded-2xl p-6 hover:border-black transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-lg">Location</h3>
              </div>
              <p className="text-gray-600">Kathmandu, Nepal</p>
            </div>

            {/* Social Links */}
            <div className="border border-gray-200 rounded-2xl p-6 hover:border-black transition-all duration-300">
              <h3 className="text-lg mb-4">Connect</h3>
              <div className="flex gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 text-white rounded-full hover:bg-black transition-all duration-300 flex items-center justify-center"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-all duration-300 flex items-center justify-center"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="border border-gray-200 rounded-2xl p-6 hover:border-black transition-all duration-300">
              <h3 className="text-lg mb-3">Availability</h3>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-[#00FF00] rounded-full"></span>
                <span className="text-gray-600">Available for freelance projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}