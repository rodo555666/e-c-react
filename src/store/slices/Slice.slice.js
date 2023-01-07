import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
    name:'prueba',
    initialState: 1,
    reducers:{ 
    setslice: (state,action) => action.payload}
})

export const {setslice} = Slice.actions    

export default Slice.reducer