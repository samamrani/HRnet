import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; 
import Modal from '../components/Modal'; 
import CreateEmployee from '../pages/CreateEmployee'; 
import '../styles/main.scss';

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header>
      <nav>
        <div className="nav-links-container">
          <NavLink to="/" className="nav-links">
            Home
          </NavLink>
          <span className="nav-links" onClick={handleOpenModal}>
            Create Employee
          </span>
          <NavLink to="/employee-list" className="nav-links">
            Employee List
          </NavLink>
        </div>
      </nav>

      {/* Ajouter la modale ici */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <CreateEmployee onClose={handleCloseModal} />  {/* Passer onClose à CreateEmployee */}
      </Modal>
    </header>
  );
}

export default Header;
