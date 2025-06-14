
import React from 'react';
import { Search, User, ChevronDown, Sparkles, Zap } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative bg-gradient-to-br from-gray-950 via-green-950/20 to-gray-950 overflow-hidden border-b border-green-400/20">
      {/* Enhanced animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, #22c55e 0%, transparent 50%), radial-gradient(circle at 75% 75%, #16a34a 0%, transparent 50%)',
          backgroundSize: '100px 100px',
          animation: 'float 6s ease-in-out infinite'
        }}></div>
      </div>
      
      {/* Floating particles with enhanced animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-green-300 rounded-full animate-pulse opacity-80"></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-green-500 rounded-full animate-bounce opacity-40"></div>
        <div className="absolute top-1/3 left-1/2 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping opacity-70" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-green-300 rounded-full animate-pulse opacity-50" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Enhanced logo with unique geometry and animations */}
          <div className="flex items-center group cursor-pointer">
            <div className="relative mr-4">
              <div className="relative">
                {/* Outer ring with enhanced animation */}
                <div className="w-16 h-16 border-2 border-green-400/30 rounded-2xl rotate-12 group-hover:rotate-45 transition-transform duration-500 animate-pulse"></div>
                {/* Inner glow with breathing effect */}
                <div className="absolute inset-2 bg-gradient-to-br from-green-400/20 to-green-500/30 rounded-xl backdrop-blur-sm group-hover:scale-110 transition-all duration-300 animate-pulse"></div>
                {/* Center icon with enhanced effects */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <span className="text-2xl font-black text-green-400 relative z-10 group-hover:scale-110 transition-transform duration-300">F</span>
                    <Sparkles className="absolute -top-1 -right-2 w-4 h-4 text-green-300 animate-pulse group-hover:animate-spin" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <h1 className="text-4xl font-black text-white tracking-tighter bg-gradient-to-r from-white to-green-100 bg-clip-text group-hover:scale-105 transition-transform duration-300">
                FlowTip
              </h1>
              <div className="flex items-center mt-1">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <p className="text-green-400 text-sm font-medium tracking-wide">Creator Economy</p>
              </div>
            </div>
          </div>

          {/* Enhanced floating navigation with animations */}
          <nav className="hidden md:flex relative">
            <div className="bg-gray-900/60 backdrop-blur-xl rounded-2xl p-1 border border-green-400/20 shadow-2xl hover:border-green-400/40 transition-all duration-300">
              <div className="flex space-x-1">
                <a href="#" className="px-6 py-3 text-gray-400 hover:text-white hover:bg-green-400/10 rounded-xl transition-all duration-300 font-medium hover:scale-105">
                  Home
                </a>
                <a href="#" className="px-6 py-3 text-gray-400 hover:text-white hover:bg-green-400/10 rounded-xl transition-all duration-300 font-medium hover:scale-105">
                  Discover
                </a>
                <div className="relative">
                  <a href="#" className="px-6 py-3 text-white bg-gradient-to-r from-green-400/20 to-green-500/20 rounded-xl font-medium border border-green-400/30 shadow-lg backdrop-blur-sm hover:scale-105 transition-all duration-300">
                    Dashboard
                  </a>
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-500 rounded-xl blur opacity-20 -z-10 animate-pulse"></div>
                </div>
              </div>
            </div>
          </nav>

          {/* Enhanced user menu with better animations */}
          <div className="flex items-center">
            <div className="relative group">
              <div className="bg-gray-900/60 backdrop-blur-xl border border-green-400/20 px-6 py-3 rounded-2xl flex items-center space-x-4 hover:bg-gray-800/60 transition-all duration-300 cursor-pointer shadow-2xl hover:border-green-400/40 hover:scale-105">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                    <User className="w-5 h-5 text-gray-900" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-900 animate-ping"></div>
                </div>
                <div className="hidden sm:block">
                  <span className="text-white font-semibold text-sm">0xc3b...8863</span>
                  <div className="text-green-400 text-xs font-medium animate-pulse">Connected</div>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-green-400 transition-colors group-hover:animate-bounce" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
