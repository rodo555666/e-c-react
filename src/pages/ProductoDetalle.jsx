import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios';
import './productoinfo.css'
import { useSelector, useDispatch } from 'react-redux'
import { setcompras } from '../store/slices/arrCompras.slice'
import { setcantidad } from '../store/slices/cantidad.slice'
import { useNavigate } from 'react-router-dom'
import { setboleano } from '../store/slices/boleano.slice'

const ProductoDetalle = () => {

    const idp =  useSelector(state => state.id)
    const nav = useNavigate()
 
    const [pro, setpro] = useState()
    const [prod, setprod] = useState()

    const [idx, setidx] = useState(0)

    const compras =  useSelector(state => state.compras)
    const cantidad =  useSelector(state => state.cantidad)
    const boleano =  useSelector(state => state.boleano)
    const dis =  useDispatch()

useEffect(() => {

const url = `https://e-commerce-api.academlo.tech/api/v1/products/${idp}`      /* api */
    axios.get(url)
    .then(res=> { setpro(res.data.data.product) 
    setprod(res.data.data.product)})
           /* si consigue */
    .catch(err=> console.log(err))   /* si falla */
    
}, [])

useEffect(() => {
  dis(setboleano(true))
console.log(boleano)

  
}, [boleano])




const derecha = () => {
  if (idx > 0 ) {
    setidx( idx -1 )
  }
}

const izquierda = () => {
  if (idx < 2 ) {
    setidx( idx +1 )
  }
}

const aderir = () => { 
  for (let i = 0; i <= compras.length; i++) { if (!compras.includes(prod))  {
    dis(setcompras([...compras,prod]))
  dis( setcantidad( cantidad + 1 )) 
 } 
}
  
}

const volver = () => { 
  nav('/Home')
}

  return (
    <><div className='producto'>
      <button onClick={volver}></button>
    <article className='card_producto'> 
      <section className='ilustraciones'>
      <div className='fondo_blacno'></div>
      <img className='img_grande' src={pro?.productImgs[idx]} alt="productimg" />
     <button onClick={izquierda} className='derecha' > <i className="fa-solid fa-chevron-right"></i></button>
     <button onClick={derecha} className='izquierda' > <i className="fa-solid fa-chevron-left"></i> </button>
     <div className='img_1' ><img className='imgv' src={pro?.productImgs[0]} alt="productimg" /></div>
    <div className='img_2'><img className='imgv' src={pro?.productImgs[1]} alt="productimg" /></div> 
    <div className='img_3'><img className='imgv' src={pro?.productImgs[2]} alt="productimg" /></div>
     </section>

    <section className='infotext'>
     <h2 className='title'>{pro?.title}</h2>
    <p className='descripcion'>{pro?.description}</p>
   <h3 className='price'>${pro?.price}</h3> 
   <button onClick={aderir} className='comp_produc'> <i className="fa-solid fa-cart-shopping"></i></button>
    </section>
    </article> 
    </div>
    </>
  )
}

export default ProductoDetalle