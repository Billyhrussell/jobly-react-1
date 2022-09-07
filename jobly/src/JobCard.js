import React from "react";

/** Displays individual card with basic information about a Job
 *
 * Props:
 * - Job: object {id, title, salary, equity}
 *
 * state: none
 *
 * JobList -> JobCard
 *
*/

function JobCard({ job, company = null }) {

  const { title, salary, equity } = job;

  return (
    <div>
      <h1>{title}</h1>
      {company &&
        <h3>{company}</h3>}
      <br />
      <p>Salary: {salary}</p>
      {equity &&
        <p>Equity: {equity}</p>}
    </div>
  );
}

export default JobCard;