import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; 
import { Modal } from 'samamrani-modal';
import '../styles/main.scss';
import CreateEmployeeForm from '../components/CreateEmployeeForm';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../redux/employesSlice';

/**
 * Composant Header qui inclut la navigation et des modales pour 
 * la création d'employés et la confirmation de succès.
 *
 * @component
 * @returns {React.ReactElement} Le composant Header.
 */
function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const dispatch = useDispatch();

   // Ouvre la modale de création d'employé.
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

   //Ferme la modale de création d'employé.
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

   //Fonction de soumission du formulaire de création d'employé.
  const handleSubmit = (employee) => {
    dispatch(addEmployee(employee));
    setIsSuccessModalOpen(true);
    setIsModalOpen(false);
  };

    //Ferme la modale de succès.
  const handleCloseSuccessModal = () => {
    setIsSuccessModalOpen(false);
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

      {/* Modal principal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <CreateEmployeeForm onSubmit={handleSubmit}/>
      </Modal>

      {/* Modal de succès */}
      <Modal isOpen={isSuccessModalOpen} onClose={handleCloseSuccessModal}>
        <p> Successfully created!</p>
      </Modal>
    </header>
  );
}

export default Header;
