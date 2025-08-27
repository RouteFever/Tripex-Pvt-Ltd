import React from 'react';
import { Star, Quote } from 'lucide-react';

const Reviews: React.FC = () => {
  const reviews = [
    {
      name: 'Sarah ✨',
      location: 'New York 🗽',
      rating: 5,
      review: 'OMG! Best honeymoon EVER! 💕 They literally made our European dream come true. Every moment was pure magic! Already planning our next adventure! 🥰',
      trip: '💒 European Honeymoon Magic'
    },
    {
      name: 'Raj 🎉',
      location: 'Mumbai 🇮🇳',
      rating: 5,
      review: 'These guys are LEGENDS! 🙌 Our Thailand family trip was absolutely incredible. Kids are still talking about it! Worth every penny! 💯',
      trip: '👨‍👩‍👧‍👦 Thailand Family Adventure'
    },
    {
      name: 'Emma 🌟',
      location: 'London 🇬🇧',
      rating: 5,
      review: 'Mind = BLOWN! 🤯 Nepal was absolutely breathtaking! The team made everything so smooth and stress-free. I felt like a VIP the entire time! 👑',
      trip: '🏔️ Nepal Mountain Adventure'
    },
    {
      name: 'Michael 🚀',
      location: 'Singapore 🇸🇬',
      rating: 5,
      review: 'BEST. TRIP. EVER! 🎌 Japan was absolutely phenomenal! They knew exactly what we wanted before we even knew it ourselves! Pure genius! 🧠✨',
      trip: '🗾 Custom Japan Experience'
    },
    {
      name: 'Priya 💫',
      location: 'Delhi 🇮🇳',
      rating: 5,
      review: 'Dubai was absolutely INSANE! 🏙️ Felt like living in a movie! The luxury, the experiences, everything was perfect! Can\'t wait to go back! 😍',
      trip: '🏜️ Dubai Luxury Escape'
    },
    {
      name: 'David 🌊',
      location: 'Sydney 🇦🇺',
      rating: 5,
      review: 'South America blew my mind! 🌎 From the Amazon to Machu Picchu - every single day was an adventure! These guys are travel wizards! 🧙‍♂️',
      trip: '🦜 South America Explorer'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-6">
            💬 Real Stories, Real Adventures
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Our adventurers can't stop raving about their epic journeys! 🎉 These stories will give you serious wanderlust! 🌍✨
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 relative hover:shadow-2xl transition-all hover:scale-105 border border-purple-100 shadow-lg">
              <Quote className="w-10 h-10 text-purple-300 mb-6" />
              
              <div className="flex mb-4">
                {renderStars(review.rating)}
              </div>
              
              <p className="text-gray-800 mb-6 leading-relaxed text-lg font-medium">
                "{review.review}"
              </p>
              
              <div className="space-y-2">
                <div>
                  <div className="font-bold text-purple-600 text-lg">{review.name}</div>
                  <div className="text-gray-500">{review.location}</div>
                </div>
                <div className="text-pink-600 font-bold">
                  {review.trip}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-indigo-100 rounded-3xl p-10 inline-block shadow-xl">
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">4.9/5</div>
                <div className="text-gray-600">⭐ Epic Rating</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-600 mb-2">25,000+</div>
                <div className="text-gray-600">🎉 Happy Adventurers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">99.9%</div>
                <div className="text-gray-600">💯 Would Travel Again</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;