import React from "react";
import { BrowserRouter } from "react-router-dom";

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
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <div className="container">
          <RoutesList />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
