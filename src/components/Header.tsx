import React from 'react';
import { Bed, Menu, User, Moon, Sun } from 'lucide-react';
import SearchBar from './SearchBar';

const Header: React.FC = () => {
  return (
    <header className="bg-[#003580] text-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Bed className="mr-2" size={28} />
            <span className="text-2xl font-bold">Booking.clone</span>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center">
              <Moon size={18} className="mr-1" />
              <Sun size={18} />
            </div>
            <button className="border border-white px-3 py-1 rounded hover:bg-white hover:text-[#003580] transition-colors">
              List your property
            </button>
            <button className="bg-white text-[#003580] px-3 py-1 rounded font-medium hover:bg-opacity-90 transition-colors">
              Register
            </button>
            <button className="bg-white text-[#003580] px-3 py-1 rounded font-medium hover:bg-opacity-90 transition-colors">
              Sign in
            </button>
          </div>
          
          {/* Mobile menu button */}
          <button className="md:hidden">
            <Menu size={24} />
          </button>
        </div>
        
        {/* Navigation tabs */}
        <div className="flex mt-4 space-x-6 overflow-x-auto pb-2">
          <button className="flex items-center bg-[#1a4b8c] px-3 py-2 rounded-md whitespace-nowrap">
            <Bed className="mr-2" size={16} />
            <span>Stays</span>
          </button>
          <button className="flex items-center opacity-85 hover:opacity-100 whitespace-nowrap">
            <span>Flights</span>
          </button>
          <button className="flex items-center opacity-85 hover:opacity-100 whitespace-nowrap">
            <span>Car rentals</span>
          </button>
          <button className="flex items-center opacity-85 hover:opacity-100 whitespace-nowrap">
            <span>Attractions</span>
          </button>
          <button className="flex items-center opacity-85 hover:opacity-100 whitespace-nowrap">
            <span>Airport taxis</span>
          </button>
        </div>
        
        {/* Hero content */}
        <div className="text-center py-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Find your next stay</h1>
          <p className="text-lg mb-8">Search low prices on hotels, homes and much more...</p>
        </div>
        
        {/* Search bar */}
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;