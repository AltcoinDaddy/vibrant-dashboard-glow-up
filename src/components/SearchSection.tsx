
import React, { useState } from 'react';
import { Search, Filter, Star, Zap, TrendingUp, Users } from 'lucide-react';

const SearchSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100 py-16 overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-emerald-400 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-teal-400 rotate-45 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/3 w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-5 h-5 bg-teal-300 rounded-full animate-ping"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero content with unique layout */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-emerald-100 px-4 py-2 rounded-full mb-6 border border-emerald-200">
            <Zap className="w-4 h-4 text-emerald-600 mr-2" />
            <span className="text-emerald-700 font-medium text-sm">Flow Blockchain Ecosystem</span>
          </div>
          
          <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Discover & Support
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Amazing Creators
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Connect with talented creators, support their work with Flow tokens, and become part of the next-generation creator economy
          </p>
        </div>

        {/* Unique search bar with floating design */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl border border-emerald-100">
              <div className="flex items-center p-2">
                <div className="flex-1 relative">
                  <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                  <input
                    type="text"
                    placeholder="Search creators by name, skills, or interests..."
                    className="w-full pl-16 pr-6 py-5 rounded-3xl border-0 focus:ring-0 focus:outline-none text-lg placeholder-gray-400"
                  />
                </div>
                <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-4 rounded-2xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <Search className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Creative filter buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setActiveFilter('all')}
            className={`group relative px-8 py-4 rounded-2xl font-medium transition-all duration-300 ${
              activeFilter === 'all'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-xl'
                : 'bg-white/70 backdrop-blur-sm text-gray-700 hover:bg-white border border-emerald-200'
            }`}
          >
            <Users className="w-5 h-5 inline mr-2" />
            All Creators
            {activeFilter === 'all' && (
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl blur opacity-30 -z-10"></div>
            )}
          </button>
          
          <button
            onClick={() => setActiveFilter('top')}
            className={`group relative px-8 py-4 rounded-2xl font-medium transition-all duration-300 ${
              activeFilter === 'top'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-xl'
                : 'bg-white/70 backdrop-blur-sm text-gray-700 hover:bg-white border border-emerald-200'
            }`}
          >
            <TrendingUp className="w-5 h-5 inline mr-2" />
            Top Creators
            {activeFilter === 'top' && (
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl blur opacity-30 -z-10"></div>
            )}
          </button>
          
          <button className="group relative px-8 py-4 rounded-2xl font-medium bg-white/70 backdrop-blur-sm text-gray-700 hover:bg-white border border-emerald-200 transition-all duration-300">
            <Star className="w-5 h-5 inline mr-2" />
            Featured
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
