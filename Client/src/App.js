import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, } from "react-router-dom";
import axios from "axios";
import Layout from "./Layout"
import Cards from './components/Cards/Cards.jsx';
import About from './Pages/About/About';
import Detail from './Pages/Detail/Detail';
import Form from './Pages/Form/Login';
import Error from './Pages/Error/Error';
import Favorites from './components/Favorites/Favorites';
import './index.css';
const URL = 'http://localhost:3001/rickandmorty/login/';

function App() {
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  const login = async (userData) => {
    try {
       const { email, password } = userData;
       const { data } = await axios(URL + `?email=${email}&password=${password}`)
       const { access } = data;
       setAccess(access);
       access && navigate('/home');
  
      } catch (error) {
        console.log(error.message);
     }
  }

  function logout() {
        setAccess(false);
        navigate('/');
  }

  useEffect(() => {
    !access && navigate('/')
  }, [access, navigate])

 
  return (
     <Routes>
      {!access && <Route path='/' element={<Form login={login}/>}/>}
      
      {access && 
      <Route path='/home' element={<Layout logout={logout}/>}>
      <Route index element={<Cards/>}/>
      <Route path='about' element={<About />} />
      <Route path='detail/:id' element={<Detail/>} />
      <Route path='favorites' element={<Favorites/>} />
      <Route path='*' element={<Error />} />
    </Route>
    }
      </Routes>
     );
  }
export default App;
