import React from 'react'
import { useState,useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Cardproducts from '../componentes/home/Cardproducts'
import { useNavigate } from 'react-router-dom'
import './home.css'






const Home = () => {

 const prod =  useSelector(state => state.productos) // state.productos, debe tenr e lmismo nombre que en el store // 
 const ped =  useSelector(state => state.compras)
 const cantidad =  useSelector(state => state.cantidad)
 const boleano=  useSelector(state => state.boleano)

 const dis =  useDispatch()
 const nab = useNavigate()

const [ prodfil, setprodfil] = useState()

useEffect(() => {
  if (prod) {
    setprodfil(prod)
  }
  
}, [prod])


const filtrar = e => { 
const inpvalue = e.target.value.toLowerCase().trim()
const fil = prod?.filter(p => p.title.toLowerCase().includes(inpvalue)  )
setprodfil(fil)

}
 

 
 

  return (
    <div> 
        
      <input className='inputf' onChange={filtrar} type="text" />
    
         
        <article className='productos_contenedor'>
       { 
       prodfil?.map(p => ( 
        <Cardproducts key={p.id} prod={p}/>
       ))
       }
        </article>
        
   
     
    </div>
  )
}

export default Home