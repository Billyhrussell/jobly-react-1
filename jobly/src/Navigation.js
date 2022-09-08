import "./Navigation.css";
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
import { NavLink as RRNavLink } from 'react-router-dom';

import userContext from './userContext';

/** Displays Navigation bar with links to homepage, company list, and job list
 *
 * Props: 
 * - logout: function called from parent
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
                <NavLink to="/companies"
                  activeClassName="active"
                  tag={RRNavLink}>Companies</NavLink>
              </NavItem>}
            {currentUser &&
              <NavItem>
                <NavLink to="/jobs"
                  activeClassName="active"
                  tag={RRNavLink}>Jobs</NavLink>
              </NavItem>}
            {!currentUser &&
              <NavItem>
                <NavLink to="/login"
                  activeClassName="active"
                  tag={RRNavLink}>Login</NavLink>
              </NavItem>}
            {!currentUser &&
              <NavItem>
                <NavLink to="/signup"
                  activeClassName="active"
                  tag={RRNavLink}>Sign Up</NavLink>
              </NavItem>}
            {currentUser &&
              <NavItem>
                <button
                  className="nav-link"
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