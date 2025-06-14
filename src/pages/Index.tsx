
import React from 'react';
import Header from '../components/Header';
import SearchSection from '../components/SearchSection';
import StatsCards from '../components/StatsCards';
import CreatorGrid from '../components/CreatorGrid';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <SearchSection />
      <StatsCards />
      <CreatorGrid />
    </div>
  );
};

export default Index;
