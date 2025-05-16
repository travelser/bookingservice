import React from 'react';
import { CheckSquare } from 'lucide-react';

const FilterSection: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md sticky top-4">
      <h3 className="text-lg font-bold mb-4">Filter by:</h3>
      
      <div className="mb-6">
        <h4 className="font-medium mb-2">Your budget (per night)</h4>
        <div className="space-y-2">
          <label className="flex items-center text-sm">
            <input type="checkbox" className="mr-2" />
            <span>$0 - $50</span>
          </label>
          <label className="flex items-center text-sm">
            <input type="checkbox" className="mr-2" />
            <span>$50 - $100</span>
          </label>
          <label className="flex items-center text-sm">
            <input type="checkbox" className="mr-2" />
            <span>$100 - $200</span>
          </label>
          <label className="flex items-center text-sm">
            <input type="checkbox" className="mr-2" />
            <span>$200+</span>
          </label>
        </div>
      </div>
      
      <div className="mb-6">
        <h4 className="font-medium mb-2">Star rating</h4>
        <div className="flex flex-wrap gap-2">
          <button className="border border-gray-300 px-3 py-1 rounded text-sm hover:bg-gray-100">
            1
          </button>
          <button className="border border-gray-300 px-3 py-1 rounded text-sm hover:bg-gray-100">
            2
          </button>
          <button className="border border-gray-300 px-3 py-1 rounded text-sm hover:bg-gray-100">
            3
          </button>
          <button className="border border-gray-300 px-3 py-1 rounded text-sm hover:bg-gray-100">
            4
          </button>
          <button className="border border-gray-300 px-3 py-1 rounded text-sm hover:bg-gray-100">
            5
          </button>
        </div>
      </div>
      
      <div className="mb-6">
        <h4 className="font-medium mb-2">Property type</h4>
        <div className="space-y-2">
          <label className="flex items-center text-sm">
            <input type="checkbox" className="mr-2" />
            <span>Hotels</span>
          </label>
          <label className="flex items-center text-sm">
            <input type="checkbox" className="mr-2" />
            <span>Apartments</span>
          </label>
          <label className="flex items-center text-sm">
            <input type="checkbox" className="mr-2" />
            <span>Resorts</span>
          </label>
          <label className="flex items-center text-sm">
            <input type="checkbox" className="mr-2" />
            <span>Villas</span>
          </label>
          <label className="flex items-center text-sm">
            <input type="checkbox" className="mr-2" />
            <span>Hostels</span>
          </label>
        </div>
      </div>
      
      <div className="mb-6">
        <h4 className="font-medium mb-2">Facilities</h4>
        <div className="space-y-2">
          <label className="flex items-center text-sm">
            <input type="checkbox" className="mr-2" />
            <span>Free WiFi</span>
          </label>
          <label className="flex items-center text-sm">
            <input type="checkbox" className="mr-2" />
            <span>Parking</span>
          </label>
          <label className="flex items-center text-sm">
            <input type="checkbox" className="mr-2" />
            <span>Pool</span>
          </label>
          <label className="flex items-center text-sm">
            <input type="checkbox" className="mr-2" />
            <span>Spa</span>
          </label>
          <label className="flex items-center text-sm">
            <input type="checkbox" className="mr-2" />
            <span>Restaurant</span>
          </label>
        </div>
      </div>
      
      <button className="w-full bg-[#0071c2] text-white font-medium py-2 rounded hover:bg-blue-700 transition-colors">
        Apply Filters
      </button>
    </div>
  );
};

export default FilterSection;