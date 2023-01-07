import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { getProByCategory } from '../store/slices/poductos.slice'
import { useDispatch } from 'react-redux';
import './filtro.css'

const Filtro = () => {


const [categoria, setcategoria] = useState()
const dis = useDispatch

useEffect(() => {
    const url = 'https://e-commerce-api.academlo.tech/api/v1/products/categories'      /* api */

    axios.get(url)
    .then(res=> setcategoria(res?.data.data.categories))       /* si consigue */
    .catch(err=> console.log(err))

  
}, [])

const filtrar = id => { 
 dis(getProByCategory(id))   
}


  return (
    <div className='filtro_ctn' >
        <h3>categorias</h3>
        
       <ul> 
        <li>All products</li>
        { 
        categoria?.map( cat => (
            <li className='lista' onClick={filtrar} key={cat.name}>{cat.name}</li>
        ))
        }
       </ul>

    </div>
  )
}

export default Filtro