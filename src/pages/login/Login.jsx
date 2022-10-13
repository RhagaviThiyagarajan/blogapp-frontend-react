import React from "react";
import "./Login.css";
import { Context } from "../../context/Context";
import {  useRef } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
//The useRef is a hook that allows to directly create a reference
//to the DOM element in the functional component.
// Syntax: const refContainer = useRef(initialValue);
// The useRef returns a mutable ref object. This object has a property called .

function Login() {
  const userRef = useRef();
  
  //The useRef Hook allows you to persist values between renders.

//It can be used to store a mutable value that does not cause a re-render when updated.

//It can be used to access a DOM element directly.



  const passwordRef = useRef();

  const { dispatch, isFetching } = useContext(Context);

  //Dispatch is what we call to update our state,
  //and it will call the reducer for our given certain parameters.
  // On the other hand, the reducer will take 2 things as well.
  // First, it will take the current state,
  //which means the current state of our application.

  // const handleSubmit=async (e)=>
  // {
  //   e.preventDefault();
  //   dispatch({ type: "Login_START" });
  //   try {
  //     const res=await axios.post("/auth/login",
  //     {
  //       username:userRef.current.value,
  //       password:passwordRef.current.value,
  //     });

  //     dispatch({type:"LOGIN_SUCCESS",payload:res.data});
  //   } catch (error) {
  //     dispatch({type:"LOGIN_FAILURE"});
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
      window.location.replace("/");

    }
  
    catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };


  return (
    <div className="login">
      <span className="loginTitle">Login</span>

      <form className="loginForm" onSubmit={handleSubmit}>
        <label>UserName</label>
        <input
          className="loginInput"
          type="text"
          placeholder="enter your UserName"
          ref={userRef}
        />

        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="enter your password"
          ref={passwordRef}
        />

        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
             </form>

   
      <button className="RegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}

export default Login;
