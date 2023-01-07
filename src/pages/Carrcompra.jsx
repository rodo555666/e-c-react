import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Carrito from './Carrito'
import { setcompras } from '../store/slices/arrCompras.slice'
import { settotal } from '../store/slices/total.slice'
import { setcantidad } from '../store/slices/cantidad.slice'
import './carrc.css'

const Carrcompra = () => {

    const c =  useSelector(state => state.compras)
    const total =  useSelector(state => state.total)
    const dispach =  useDispatch()


const comprado = () => { 
    dispach(setcompras([]))
    dispach(settotal(0))
    dispach (setcantidad(0)) 

}



  return (
    <div className='todo' >
      <section  className='compras_contenedor'>
         { c?.map(o => ( <Carrito key={o?.id} carr={o}/>))}
      </section>
        <h3 className='total_num'>Total:$ {total}</h3>
        <article className='compra_final'> 
        <button className='btn_cpf' onClick={comprado}> Comprar <i className="fa-solid fa-cart-shopping"></i></button> 
        </article>
       
    </div>
  )
}

export default Carrcompra