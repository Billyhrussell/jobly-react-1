import { NavLink } from "react-router-dom";

/** Displays Navigation bar with links to homepage, company list, and job list
 * 
 * Props: none
 * 
 * State: none
 * 
 * App -> Navigation
 * 
*/
function NavBar() {

  return (
    <nav>
      <NavLink to="/">Jobly</NavLink>
      <NavLink to="/companies">Companies</NavLink>
      <NavLink to="/jobs">Jobs</NavLink>
    </nav>
  );
}

export default NavBar;
