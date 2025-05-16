import React, { useState } from 'react';
import { Search, Calendar, Users, ChevronUp, ChevronDown } from 'lucide-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const SearchBar: React.FC = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [adults, setAdults] = useState(2);
  const [rooms, setRooms] = useState(1);
  const [showGuestSelector, setShowGuestSelector] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.reload();
  };

  const handleAdultsChange = (value: number) => {
    setAdults(Math.min(Math.max(value, 1), 5));
  };

  const handleRoomsChange = (value: number) => {
    setRooms(Math.min(Math.max(value, 1), 3));
  };

  return (
    <form onSubmit={handleSearch} className="bg-[#febb02] p-2 md:p-3 rounded-md -mb-6 relative z-10">
      <div className="flex flex-col md:flex-row md:items-center gap-2">
        <div className="bg-white flex items-center flex-1 p-2 rounded-md border-2 border-transparent focus-within:border-blue-400">
          <Search className="text-gray-400 mr-2" size={20} />
          <input 
            type="text" 
            placeholder="Where are you going?" 
            className="outline-none w-full text-gray-800" 
          />
        </div>
        
        <div className="bg-white flex items-center p-2 rounded-md border-2 border-transparent">
          <Calendar className="text-gray-400 mr-2" size={20} />
          <div className="flex gap-2 items-center">
            <DatePicker
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              className="outline-none text-gray-800 w-28"
              dateFormat="MMM d, yyyy"
            />
            <span className="text-gray-400">—</span>
            <DatePicker
              selected={endDate}
              onChange={(date: Date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              className="outline-none text-gray-800 w-28"
              dateFormat="MMM d, yyyy"
            />
          </div>
        </div>
        
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowGuestSelector(!showGuestSelector)}
            className="bg-white flex items-center p-2 rounded-md border-2 border-transparent hover:border-blue-400 transition-colors w-full md:w-auto"
          >
            <Users className="text-gray-400 mr-2" size={20} />
            <span className="text-gray-800">{adults} adults · {rooms} room{rooms > 1 ? 's' : ''}</span>
            {showGuestSelector ? (
              <ChevronUp className="ml-2 text-gray-400" size={20} />
            ) : (
              <ChevronDown className="ml-2 text-gray-400" size={20} />
            )}
          </button>

          {showGuestSelector && (
            <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg p-4 z-50">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-800">Adults</span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => handleAdultsChange(adults - 1)}
                    className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:border-blue-400 text-gray-600 hover:text-blue-600 transition-colors"
                    disabled={adults <= 1}
                  >
                    -
                  </button>
                  <span className="w-4 text-center">{adults}</span>
                  <button
                    type="button"
                    onClick={() => handleAdultsChange(adults + 1)}
                    className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:border-blue-400 text-gray-600 hover:text-blue-600 transition-colors"
                    disabled={adults >= 5}
                  >
                    +
                  </button>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-800">Rooms</span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => handleRoomsChange(rooms - 1)}
                    className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:border-blue-400 text-gray-600 hover:text-blue-600 transition-colors"
                    disabled={rooms <= 1}
                  >
                    -
                  </button>
                  <span className="w-4 text-center">{rooms}</span>
                  <button
                    type="button"
                    onClick={() => handleRoomsChange(rooms + 1)}
                    className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:border-blue-400 text-gray-600 hover:text-blue-600 transition-colors"
                    disabled={rooms >= 3}
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowGuestSelector(false)}
                className="w-full bg-[#0071c2] text-white font-medium py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Done
              </button>
            </div>
          )}
        </div>
        
        <button 
          type="submit"
          className="bg-[#0071c2] text-white font-medium py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;