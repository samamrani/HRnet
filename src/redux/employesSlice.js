import { createSlice } from '@reduxjs/toolkit';

const employesSlice = createSlice({
    name: 'employes',
    initialState: {
        employes: [],
    },
    reducers: {
        addEmployee: (state, action) => {
            state.employes.push(action.payload);
        }
    }
});

export const { addEmployee } = employesSlice.actions;
export default employesSlice.reducer;
