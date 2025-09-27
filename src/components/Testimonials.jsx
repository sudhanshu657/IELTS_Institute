import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      score: "Band 8.5",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww",
      review: "IELTS Pro helped me achieve my target score in just 3 months. The speaking practice sessions were incredibly helpful!"
    },
    {
      name: "Ahmed Hassan",
      score: "Band 7.5",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      review: "The mock tests were exactly like the real exam. I felt completely prepared and confident on test day."
    },
    {
      name: "Priya Sharma",
      score: "Band 8.0",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      review: "Amazing instructors and flexible schedule. I could study while working full-time and still achieved my dream score!"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
  🏆 Our Testimonials
</h2>

          <p className="text-xl text-gray-600">Hear from our successful students</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition duration-300"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
              />
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.review}"</p>
              <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
              <p className="text-blue-600 font-semibold">{testimonial.score}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;