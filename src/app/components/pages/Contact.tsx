import { Mail, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formDataObj = new FormData(form);

    fetch("/", {
      method: "POST",
      body: formDataObj,
    })
      .then(() => {
        alert("Message sent successfully");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        alert("Form submission failed");
      });
  };

  return (
    <main className="flex-1 overflow-auto">
      <div className="max-w-[900px] mx-auto px-7 py-10">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl mb-3">Get In Touch</h1>
          <p className="text-gray-600 text-base">
            Have a project in mind or want to discuss tech things? Let's connect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Contact Form */}
          <div className="border border-gray-200 rounded-xl p-5">
            <h2 className="text-xl mb-4">Send a Message</h2>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-3.5"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />
              <div>
                <label className="block text-sm mb-1.5">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-lg focus:border-black focus:outline-none transition-all"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-1.5">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-lg focus:border-black focus:outline-none transition-all"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-1.5">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-lg focus:border-black focus:outline-none transition-all resize-none"
                  rows={4}
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#FF6B6B] text-white px-4 py-2 text-sm rounded-lg hover:bg-black transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            {/* Email */}
            <div className="border border-gray-200 rounded-xl p-4 hover:border-black transition-all duration-300">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-9 h-9 bg-[#FF6B6B] text-white rounded-full flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <h3 className="text-base">Email</h3>
              </div>
              <a
                href="mailto:baralprashant09@gmail.com"
                className="text-[#FF6B6B] hover:underline text-sm"
              >
                baralprashant09@gmail.com
              </a>
            </div>

            {/* Location */}
            <div className="border border-gray-200 rounded-xl p-4 hover:border-black transition-all duration-300">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-9 h-9 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <h3 className="text-base">Location</h3>
              </div>
              <p className="text-gray-600 text-sm">Pokhara, Nepal</p>
            </div>

            {/* Social Links */}
            <div className="border border-gray-200 rounded-xl p-4 hover:border-black transition-all duration-300">
              <h3 className="text-base mb-3">Connect</h3>
              <div className="flex gap-2.5">
                <a
                  href="https://github.com/prashant-baral"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-800 text-white rounded-full hover:bg-black transition-all duration-300 flex items-center justify-center"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/prashantbaral1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-all duration-300 flex items-center justify-center"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="border border-gray-200 rounded-xl p-4 hover:border-black transition-all duration-300">
              <h3 className="text-base mb-2">Availability</h3>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#00FF00] rounded-full"></span>
                <span className="text-gray-600 text-sm">Available for freelance projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}