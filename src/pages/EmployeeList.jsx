import React, { useState } from 'react';
import { useSelector } from 'react-redux';
 
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import PaginationControls from '../components/PaginationControls';  
import TableControls from '../components/TableControls';  

/**
 * Composant EmployeeList affichant une liste d'employés avec des fonctionnalités de filtrage,
 * pagination et contrôle du nombre d'employés par page.
 * 
 * Ce composant récupère les employés depuis le store Redux et permet de filtrer les résultats
 * en fonction du terme de recherche, de paginer les résultats, et de changer le nombre
 * d'employés affichés par page.
 * 
 * @component
 * @returns {React.ReactElement} Le composant EmployeeList affichant la liste des employés.
 * 
 */

const columns = [
    {   field: "firstName",
        label: "First Name",
    },
    {   field: "lastName",
        label: "Last Name",
    },
    {   field: "startDate",
        label: "Start Date",
    },
    {   field: "department",
        label: "Department",
    },
    {   field: "dateOfBirth",
        label: "Date of Birth",
    },
    {   field: "street",
        label: "Street",
    },
    {   field: "city",
        label: "City",
    },
    {   field: "state",
        label: "State",
    },
    {   field: "zipCode",
        label: "Zip Code",
    },
]

function EmployeeList() {
        // Récupération des employés depuis le store Redux
    const employes = useSelector((state) => state.employes);
        // État local pour la gestion de la pagination et de la recherche
    const [currentPage, setCurrentPage] = useState(1);
    const [employeesPerPage, setEmployeesPerPage] = useState(5); 
    const [searchTerm, setSearchTerm] = useState('');
        // Filtrage des employés en fonction du terme de recherche
    const filteredEmployees = employes.filter((employee) => {
        // vérifie que les champs existent avant d'appliquer toLowerCase
    const firstName = employee.firstName ? employee.firstName.toLowerCase() : '';
    const lastName = employee.lastName ? employee.lastName.toLowerCase() : '';
    const department = employee.department ? employee.department.toLowerCase() : '';
        // filtre les employés selon le terme de recherche
    return (
        firstName.includes(searchTerm.toLowerCase()) ||
        lastName.includes(searchTerm.toLowerCase()) ||
        department.includes(searchTerm.toLowerCase())
    );
});

        // Calcul du nombre total de pages en fonction du nombre d'employés filtrés
    const totalPages = Math.ceil(filteredEmployees.length / employeesPerPage);
        // Détermination des indices des employés à afficher pour la page actuelle
    const indexOfLastEmployee = Math.min(currentPage * employeesPerPage, filteredEmployees.length);
    const indexOfFirstEmployee = (currentPage - 1) * employeesPerPage;
    const currentEmployees = filteredEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);
        // pour changer de page
    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };
        //  pour changer le nombre d'employés par page
    const handleEntriesPerPageChange = (event) => {
        setEmployeesPerPage(parseInt(event.target.value));
        setCurrentPage(1); 
    };
        // pour gérer le changement du terme de recherche
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1); 
    };

    
    return (
        <div className='employeeList'>
            <h2 className='currentEmployees'>Current Employees</h2>
            {/* Composant de contrôle pour la pagination et la recherche */}
            <TableControls
               className="tableControls"
                employeesPerPage={employeesPerPage}
                handleEntriesPerPageChange={handleEntriesPerPageChange}
                searchTerm={searchTerm}
                handleSearchChange={handleSearchChange}
            />

            {/* Table Material UI */}
            <TableContainer className="table-container" component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow className='table-row'>
                            {columns.map((column, index) => (
                               <TableCell key={index}>{column.label}</TableCell>  
                            ) 
                        )}
                           
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* Affichage des employés de la page actuelle */}
                        {currentEmployees.map((employee) => (
                            <TableRow key={employee.id}>
                                   {columns.map((column, index) => (
                               <TableCell key={index}>{employee[column.field]}</TableCell>  
                            ) 
                        )}          
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>  
            </TableContainer>


            {/* Affichage de l'information sur la pagination */}
            <div className="pagination-info">
                 <span>{`Showing ${indexOfFirstEmployee + 1} to ${indexOfLastEmployee} of ${filteredEmployees.length} entries`}</span>
            </div> 
            <div className="pagination-control">
                {/* Composant de contrôle de pagination */}
                <PaginationControls
                    
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                />
             </div> 
           
     </div>
    );
}

export default EmployeeList;
