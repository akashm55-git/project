import { Quote } from 'lucide-react';

function Testimonials() {
  const quotes = [
    {
      text: "Chess is life.",
      author: "Bobby Fischer",
      title: "11th World Chess Champion",
      image: "https://images.pexels.com/photos/415263/pexels-photo-415263.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      text: "Every chess master was once a beginner.",
      author: "Irving Chernev",
      title: "Chess Author & Teacher",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      text: "Chess is the struggle against error.",
      author: "Johannes Zukertort",
      title: "Chess Master",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      text: "In life, as in chess, forethought wins.",
      author: "Charles Buxton",
      title: "British Philanthropist",
      image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      text: "Chess is the art of analysis.",
      author: "Mikhail Botvinnik",
      title: "6th World Chess Champion",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      text: "The beauty of a move lies not in its appearance but in the thought behind it.",
      author: "Aron Nimzowitsch",
      title: "Chess Theoretician",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Words of Wisdom</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-600">
            Inspiration from chess legends who changed the game
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-amber-50 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 border border-amber-100"
            >
              <Quote className="w-12 h-12 text-amber-600 mb-4 opacity-50" />
              <p className="text-lg text-slate-700 italic mb-6 leading-relaxed">
                "{quote.text}"
              </p>
              <div className="flex items-center space-x-4">
                <img
                  src={quote.image}
                  alt={quote.author}
                  className="w-16 h-16 rounded-full object-cover border-2 border-amber-500"
                />
                <div>
                  <div className="font-bold text-slate-800">{quote.author}</div>
                  <div className="text-sm text-slate-600">{quote.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
