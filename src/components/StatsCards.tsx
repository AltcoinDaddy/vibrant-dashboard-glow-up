
import React from 'react';
import { Users, DollarSign, TrendingUp } from 'lucide-react';

const StatsCards = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-blue-100 p-3 rounded-xl">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-gray-900 animate-pulse">5</div>
              <div className="text-sm text-gray-500 font-medium">Total Creators</div>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full w-1/4 transition-all duration-1000"></div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-emerald-100 p-3 rounded-xl">
              <DollarSign className="w-8 h-8 text-emerald-600" />
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-gray-900">0.00</div>
              <div className="text-sm text-gray-500 font-medium">FLOW Total Earned</div>
            </div>
          </div>
          <div className="flex items-center text-sm text-emerald-600">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span>Ready to start earning</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCards;
