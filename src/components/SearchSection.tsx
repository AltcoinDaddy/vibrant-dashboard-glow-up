
import React, { useState } from 'react';
import { Search, Filter, Star, Zap, TrendingUp, Users, Sparkles } from 'lucide-react';

const SearchSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 overflow-hidden">
      {/* Enhanced geometric background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Hexagonal pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-emerald-400 rounded-full animate-pulse"
              style={{
                width: Math.random() * 8 + 4 + 'px',
                height: Math.random() * 8 + 4 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animationDelay: Math.random() * 3 + 's',
                animationDuration: (Math.random() * 2 + 2) + 's'
              }}
            />
          ))}
        </div>
        
        {/* Large background elements */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-gradient-to-br from-emerald-400/5 to-emerald-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-br from-emerald-500/5 to-emerald-400/10 rounded-full blur-3xl" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Enhanced hero section with better alignment */}
        <div className="text-center mb-16">
          {/* Status badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-emerald-400/10 to-emerald-500/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-emerald-400/20 group hover:from-emerald-400/20 hover:to-emerald-500/20 transition-all duration-300">
            <div className="relative mr-3">
              <Zap className="w-5 h-5 text-emerald-400" />
              <div className="absolute -inset-1 bg-emerald-400 rounded-full blur opacity-30 animate-pulse"></div>
            </div>
            <span className="text-emerald-400 font-semibold text-sm tracking-wide">Flow Blockchain Ecosystem</span>
            <Sparkles className="w-4 h-4 text-emerald-300 ml-2 animate-pulse" />
          </div>
          
          {/* Main heading with enhanced typography */}
          <div className="relative mb-8">
            <h2 className="text-6xl md:text-7xl font-black text-white mb-4 leading-tight tracking-tighter">
              Discover &
              <br />
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500 bg-clip-text text-transparent">
                  Support
                </span>
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400 to-emerald-500 blur-2xl opacity-20 animate-pulse"></div>
              </span>
              <br />
              Amazing <span className="text-emerald-400">Creators</span>
            </h2>
          </div>
          
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
            Connect with talented creators, support their work with Flow tokens, and become part of the next-generation creator economy built on blockchain technology
          </p>
        </div>

        {/* Enhanced search bar with perfect alignment */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative group">
            {/* Glowing background */}
            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-400 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-1000"></div>
            
            {/* Main search container */}
            <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-emerald-400/20 p-2">
              <div className="flex items-center">
                <div className="flex-1 relative">
                  <div className="absolute left-8 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <Search className="text-slate-400 w-6 h-6" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search creators by name, skills, or interests..."
                    className="w-full pl-20 pr-8 py-6 rounded-3xl border-0 focus:ring-0 focus:outline-none text-lg placeholder-slate-400 bg-transparent text-white font-medium"
                  />
                </div>
                
                {/* Enhanced search button */}
                <button className="relative bg-gradient-to-r from-emerald-400 to-emerald-500 text-slate-900 p-5 rounded-2xl hover:from-emerald-300 hover:to-emerald-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-bold">
                  <Search className="w-6 h-6" />
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-2xl blur opacity-0 hover:opacity-50 transition-opacity duration-300 -z-10"></div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced filter buttons with perfect spacing */}
        <div className="flex justify-center items-center space-x-6 mb-8">
          {[
            { id: 'all', label: 'All Creators', icon: Users },
            { id: 'top', label: 'Top Creators', icon: TrendingUp },
            { id: 'featured', label: 'Featured', icon: Star }
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveFilter(id)}
              className={`group relative px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                activeFilter === id
                  ? 'bg-gradient-to-r from-emerald-400 to-emerald-500 text-slate-900 shadow-xl'
                  : 'bg-slate-800/60 backdrop-blur-sm text-slate-300 hover:bg-slate-700/60 border border-emerald-400/20 hover:text-white hover:border-emerald-400/40'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </div>
              
              {activeFilter === id && (
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-2xl blur opacity-40 -z-10"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
