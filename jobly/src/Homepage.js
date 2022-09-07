import React, { useContext } from "react";
import userContext from "./userContext";
import "./Homepage.css";


/** Displays main homepage for Jobly app
 *
 * Props: none
 * State: none
 *
 * Routelist -> Homepage
 *
 */

function Homepage() {
  const { currentUser } = useContext(userContext);
  
  return (
    <div className="homepage">
      <h1>Jobly</h1>
      <h4>All the jobs in one, convenient place.</h4>
      {currentUser &&
      <h2>Welcome Back, {currentUser.firstName}</h2>}
    </div>
  );
}

export default Homepage;

