import React, { useState } from 'react';
import { Menu, X, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 shadow-xl fixed w-full top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Tripex World</h1>
              <p className="text-xs text-white/80">Adventure Awaits</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white/90 hover:text-white transition-all font-medium hover:scale-105"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white/90 hover:text-white transition-all font-medium hover:scale-105"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-white/90 hover:text-white transition-all font-medium hover:scale-105"
            >
              Adventures
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="text-white/90 hover:text-white transition-all font-medium hover:scale-105"
            >
              Stories
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full hover:bg-white/30 transition-all font-medium border border-white/30 hover:scale-105"
            >
              Let's Talk
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-white/90 hover:text-white transition-colors font-medium text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-white/90 hover:text-white transition-colors font-medium text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-white/90 hover:text-white transition-colors font-medium text-left"
              >
                Adventures
              </button>
              <button
                onClick={() => scrollToSection('reviews')}
                className="text-white/90 hover:text-white transition-colors font-medium text-left"
              >
                Stories
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full hover:bg-white/30 transition-colors font-medium text-left w-fit border border-white/30"
              >
                Let's Talk
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;