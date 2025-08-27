import React from 'react';
import { Plane, Hotel, Camera, Mountain, Ship, Car } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Plane,
      title: '✈️ Flight Magic',
      description: 'Score the best flight deals that\'ll make your wallet happy and your wanderlust satisfied!',
      features: ['💰 Unbeatable prices', '🌟 VIP support', '🔄 Flexible changes']
    },
    {
      icon: Hotel,
      title: '🏨 Dream Stays',
      description: 'From luxury palaces to cozy hideaways - we\'ve got your perfect home away from home!',
      features: ['✅ Handpicked gems', '💎 Price guarantee', '🆓 Free cancellation']
    },
    {
      icon: Camera,
      title: '📸 Epic Adventures',
      description: 'Ready-made adventures that\'ll fill your camera roll and your heart with pure joy!',
      features: ['🎯 Expert guides', '🎁 All-inclusive fun', '🎨 Custom experiences']
    },
    {
      icon: Mountain,
      title: '🏔️ Adrenaline Rush',
      description: 'For thrill-seekers who think "safe" is a four-letter word! Get your heart pumping!',
      features: ['🛡️ Safety first', '⚡ Pro equipment', '🦸‍♂️ Fearless guides']
    },
    {
      icon: Ship,
      title: '🚢 Ocean Escapes',
      description: 'Sail away to paradise where the only decision you\'ll make is pool or beach!',
      features: ['🛏️ Luxury cabins', '🎭 Non-stop fun', '🍽️ Gourmet feasts']
    },
    {
      icon: Car,
      title: '🚗 Smooth Rides',
      description: 'From airport to adventure - we\'ll get you there in style and comfort!',
      features: ['👨‍✈️ Pro drivers', '🚙 Luxury wheels', '🛫 Airport magic']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            🎯 Our Epic Services
          </h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto">
            We've got everything you need to turn your travel dreams into reality! 🌟 No stress, just pure adventure! 🎉
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all group hover:scale-105 border border-white/20">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-6 group-hover:from-purple-500 group-hover:to-pink-600 transition-all shadow-lg">
                  <IconComponent className="w-10 h-10 text-white transition-all" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-white/80 mb-6 text-lg">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-white/70">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm rounded-3xl p-10 text-center border border-white/20">
          <h3 className="text-3xl font-bold text-white mb-6">
            🎨 Want Something Totally Unique?
          </h3>
          <p className="text-white/80 mb-8 text-xl">
            Our travel wizards can craft a completely personalized adventure just for you! 🧙‍♂️✨
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-10 py-4 rounded-full font-bold hover:from-pink-600 hover:to-purple-700 transition-all shadow-2xl hover:shadow-pink-500/25 hover:scale-105"
          >
            🚀 Create My Dream Trip
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;