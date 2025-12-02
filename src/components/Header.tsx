import { Crown } from 'lucide-react';

function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-amber-600 to-amber-800 p-2 rounded-lg">
              <Crown className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-800">RaniPet</h1>
              <p className="text-xs text-amber-700">Excellence in Every Move</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-slate-700 hover:text-amber-700 font-medium transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-slate-700 hover:text-amber-700 font-medium transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('offers')}
              className="text-slate-700 hover:text-amber-700 font-medium transition-colors"
            >
              Offers
            </button>
            <button
              onClick={() => scrollToSection('prizes')}
              className="text-slate-700 hover:text-amber-700 font-medium transition-colors"
            >
              Prizes
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-slate-700 hover:text-amber-700 font-medium transition-colors"
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
