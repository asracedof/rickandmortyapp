import React, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from './Pages/About/About';
import Detail from './Pages/Detail/Detail';
import Login from './Pages/Form/Login';
import Error from './Pages/Error/Error';

const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
const API_KEY = "5ddc052ed9b8.fedf3a772f7edb9b0e76";

function App() {

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'ejemplo@gmail.com';
   const PASSWORD = 'unaPass1';

   function login(inputs) {
    if (inputs.password === PASSWORD && inputs.email === EMAIL) {
      setAccess(true);
      navigate('/home');
    }
   }

   function logout() {
        setAccess(false);
        navigate('/');
   }
   

   useEffect(() => {
      !access && navigate('/');
   }, [access,navigate]);

   const [characters, setCharacters] = useState([]);
   
   function AddRandomCharacter() {
      const randomId = Math.floor(Math.random() * 100) + 1;
  
       axios(`${URL_BASE}/${randomId}?key=${API_KEY}`).then(({ data }) => {
         if (data.name) {
            let exist = characters.find((ch) => ch.id === data.id);
            if (exist) {
              alert("This character already exists in this multiverse");
            } else {
              setCharacters((oldChars) => [...oldChars, data]);
            }
          } else {
            alert('¡That character is not in this universe.Try again!');
          }
        });
    }


  function onSearch(id) {
    axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
      if (data.name) {
        let exist = characters.find((ch) => ch.id === data.id);
        if (exist) {
          alert("This character already exists in this multiverse");
        } else {
          setCharacters((oldChars) => [...oldChars, data]);
        }
      } else {
        alert('¡That character is not in this universe.Try again!');
      }
    });
  }

  function onClose(id) {
    setCharacters((oldChars) => {
      return oldChars.filter((ch) => ch.id !== id);
    });
  }

  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  return (
    <div className='App'>
      {!isLoginPage && <NavBar logout={logout} onSearch={onSearch} AddRandomCharacter={AddRandomCharacter} />}
      <Routes>
        <Route path='/' element={<Login login={login}/>} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/home' element={<Cards onClose={onClose} characters={characters} />}
        />
        <Route path='*' element={<Error />} />
      </Routes>
     </div>
  );
}

export default App;