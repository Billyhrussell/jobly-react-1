import React, { useState } from "react";
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
 * props: 
 * - token
 * - currentUser: object {username, firstName, lastName, email, isAdmin, jobs}
 *      where jobs is {id, title, companyHandle, companyName, state}
 *
 * App -> { RoutesList, Navigation }
 *
 */

function App() {

  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);


  // useEffect(function getCurrentUser() {
  //   async function getUser() {
  //     try {
  //       let { username } = jwt_decode(token);
  //       console.log("decoded token: ", username);
  //       const userData = await JoblyApi.getUserInfo(username);
  //       setCurrentUser(userData);
  //     } catch (err) {
  //       console.error("ERROR: ", err);
  //     }
  //   }
  //   getUser();
  // }, [token]);

  async function getUser(token) {
    try {
      let user = jwt_decode(token);
      const userData = await JoblyApi.getUserInfo(user.username);
      setCurrentUser(userData);
    } catch (err) {
      console.error("ERROR: ", err);
    }
  }

  async function login({username, password}) {
    let tokenData = await JoblyApi.login(username, password);
    setToken(tokenData);
    JoblyApi.token = tokenData;
    getUser(tokenData);
  }

  function logout() {
    setCurrentUser(null);
    setToken(null);
    JoblyApi.token = null;
  }

  async function signup({username, password, firstName, lastName, email}) {
    let tokenData = await JoblyApi.createNewUser(username, password, firstName, lastName, email);
    setToken(tokenData);
    JoblyApi.token = tokenData;
    getUser();
  }

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
