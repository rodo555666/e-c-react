import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productosSlice = createSlice({
    name:'productos',
    initialState: null,
    reducers:{ 
    setProductosGlobal: (state,action) => action.payload}
})

export const {setProductosGlobal} = productosSlice.actions    

export default productosSlice.reducer

export const getAllProductos = () => (dispatch) => { 
   const URL = `https://e-commerce-api.academlo.tech/api/v1/products`
   axios.get(URL)
   .then( res => dispatch(setProductosGlobal(res.data.data.products)) )
   .catch( err => console.log(err))
}

export const getProByCategory = (id) => (dispatch) => { 
    const URL = `https://e-commerce-api.academlo.tech/api/v1/products?category=${id}`
    axios.get(URL)
    .then( res => dispatch(setProductosGlobal(res.data.data.products)) )
    .catch( err => console.log(err))
 }