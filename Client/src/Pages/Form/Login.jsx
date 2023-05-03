import React, { useState } from 'react';
import styles from "./Login.module.css";

const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*\d)[\w@-]{6,10}$/;

export default function Login({login}) {
  
  const [inputs, setInputs]= useState({
    email:"",
    password:""
  });
  const [isOpen, setIsOpen] =useState(false);
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
    <main className={styles.container}>
     <div className={styles.formContainer}>
        <h1 className={styles.title}>Sign to the<br />Multiverse</h1>
      
      <form className={styles.form}action="" onSubmit={handleSubmit}>

        <div className={styles.info}>
         <label htmlFor="email" className={styles.label}>Username:</label>
         <input name="email" type='text' value={inputs.email} onChange={handleChange} placeholder="Enter your email address" className={errors.email && styles.warning}></input>
         {errors.email && <p className={styles.invalid}>{errors.email}</p>}
        </div>

        <div >
         <label htmlFor="password" className={styles.label}>Password:</label>
         <input name="password" type="password"  value={inputs.password}  onChange={handleChange}placeholder="Enter your password" className={errors.password && styles.warning} ></input>  
         {errors.password && <p className={styles.invalid}>{errors.password}</p>}
        </div>    
      
       <button type="submit" className={styles.button}>Login</button>
      </form>
      <div className={styles.collapsible}>
                  <button className={styles.toggle} onClick={() => setIsOpen(!isOpen) } >GUEST USER CREDENTIALS</button>
                  { isOpen && 
                    <div className={styles.guestInfo}>
                      <p><span>Email: </span>ejemplo@gmail.com</p>
                      <p><span>Password: </span>Unapass1</p>
                    </div>
                  }
        </div>

      </div>
      <h3 className={styles.made}>  Made by  <a href="https://www.linkedin.com/in/arlet-racedo-fernandez-38b076267/" target="_blank" rel="noreferrer" className={styles.link} > Arlet Racedo Fernandez</a></h3>
  </main>
  
  )
}

