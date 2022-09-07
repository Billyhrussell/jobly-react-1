import React from "react";

import CompanyCard from "./CompanyCard";

/** Creates a list of company cards from array of companies
 * 
 * Props: 
 * - companies
 * 
 * State: none
 * 
 * CompanyList -> CompanyCardList
 * 
 */

function CompanyCardList({ companies }) {

  return (
    <div> 
      {companies.map(company => 
        <CompanyCard key={company.handle} company={company} />)}
    </div>
  );
}

export default CompanyCardList;