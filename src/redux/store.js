import { configureStore } from '@reduxjs/toolkit';
import employesReducer from './employesSlice';

const store = configureStore({
  reducer: {  
    employes: employesReducer, 
  },
});

export default store;
