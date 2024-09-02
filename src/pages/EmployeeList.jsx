import React from 'react';
import { useSelector } from 'react-redux';

function EmployeeList() {
    const employees = useSelector((state) => state.employes.employes);

    return (
        <div>
            <h2>Employee List</h2>
            <ul>
                {employees.map((employee) => (
                    <li key={employee.id}>{employee.firstName} {employee.lastName}</li>
                ))}
            </ul>
        </div>
    );
}

export default EmployeeList;
