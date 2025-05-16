import React from 'react';
import { Star, Wifi, Coffee, Minimize as Swimming, Dumbbell } from 'lucide-react';
import { HotelType } from '../types';

interface HotelCardProps {
  hotel: HotelType;
}

const amenityIcons: Record<string, React.ReactNode> = {
  'Free WiFi': <Wifi size={16} className="mr-1" />,
  'Restaurant': <Coffee size={16} className="mr-1" />,
  'Pool': <Swimming size={16} className="mr-1" />,
  'Gym': <Dumbbell size={16} className="mr-1" />,
};

const HotelCard: React.FC<HotelCardProps> = ({ hotel }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="md:flex">
        {/* Image */}
        <div className="md:w-1/3 h-48 md:h-auto relative">
          <img 
            src={hotel.image} 
            alt={hotel.name} 
            className="w-full h-full object-cover"
          />
          {hotel.discount && (
            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-medium">
              {hotel.discount}% OFF
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="md:w-2/3 p-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <h3 className="text-xl font-bold text-blue-800">{hotel.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{hotel.location}</p>
              <div className="flex items-center mb-3">
                <div className="bg-[#003580] text-white px-1 py-0.5 rounded mr-2 text-sm font-bold flex items-center">
                  {hotel.rating}
                </div>
                <div className="flex">
                  {Array.from({ length: Math.round(hotel.rating / 2) }).map((_, index) => (
                    <Star key={index} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-gray-500 text-sm ml-2">({hotel.reviewCount} reviews)</span>
              </div>
              <p className="text-gray-700 mb-3">{hotel.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-3">
                {hotel.amenities.slice(0, 4).map((amenity, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded flex items-center">
                    {amenityIcons[amenity] || null}
                    {amenity}
                  </span>
                ))}
              </div>
              
              {hotel.specialOffer && (
                <div className="text-green-600 text-sm font-medium mb-3">
                  {hotel.specialOffer}
                </div>
              )}
            </div>
            
            <div className="mt-4 md:mt-0 md:text-right">
              <div className="md:mb-auto">
                <div className="text-xl font-bold">
                  {hotel.currency} {hotel.price}
                </div>
                <div className="text-gray-500 text-sm">per night</div>
                <div className="text-gray-500 text-sm mb-4">includes taxes and fees</div>
              </div>
              
              <button className="bg-[#0071c2] text-white font-medium py-2 px-4 rounded w-full md:w-auto hover:bg-blue-700 transition-colors">
                Reserve
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;