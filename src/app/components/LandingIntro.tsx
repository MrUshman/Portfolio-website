import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface LandingIntroProps {
  onExplore: () => void;
}

const subtitles = [
  "Turning data into insights",
  "Building ML solutions",
  "Football enthusiast on weekends ⚽",
  "B.Tech student seeking opportunities"
];

export function LandingIntro({ onExplore }: LandingIntroProps) {
  const [currentSubtitle, setCurrentSubtitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitle((prev) => (prev + 1) % subtitles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center overflow-hidden cursor-pointer" onClick={onExplore}>
      {/* Grid background with radial fade */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Dotted grid pattern */}
            <pattern id="dot-grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="15" cy="15" r="1" fill="#9ca3af" opacity="0.3"/>
            </pattern>
            
            {/* Radial gradient mask - center invisible, edges visible */}
            <radialGradient id="radial-fade" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1"/>
              <stop offset="40%" stopColor="#ffffff" stopOpacity="1"/>
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.5"/>
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0"/>
            </radialGradient>
            
            <mask id="grid-mask">
              <rect width="100%" height="100%" fill="url(#radial-fade)"/>
            </mask>
          </defs>

          {/* Grid with radial mask applied */}
          <rect width="100%" height="100%" fill="url(#dot-grid)" mask="url(#grid-mask)"/>
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Name and title */}
          <h1 className="text-6xl md:text-8xl font-bold text-black mb-6">
            Hi, I'm Prashant Baral
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 mb-6">
            Data Scientist from Nepal 🇳🇵
          </p>

          {/* Rotating subtitles */}
          <div className="h-16 mb-12">
            <motion.p
              key={currentSubtitle}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-xl md:text-2xl text-black font-mono"
            >
              → {subtitles[currentSubtitle]}
            </motion.p>
          </div>

          {/* Simple continue button */}
          <motion.button
            onClick={onExplore}
            className="px-8 py-4 bg-[#FF6B6B] text-white text-base font-bold rounded-xl hover:bg-black transition-colors duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Continue →
          </motion.button>

          <p className="text-sm text-gray-400 mt-8 font-mono">
            (or click anywhere to continue)
          </p>
        </motion.div>
      </div>
    </div>
  );
}