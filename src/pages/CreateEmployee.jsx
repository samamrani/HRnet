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
import { useNavigate } from 'react-router-dom';

import '../styles/main.scss';

function CreateEmployee() {
    // Déclaration des états pour chaque champ du formulaire
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [startDate, setStartDate] = useState('');
    const [departement, setDepartement] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [message, setMessage] = useState('');
    // Récupération de la fonction dispatch de Redux
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        // Création d'un nouvel employé avec les données du formulaire
        const newEmployee = {
            firstName,
            lastName,
             dateOfBirth: moment(dateOfBirth).format('MM/DD/YYYY'),
            startDate: moment(startDate).format('MM/DD/YYYY'),
            departement,
            street,
            city,
            state,
            zipCode,
        };
        // Dispatch de l'action pour ajouter un employé
        dispatch(addEmployee(newEmployee));

        setMessage('Employee created successfully!');
        // Réinitialisation des champs du formulaire
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

    const handleClearMessage = () => {
        setMessage('');
        navigate('/employee-list');
    };

    return (
        <>
          {message && <Alert message={message} clear={handleClearMessage} />}
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
