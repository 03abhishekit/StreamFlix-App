import React, { useState } from 'react'
import './Login.css'
import logo from '../assets/logo.png';


const Login = () => {
  const [sign, setSign] = useState("Sign In");
  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  return (
    <>
    <div className='login'>
    <img src={logo} className='logo-login' alt="" />

    <div className="login-form">
      <h1>{sign}</h1>

      <form >
        { sign === 'Sign Up' ?
         <input type="text" value={name}placeholder='Your Name'
          onChange={(e)=>setName(e.target.value)}  /> :
          <></>
          }
         
         <input type="email" value={email} placeholder='Your Email'
         onChange={(e)=>setEmail(e.target.value)} />
         <input type="password"  value={password} placeholder='Enter password'
         onChange={(e)=>setPassword(e.target.value)}/>
         <button>{sign}</button>

         <div className="form-help">
          <div className="remember">
            <input type="checkbox" />
            <label htmlFor="">Remember Me</label>
          </div>
          <p>Need Help ?</p>
         </div>
      </form>
         <div className="form-switch">
          {sign === 'Sign In' ? 
          <p>New to Netflix? <span onClick={()=>{setSign("Sign Up")}}>Sign Up  Now</span></p> 
          :   <p>Already Have Account<span onClick={()=>{setSign("Sign In")}}>Sign In Now</span></p>
        }
          
         
         </div>
    </div>

    </div>
    </>
  )
}

export default Login
