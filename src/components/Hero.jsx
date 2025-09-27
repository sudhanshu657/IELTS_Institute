import React from 'react';
import { BookOpen, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Achieve Your Dream
              <span className="text-blue-600 block">IELTS Score</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Trusted by 500+ students every year to reach their target band scores and study abroad dreams.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition duration-300 transform hover:scale-105 shadow-lg">
              Get Started
              <ChevronRight className="inline-block ml-2" size={20} />
            </button>
          </div>

          {/* Right Image */}
          <div className="text-center">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition duration-300">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-200 rounded-xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <BookOpen size={64} className="text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800">IELTS Success</h3>
                  <p className="text-gray-600 mt-2">Your pathway to global opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;