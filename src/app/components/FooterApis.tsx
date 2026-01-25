import { useState, useEffect } from 'react';

export function FooterApis() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Update time every minute
    const timer = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-[1600px] mx-auto px-8 py-4">
        <div className="flex items-center justify-between text-sm text-gray-500">
          {/* Left: Copyright */}
          <div>
            © {new Date().getFullYear()} Prashant Baral
          </div>

          {/* Center: Status */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#00FF00] rounded-full"></span>
            <span>All systems operational</span>
          </div>

          {/* Right: Time */}
          <div className="flex items-center gap-2">
            <span>
              {time.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
              })}
            </span>
            <span className="text-xs text-gray-400">NPT</span>
          </div>
        </div>
      </div>
    </footer>
  );
}