import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout.jsx';

import Home from './pages/Home.jsx';
import Employee from './pages/Employee.jsx';

function App() {
  return (
    <Router>
        <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee" element={<Employee/>} />
        </Routes>
        </MainLayout>
    </Router>
  );
}

export default App;