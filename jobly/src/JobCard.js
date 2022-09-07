import React from "react";
import { Link } from "react-router-dom";

/** Displays individual card with basic information about a Job
 *
 * Props:
 * - Job
 *
 * state: none
 *
 * JobList -> JobCard
 *
*/

function JobCard({ job }) {

  const {handle, name, description } = job;

  return (
    <Link to={`${handle}`}>
      <h6>{name}</h6>
      <p>{description}</p>
    </Link>
  );
}

export default JobCard;