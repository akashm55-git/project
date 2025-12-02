import { Users, Target, Lightbulb, TrendingUp } from 'lucide-react';

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">About ChessMaster Academy</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Chess training"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-slate-800">
              Building Champions Since 2010
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              ChessMaster Academy is a premier chess training institution dedicated to nurturing
              talent and developing strategic thinking. With over 500 successful students and
              numerous national champions, we've established ourselves as the leading chess
              academy in the region.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our expert coaches bring decades of competitive experience and use proven teaching
              methodologies to help students of all levels achieve their chess goals. Whether you're
              a beginner learning the basics or an advanced player preparing for tournaments, we
              provide personalized attention and world-class training.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-slate-800 mb-2">Expert Coaches</h4>
            <p className="text-slate-600">FIDE certified trainers with international experience</p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
            <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-slate-800 mb-2">Focused Training</h4>
            <p className="text-slate-600">Personalized curriculum for each student's level</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-slate-800 mb-2">Strategic Thinking</h4>
            <p className="text-slate-600">Develop critical thinking and problem-solving skills</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
            <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-slate-800 mb-2">Track Progress</h4>
            <p className="text-slate-600">Regular assessments and rating improvements</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
