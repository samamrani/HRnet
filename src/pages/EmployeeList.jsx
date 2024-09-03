import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addEmployee } from '../redux/employesSlice';
import '../styles/main.scss';

function EmployeeList() {
    const dispatch = useDispatch();
    const employes = useSelector((state) => state.employes.employes);

    useEffect(() => {
        const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
        storedEmployees.forEach((employee) => dispatch(addEmployee(employee)));
    }, [dispatch]);

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
