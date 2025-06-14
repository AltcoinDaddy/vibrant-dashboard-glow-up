
import React, { useState } from 'react';
import { Search, Filter, Star, Zap, TrendingUp, Users } from 'lucide-react';

const SearchSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-green-400 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-green-500 rotate-45 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/3 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-5 h-5 bg-green-300 rounded-full animate-ping"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero content with unique layout */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-green-500/10 px-4 py-2 rounded-full mb-6 border border-green-400/20">
            <Zap className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-green-400 font-medium text-sm">Flow Blockchain Ecosystem</span>
          </div>
          
          <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
            Discover & Support
            <br />
            <span className="bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
              Amazing Creators
            </span>
          </h2>
          
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Connect with talented creators, support their work with Flow tokens, and become part of the next-generation creator economy
          </p>
        </div>

        {/* Unique search bar with floating design */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-500 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative bg-slate-800 rounded-3xl shadow-2xl border border-slate-600">
              <div className="flex items-center p-2">
                <div className="flex-1 relative">
                  <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-slate-400 w-6 h-6" />
                  <input
                    type="text"
                    placeholder="Search creators by name, skills, or interests..."
                    className="w-full pl-16 pr-6 py-5 rounded-3xl border-0 focus:ring-0 focus:outline-none text-lg placeholder-slate-400 bg-transparent text-white"
                  />
                </div>
                <button className="bg-gradient-to-r from-green-500 to-green-400 text-white p-4 rounded-2xl hover:from-green-400 hover:to-green-500 transition-all duration-300 shadow-lg hover:shadow-xl">
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
                ? 'bg-gradient-to-r from-green-500 to-green-400 text-white shadow-xl'
                : 'bg-slate-800/50 backdrop-blur-sm text-slate-400 hover:bg-slate-700/50 border border-slate-600/50 hover:text-white'
            }`}
          >
            <Users className="w-5 h-5 inline mr-2" />
            All Creators
            {activeFilter === 'all' && (
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-500 rounded-2xl blur opacity-30 -z-10"></div>
            )}
          </button>
          
          <button
            onClick={() => setActiveFilter('top')}
            className={`group relative px-8 py-4 rounded-2xl font-medium transition-all duration-300 ${
              activeFilter === 'top'
                ? 'bg-gradient-to-r from-green-500 to-green-400 text-white shadow-xl'
                : 'bg-slate-800/50 backdrop-blur-sm text-slate-400 hover:bg-slate-700/50 border border-slate-600/50 hover:text-white'
            }`}
          >
            <TrendingUp className="w-5 h-5 inline mr-2" />
            Top Creators
            {activeFilter === 'top' && (
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-500 rounded-2xl blur opacity-30 -z-10"></div>
            )}
          </button>
          
          <button className="group relative px-8 py-4 rounded-2xl font-medium bg-slate-800/50 backdrop-blur-sm text-slate-400 hover:bg-slate-700/50 border border-slate-600/50 transition-all duration-300 hover:text-white">
            <Star className="w-5 h-5 inline mr-2" />
            Featured
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
