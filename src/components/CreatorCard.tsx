
import React from 'react';
import { Heart, Coins, ExternalLink, Star } from 'lucide-react';

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
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100">
      {/* Header with gradient */}
      <div className="h-20 bg-gradient-to-r from-emerald-400 to-teal-500 relative">
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </div>
      
      {/* Avatar */}
      <div className="relative px-6 -mt-10">
        <div className="relative">
          <img
            src={avatar}
            alt={name}
            className="w-20 h-20 rounded-2xl shadow-lg border-4 border-white object-cover"
          />
          {verified && (
            <div className="absolute -top-1 -right-1 bg-emerald-500 text-white p-1 rounded-full">
              <Star className="w-3 h-3 fill-current" />
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 pt-4">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors duration-200">
            {name}
          </h3>
          <p className="text-sm text-gray-500 font-mono">
            {address}
          </p>
        </div>

        <p className="text-gray-600 text-sm mb-6 line-clamp-2">
          {description}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Heart className="w-4 h-4 text-red-500 mr-1" />
              <span className="text-sm text-gray-500 font-medium">TIPS</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">{tips}</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Coins className="w-4 h-4 text-emerald-500 mr-1" />
              <span className="text-sm text-gray-500 font-medium">FLOW</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">{flow}</div>
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full bg-emerald-600 text-white py-3 rounded-xl font-medium hover:bg-emerald-700 transition-colors duration-200 flex items-center justify-center space-x-2 group-hover:shadow-lg">
          <span>View Profile</span>
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default CreatorCard;
