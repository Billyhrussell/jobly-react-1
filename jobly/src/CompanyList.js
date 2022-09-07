import React, { useEffect, useState} from 'react'
import JoblyApi from './_api'
import SearchForm from './SearchForm'
import CompanyCard from './CompanyCard'

/**
 * Props: none
 * State: companies
 */
function CompanyList(){
  const [companies, setCompanies] = useState([]);

  useEffect(function getCompanyList(){
    async function getCompanies(){
      try{
        const companiesData = await JoblyApi.getAllCompanies();
        setCompanies(companiesData);
        console.log(companiesData);
      }catch(err){
        console.log("ERROR: ", err);
      }
    }
    getCompanies();
  }, []);

  async function getQueriedResults(searchInput){
    console.log("INSIDE", searchInput);
    try{
      const companiesData = await JoblyApi.getSearchedCompanies(searchInput);
      setCompanies(companiesData);
    }catch(err){
      console.log("ERROR: ", err);
    }
  }

  return(
  <div>
    <SearchForm onSubmit={getQueriedResults}/>

    {companies.map(company => <CompanyCard key={company.handle} company={company}/>)}
  </div>)
}

export default CompanyList;