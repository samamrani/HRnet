import { createSlice, nanoid } from '@reduxjs/toolkit';

/**
 * Slice Redux pour gérer l'état des employés.
 * 
 * Ce slice gère l'état de la liste des employés en utilisant Redux Toolkit.
 * Les employés sont stockés dans le localStorage pour persister les données
 * entre les rechargements de page.
 * 
 * @module employesSlice
 * 
 */

const employesSlice = createSlice({
    name: 'employes',
    initialState: JSON.parse(localStorage.getItem('employees')) || [], 
    reducers: {
        addEmployee: (state, { payload }) => {
            state.push({ ...payload, id: nanoid() }); 
            localStorage.setItem('employees', JSON.stringify(state)); 
        }, 

        updateEmployee: (state, { payload }) => {
            const { id, changes } = payload;
            const employeeIndex = state.findIndex(emp => emp.id === id);
            if (employeeIndex >= 0) {
                state[employeeIndex] = { ...state[employeeIndex], ...changes };
                localStorage.setItem('employees', JSON.stringify(state)); 
            }
        },

    },
});

export const { addEmployee, updateEmployee } = employesSlice.actions;
export default employesSlice.reducer;
