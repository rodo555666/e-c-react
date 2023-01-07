import React from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Protected = () => {
    const id =  useSelector(state => state.id)
   const nav = useNavigate()

 if (id) {
    return  <Outlet />
 } else {   
     
    return <Navigate to='/' /> 

 }


  
}

export default Protected