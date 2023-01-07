import React from 'react'
import { useForm } from 'react-hook-form'
import './login.css'
import axios from 'axios'

const Login = () => {


const {reset,register,handleSubmit} = useForm()

const submit = data => { 
 const url = 'https://e-commerce-api.academlo.tech/api/v1/users/login'    

axios.post(url, data)
.then(res=> {console.log(res.data.data)
 localStorage.setItem('token', res.data.data.token)})       
.catch(err=> console.log(err))  

}





  return (
    <div className='login_container' >
      <article > 
        <h2> Welcome! Enter your email and password to continue!</h2>
        <form  onSubmit={handleSubmit(submit)} className='formulario' > 
            
            <label className='input_email' htmlFor="email">Email</label>
            <input className='input_e' type="text" id='email' {...register("email")}/>
      
        
            <label className='pass_n' htmlFor="password">contraseña</label>
            <input className='pass_input' type="password" id='password'  {...register("password")}/>
      
        <button className='logear'>Login</button>
         </form>
       </article>
    </div>
  )
}

export default Login