import React from 'react'
import './css/cardHome.css'
import { setid } from '../../store/slices/id.slice'
import { setcompras } from '../../store/slices/arrCompras.slice'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setcantidad } from '../../store/slices/cantidad.slice'
import { settotal } from '../../store/slices/total.slice'

const Cardproducts = ({prod}) => {

  const com =  useSelector(state => state.compras)
  const cantidad =  useSelector(state => state.cantidad)
  const total =  useSelector(state => state.total)
 
  


  const sl =  useSelector(state => state.id)
  const dis =  useDispatch()
  const nav = useNavigate()
 

  const clickproduct =  e => {
    e.preventDefault()
    nav('/ProductoDetalle')
    dis(setid(prod?.id))  
  
    }


    
  
  const compra = e => { 

    e.preventDefault()
    
      if (!com.includes(prod) )  {
       dis(setcompras([...com,prod]))
       dis(settotal(total + Number(prod.price) ))
       dis( setcantidad( cantidad + 1 )) 
    
      
    
  }
   
 
    
    
  }



    
   
  return (
    <article  className='container-card'  >
        <div className='card'> 
            <header onClick={clickproduct} className='header'>
            <img  className='ilust1' src={prod.productImgs[0]} alt="producto image" />
        </header>
        
            <h3 className='nombre'>{prod.title}</h3>
           <div className='backgrund'></div>
                <button onClick={compra} className='comprar'> <i className="fa-solid fa-cart-shopping"></i> </button>
                <h4 className='precio'>$ {prod.price} </h4>
        <div className='fondo_precio'></div>
       
         </div>
        
    </article>
  )
}

export default Cardproducts