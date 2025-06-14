
import React from 'react';
import { Users, DollarSign, TrendingUp, Sparkles } from 'lucide-react';

const StatsCards = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Creative Creators Card */}
        <div className="group relative">
          <div className="absolute -inset-1 bg-gradient-to-br from-green-400 via-green-500 to-green-400 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
          <div className="relative bg-slate-800 rounded-3xl shadow-2xl p-8 border border-slate-600 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
            {/* Floating decorative elements */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
            <div className="absolute top-6 right-8 w-1 h-1 bg-green-300 rounded-full animate-pulse"></div>
            
            <div className="flex items-start justify-between mb-6">
              <div className="relative">
                <div className="bg-gradient-to-br from-green-500/20 to-green-400/20 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 border border-green-400/20">
                  <Users className="w-10 h-10 text-green-400" />
                </div>
                <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-green-300 animate-pulse" />
              </div>
              
              <div className="text-right">
                <div className="text-4xl font-bold text-white mb-1">
                  <span className="bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
                    5
                  </span>
                </div>
                <div className="text-sm text-slate-400 font-medium">Active Creators</div>
                <div className="inline-flex items-center bg-green-500/10 px-2 py-1 rounded-full mt-2 border border-green-400/20">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></div>
                  <span className="text-xs text-green-400 font-medium">Growing</span>
                </div>
              </div>
            </div>
            
            {/* Creative progress bar */}
            <div className="relative">
              <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                <div className="bg-gradient-to-r from-green-400 to-green-500 h-3 rounded-full w-1/4 transition-all duration-1000 relative">
                  <div className="absolute inset-0 bg-white/30 rounded-full animate-pulse"></div>
                </div>
              </div>
              <div className="flex justify-between text-xs text-slate-400 mt-2">
                <span>5 / 20 Goal</span>
                <span>25%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Creative Earnings Card */}
        <div className="group relative">
          <div className="absolute -inset-1 bg-gradient-to-br from-green-400 via-green-500 to-green-400 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
          <div className="relative bg-slate-800 rounded-3xl shadow-2xl p-8 border border-slate-600 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
            {/* Floating coins animation */}
            <div className="absolute top-4 right-4">
              <div className="relative">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce"></div>
                <div className="absolute top-1 left-1 w-1 h-1 bg-green-200 rounded-full"></div>
              </div>
            </div>
            
            <div className="flex items-start justify-between mb-6">
              <div className="relative">
                <div className="bg-gradient-to-br from-green-500/20 to-green-400/20 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 border border-green-400/20">
                  <DollarSign className="w-10 h-10 text-green-400" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center animate-spin">
                  <Sparkles className="w-3 h-3 text-white" />
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-4xl font-bold text-white mb-1">
                  <span className="bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
                    0.00
                  </span>
                </div>
                <div className="text-sm text-slate-400 font-medium">FLOW Earned</div>
                <div className="inline-flex items-center bg-green-500/10 px-2 py-1 rounded-full mt-2 border border-green-400/20">
                  <TrendingUp className="w-3 h-3 text-green-400 mr-1" />
                  <span className="text-xs text-green-400 font-medium">Ready to earn</span>
                </div>
              </div>
            </div>
            
            {/* Creative call-to-action area */}
            <div className="bg-gradient-to-r from-green-500/10 to-green-400/10 rounded-2xl p-4 border border-green-400/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-400">Start earning today!</p>
                  <p className="text-xs text-slate-400">Connect with supporters</p>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center animate-pulse">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCards;
