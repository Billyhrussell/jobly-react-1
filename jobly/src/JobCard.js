import React from "react";
import "./JobCard.css";
/** Displays individual card with basic information about a Job
 *
 * Props:
 * - job: object {id, title, salary, equity}
 * - company
 *
 * state: none
 *
 * JobList -> JobCard
 *
*/

function JobCard({ job, company = null }) {

  const { title, salary, equity } = job;

  return (
    <div className="jobCard">
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