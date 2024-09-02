import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout.jsx';

import Home from './pages/Home.jsx';
import CreateEmployee from './pages/CreateEmployee.jsx';
import EmployeeListe from './pages/EmployeeList.jsx';

function App() {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
};
  return (
    <Router>
        <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-employee" element={<CreateEmployee addEmployee={addEmployee} />} />
          <Route path="/employee-list" element={<EmployeeListe addEmployee={addEmployee} />} />
        </Routes>
        </MainLayout>
    </Router>
  );
}

export default App;