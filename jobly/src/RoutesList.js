import { Routes, Route } from 'react-router-dom';

import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import CompanyDetails from "./CompanyDetails";
import JobList from "./JobList";

/** Function  creates paths to different pages
 *
 * Props: none
 *
 * State: none
 *
 * App -> RoutesList -> { Homepage, CompanyList, CompanyDetails, JobList }
 *
*/

function RouteList() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Homepage />}
      />

      <Route
        path="/companies"
        element={<CompanyList />}
      />

      <Route
        path="/companies/:handle"
        element={<CompanyDetails />}
      />

      <Route
        path="/jobs"
        element={<JobList />}
      />
    </Routes>
  );
}

export default RouteList;

