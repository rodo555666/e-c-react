import { configureStore } from "@reduxjs/toolkit";
import productos from './slices/poductos.slice'
import sli from './slices/Slice.slice'
import id from './slices/id.slice'
import compras from './slices/arrCompras.slice'
import cantidad from './slices/cantidad.slice'
import total from './slices/total.slice'
import boleano from './slices/boleano.slice'
import objeto from './slices/objeto.slice'
       
export default configureStore({
    reducer: {
      productos,
      sli,
      id,
      compras,
      cantidad,
      total,
      boleano,
      objeto

    }
})