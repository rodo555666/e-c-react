import { createSlice } from "@reduxjs/toolkit";

const compras = createSlice({
    name:'compras',
    initialState: [],
    reducers:{ 
    setcompras: (state,action) => action.payload}
})

export const {setcompras} = compras.actions    

export default compras.reducer