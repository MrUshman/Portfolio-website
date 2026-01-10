import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LandingIntro } from './components/LandingIntro';
import { TerminalAnimation } from './components/TerminalAnimation';
import { Header } from './components/Header';
import { SkillsSection } from './components/SkillsSection';
import { ChatBox } from './components/ChatBox';
import { JupyterNotebook } from './components/JupyterNotebook';
import { FooterApis } from './components/FooterApis';

type Stage = 'landing' | 'terminal' | 'portfolio';

export default function App() {
  const [stage, setStage] = useState<Stage>('landing');

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
            <LandingIntro onExplore={() => setStage('terminal')} />
          </motion.div>
        )}

        {stage === 'terminal' && (
          <motion.div
            key="terminal"
            exit={{ 
              y: -100,
              opacity: 0,
              transition: { duration: 0.6 }
            }}
          >
            <TerminalAnimation onComplete={() => setStage('portfolio')} />
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
            {/* Minimal Header */}
            <Header />

            {/* Main Content - Three Column Layout - Takes most space */}
            <main className="flex-1 overflow-hidden">
              <div className="max-w-[1600px] mx-auto h-full px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-8 h-full">
                  {/* Left Column - Skills */}
                  <div className="lg:col-span-3 overflow-hidden">
                    <SkillsSection />
                  </div>

                  {/* Center Column - ChatBox (wider) */}
                  <div className="lg:col-span-6 overflow-hidden">
                    <ChatBox />
                  </div>

                  {/* Right Column - Jupyter Notebook */}
                  <div className="lg:col-span-3 overflow-hidden">
                    <JupyterNotebook />
                  </div>
                </div>
              </div>
            </main>

            {/* Compact Footer */}
            <FooterApis />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}