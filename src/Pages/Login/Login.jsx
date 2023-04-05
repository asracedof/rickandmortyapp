import React from 'react'
import { Link } from "react-router-dom";
import loginStyle from "./Login.module.css";

export default function Login() {
  return (
    <div className={loginStyle.container}>
     <label>Password: </label>
     <input></input> 
     <Link to="/home">
     <button>Ingresar</button>
     </Link>

    </div>
  )
}
