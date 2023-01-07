import { createSlice } from "@reduxjs/toolkit";

const boleano = createSlice({
    name:'boleano',
    initialState: false,
    reducers:{ 
    setboleano: (state,action) => action.payload}
})

export const {setboleano} = boleano.actions    

export default boleano.reducer