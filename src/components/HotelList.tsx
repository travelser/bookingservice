import React from 'react';
import HotelCard from './HotelCard';
import { hotels } from '../data/mockData';
import FilterSection from './FilterSection';

const HotelList: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        <aside className="md:w-1/4">
          <FilterSection />
        </aside>
        
        <div className="md:w-3/4">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">256 properties found</h2>
            <div className="flex items-center text-sm">
              <button className="bg-[#0071c2] text-white px-3 py-1 rounded-full mr-2">
                Our Top Picks
              </button>
              <button className="text-gray-700 hover:bg-gray-100 px-3 py-1 rounded-full mr-2">
                Lowest Price First
              </button>
              <button className="text-gray-700 hover:bg-gray-100 px-3 py-1 rounded-full">
                Best Rated
              </button>
            </div>
          </div>
          
          <div className="space-y-4">
            {hotels.map(hotel => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
          
          <div className="mt-8 flex justify-center">
            <button className="bg-[#0071c2] text-white font-medium py-2 px-6 rounded hover:bg-blue-700 transition-colors">
              Load More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelList;