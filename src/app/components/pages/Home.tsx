import { ArrowRight, Download } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/Sigma/ImageWithFallback';

export function Home({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const handleDownloadResume = () => {
    // Open PDF in new tab (better approach)
    window.open('/assets/resume.pdf', '_blank');
  };

  return (
    <main className="flex-1 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-[1400px] mx-auto px-6 h-full flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full items-center py-12">

          {/* Left Decorative Pattern */}
          <div className="hidden lg:block lg:col-span-2">
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF6B6B]/20 to-[#FF6B6B]/5 border border-[#FF6B6B]/30"></div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/30 ml-8"></div>
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/30 ml-4"></div>
            </div>
          </div>

          {/* Center Section - Profile & Intro */}
          <div className="lg:col-span-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

            {/* Profile Photo */}
            <div className="flex-shrink-0">
              <div className="relative">
                {/* Decorative rings */}
                <div className="absolute inset-0 rounded-full border-4 border-[#FF6B6B]/20 scale-110 animate-pulse"></div>
                <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 scale-125"></div>

                {/* Main photo container */}
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B]/10 to-transparent"></div>
                  <ImageWithFallback
                    src="/images/profile/UshmanKhan.jpg"
                    alt="Ushman Khan"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Status indicator */}
                <div className="absolute bottom-4 right-4 bg-white rounded-full p-2 shadow-lg border-4 border-white">
                  <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Intro Text */}
            <div className="flex-1 text-center lg:text-left max-w-xl">
              <div className="mb-4">
                <p className="text-lg text-gray-600">
                  Hello, I'm
                </p>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Ushman Khan
              </h1>

              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                A passionate <span className="text-[#FF6B6B] font-semibold">Full Stack Engineering Student</span> from
                <span className="font-semibold">  Bhairahawa, Nepal 🇳🇵</span>
              </p>

              <p className="text-base text-gray-600 mb-8 leading-relaxed">
                I build scalable, high-performance web applications using the MERN stack and AI integration. I specialize in turning complex requirements into responsive, production-ready systems with a focus on optimization and user-centric design. I am dedicated to writing clean, efficient code that delivers measurable real-world impact.
              </p>

              <button
                onClick={() => onNavigate?.('about')}
                className="group bg-gradient-to-r from-[#FF6B6B] to-[#FF5252] hover:from-[#FF5252] hover:to-[#FF6B6B] text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 flex items-center gap-3 mx-auto lg:mx-0 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <span>Know More About Me</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Right Section - Vertical CV Download */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Vertical text */}
              <div
                className="absolute -left-12 top-0 bottom-0 flex items-center"
                style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
              >
                <span className="text-sm font-semibold text-gray-400 tracking-wider">
                  落ち着いた
                </span>
              </div>

              {/* CV Download Card */}
              <div className="group relative">
                {/* Decorative background */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#FF6B6B] to-sky-300 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>

                {/* Main card */}
                <div className="relative bg-white border-2 border-gray-200 rounded-3xl p-6 hover:border-[#FF6B6B] transition-all duration-300 shadow-lg hover:shadow-2xl">
                  <div className="flex flex-col items-center gap-4">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B6B] to-[#FF5252] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Download className="w-8 h-8 text-white" />
                    </div>

                    {/* Text */}
                    <div className="text-center">
                      <p className="font-bold text-gray-800 text-sm mb-1">Resume</p>
                      <p className="text-xs text-gray-500">PDF • 2024</p>
                    </div>

                    {/* Download button */}
                    <button
                      onClick={handleDownloadResume}
                      className="w-full bg-gradient-to-r from-[#FF6B6B] to-[#FF5252] hover:from-[#FF5252] hover:to-[#FF6B6B] text-white font-bold py-2.5 px-4 rounded-xl transition-all duration-300 text-sm shadow-md hover:shadow-lg"
                    >
                      Download
                    </button>

                    {/* Decorative dots */}
                    <div className="flex gap-1 mt-2">
                      <div className="w-1.5 h-1.5 bg-[#FF6B6B] rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom decorative element */}
              <div className="mt-6 flex flex-col gap-3 items-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/30"></div>
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/30"></div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Background decorative elements */}
      <div className="fixed top-10 right-10 w-32 h-32 bg-gradient-to-br from-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed bottom-10 left-10 w-40 h-40 bg-gradient-to-br from-[#FF6B6B]/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
    </main>
  );
}