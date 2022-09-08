// import { NavLink } from "react-router-dom";
import React, { useState, useContext } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import userContext from './userContext';

/** Displays Navigation bar with links to homepage, company list, and job list
 *
 * Props: none
 *
 * State: none
 *
 * App -> Navigation
 *
*/

function Navigation({ logout }) {
  const { currentUser } = useContext(userContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="white" light expand="md">
        <NavbarBrand href="/" style={{ color: "blue" }}>Jobly</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            {currentUser &&
              <NavItem>
                <NavLink href="/companies">Companies</NavLink>
              </NavItem>}
            {currentUser &&
              <NavItem>
                <NavLink href="/jobs">Jobs</NavLink>
              </NavItem>}
            {!currentUser &&
              <NavItem>
                <NavLink href="/login">Login</NavLink>
              </NavItem>}
            {!currentUser &&
              <NavItem>
                <NavLink href="/signup">Sign Up</NavLink>
              </NavItem>}
            {currentUser &&
              <NavItem>
                <button
                  className="nav-link"
                  style={{ background: "none", border: "none" }}
                  onClick={logout}>Log out, {currentUser.firstName}
                </button>
              </NavItem>}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}


export default Navigation;