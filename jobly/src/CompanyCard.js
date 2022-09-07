import React from "react";
import { Link } from "react-router-dom";

/** Displays individual card with basic information about a company
 *
 * Props:
 * - company
 *
 * state: none
 *
 * CompanyList -> CompanyCard
 *
*/

function CompanyCard({ company }) {

  const { handle, name, description } = company;

  return (
    <Link to={`${handle}`}>
      <h6>{name}</h6>
      <p>{description}</p>
      {company.logoUrl && <img src={company.logoUrl} alt="company logo" />}
    </Link>
  );
}

export default CompanyCard;