
import React from 'react';
import { Heart, Coins, ExternalLink, Star, Zap, TrendingUp } from 'lucide-react';

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
      {/* Glowing background effect */}
      <div className="absolute -inset-1 bg-gradient-to-br from-emerald-400 via-teal-400 to-emerald-500 rounded-3xl blur opacity-0 group-hover:opacity-25 transition duration-1000"></div>
      
      <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 transform group-hover:-translate-y-2">
        {/* Creative header with floating elements */}
        <div className="relative h-24 bg-gradient-to-br from-emerald-400 via-teal-400 to-emerald-500 overflow-hidden">
          {/* Animated background patterns */}
          <div className="absolute inset-0">
            <div className="absolute top-2 right-4 w-8 h-8 bg-white/20 rounded-full animate-float"></div>
            <div className="absolute bottom-2 left-6 w-4 h-4 bg-white/30 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-white/10 rounded-full animate-ping"></div>
          </div>
          
          {/* Status indicator */}
          <div className="absolute top-4 right-4 flex items-center space-x-2">
            {tips > 0 && (
              <div className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full border border-white/30">
                <div className="flex items-center space-x-1">
                  <TrendingUp className="w-3 h-3 text-white" />
                  <span className="text-xs text-white font-medium">Active</span>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Avatar with creative styling */}
        <div className="relative px-6 -mt-12">
          <div className="relative inline-block">
            <div className="w-24 h-24 rounded-3xl shadow-2xl border-4 border-white overflow-hidden group-hover:scale-105 transition-transform duration-300">
              <img
                src={avatar}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Verification badge */}
            {verified && (
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Star className="w-4 h-4 text-white fill-current" />
              </div>
            )}
            
            {/* Activity indicator */}
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full border-2 border-white flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 pt-4">
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                {name}
              </h3>
              {tips > 0 && (
                <div className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs font-medium">
                  Popular
                </div>
              )}
            </div>
            <p className="text-sm text-gray-500 font-mono bg-gray-50 px-3 py-1 rounded-full inline-block">
              {address}
            </p>
          </div>

          <p className="text-gray-600 text-sm mb-6 line-clamp-2 leading-relaxed">
            {description}
          </p>

          {/* Enhanced stats */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-4 border border-red-100">
              <div className="flex items-center justify-center mb-2">
                <Heart className="w-5 h-5 text-red-500 mr-2" />
                <span className="text-sm text-gray-600 font-medium">TIPS</span>
              </div>
              <div className="text-2xl font-bold text-gray-900 text-center">{tips}</div>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-4 border border-emerald-100">
              <div className="flex items-center justify-center mb-2">
                <Coins className="w-5 h-5 text-emerald-500 mr-2" />
                <span className="text-sm text-gray-600 font-medium">FLOW</span>
              </div>
              <div className="text-2xl font-bold text-gray-900 text-center">{flow}</div>
            </div>
          </div>

          {/* Creative action button */}
          <button className="group/btn relative w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-4 rounded-2xl font-medium hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
            <div className="relative flex items-center justify-center space-x-2">
              <span>View Profile</span>
              <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatorCard;
