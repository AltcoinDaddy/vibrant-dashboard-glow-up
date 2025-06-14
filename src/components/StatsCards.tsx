
import React from 'react';
import { Users, DollarSign, TrendingUp, Sparkles, Activity, Zap } from 'lucide-react';

const StatsCards = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-16 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Enhanced Creators Card */}
        <div className="group relative">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-400 rounded-3xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-1000"></div>
          
          <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-emerald-400/20 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-emerald-500/10 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
            
            {/* Header section */}
            <div className="flex items-start justify-between mb-8 relative z-10">
              <div className="relative">
                <div className="bg-gradient-to-br from-emerald-400/20 to-emerald-500/20 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 border border-emerald-400/30 backdrop-blur-sm">
                  <Users className="w-12 h-12 text-emerald-400" />
                  <Sparkles className="absolute -top-1 -right-1 w-5 h-5 text-emerald-300 animate-pulse" />
                </div>
              </div>
              
              <div className="text-right">
                <div className="flex items-baseline mb-2">
                  <span className="text-5xl font-black text-white mr-2">5</span>
                  <div className="flex items-center text-emerald-400">
                    <Activity className="w-4 h-4 mr-1" />
                    <span className="text-sm font-semibold">ACTIVE</span>
                  </div>
                </div>
                <div className="text-slate-400 font-medium mb-3">Total Creators</div>
                
                {/* Status indicator */}
                <div className="inline-flex items-center bg-gradient-to-r from-emerald-400/20 to-emerald-500/20 px-4 py-2 rounded-full border border-emerald-400/30 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-xs text-emerald-400 font-bold tracking-wide">GROWING FAST</span>
                </div>
              </div>
            </div>
            
            {/* Enhanced progress section */}
            <div className="relative">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-semibold text-slate-300">Progress to Goal</span>
                <span className="text-sm font-bold text-emerald-400">25%</span>
              </div>
              
              <div className="relative w-full bg-slate-700/50 rounded-full h-4 overflow-hidden backdrop-blur-sm">
                <div className="bg-gradient-to-r from-emerald-400 to-emerald-500 h-4 rounded-full w-1/4 transition-all duration-1000 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                </div>
              </div>
              
              <div className="flex justify-between items-center mt-3">
                <span className="text-xs text-slate-400 font-medium">5 of 20 creators</span>
                <div className="flex items-center text-xs text-emerald-400 font-semibold">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +2 this week
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Earnings Card */}
        <div className="group relative">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-400 rounded-3xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-1000"></div>
          
          <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-emerald-400/20 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 left-0 w-28 h-28 bg-gradient-to-br from-emerald-400/10 to-transparent rounded-full -translate-y-14 -translate-x-14"></div>
            <div className="absolute bottom-0 right-0 w-36 h-36 bg-gradient-to-tl from-emerald-500/10 to-transparent rounded-full translate-y-18 translate-x-18"></div>
            
            {/* Floating elements */}
            <div className="absolute top-6 right-6 flex space-x-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce opacity-60"></div>
              <div className="w-1 h-1 bg-emerald-300 rounded-full animate-ping opacity-80" style={{ animationDelay: '0.5s' }}></div>
            </div>
            
            {/* Header section */}
            <div className="flex items-start justify-between mb-8 relative z-10">
              <div className="relative">
                <div className="bg-gradient-to-br from-emerald-400/20 to-emerald-500/20 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 border border-emerald-400/30 backdrop-blur-sm">
                  <DollarSign className="w-12 h-12 text-emerald-400" />
                </div>
                {/* Spinning accent */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center animate-spin opacity-80">
                  <Zap className="w-4 h-4 text-slate-900" />
                </div>
              </div>
              
              <div className="text-right">
                <div className="flex items-baseline mb-2">
                  <span className="text-5xl font-black bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text text-transparent mr-2">
                    0.00
                  </span>
                  <span className="text-lg font-bold text-emerald-400">FLOW</span>
                </div>
                <div className="text-slate-400 font-medium mb-3">Total Earned</div>
                
                {/* Ready status */}
                <div className="inline-flex items-center bg-gradient-to-r from-emerald-400/20 to-emerald-500/20 px-4 py-2 rounded-full border border-emerald-400/30 backdrop-blur-sm">
                  <TrendingUp className="w-3 h-3 text-emerald-400 mr-2" />
                  <span className="text-xs text-emerald-400 font-bold tracking-wide">READY TO EARN</span>
                </div>
              </div>
            </div>
            
            {/* Enhanced call-to-action */}
            <div className="relative bg-gradient-to-r from-emerald-400/10 to-emerald-500/10 rounded-2xl p-6 border border-emerald-400/30 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-bold text-emerald-400 mb-1">Start Earning Today!</p>
                  <p className="text-sm text-slate-300 font-medium">Connect with supporters and grow your Flow</p>
                </div>
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Sparkles className="w-6 h-6 text-slate-900" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-2xl blur opacity-40 animate-pulse"></div>
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
