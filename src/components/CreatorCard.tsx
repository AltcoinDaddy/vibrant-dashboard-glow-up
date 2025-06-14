
import React from 'react';
import { Heart, Coins, ExternalLink, Star, Zap, TrendingUp, Activity, Users } from 'lucide-react';

interface CreatorCardProps {
  name: string;
  address: string;
  description: string;
  tips: number;
  flow: string;
  avatar: string;
  verified?: boolean;
}

const CreatorCard: React.FC<CreatorCardProps> = ({
  name,
  address,
  description,
  tips,
  flow,
  avatar,
  verified = false
}) => {
  return (
    <div className="group relative">
      {/* Enhanced glow effect */}
      <div className="absolute -inset-2 bg-gradient-to-br from-green-400 via-green-500 to-green-400 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-1000"></div>
      
      <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-green-400/20 transform group-hover:-translate-y-4 group-hover:scale-[1.02]">
        
        {/* Enhanced header with geometric patterns */}
        <div className="relative h-28 bg-gradient-to-br from-green-400 via-green-500 to-green-400 overflow-hidden">
          {/* Animated geometric background */}
          <div className="absolute inset-0">
            <div className="absolute top-2 right-4 w-12 h-12 border border-white/20 rounded-full animate-spin opacity-30"></div>
            <div className="absolute bottom-2 left-6 w-8 h-8 bg-white/10 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 w-16 h-16 border-2 border-white/10 rounded-full animate-ping"></div>
            <div className="absolute top-3 left-8 w-4 h-4 bg-white/20 transform rotate-45 animate-bounce"></div>
          </div>
          
          {/* Status indicators */}
          <div className="absolute top-4 right-4 flex items-center space-x-2">
            {tips > 0 && (
              <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30 animate-pulse">
                <div className="flex items-center space-x-1">
                  <Activity className="w-3 h-3 text-white" />
                  <span className="text-xs text-white font-bold">HOT</span>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Enhanced avatar section with standardized size */}
        <div className="relative px-8 -mt-16">
          <div className="relative inline-block">
            {/* Avatar container with enhanced styling and fixed size */}
            <div className="relative">
              <div className="w-32 h-32 rounded-3xl shadow-2xl border-4 border-gray-700 overflow-hidden group-hover:scale-110 transition-transform duration-300 ring-4 ring-green-400/20">
                <img
                  src={avatar}
                  alt={name}
                  className="w-full h-full object-cover object-center"
                />
                {/* Animated overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Enhanced verification badge */}
              {verified && (
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-xl border-2 border-gray-700 animate-bounce">
                  <Star className="w-5 h-5 text-gray-900 fill-current" />
                </div>
              )}
              
              {/* Enhanced activity indicator */}
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-full border-4 border-gray-700 flex items-center justify-center shadow-lg animate-pulse">
                <div className="w-3 h-3 bg-gray-900 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced content section */}
        <div className="p-8 pt-6">
          {/* Name and status */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-2xl font-black text-white group-hover:text-green-400 transition-colors duration-300">
                {name}
              </h3>
              {tips > 0 && (
                <div className="bg-gradient-to-r from-green-400/20 to-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold border border-green-400/30 backdrop-blur-sm animate-pulse">
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>TRENDING</span>
                  </div>
                </div>
              )}
            </div>
            
            {/* Enhanced address display */}
            <div className="bg-gray-800/60 backdrop-blur-sm px-4 py-2 rounded-xl inline-flex items-center border border-green-400/20 group-hover:border-green-400/40 transition-colors duration-300">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm text-gray-300 font-mono font-medium">{address}</span>
            </div>
          </div>

          <p className="text-gray-300 text-sm mb-8 line-clamp-3 leading-relaxed font-medium">
            {description}
          </p>

          {/* Enhanced stats grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {/* Tips stat */}
            <div className="relative group/stat">
              <div className="bg-gradient-to-br from-red-500/10 via-pink-500/10 to-red-400/10 rounded-2xl p-5 border border-red-400/20 backdrop-blur-sm hover:from-red-500/20 hover:via-pink-500/20 hover:to-red-400/20 transition-all duration-300 hover:scale-105">
                <div className="flex flex-col items-center">
                  <div className="flex items-center mb-3">
                    <Heart className="w-5 h-5 text-red-400 mr-2 animate-pulse" />
                    <span className="text-xs text-gray-400 font-bold tracking-wide">TIPS</span>
                  </div>
                  <div className="text-3xl font-black text-white">{tips}</div>
                </div>
                {tips > 0 && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full animate-ping"></div>
                )}
              </div>
            </div>
            
            {/* Flow stat */}
            <div className="relative group/stat">
              <div className="bg-gradient-to-br from-green-500/10 via-green-400/10 to-green-500/10 rounded-2xl p-5 border border-green-400/20 backdrop-blur-sm hover:from-green-500/20 hover:via-green-400/20 hover:to-green-500/20 transition-all duration-300 hover:scale-105">
                <div className="flex flex-col items-center">
                  <div className="flex items-center mb-3">
                    <Coins className="w-5 h-5 text-green-400 mr-2 animate-spin" />
                    <span className="text-xs text-gray-400 font-bold tracking-wide">FLOW</span>
                  </div>
                  <div className="text-3xl font-black text-white">{flow}</div>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Enhanced action button */}
          <button className="group/btn relative w-full bg-gradient-to-r from-green-400 to-green-500 text-gray-900 py-5 rounded-2xl font-bold hover:from-green-300 hover:to-green-400 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-[1.02] hover:-translate-y-1">
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
            
            <div className="relative flex items-center justify-center space-x-3">
              <Users className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300" />
              <span className="text-lg">View Profile</span>
              <ExternalLink className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
            </div>
            
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-500 rounded-2xl blur opacity-0 group-hover/btn:opacity-50 transition-opacity duration-300 -z-10"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatorCard;
