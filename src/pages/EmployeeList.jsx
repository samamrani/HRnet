import React from 'react';
import {  useSelector, useDispatch } from 'react-redux';
import { deleteEmployee } from '../redux/employesSlice';
import '../styles/main.scss';

function EmployeeList() {
    // Récupère la liste des employés depuis le store Redux
    const employes = useSelector((state) => state.employes);
    const dispatch = useDispatch();

    const handleDeleteClick = (employeeId) => {
        if (window.confirm('Êtes-vous sûr de vouloir supprimer cet employé ?')) {
            dispatch(deleteEmployee(employeeId));
        }
    };

    return (
        <div>
            <h2>Current Employees</h2>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Start Date</th>
                        <th>Département</th>
                        <th>Date of Birth</th>
                        <th>Street</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip Code</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Mappe les employés pour créer une ligne pour chaque employé */}
                    {employes.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.startDate}</td>
                            <td>{employee.departement}</td>
                            <td>{employee.dateOfBirth}</td>
                            <td>{employee.street}</td>
                            <td>{employee.city}</td>
                            <td>{employee.state}</td>
                            <td>{employee.zipCode}</td>
                            <td>
                                {/* Bouton de suppression */}
                                <button onClick={() => handleDeleteClick(employee.id)}>
                                    Supprimer
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeList;

