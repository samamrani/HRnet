import React, { useState } from 'react';
import moment from 'moment';

import { useDispatch } from 'react-redux';
import { addEmployee } from '../redux/employesSlice';

import { states } from '../data/states'; 
import { departements } from '../data/departement'; 

import Alert from '../components/Alert';
import InputField from '../components/InputField';
import SelectField from '../components/SelectField';
import DateField from '../components/DateField';
import { setAlert } from '../redux/alertSlice';

import '../styles/main.scss';

function CreateEmployee() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [startDate, setStartDate] = useState('');
    const [departement, setDepartement] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newEmployee = {
            id: Date.now(),
            firstName,
            lastName,
            dateOfBirth: moment(dateOfBirth).format('DD/MM/YYYY'),
            startDate: moment(startDate).format('DD/MM/YYYY'),
            departement,
            street,
            city,
            state,
            zipCode,
        };

        dispatch(addEmployee(newEmployee));

        // Save employees in localStorage
        const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
        storedEmployees.push(newEmployee);
        localStorage.setItem('employees', JSON.stringify(storedEmployees));

        // Trigger a success alert
        dispatch(setAlert({ message: 'Employee created successfully!', type: 'success' }));
    
        // Reset the form after submission
        setFirstName('');
        setLastName('');
        setDateOfBirth('');
        setStartDate('');
        setDepartement('');
        setStreet('');
        setCity('');
        setState('');
        setZipCode('');
    };

    return (
        <>
            <Alert />
            <form onSubmit={handleSubmit}>
                <InputField
                    id="first-name"
                    label="First Name"
                    value={firstName}
                    onChange={setFirstName}
                    required
                />
                <InputField
                    id="last-name"
                    label="Last Name"
                    value={lastName}
                    onChange={setLastName}
                    required
                />
                <DateField
                    id="date-of-birth"
                    label="Date of Birth"
                    value={dateOfBirth}
                    onChange={setDateOfBirth}
                />
                <DateField
                    id="start-date"
                    label="Start Date"
                    value={startDate}
                    onChange={setStartDate}
                />
                <div className='address'>
                    <h3>Address</h3>
                    <InputField
                        id="street"
                        label="Street"
                        value={street}
                        onChange={setStreet}
                        required
                    />
                    <InputField
                        id="city"
                        label="City"
                        value={city}
                        onChange={setCity}
                        required
                    />
                    <SelectField
                        id="state"
                        label="State"
                        options={states.map(state => ({ value: state.abbreviation, label: state.name }))}
                        value={state}
                        onChange={setState}
                        required
                    />
                    <InputField
                        id="zip-code"
                        label="Zip Code"
                        value={zipCode}
                        onChange={setZipCode}
                        required
                    />
                </div>
                <SelectField
                    id="departement"
                    label="Department"
                    options={departements.map(dept => ({ value: dept.name, label: dept.name }))}
                    value={departement}
                    onChange={setDepartement}
                    required
                />
                <button type="submit">Save</button>
            </form>
        </>
    );
}

export default CreateEmployee;
