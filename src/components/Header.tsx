
import React from 'react';
import { Search, User, ChevronDown, Sparkles } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 overflow-hidden border-b border-slate-700">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-green-400 rounded-full opacity-15 animate-bounce"></div>
        <div className="absolute top-1/2 right-0 w-48 h-48 bg-green-300 rounded-full opacity-10 animate-ping"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with unique design */}
          <div className="flex items-center group">
            <div className="relative">
              <div className="bg-green-500/20 backdrop-blur-sm border border-green-400/30 p-3 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                <div className="w-8 h-8 flex items-center justify-center font-bold text-green-400 text-xl relative">
                  F
                  <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-green-300 animate-pulse" />
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white tracking-tight">FlowTip</h1>
              <p className="text-green-400 text-sm">Creator Economy</p>
            </div>
          </div>

          {/* Navigation with floating design */}
          <nav className="hidden md:flex bg-slate-800/50 backdrop-blur-md rounded-full p-2 border border-slate-600/50">
            <a href="#" className="px-6 py-2 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-full transition-all duration-300">
              Home
            </a>
            <a href="#" className="px-6 py-2 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-full transition-all duration-300">
              Discover
            </a>
            <a href="#" className="px-6 py-2 text-white bg-green-500/20 rounded-full font-medium border border-green-400/30 shadow-lg">
              Dashboard
            </a>
          </nav>

          {/* User Menu with unique styling */}
          <div className="flex items-center">
            <div className="bg-slate-800/50 backdrop-blur-md border border-slate-600/50 px-6 py-3 rounded-2xl flex items-center space-x-3 hover:bg-slate-700/50 transition-all duration-300 cursor-pointer shadow-xl">
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-slate-900" />
              </div>
              <span className="text-white font-medium">0xc3b...8863</span>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
