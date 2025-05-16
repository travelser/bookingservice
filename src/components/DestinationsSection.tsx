import React from 'react';
import DestinationCard from './DestinationCard';
import { destinations } from '../data/mockData';

const DestinationsSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6">Top Destinations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {destinations.map(destination => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </div>
  );
};

export default DestinationsSection;