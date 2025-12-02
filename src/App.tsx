import Hero from './components/Hero';
import About from './components/About';
import Offers from './components/Offers';
import Prizes from './components/Prizes';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-amber-50">
      <Header />
      <Hero />
      <About />
      <Offers />
      <Prizes />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
