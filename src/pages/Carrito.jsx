import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setcompras } from '../store/slices/arrCompras.slice'
import { setcantidad } from '../store/slices/cantidad.slice'
import { settotal } from '../store/slices/total.slice'
import { useState } from 'react'
import './carrito.css'


const Carrito = ({carr}) => {

    const pedido =  useSelector(state => state.compras)
    const cantidad =  useSelector(state => state.cantidad)
    const total=  useSelector(state => state.total)
    const objeto =  useSelector(state => state.objeto)
    const [i, seti] = useState(0)
    const dis =  useDispatch()




const eliminar = () => { 
  let n = Number(pedido?.price)
  const newc = pedido.filter((pedi) => pedi.id !== carr.id)
 dis(setcompras(newc))
 dis( setcantidad( cantidad - 1 )) 
 if ( total <= Number(carr.price)) {
  dis(settotal(0))

} else { 
  dis(settotal( total - Number(carr.price) ))  
  console.log("pasddsfkfds")
}

}

const mas = () => { 
  seti(i + 1)
 dis(settotal( total + Number(carr.price)     ))
}





const menos = () => { 
  seti(i - 1)
   
   console.log(carr?.price)
  
  if ( total <= Number(carr?.price)  ) {
   
    dis(settotal( 0 ) )
  } else { 
    dis(settotal( total -  Number(carr.price)     ))
  }
   
 }



     return (
    <><div  key={carr.id}>
      <section className='carrito_contenedor'>
        <h2 className='title'>{carr.title}</h2>
        <div className='fondo_blanco'></div>
        <img className='img' src={carr.productImgs[0]} alt="foto" />
        <div className='fondo_pre'> </div>
        <button onClick={menos} className='menos'><p className='c'>-</p></button>
        <p className='cantid'>{i}</p>
        <button  onClick={mas} className='mas'><p className='c'>+</p></button>
        <button className='eliminar' onClick={eliminar} ><i className="fa-solid fa-trash"></i></button>
        <h3 className='price_two'>${carr.price}</h3>
         </section>
    
    </div></>
  )
 
    
}



export default Carrito