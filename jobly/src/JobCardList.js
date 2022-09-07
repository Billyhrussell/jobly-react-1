import React from "react";

import JobCard from "./JobCard";

/** Creates a list of job cards from array of jobs
 * 
 * Props: 
 * - jobs
 * - company
 * 
 * State: none
 * 
 * JobList -> JobCardList
 * 
 */

function JobCardList({ jobs, company = null }) {

  return (
    <div> placeholder
      {jobs.map(job => <JobCard key={job.id} job={job} />)}
    </div>
  );
}

export default JobCardList;