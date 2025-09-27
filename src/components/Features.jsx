
import React from 'react';
import { Users, BookOpen, Trophy, Clock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Users size={48} />,
      title: "Speaking Practice",
      description: "Interactive speaking sessions with experienced instructors and AI-powered feedback.",
      gradient: "from-purple-400 to-pink-400",
      bgGradient: "from-purple-50 to-pink-50",
      iconBg: "bg-gradient-to-r from-purple-500 to-pink-500"
    },
    {
      icon: <BookOpen size={48} />,
      title: "Mock Tests",
      description: "Full-length practice tests that simulate real IELTS exam conditions.",
      gradient: "from-blue-400 to-cyan-400",
      bgGradient: "from-blue-50 to-cyan-50",
      iconBg: "bg-gradient-to-r from-blue-500 to-cyan-500"
    },
    {
      icon: <Trophy size={48} />,
      title: "AI Band Score",
      description: "Get instant band score predictions with detailed performance analysis.",
      gradient: "from-yellow-400 to-orange-400",
      bgGradient: "from-yellow-50 to-orange-50",
      iconBg: "bg-gradient-to-r from-yellow-500 to-orange-500"
    },
    {
      icon: <Clock size={48} />,
      title: "Flexible Timing",
      description: "Study at your own pace with 24/7 access to course materials and practice tests.",
      gradient: "from-green-400 to-emerald-400",
      bgGradient: "from-green-50 to-emerald-50",
      iconBg: "bg-gradient-to-r from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
          <div className="text-center mb-16">
           
           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
  Why Choose IELTS
</h2>

          <p className="text-xl text-gray-600">Comprehensive preparation tools designed for your success</p>
         </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${feature.bgGradient} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 border border-white/20 backdrop-blur-sm overflow-hidden`}
            >
              {/* Card Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
              
              {/* Card Content */}
              <div className="relative p-8 text-center">
                {/* Icon Container */}
                <div className="relative mb-8">
                  <div className={`w-20 h-20 ${feature.iconBg} rounded-2xl flex items-center justify-center mx-auto shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                    <div className="text-white transform group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  {/* Icon Glow */}
                  <div className={`absolute inset-0 w-20 h-20 ${feature.iconBg} rounded-2xl mx-auto opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500`}></div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Hover Arrow */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <div className={`w-8 h-8 ${feature.iconBg} rounded-full flex items-center justify-center`}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>


              </div>

              {/* Bottom Border Animation */}
              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 max-w-2xl mx-auto border border-white/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your IELTS Journey?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of successful students who achieved their target scores with our proven methods.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.05); opacity: 0.4; }
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Features;