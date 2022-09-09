import React, { useState, useContext } from "react";
import userContext from "./userContext";
import "./JobCard.css";
import JoblyApi from "./_api";
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
  const { currentUser } = useContext(userContext);
  const { id, title, salary, equity } = job;
  
  //WHAT WE DID: added isApplied state, button, and apply fx.
  //current error: honestly not sure
  const [isApplied, setIsApplied] = useState((currentUser.jobs).some(j => j.id === id));
  
  async function applyToJob(){
    await JoblyApi.applyToJob(currentUser.username, id);
    setIsApplied(true);
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
        style={{backgroundColor:"red"}}
        disabled={isApplied}
        id={id}
        className="apply" 
        onClick={applyToJob}>
          APPLY
      </button>
    </div>
  );
}

export default JobCard;