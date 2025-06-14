
import React from 'react';
import { Search, User, ChevronDown, Sparkles, Zap } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative bg-gradient-to-br from-slate-950 via-emerald-950/20 to-slate-950 overflow-hidden border-b border-emerald-400/20">
      {/* Enhanced animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, #00ff88 0%, transparent 50%), radial-gradient(circle at 75% 75%, #00ff88 0%, transparent 50%)',
          backgroundSize: '100px 100px',
          animation: 'float 6s ease-in-out infinite'
        }}></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-emerald-300 rounded-full animate-pulse opacity-80"></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-emerald-500 rounded-full animate-bounce opacity-40"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Enhanced logo with unique geometry */}
          <div className="flex items-center group cursor-pointer">
            <div className="relative mr-4">
              <div className="relative">
                {/* Outer ring */}
                <div className="w-16 h-16 border-2 border-emerald-400/30 rounded-2xl rotate-12 group-hover:rotate-45 transition-transform duration-500"></div>
                {/* Inner glow */}
                <div className="absolute inset-2 bg-gradient-to-br from-emerald-400/20 to-emerald-500/30 rounded-xl backdrop-blur-sm group-hover:scale-110 transition-all duration-300"></div>
                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <span className="text-2xl font-black text-emerald-400 relative z-10">F</span>
                    <Sparkles className="absolute -top-1 -right-2 w-4 h-4 text-emerald-300 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <h1 className="text-4xl font-black text-white tracking-tighter bg-gradient-to-r from-white to-emerald-100 bg-clip-text">
                FlowTip
              </h1>
              <div className="flex items-center mt-1">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
                <p className="text-emerald-400 text-sm font-medium tracking-wide">Creator Economy</p>
              </div>
            </div>
          </div>

          {/* Enhanced floating navigation */}
          <nav className="hidden md:flex relative">
            <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl p-1 border border-emerald-400/20 shadow-2xl">
              <div className="flex space-x-1">
                <a href="#" className="px-6 py-3 text-slate-400 hover:text-white hover:bg-emerald-400/10 rounded-xl transition-all duration-300 font-medium">
                  Home
                </a>
                <a href="#" className="px-6 py-3 text-slate-400 hover:text-white hover:bg-emerald-400/10 rounded-xl transition-all duration-300 font-medium">
                  Discover
                </a>
                <div className="relative">
                  <a href="#" className="px-6 py-3 text-white bg-gradient-to-r from-emerald-400/20 to-emerald-500/20 rounded-xl font-medium border border-emerald-400/30 shadow-lg backdrop-blur-sm">
                    Dashboard
                  </a>
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-xl blur opacity-20 -z-10"></div>
                </div>
              </div>
            </div>
          </nav>

          {/* Enhanced user menu with better alignment */}
          <div className="flex items-center">
            <div className="relative group">
              <div className="bg-slate-900/60 backdrop-blur-xl border border-emerald-400/20 px-6 py-3 rounded-2xl flex items-center space-x-4 hover:bg-slate-800/60 transition-all duration-300 cursor-pointer shadow-2xl">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                    <User className="w-5 h-5 text-slate-900" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-slate-900 animate-pulse"></div>
                </div>
                <div className="hidden sm:block">
                  <span className="text-white font-semibold text-sm">0xc3b...8863</span>
                  <div className="text-emerald-400 text-xs font-medium">Connected</div>
                </div>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-colors" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
