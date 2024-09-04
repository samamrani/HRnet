import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/main.scss';

function EmployeeList() {
    const employes = useSelector((state) => state.employes);

    return (
        <div>
            <h2>Employee List</h2>
            <ul>
                {employes.map((employee) => (
                    <li key={employee.id}>
                        {employee.firstName} {employee.lastName}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EmployeeList;
