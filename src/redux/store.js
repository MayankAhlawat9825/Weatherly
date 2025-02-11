import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './Slices/weatherdata'; 

export const store = configureStore({
    reducer:  weatherReducer, // ✅ Ensure this matches useSelector(state => state.data)
    
});


