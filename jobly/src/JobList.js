import React, { useEffect, useState } from 'react';
import JoblyApi from './_api';
import SearchForm from './SearchForm';
import JobCard from './JobCard';

/** List of job cards with search form to filter
 * 
 * Props: none
 * 
 * State: 
 * - jobs: array [{job}, {job}, ...]
 * 
 * RouteList -> JobList
 * 
 */

function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(function getJobList() {
    async function getJobs() {
      try {
        const jobsData = await JoblyApi.getAllJobs();
        setJobs(jobsData);
      } catch (err) {
        console.error("ERROR: ", err);
      }
    }
    getJobs();
  }, []);

  async function getQueriedResults(searchInput) {
    try {
      const jobsData = await JoblyApi.getSearchedJobs(searchInput);
      setJobs(jobsData);
    } catch (err) {
      console.error("ERROR: ", err);
    }
  }

  if (!jobs) return (<p>Loading...</p>);

  return (
    <div>
      <SearchForm onSubmit={getQueriedResults} />

      {jobs.map(job => <JobCard key={job.id} job={job} company={job.companyName} />)}
    </div>);
}

export default JobList;