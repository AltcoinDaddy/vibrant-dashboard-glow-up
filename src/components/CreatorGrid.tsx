
import React from 'react';
import CreatorCard from './CreatorCard';

const CreatorGrid = () => {
  const creators = [
    {
      name: "Knox",
      address: "0xec9c...af3f",
      description: "I'm a super software developer on-chain and off-chain Bring Deals",
      tips: 0,
      flow: "0.00",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      verified: true
    },
    {
      name: "Altcoin Daddy",
      address: "0xfc3b...8863",
      description: "A Web3 Engineer and Builder",
      tips: 5,
      flow: "0.11",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      verified: true
    },
    {
      name: "goodnessonweb3",
      address: "0xdf8c...4f6a",
      description: "I am fantastic just like that",
      tips: 0,
      flow: "0.00",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b417?w=150&h=150&fit=crop&crop=face",
      verified: false
    },
    {
      name: "PrinceNonso",
      address: "0xf33b...3a2e",
      description: "I am PrinceNonso by name and I am skilled on Blockchain development. Article writing",
      tips: 0,
      flow: "0.00",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      verified: false
    },
    {
      name: "spaceking",
      address: "0xe9c2...a5f0",
      description: "I'm just a Web3 creator",
      tips: 0,
      flow: "0.00",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&h=150&fit=crop&crop=face",
      verified: false
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {creators.map((creator, index) => (
          <div
            key={creator.address}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CreatorCard {...creator} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreatorGrid;
