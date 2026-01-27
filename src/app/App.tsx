import { useState } from 'react';
import { Header } from './components/Header';
import { Home } from './components/pages/Home';
import { Projects } from './components/pages/Projects';
import { Blog } from './components/pages/Blog';
import { About } from './components/pages/About';
import { Contact } from './components/pages/Contact';
import { FooterApis } from './components/FooterApis';

type Page = 'home' | 'projects' | 'blog' | 'about' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={(page) => setCurrentPage(page as Page)} />; // ← FIXED: Pass onNavigate
      case 'projects':
        return <Projects />;
      case 'blog':
        return <Blog />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={(page) => setCurrentPage(page as Page)} />; // ← FIXED: Pass onNavigate
    }
  };

  return (
    <div className="h-screen bg-white flex flex-col overflow-hidden">
      {/* Header with Navigation */}
      <Header currentPage={currentPage} onNavigate={(page) => setCurrentPage(page as Page)} />

      {/* Main Content - Pages */}
      {renderPage()}

      {/* Footer */}
      <FooterApis />
    </div>
  );
}