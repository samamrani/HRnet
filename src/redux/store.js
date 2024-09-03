import { configureStore } from '@reduxjs/toolkit';
import employesReducer from './employesSlice';
import alertReducer from './alertSlice';

const store = configureStore({
  reducer: {  
    employes: employesReducer, 
    alert: alertReducer,
  },
});

export default store;
