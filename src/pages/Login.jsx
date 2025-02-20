import React, { useState } from 'react'
import './Login.css'
import logo from '../assets/logo.jpg';
import { login, signup } from '../firebase';
import spinner from '../assets/netflix_spinner.gif';


const Login = () => {
  const [sign, setSign] = useState("Sign In");
  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);


  const userAuth = async(event)=>{
    event.preventDefault();
    setLoading(true);
    if(sign === 'Sign In'){
      await login(email, password);
    }
    else{
      await signup(name, email, password);
    }
    setLoading(false);
  }
  return (
    <>
    {loading ? <div className="login-spinner">
        <img src={spinner} alt="" />
      </div> :
    <div className='login'>
    <img style={{height:"20px"}} src={logo} className='logo-login' alt="" />

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
         <button onClick={userAuth} type='submit'>{sign}</button>

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
          <p>New to Streamflix? <span onClick={()=>{setSign("Sign Up")}}>Sign Up  Now</span></p> 
          :   <p>Already Have Account<span onClick={()=>{setSign("Sign In")}}>Sign In Now</span></p>
        }
          
         
         </div>
    </div>

    </div>}
    </>
  )
}

export default Login
