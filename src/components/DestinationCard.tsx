import React from 'react';
import { DestinationType } from '../types';

interface DestinationCardProps {
  destination: DestinationType;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  return (
    <div className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-4 text-white">
        <h3 className="font-bold text-xl mb-1">{destination.name}</h3>
        <p className="text-sm opacity-90 mb-2">{destination.country}</p>
        <p className="text-sm">{destination.properties} properties</p>
      </div>
    </div>
  );
};

export default DestinationCard;