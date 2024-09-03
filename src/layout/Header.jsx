import React from 'react';
import { NavLink } from 'react-router-dom'; 

import '../styles/main.scss';

function Header() {
  return (
    <header>
      <nav>
        <div className="nav-links-container">
          <NavLink to="/" className="nav-links">
            Home
          </NavLink>
          <NavLink to="/create-employee" className="nav-links">
            Create Employee
          </NavLink>
          <NavLink to="/employee-list" className="nav-links">
            Employee List
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
