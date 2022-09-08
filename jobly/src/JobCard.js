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
      <h3>{title}</h3>
      {company &&
        <h4>{company}</h4>}
      <br />

      <p>Salary: {salary || "unknown"} <br/>
        Equity: {equity || "unknown"}</p>
    </div>
  );
}

export default JobCard;