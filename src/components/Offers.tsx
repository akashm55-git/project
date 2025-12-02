import { Check, Clock, Calendar, Sparkles } from 'lucide-react';

function Offers() {
  const plans = [
    {
      duration: '6 Months',
      price: '$599',
      icon: Clock,
      features: [
        '48 training sessions',
        '2 sessions per week',
        'Personalized study plan',
        'Online resources access',
        'Monthly progress reports',
        'Practice puzzles & games'
      ],
      popular: false,
      color: 'from-blue-500 to-blue-700'
    },
    {
      duration: '1 Year',
      price: '$999',
      icon: Calendar,
      features: [
        '96 training sessions',
        '2 sessions per week',
        'Personalized study plan',
        'Online resources access',
        'Bi-weekly progress reports',
        'Tournament preparation',
        'Free tournament entry (1x)',
        'Advanced tactics training'
      ],
      popular: true,
      color: 'from-amber-500 to-amber-700'
    }
  ];

  return (
    <section id="offers" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Training Programs</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose the perfect training plan to elevate your chess skills. All programs include
            expert coaching and comprehensive learning materials.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all hover:scale-105 ${
                  plan.popular ? 'ring-4 ring-amber-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-2 rounded-bl-2xl font-semibold flex items-center space-x-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div className={`bg-gradient-to-r ${plan.color} p-8 text-white`}>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold">{plan.duration}</h3>
                      <p className="text-white/90">Training Program</p>
                    </div>
                  </div>
                  <div className="text-5xl font-bold">{plan.price}</div>
                  <p className="text-white/80 mt-2">One-time payment</p>
                </div>

                <div className="p-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="bg-green-100 rounded-full p-1 mt-0.5">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className={`w-full mt-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg'
                        : 'bg-slate-200 text-slate-800 hover:bg-slate-300'
                    }`}
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg border-2 border-green-200">
          <div className="flex items-start space-x-6">
            <div className="bg-green-600 p-4 rounded-xl">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-slate-800 mb-3">
                Open Tournament Participation
              </h3>
              <p className="text-lg text-slate-700 mb-4">
                Not enrolled in our academy? No problem! We welcome external players to participate
                in our monthly chess tournaments. Perfect for players looking to gain competitive
                experience and earn ratings.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-3xl font-bold text-green-600 mb-1">$25</div>
                  <div className="text-slate-600">Entry Fee</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-3xl font-bold text-green-600 mb-1">Monthly</div>
                  <div className="text-slate-600">Tournament Schedule</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-3xl font-bold text-green-600 mb-1">FIDE</div>
                  <div className="text-slate-600">Rated Events</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offers;
