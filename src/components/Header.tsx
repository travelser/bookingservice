import React from 'react';
import { Bed, Phone } from 'lucide-react';
import SearchBar from './SearchBar';

const Header: React.FC = () => {
  return (
    <header className="bg-[#003580] text-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo and Phone */}
          <div className="flex items-center">
            <Bed className="mr-2" size={28} />
            <span className="text-2xl font-bold">Booking mx</span>
          </div>
          <a 
            href="tel:5550677546" 
            className="flex items-center text-sm hover:text-gray-200 transition-colors"
          >
            <Phone size={16} className="mr-1" />
            <span>555 067 7546</span>
          </a>
        </div>
        
        {/* Navigation tabs */}
        <div className="flex mt-4 space-x-6 overflow-x-auto pb-2">
          <button className="flex items-center bg-[#1a4b8c] px-3 py-2 rounded-md whitespace-nowrap">
            <Bed className="mr-2" size={16} />
            <span>Alojamientos</span>
          </button>
          <button className="flex items-center opacity-85 hover:opacity-100 whitespace-nowrap">
            <span>Vuelos</span>
          </button>
          <button className="flex items-center opacity-85 hover:opacity-100 whitespace-nowrap">
            <span>Alquiler de coches</span>
          </button>
          <button className="flex items-center opacity-85 hover:opacity-100 whitespace-nowrap">
            <span>Atracciones</span>
          </button>
          <button className="flex items-center opacity-85 hover:opacity-100 whitespace-nowrap">
            <span>Taxis aeropuerto</span>
          </button>
        </div>
        
        {/* Hero content */}
        <div className="text-center py-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Encuentra tu próximo alojamiento</h1>
          <p className="text-lg mb-8">Busca los mejores precios en hoteles, casas y mucho más...</p>
        </div>
        
        {/* Search bar */}
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;