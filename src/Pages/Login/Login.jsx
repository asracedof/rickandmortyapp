import React from 'react';
import { Link } from "react-router-dom";
import loginStyle from "./Login.module.css";


export default function Login() {
  return (
    <div className={loginStyle.container}>
      <h1 className={loginStyle.title}>Iniciar sesión en el Multiverso</h1>
      <label className={loginStyle.label}>Contraseña: </label>
      <input className={loginStyle.input} type="password" />
      <Link to="/home">
        <button className={loginStyle.button}>Ingresar</button>
      </Link>
    </div>
  )
}