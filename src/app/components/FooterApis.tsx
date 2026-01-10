import { useState, useEffect } from 'react';
import { Cloud, MapPin, Thermometer, Wind, Droplets, Sun } from 'lucide-react';

interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  icon: string;
}

export function FooterApis() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Update time every minute
    const timer = setInterval(() => setTime(new Date()), 60000);
    
    // Mock weather data
    setTimeout(() => {
      setWeather({
        location: 'Kathmandu, Nepal',
        temperature: 18,
        condition: 'Partly Cloudy',
        humidity: 65,
        windSpeed: 12,
        icon: 'partly-cloudy',
      });
      setLoading(false);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-[1600px] mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Left: Weather */}
          <div className="flex items-center gap-6">
            {loading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-gray-300 border-t-black rounded-full animate-spin"></div>
                <span className="text-sm text-gray-400">Loading weather...</span>
              </div>
            ) : weather ? (
              <>
                <div className="flex items-center gap-2">
                  <Cloud className="w-5 h-5 text-gray-400" />
                  <span className="text-sm">{weather.temperature}°C</span>
                  <span className="text-xs text-gray-400">{weather.condition}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>{weather.location}</span>
                </div>
                <div className="flex items-center gap-4 text-xs text-gray-400">
                  <div className="flex items-center gap-1">
                    <Droplets className="w-4 h-4" />
                    <span>{weather.humidity}%</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Wind className="w-4 h-4" />
                    <span>{weather.windSpeed} km/h</span>
                  </div>
                </div>
              </>
            ) : null}
          </div>

          {/* Center: Status */}
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#00FF00] rounded-full animate-pulse"></span>
              <span>All systems operational</span>
            </div>
            <span>•</span>
            <span>Built with developer-first minimalism</span>
            <span>•</span>
            <span className="text-[#FF6B6B]">BETA</span>
          </div>

          {/* Right: Time */}
          <div className="flex items-center gap-2 text-sm">
            <Thermometer className="w-4 h-4 text-gray-400" />
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