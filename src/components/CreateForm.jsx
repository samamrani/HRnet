import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../redux/employesSlice';

function CreateForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEmployee = {
            id: Date.now(),  // Génère un ID unique
            firstName,
            lastName,
        };

        dispatch(addEmployee(newEmployee));
        navigate('/employee-list');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="first-name">First Name:</label>
                <input
                    type="text"
                    id="first-name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="last-name">Last Name:</label>
                <input
                    type="text"
                    id="last-name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Create Employee</button>
        </form>
    );
}

export default CreateForm;
