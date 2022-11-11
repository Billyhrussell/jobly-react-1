import React, { useEffect, useState  } from 'react';
import JoblyApi from './_api';
import SearchForm from './SearchForm';
import CompanyCardList from './CompanyCardList';
import Loading from "./Loading";


/** List of company cards with search form to filter
 * Authorization: logged-in users
 * 
 * Props: none
 *
 * State:
 * - companies: array [{company}, {company}, ...]
 *      where company is {handle, name, description, numEmployees, logoUrl}
 *
 * RouteList -> CompanyList -> { SearchForm, CompanyCardList }
 *
 */

function CompanyList() {

  const [companies, setCompanies] = useState(null);

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

  if (!companies) return (<Loading />);

  return (
    <div>
      <SearchForm onSubmit={getQueriedResults} />

      <CompanyCardList companies={companies} />
    </div>);
}

export default CompanyList;