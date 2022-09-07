import React from "react";

import JobCard from "./JobCard";
//TODO: create companyCardList for companies

/** Creates a list of job cards from array of jobs
 * 
 * Props: 
 * - jobs
 * 
 * State: none
 * 
 * { JobList, CompanyDetails } -> JobCardList
 * 
 */

function JobCardList({ jobs}) {

  return (
    <div> 
      {jobs.map(job => 
        <JobCard key={job.id} job={job} company={job.companyName} />)}
    </div>
  );
}

export default JobCardList;