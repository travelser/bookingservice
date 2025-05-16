import React from 'react';
import { Mail } from 'lucide-react';

const NewsletterSection: React.FC = () => {
  return (
    <div className="bg-[#003580] py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4 text-white">Save time, save money!</h2>
        <p className="text-white mb-6">Sign up and we'll send the best deals to you</p>
        
        <div className="max-w-md mx-auto flex">
          <div className="relative flex-grow">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full pl-10 pr-4 py-3 rounded-l-md focus:outline-none"
            />
          </div>
          <button className="bg-[#0071c2] text-white font-medium px-6 py-3 rounded-r-md hover:bg-blue-700 transition-colors">
            Subscribe
          </button>
        </div>
        
        <div className="mt-4 text-white text-sm">
          <label className="flex items-center justify-center">
            <input type="checkbox" className="mr-2" />
            <span>Send me a link to get the FREE Booking.clone app!</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;