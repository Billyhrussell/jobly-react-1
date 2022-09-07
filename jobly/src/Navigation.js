// import { NavLink } from "react-router-dom";
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
/** Displays Navigation bar with links to homepage, company list, and job list
 *
 * Props: none
 *
 * State: none
 *
 * App -> Navigation
 *
*/
function Navigation({logout}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
<div>
        <Navbar color="white" light expand="md">
          <NavbarBrand href="/" style={{color:"blue"}}>Jobly</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <NavLink href="/companies">Companies</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/jobs">Jobs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/signup">Sign Up</NavLink>
              </NavItem>
              <NavItem>
                <button onClick={logout}>Log out</button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
  );
}


export default Navigation;