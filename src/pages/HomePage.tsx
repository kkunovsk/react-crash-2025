import React from 'react';
import Hero from '../components/Hero.tsx';
import HomeCards from '../components/HomeCards.tsx';
import JobListings from '../components/JobListings.tsx';
import ViewAllJobs from '../components/ViewAllJobs.tsx';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;