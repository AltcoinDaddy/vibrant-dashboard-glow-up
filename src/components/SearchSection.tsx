
import React, { useState } from 'react';
import { Search, Filter, Star, Zap } from 'lucide-react';

const SearchSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Find and support content creators on the Flow blockchain
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover talented creators, support their work, and be part of the Flow ecosystem
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search creators..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl border-0 shadow-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none text-lg"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-emerald-600 text-white p-3 rounded-xl hover:bg-emerald-700 transition-colors duration-200">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
              activeFilter === 'all'
                ? 'bg-emerald-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            All Creators
          </button>
          <button
            onClick={() => setActiveFilter('top')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-200 flex items-center space-x-2 ${
              activeFilter === 'top'
                ? 'bg-emerald-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Star className="w-4 h-4" />
            <span>Top Creators</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
