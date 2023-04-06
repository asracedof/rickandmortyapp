import React from 'react';
import { Link } from "react-router-dom";
import loginStyle from "./Login.module.css";


export default function Login() {
  return (
    <div className={loginStyle.container}>
      <h1 className={loginStyle.title}>Sign in to the Multiverse</h1>
      <label className={loginStyle.label}>PASSWORD: </label>
      <input className={loginStyle.input} type="password" />
      <Link to="/home">
        <button className={loginStyle.button}>SUBMIT</button>
      </Link>
    </div>
  )
}