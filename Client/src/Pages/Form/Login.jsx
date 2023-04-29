import React, { useState } from 'react';
import loginStyle from "./Login.module.css";

const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*\d)[\w@-]{6,10}$/;

export default function Login({login}) {
  
  const [inputs, setInputs]= useState({
    email:"",
    password:""
  });

  const [errors, setErrors]= useState({});
   
   function valido(inputs){
    const errors = {}
    if (!inputs.email){
      errors.email= "Enter your email address"
    } else if (!regexEmail.test(inputs.email)){
      errors.email= "Invalid email address"
    }
    if (!inputs.password){
      errors.password= "Enter your password"
    } else if (!regexPassword.test(inputs.password)){
      errors.password= "Password must contain at least one number and have a length between 6 and 10 characters"
    }
    return errors;
  }
    
  function handleChange(e){
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
    
    setErrors(valido ({
      ...inputs,
      [e.target.name]: e.target.value
    })
   )
  }

  function handleSubmit(e){
    e.preventDefault();
    const errors = valido(inputs);
    if (Object.keys(errors).length > 0) {
      alert("Invalid form");
    } else {
      setInputs({});
      setErrors({});
      login(inputs)
     }
  }
    
    return (
    <div className={loginStyle.container}>
    <h1 className={loginStyle.title}>Sign in to the Multiverse</h1>
      
      <form onSubmit={handleSubmit}>
        <div>
        <label className={loginStyle.email}></label>
      <input className={loginStyle.inputEmail} name="email" value={inputs.email} onChange={handleChange} placeholder="Enter your email address"></input>
        </div>
   
      
      {errors.email && <p className="invalid">{errors.email}</p>}
      
      <label className={loginStyle.label}></label>
      <input className={loginStyle.input} type="password" value={inputs.password} name="password" onChange={handleChange}placeholder="Enter your password"></input>
      
      {errors.password && <p className="invalid">{errors.password}</p>}
      
      <button type="submit" className={loginStyle.button}>SUBMIT</button>
      </form>
      <h3 className={loginStyle.made}>  Made by <a href="https://www.linkedin.com/in/arlet-racedo-fernandez-38b076267/" target="_blank" rel="noreferrer" className={loginStyle.link} > Arlet Racedo Fernandez</a></h3>
    </div>
  )
}