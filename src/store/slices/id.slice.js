import { createSlice } from "@reduxjs/toolkit";

const id = createSlice({
    name:'id',
    initialState: 0,
    reducers:{ 
    setid: (state,action) => action.payload}
})

export const {setid} = id.actions    

export default id.reducer