import React from 'react'
import './Register.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
function Register() {
  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError]=useState(false);



  const handleSubmit=async (e)=>
  {
    e.preventDefault();
    setError(false);
    try{
      const res=await axios.post("/auth/register",{
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    }catch(error)
    {
      setError(true);
    }

  }
  return (
    <div className="Register">
 <span className="RegisterTitle">Register</span>

        <form className="RegisterForm" onSubmit={handleSubmit}>
            <label>UserName</label>
            <input  className="RegisterInput"
            type="text"
            placeholder="enter your username"
            onChange={e=>setUsername(e.target.value)}/>


<label>Email</label>
            <input  className="RegisterInput"
            type="text"
            placeholder="enter your Email"
            onChange={e=>setEmail(e.target.value)}/>



<label>Password</label>
            <input type="password"
              className="RegisterInput"
            placeholder="enter your password"
            onChange={e=>setPassword(e.target.value)}/>


            <button className="RegisterButton" type="submit">Register</button>
        </form>
        <button className="RegisterLoginButton">
        <Link className="link"  to="/login">Login</Link>
        </button>
       {error && <span style={{color:"red",marginTop:"10px"}}>Something Went Wrong!</span>}
    </div>
  )
}

export default Register;