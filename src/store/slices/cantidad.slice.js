import { createSlice } from "@reduxjs/toolkit";

const cantidad = createSlice({
    name:'cantidad',
    initialState: 0,
    reducers:{ 
    setcantidad: (state,action) => action.payload}
})

export const {setcantidad} = cantidad.actions    

export default cantidad.reducer