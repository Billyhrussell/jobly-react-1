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

  const { name, description } = company;

  return (
    <Link to={`companies/${name}`}>
      <h6>{name}</h6>
      <p>{description}</p>
    </Link>
  );
}

export default CompanyCard;