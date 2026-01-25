import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LandingIntro } from './components/LandingIntro';
import { Header } from './components/Header';
import { Home } from './components/pages/Home';
import { Projects } from './components/pages/Projects';
import { Blog } from './components/pages/Blog';
import { About } from './components/pages/About';
import { Contact } from './components/pages/Contact';
import { FooterApis } from './components/FooterApis';

type Stage = 'landing' | 'portfolio';
type Page = 'home' | 'projects' | 'blog' | 'about' | 'contact';

export default function App() {
  const [stage, setStage] = useState<Stage>('landing');
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Auto-transition after 5 seconds
  useEffect(() => {
    if (stage === 'landing') {
      const timer = setTimeout(() => {
        setStage('portfolio');
      }, 5000); // 5 seconds

      return () => clearTimeout(timer);
    }
  }, [stage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'projects':
        return <Projects />;
      case 'blog':
        return <Blog />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {stage === 'landing' && (
          <motion.div
            key="landing"
            exit={{ 
              scale: 1.2, 
              opacity: 0,
              filter: 'blur(10px)'
            }}
            transition={{ duration: 0.8 }}
          >
            <LandingIntro onExplore={() => setStage('portfolio')} />
          </motion.div>
        )}

        {stage === 'portfolio' && (
          <motion.div
            key="portfolio"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="h-screen bg-white flex flex-col overflow-hidden"
          >
            {/* Header with Navigation */}
            <Header currentPage={currentPage} onNavigate={(page) => setCurrentPage(page as Page)} />

            {/* Main Content - Pages */}
            {renderPage()}

            {/* Footer */}
            <FooterApis />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}