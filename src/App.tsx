import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import HomePage from './pages/HomePage.tsx';
import MainLayout from './layouts/MainLayout.tsx';
import JobsPage from './pages/JobsPage.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';
import JobPage, { jobLoader } from './pages/JobPage.tsx';
import AddJobPage from './pages/AddJobPage.tsx';
import EditJobPage from './pages/EditJobPage.tsx';
import { type Job, type NewJob } from './types.ts';

const App: React.FC = () => {
  // Add New Job
  const addJob = async (newJob: NewJob): Promise<void> => {
    await fetch('/api/jobs/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
  };

  // Delete Job
  const deleteJob = async (id: string | number): Promise<void> => {
    await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
  };

  // Update Job
  const updateJob = async (job: Job): Promise<void> => {
    await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="jobs" element={<JobsPage />} />
        <Route
          path="add-job"
          element={<AddJobPage addJobSubmit={addJob} />}
        />
        <Route
          path="jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route
          path="edit-job/:id"
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;