import React, { useState, useContext } from "react";
import userContext from "./userContext";
import "./JobCard.css";
import JoblyApi from "./_api";
/** Displays individual card with basic information about a Job
 * can apply to job by clicking button, adds to current user
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
  const { currentUser } = useContext(userContext);
  const { id, title, salary, equity } = job;

  //WHAT WE DID: added isApplied state, button, and apply fx.
  //current error: honestly not sure
  const [isApplied, setIsApplied] = useState((currentUser.applications).includes(id));

  async function applyToJob(){
    console.log("clicked!!");
    await JoblyApi.applyToJob(currentUser.username, id);
    setIsApplied(true);
    console.log("finished applying");
  }

  return (
    <div className="jobCard">
      <h3>{title}</h3>
      {company &&
        <h4>{company}</h4>}
      <br />

      <p>Salary: {salary || "unknown"} <br/>
        Equity: {equity || "unknown"}</p>
      <button
        disabled={isApplied}
        id={id}
        className="apply btn btn-danger"
        onClick={applyToJob}>
          {isApplied && "APPLIED"}
          {!isApplied && "APPLY"}
      </button>
    </div>
  );
}

export default JobCard;