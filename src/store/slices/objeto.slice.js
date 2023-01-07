import { createSlice } from "@reduxjs/toolkit";

const objeto = createSlice({
    name:'objeto',
    initialState: [],
    reducers:{ 
    setobjeto: (state,action) => action.payload}
})

export const {setobjeto} = objeto.actions    

export default objeto.reducer