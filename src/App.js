import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';

import Home from './pages/Home';
import CreateEmployee from './pages/CreateEmployee';
import EmployeeListe from './pages/EmployeeList';

/**
 * Composant principal de l'application qui configure les routes de l'application.
 * 
 * Ce composant utilise `react-router-dom` pour définir les routes de l'application.
 * Les pages de l'application sont rendues à l'intérieur du layout principal défini dans
 * `MainLayout`, qui inclut l'en-tête et le pied de page.
 * 
 * @returns {React.ReactElement} Un élément React représentant l'application avec toutes ses routes.
 */
function App() {
  return (
    <Router>
        <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-employee" element={<CreateEmployee />} />
          <Route path="/employee-list" element={<EmployeeListe />} />
      
        </Routes>
        </MainLayout>
    </Router>
  );
}

export default App;
