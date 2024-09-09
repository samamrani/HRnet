import React, { useState } from 'react';
import moment from 'moment';
import { states } from '../data/states'; 
import { departements } from '../data/departement';
import { TextField, Button, MenuItem, Grid, Typography } from '@mui/material';

/**
 * Composant pour créer un nouvel employé.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {Function} props.onClose - Fonction à appeler pour fermer la modale après la soumission du formulaire.
 * @returns {JSX.Element} Le formulaire de création d'employé.
 */
function CreateEmployeeForm({onSubmit}) {
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

            onSubmit(newEmployee)
       
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h6">Create Employee</Typography>
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        id="first-name"
                        label="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        id="last-name"
                        label="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        fullWidth
                        required
                    />
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        id="date-of-birth"
                        label="Date of Birth"
                        type="date"
                        value={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)}
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        id="start-date"
                        label="Start Date"
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="h6">Address</Typography>
                </Grid>
                
                <Grid item xs={12}>
                    <TextField
                        id="street"
                        label="Street"
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                        fullWidth
                        required
                    />
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        id="city"
                        label="City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        fullWidth
                        required
                    />
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        id="state"
                        label="State"
                        select
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        fullWidth
                        required
                    >
                        {states.map((state) => (
                            <MenuItem key={state.abbreviation} value={state.abbreviation}>
                                {state.name}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        id="zip-code"
                        label="Zip Code"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        fullWidth
                        required
                    />
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        id="departement"
                        label="Department"
                        select
                        value={departement}
                        onChange={(e) => setDepartement(e.target.value)}
                        fullWidth
                        required
                    >
                        {departements.map((dept) => (
                            <MenuItem key={dept.name} value={dept.name}>
                                {dept.name}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>

                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="black" fullWidth>
                        Save
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}

export default CreateEmployeeForm;
