import React, { useEffect, useState } from 'react';
import JoblyApi from './_api';
import SearchForm from './SearchForm';
import CompanyCard from './CompanyCard';

/** List of company cards with search form to filter
 * 
 * Props: none
 * 
 * State: 
 * - companies: array [{company}, {company}, ...]
 * 
 * RouteList -> CompanyList
 * 
 */

function CompanyList() {
  const [companies, setCompanies] = useState([]);

  useEffect(function getCompanyList() {
    async function getCompanies() {
      try {
        const companiesData = await JoblyApi.getAllCompanies();
        setCompanies(companiesData);
      } catch (err) {
        console.error("ERROR: ", err);
      }
    }
    getCompanies();
  }, []);

  async function getQueriedResults(searchInput) {
    try {
      const companiesData = await JoblyApi.getSearchedCompanies(searchInput);
      setCompanies(companiesData);
    } catch (err) {
      console.error("ERROR: ", err);
    }
  }

  if (!companies) return (<p>Loading...</p>);

  return (
    <div>
      <SearchForm onSubmit={getQueriedResults} />

      {companies.map(company => <CompanyCard key={company.handle} company={company} />)}
    </div>);
}

export default CompanyList;