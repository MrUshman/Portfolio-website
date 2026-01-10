import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface TerminalAnimationProps {
  onComplete: () => void;
}

const terminalLines = [
  { delay: 0, text: '$ initializing prashant_portfolio...', type: 'command' as const },
  { delay: 800, text: '$ loading profile...', type: 'command' as const },
  { delay: 1600, text: '████████████████████ 100%', type: 'progress' as const },
  { delay: 2400, text: '', type: 'blank' as const },
  { delay: 2600, text: '$ whoami', type: 'command' as const },
  { delay: 3000, text: '> Prashant Baral', type: 'output' as const },
  { delay: 3400, text: '> Data Science Engineer | Nepal 🇳🇵', type: 'output' as const },
  { delay: 3800, text: '> B.Tech | ML Enthusiast | Football Lover ⚽', type: 'output' as const },
  { delay: 4200, text: '', type: 'blank' as const },
  { delay: 4400, text: '$ cat mission.txt', type: 'command' as const },
  { delay: 4800, text: '> Seeking internships & opportunities', type: 'output' as const },
  { delay: 5200, text: '> 31 projects | 89 skills | Endless curiosity', type: 'output' as const },
  { delay: 5600, text: '> Specializing in: Python, ML/AI, Data Analytics', type: 'output' as const },
  { delay: 6000, text: '', type: 'blank' as const },
  { delay: 6200, text: '$ echo "Let\'s talk..."', type: 'command' as const },
  { delay: 6600, text: '> Chat mode ready. Click anywhere to start conversation →', type: 'output' as const },
];

export function TerminalAnimation({ onComplete }: TerminalAnimationProps) {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);

  useEffect(() => {
    terminalLines.forEach((line, index) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, index]);
        
        // Automatically proceed when last line appears
        if (index === terminalLines.length - 1) {
          setTimeout(() => {
            onComplete();
          }, 1200); // Wait 1.2s after last line, then auto-proceed
        }
      }, line.delay);
    });
  }, [onComplete]);

  const getLineColor = (type: string) => {
    switch (type) {
      case 'command':
        return 'text-[#FF6B6B]';
      case 'output':
        return 'text-emerald-400';
      case 'progress':
        return 'text-blue-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Terminal window */}
      <motion.div
        className="w-full max-w-4xl mx-8"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {/* Terminal header */}
        <div className="bg-gray-800 rounded-t-xl p-4 flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="flex-1 text-center text-gray-400 text-sm font-mono">
            prashant@portfolio ~ zsh
          </div>
        </div>

        {/* Terminal content */}
        <div className="bg-gray-900 rounded-b-xl p-8 min-h-[500px] font-mono">
          {terminalLines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={
                visibleLines.includes(index)
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -10 }
              }
              transition={{ duration: 0.3 }}
              className={`${getLineColor(line.type)} text-lg mb-2 ${
                line.type === 'blank' ? 'h-2' : ''
              }`}
            >
              {line.text}
              {/* Blinking cursor on last visible line */}
              {index === visibleLines[visibleLines.length - 1] && 
               index < terminalLines.length - 1 && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-2 h-5 bg-[#FF6B6B] ml-1"
                />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scanline effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(transparent 50%, rgba(255, 107, 107, 0.03) 50%)',
          backgroundSize: '100% 4px',
        }}
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 0.1, repeat: Infinity }}
      />
    </motion.div>
  );
}