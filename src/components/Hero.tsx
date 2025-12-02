import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Trophy, Award, Medal } from 'lucide-react';
import ChessBoard from './ChessBoard';

const achievements = [
  {
    icon: Trophy,
    title: 'National Chess Championship 2024',
    description: 'Our student Arjun Patel won 1st place',
    color: 'from-yellow-400 to-amber-600'
  },
  {
    icon: Award,
    title: 'State Level Tournament Winner',
    description: '15 students qualified for nationals',
    color: 'from-blue-400 to-blue-600'
  },
  {
    icon: Medal,
    title: 'International Youth Chess Olympiad',
    description: 'Bronze medal achievement by our team',
    color: 'from-orange-400 to-red-600'
  },
  {
    icon: Trophy,
    title: 'Best Chess Academy Award 2023',
    description: 'Recognized for excellence in training',
    color: 'from-purple-400 to-purple-600'
  }
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % achievements.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % achievements.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + achievements.length) % achievements.length);
  };

  return (
    <section id="home" className="pt-20">
      <div className="relative bg-gradient-to-r from-slate-800 via-slate-700 to-amber-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
          <div className="relative bg-gradient-to-br from-amber-500 to-amber-700 rounded-2xl shadow-2xl overflow-hidden mb-8">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative px-8 py-12">
              <div className="flex items-center justify-between">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all backdrop-blur-sm"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>

                <div className="flex-1 mx-8 text-center">
                  {achievements.map((achievement, index) => {
                    const Icon = achievement.icon;
                    return (
                      <div
                        key={index}
                        className={`transition-all duration-500 ${
                          index === currentSlide ? 'opacity-100' : 'opacity-0 absolute inset-0'
                        }`}
                      >
                        <div className="flex flex-col items-center">
                          <div className={`bg-gradient-to-br ${achievement.color} p-4 rounded-full mb-4 shadow-lg`}>
                            <Icon className="w-12 h-12 text-white" />
                          </div>
                          <h3 className="text-3xl font-bold text-white mb-2">{achievement.title}</h3>
                          <p className="text-xl text-amber-100">{achievement.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all backdrop-blur-sm"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>

              <div className="flex justify-center mt-6 space-x-2">
                {achievements.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentSlide ? 'bg-white w-8' : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <h2 className="text-5xl font-bold leading-tight">
                Master the Game of <span className="text-amber-400">Kings</span>
              </h2>
              <p className="text-xl text-slate-200">
                Join ChessMaster Academy and unlock your full potential. From beginner to grandmaster,
                we guide you through every move with expert coaching and proven strategies.
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Start Your Journey
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
              <ChessBoard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
