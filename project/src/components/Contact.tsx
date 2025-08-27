import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  destination: string;
  travelDate: string;
  budget: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelDate: '',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        destination: '',
        travelDate: '',
        budget: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: '📞 Call Us',
      details: ['+1 (555) TRIPEX-1', '+1 (555) ADVENTURE'],
      subtitle: 'We\'re always here for you!'
    },
    {
      icon: Mail,
      title: '💌 Email Magic',
      details: ['hello@tripexworld.com', 'adventures@tripexworld.com'],
      subtitle: 'Lightning-fast replies!'
    },
    {
      icon: MapPin,
      title: '📍 Find Us',
      details: ['123 Adventure Boulevard', 'Wanderlust District, Dream City'],
      subtitle: 'Come say hi!'
    },
    {
      icon: Clock,
      title: '⏰ We\'re Open',
      details: ['Mon - Fri: 9 AM - 8 PM', 'Weekends: 10 AM - 6 PM'],
      subtitle: 'Almost always available!'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            🚀 Let's Plan Your Adventure!
          </h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto">
            Ready to turn your travel dreams into reality? Our adventure architects are standing by! 🎯✨
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-bold text-white mb-8">💫 Get In Touch</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2 text-lg">{info.title}</h4>
                      <p className="text-white/60 mb-2">{info.subtitle}</p>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-white/80">{detail}</p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-white/20">
              <h3 className="text-3xl font-bold text-white mb-8">🎨 Design Your Dream Trip</h3>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Send className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">🎉 Message Sent!</h4>
                  <p className="text-white/80 text-lg">Your adventure is about to begin! We'll be in touch super soon! ⚡</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-medium text-white mb-3 text-lg">
                        👤 Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white placeholder-white/60 text-lg"
                        placeholder="What should we call you?"
                      />
                    </div>
                    <div>
                      <label className="block font-medium text-white mb-3 text-lg">
                        📧 Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white placeholder-white/60 text-lg"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-medium text-white mb-3 text-lg">
                        📱 Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white placeholder-white/60 text-lg"
                        placeholder="Your number"
                      />
                    </div>
                    <div>
                      <label className="block font-medium text-white mb-3 text-lg">
                        🌍 Dream Destination
                      </label>
                      <input
                        type="text"
                        name="destination"
                        value={formData.destination}
                        onChange={handleInputChange}
                        className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white placeholder-white/60 text-lg"
                        placeholder="Where's calling your name?"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-medium text-white mb-3 text-lg">
                        📅 When's the Adventure?
                      </label>
                      <input
                        type="date"
                        name="travelDate"
                        value={formData.travelDate}
                        onChange={handleInputChange}
                        className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white text-lg"
                      />
                    </div>
                    <div>
                      <label className="block font-medium text-white mb-3 text-lg">
                        💰 Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white text-lg"
                      >
                        <option value="" className="text-gray-800">What's your budget?</option>
                        <option value="under-1000" className="text-gray-800">💸 Under $1,000</option>
                        <option value="1000-5000" className="text-gray-800">💳 $1,000 - $5,000</option>
                        <option value="5000-10000" className="text-gray-800">💎 $5,000 - $10,000</option>
                        <option value="over-10000" className="text-gray-800">🏆 Sky's the limit!</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-medium text-white mb-3 text-lg">
                      💭 Tell Us Your Dreams
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white placeholder-white/60 text-lg"
                      placeholder="What's your perfect adventure? Any special requests? We're all ears! 👂✨"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-5 rounded-xl font-bold hover:from-pink-600 hover:to-purple-700 transition-all disabled:opacity-50 flex items-center justify-center space-x-3 text-lg shadow-2xl hover:shadow-pink-500/25 hover:scale-105"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <Send className="w-6 h-6" />
                        <span>🚀 Launch My Adventure!</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;