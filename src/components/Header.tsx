
import React from 'react';
import { Search, User, ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-emerald-600 text-white p-2 rounded-lg mr-3">
              <div className="w-6 h-6 flex items-center justify-center font-bold">
                F
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">FlowTip</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors duration-200">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors duration-200">
              Discover Creators
            </a>
            <a href="#" className="text-emerald-600 font-medium border-b-2 border-emerald-600 pb-1">
              Dashboard
            </a>
          </nav>

          {/* User Menu */}
          <div className="flex items-center">
            <div className="bg-emerald-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-emerald-700 transition-colors duration-200 cursor-pointer">
              <User className="w-4 h-4" />
              <span className="text-sm font-medium">0xc3b...8863</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
