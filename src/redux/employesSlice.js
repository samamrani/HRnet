import { createSlice, nanoid } from '@reduxjs/toolkit';

const employesSlice = createSlice({
    name: 'employes',
    initialState: JSON.parse(localStorage.getItem('employees')) || [], 
    reducers: {
        addEmployee: (state, { payload }) => {
            state.push({ ...payload, id: nanoid() }); 
            localStorage.setItem('employees', JSON.stringify(state)); 
        },
        updateEmployee: (state, { payload }) => {
            const index = state.findIndex(employee => employee.id === payload.id);
            if (index !== -1) {
                state[index] = { ...state[index], ...payload };
                localStorage.setItem('employees', JSON.stringify(state));
            }
        },
    },
});

export const { addEmployee, updateEmployee } = employesSlice.actions;
export default employesSlice.reducer;
