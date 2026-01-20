import React from 'react';
import JobListings from '../components/JobListings.tsx';

const JobsPage: React.FC = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });

  return (
    <section className="bg-blue-50 px-4 py-6">
      <JobListings />
    </section>
  );
};

export default JobsPage;