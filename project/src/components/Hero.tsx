import React from 'react';
import { ArrowRight, Plane } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Adventure
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 block">Starts Here</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                🌍 Discover breathtaking destinations • ✈️ Create epic memories • 🎒 Live your wildest travel dreams
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all font-semibold flex items-center justify-center group shadow-2xl hover:shadow-pink-500/25 hover:scale-105"
              >
                🚀 Start Adventure
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white/30 text-white px-8 py-4 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all font-semibold hover:scale-105"
              >
                🔍 Explore More
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500 border border-white/20">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-6 border border-white/20">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mx-auto shadow-lg">
                  <Plane className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white text-center">
                  🌎 150+ Destinations
                </h3>
                <p className="text-white/80 text-center text-lg">
                  Epic adventures across 6 continents waiting for you!
                </p>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse shadow-lg"></div>
                <span className="text-sm font-medium text-white">🔥 Live Support 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;