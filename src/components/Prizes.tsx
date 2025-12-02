import { Trophy, Medal, Award, Gift } from 'lucide-react';

function Prizes() {
  const prizes = [
    {
      icon: Trophy,
      title: 'Tournament Championships',
      description: 'Cash prizes up to $5,000 for tournament winners',
      color: 'from-yellow-400 to-amber-500'
    },
    {
      icon: Medal,
      title: 'Rating Milestones',
      description: 'Rewards for achieving 1500, 1800, and 2000+ ratings',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Award,
      title: 'Best Student Award',
      description: 'Quarterly recognition with prizes and certificates',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: Gift,
      title: 'Scholarship Program',
      description: 'Full and partial scholarships for talented students',
      color: 'from-green-400 to-green-600'
    }
  ];

  return (
    <section id="prizes" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Prizes & Recognition</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We believe in celebrating achievement. Our students earn recognition and rewards
            for their dedication and success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {prizes.map((prize, index) => {
            const Icon = prize.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-br ${prize.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{prize.title}</h3>
                <p className="text-slate-600">{prize.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-amber-500 to-amber-700 rounded-2xl p-10 text-white shadow-2xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">$50K+</div>
              <div className="text-amber-100 text-lg">Total Prize Money Awarded</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">150+</div>
              <div className="text-amber-100 text-lg">Tournament Winners</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">25+</div>
              <div className="text-amber-100 text-lg">Scholarship Recipients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Prizes;
