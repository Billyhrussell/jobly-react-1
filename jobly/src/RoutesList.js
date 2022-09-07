import { Routes, Route } from 'react-router-dom';

import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import CompanyDetails from "./CompanyDetails";
import JobList from "./JobList";
import Profile from './Profile';
import SignUp from './SignUp';
import Login from './Login';

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

      <Route
        path="/login"
        element={<Login/>}
      />

      <Route
        path="/signup"
        element={<SignUp />}
      />

      <Route
        path="/profile"
        element={<Profile />}
      />

    </Routes>
  );
}

export default RouteList;

