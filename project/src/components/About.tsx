import React from 'react';
import { Users, Award, Globe, Heart } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced travel professionals dedicated to your perfect journey'
    },
    {
      icon: Award,
      title: 'Quality Service',
      description: 'Award-winning service with attention to every detail'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Partnerships worldwide ensuring seamless travel experiences'
    },
    {
      icon: Heart,
      title: 'Personalized Care',
      description: 'Tailored itineraries crafted with passion and expertise'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
            🌟 Why Choose Us?
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            We're not just another travel company - we're your adventure architects! 🏗️ Creating mind-blowing experiences that'll make your Instagram followers jealous! 📸
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-indigo-600">🚀 Our Mission</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              We turn "I wish I could travel there" into "OMG, I can't believe I just did that!" 🤯 Our squad of travel ninjas crafts experiences so epic, you'll need a new passport just for the stamps! 
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              From sunrise yoga in Bali 🧘‍♀️ to midnight street food tours in Bangkok 🍜, we make sure every moment is pure magic! ✨
            </p>
            <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-8 rounded-2xl border border-pink-200">
              <h4 className="font-bold text-purple-600 mb-3 text-xl">💫 What Makes Us Special</h4>
              <p className="text-purple-800 text-lg">
                We don't just book trips - we create life-changing adventures that'll have you saying "That was the best decision ever!" 🙌
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 rounded-3xl p-8 shadow-xl">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">25K+</div>
                <div className="text-sm text-gray-600">🎉 Happy Adventurers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">150+</div>
                <div className="text-sm text-gray-600">🌍 Epic Destinations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-600 mb-2">8+</div>
                <div className="text-sm text-gray-600">⭐ Years of Magic</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">99.9%</div>
                <div className="text-sm text-gray-600">😍 Mind-Blown Rate</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center group hover:scale-105 transition-all">
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-pink-500 group-hover:to-purple-600 transition-all shadow-lg">
                  <IconComponent className="w-10 h-10 text-white transition-all" />
                </div>
                <h4 className="text-2xl font-bold text-indigo-600 mb-3">{feature.title}</h4>
                <p className="text-gray-700 text-lg">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;