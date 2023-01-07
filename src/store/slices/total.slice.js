import { createSlice } from "@reduxjs/toolkit";

const total = createSlice({
    name:'total',
    initialState: 0,
    reducers:{ 
    settotal: (state,action) => action.payload}
})

export const {settotal} = total.actions    

export default total.reducer