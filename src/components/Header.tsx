
import React from 'react';
import { Search, User, ChevronDown, Sparkles } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-teal-400 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute top-1/2 right-0 w-48 h-48 bg-emerald-300 rounded-full opacity-25 animate-ping"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with unique design */}
          <div className="flex items-center group">
            <div className="relative">
              <div className="bg-white/20 backdrop-blur-sm border border-white/30 p-3 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                <div className="w-8 h-8 flex items-center justify-center font-bold text-white text-xl relative">
                  F
                  <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-yellow-300 animate-pulse" />
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white tracking-tight">FlowTip</h1>
              <p className="text-emerald-100 text-sm">Creator Economy</p>
            </div>
          </div>

          {/* Navigation with floating design */}
          <nav className="hidden md:flex bg-white/10 backdrop-blur-md rounded-full p-2 border border-white/20">
            <a href="#" className="px-6 py-2 text-white/70 hover:text-white hover:bg-white/20 rounded-full transition-all duration-300">
              Home
            </a>
            <a href="#" className="px-6 py-2 text-white/70 hover:text-white hover:bg-white/20 rounded-full transition-all duration-300">
              Discover
            </a>
            <a href="#" className="px-6 py-2 text-white bg-white/20 rounded-full font-medium border border-white/30 shadow-lg">
              Dashboard
            </a>
          </nav>

          {/* User Menu with unique styling */}
          <div className="flex items-center">
            <div className="bg-white/15 backdrop-blur-md border border-white/25 px-6 py-3 rounded-2xl flex items-center space-x-3 hover:bg-white/20 transition-all duration-300 cursor-pointer shadow-xl">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-300 to-teal-300 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-emerald-800" />
              </div>
              <span className="text-white font-medium">0xc3b...8863</span>
              <ChevronDown className="w-4 h-4 text-white/80" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
