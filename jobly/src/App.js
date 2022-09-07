import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { BrowserRouter } from "react-router-dom";

import JoblyApi from "./_api.js";
import userContext from "./userContext";

import Navigation from "./Navigation";
import RoutesList from "./RoutesList";

/**
 * App
 *
 * state: none
 *
 * props: none
 *
 * App -> { RoutesList, Navigation }
 *
 */

function App() {

  const [token, setToken] = useState(JoblyApi.token);
  const [currentUser, setCurrentUser] = useState(null);
  console.log("what is current token: ", token);
  console.log("who is current user: ", currentUser);

  useEffect(function getCurrentUser() {
    async function getUser() { 
      try {
        let { username } = jwt_decode(token);
        console.log("decoded token: ", username);
        const userData = await JoblyApi.getUserInfo(username);
        setCurrentUser(userData);
      } catch (err) {
        console.error("ERROR: ", err);
      }
    }
    getUser();
  }, [token]);

  async function login({username, password}) {
    let tokenData = await JoblyApi.login(username, password);
    setToken(tokenData);
    JoblyApi.token = tokenData;
  }

  function logout() {
    setToken(null);
    JoblyApi.token = null;
  }

  async function signup({username, password, firstName, lastName, email}) {
    let tokenData = await JoblyApi.createNewUser(username, password, firstName, lastName, email);
    setToken(tokenData);
    JoblyApi.token = tokenData;
  }
  
  if(!currentUser) return (<h1>Loading...</h1>);

  return (
    <userContext.Provider value={{ currentUser }}>
      <div className="App">
        <BrowserRouter>
          <Navigation logout={logout} />
          <div className="container">
            <RoutesList login={login} signup={signup} />
          </div>
        </BrowserRouter>
      </div>
    </userContext.Provider>
  );
}

export default App;
