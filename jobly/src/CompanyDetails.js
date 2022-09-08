import { useEffect, useState, useContext } from 'react';
import JoblyApi from './_api';
import JobCardList from './JobCardList';
import { useParams, Navigate } from 'react-router-dom';
import userContext from './userContext';

/** Displays page with details about an individual company
 *
 * Props: none
 *
 * State:
 * - company: object {handle, name, description, numEmployees, logoUrl, jobs}
 *        where jobs is [{job}, {job},]
 *
 * RouteList -> CompanyDetails
 *
 */
function CompanyDetails() {
  const { currentUser } = useContext(userContext);
  const params = useParams();
  const [company, setCompany] = useState(null);

  useEffect(function companyJob() {
    async function getCompanies() {
      try {
        const companyRes = await JoblyApi.getCompany(params.handle);
        setCompany(companyRes);
      } catch (err) {
        console.error("ERROR: ", err);
      }
    }
    getCompanies();
  }, [params.handle]);

  if(!currentUser) return <Navigate to="/"/>
  if (!company) return (<p>Loading...</p>);

  return (
    <div>
      <h1> {company.name}</h1>
      <h2> {company.description}</h2>
      <JobCardList jobs={company.jobs} company={company.name} />
    </div>
  );
}

export default CompanyDetails;