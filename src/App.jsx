import { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ProductoDetalle from './pages/ProductoDetalle'
import Carrcompra from './pages/Carrcompra'
import Login from './pages/Login'
import Protected from './Protected'
import { getAllProductos } from './store/slices/poductos.slice'
import login from './pages/Login'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { setboleano } from './store/slices/boleano.slice'
import Cardproducts from './componentes/home/Cardproducts'
function App() {

 const despachar = useDispatch()
 const nab = useNavigate()
 const cantidad =  useSelector(state => state.cantidad)


useEffect(() => {
  despachar(setboleano(false))
  const url = 'https://e-commerce-api.academlo.tech/api/v1/users'    

const data = {
  firstName: "Rodolfo",
  lastName: "Cabrera",
  email: "rodo555666@gmail.com",
  password: "1234rodo",
  phone: "1234567891",
  role: "admin"
}
axios.post(url, data)
.then(res=> console.log(res))       
.catch(err=> console.log(err)) 
  
}, [])



const navcarrito = e => {
  e.preventDefault() 
  nab('/Carrcompra')
 }

 const log = e => {
  e.preventDefault() 
  nab('/login')
 }
 const home = e => {
  e.preventDefault() 
  nab('/Home')
  despachar(setboleano(false))
 }


  
 useEffect(()=> { 
  despachar(getAllProductos()) 
 },[])

  const produc = useSelector(sta => sta.productos)


  return (
    <div className="App"> 
        <section className='titulo_logo'>
         <h2>E-comerce</h2>
        <button onClick={log} className='login'><i className="fa-solid fa-user"></i></button> 
        <button className='box' onClick={home}><i className="fa-solid fa-box"></i></button>
        <p className='cantidad_agregado'>{cantidad}</p>
        <button onClick={navcarrito} className='compras'><i className="fa-solid fa-cart-shopping"></i></button>    
         </section> 

     <Routes>
      
        <Route path='/' element={<Home/>}/> 
        <Route path='/Carrcompra' element={<Carrcompra/>}/>
        <Route path='/login' element={<Login/>}/> 
        
        <Route element={<Protected/>}>
            <Route path='/:id' element={<ProductoDetalle/>}/>
            
      </Route> 
    </Routes>
    
    </div>
  )
}

export default App
