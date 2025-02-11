import {createSlice , nanoid} from '@reduxjs/toolkit';

const initialState ={
    data:""
}

const weatherSlice = createSlice({
    name:"data",
    initialState,
    reducers:{
        getData:(state,action) =>{
            state.data = action.payload
        }
    }
})

export const {getData} = weatherSlice.actions

export default weatherSlice.reducer