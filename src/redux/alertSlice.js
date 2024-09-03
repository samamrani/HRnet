import { createSlice } from '@reduxjs/toolkit';

export const alertSlice = createSlice({
    name: 'alert',
    initialState: {
        message: '',
        type: '',  // 'success', 'error', etc.
    },
    reducers: {
        setAlert: (state, action) => {
            state.message = action.payload.message;
            state.type = action.payload.type;
        },
        clearAlert: (state) => {
            state.message = '';
            state.type = '';
        },
    },
});

export const { setAlert, clearAlert } = alertSlice.actions;

export default alertSlice.reducer;
