import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../data/mockData';

const TestimonialsSection: React.FC = () => {
  return (
    <div className="bg-blue-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">What Guests Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4" 
                />
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.country}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <Star key={index} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700">"{testimonial.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;