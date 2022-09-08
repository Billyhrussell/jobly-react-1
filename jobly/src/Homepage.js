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
      <h1 className="fw-bold">Jobly</h1>
      <br />
      <p>All the jobs in one, convenient place.</p>
      {currentUser &&
        <h2>Welcome Back, {currentUser.firstName}!</h2>}
      {!currentUser &&
        <div className="homepage-btn">
          <a href="/login" className="btn btn-primary me-3">Log In</a>
          <a href="/signup" className="btn btn-primary">Sign Up</a>
        </div>}
    </div>
  );
}

export default Homepage;

