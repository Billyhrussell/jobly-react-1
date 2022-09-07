import React, { useEffect, useState } from 'react';
import JoblyApi from './_api';
import SearchForm from './SearchForm';
import JobCardList from './JobCardList';

/** List of job cards with search form to filter
 * 
 * Props: none
 * 
 * State: 
 * - jobs: array [{job}, {job}, ...]
 *    where job is {id, title, salary, equity, companyHandle, companyName}
 * 
 * RouteList -> JobList -> { SearchForm, JobCardList }
 * 
 */

function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(function getJobList() {
    async function getJobs() {
      try {
        const jobsData = await JoblyApi.getAllJobs();
        setJobs([...jobsData]);
      } catch (err) {
        console.error("ERROR: ", err);
      }
    }
    getJobs();
  }, []);

  async function getQueriedResults(searchInput) {
    try {
      const jobsData = await JoblyApi.getSearchedJobs(searchInput);
      setJobs([...jobsData]);
    } catch (err) {
      console.error("ERROR: ", err);
    }
  }

  if (!jobs) return (<p>Loading...</p>);

  return (
    <div>
      <SearchForm onSubmit={getQueriedResults} />

      <JobCardList jobs={jobs}/>
    </div>);
}

export default JobList;