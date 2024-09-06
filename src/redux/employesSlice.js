import { createSlice, nanoid } from '@reduxjs/toolkit';

const employesSlice = createSlice({
    name: 'employes',
    initialState: JSON.parse(localStorage.getItem('employees')) || [], 
    reducers: {
        addEmployee: (state, { payload }) => {
            state.push({ ...payload, id: nanoid() }); 
            localStorage.setItem('employees', JSON.stringify(state)); 
        }, 
    },
});

export const { addEmployee, updateEmployee, deleteEmployee } = employesSlice.actions;
export default employesSlice.reducer;