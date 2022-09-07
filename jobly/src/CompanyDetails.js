import { useEffect, useState } from 'react';
import JoblyApi from './_api'
import JobCard from './JobCard';
import {useParams} from 'react-router-dom'


function CompanyDetails(){
  const params = useParams();
  const [company, setCompany] = useState([]);

  useEffect(function companyJob(){
    async function getCompanies(){
      try{
        const companyRes = await JoblyApi.getCompany(params.handle);
        setCompany([companyRes]);
      }catch(err){
        console.log("ERROR: ", err);
      }
    }
    getCompanies();
  },[]);

  console.log("COMPANY: ", company);

  return (
    <div>

      <h1> {company.name }</h1>
      <h2> {company.description}</h2>
      {
        company.jobs.map(job => <JobCard key={job.id} job={job}/> )
      }
    </div>
   )
}

export default CompanyDetails;