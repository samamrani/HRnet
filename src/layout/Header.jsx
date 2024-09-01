

import React from 'react';
import { NavLink } from 'react-router-dom'; 

import '../styles/main.scss';

function Header() {
  return (
    <header>
      <nav>
        <div className="nav-links-container">
          <NavLink to="/" className="nav-links">
            Accueil
          </NavLink>
          <NavLink to="/employee" className="nav-links">
            Créer un employé
          </NavLink>
          <NavLink to="/liste" className="nav-links">
            Liste des employés
          </NavLink>
          <NavLink to="/modale" className="nav-links">
            Modales
          </NavLink>
        </div>
      </nav>
    </header>
    
  );
}

export default Header;