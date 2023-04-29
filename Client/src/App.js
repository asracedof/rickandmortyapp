import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate, } from "react-router-dom";
import axios from "axios";
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import About from './Pages/About/About';
import Detail from './Pages/Detail/Detail';
import Form from './Pages/Form/Login';
import Error from './Pages/Error/Error';
import Favorites from './components/Favorites/Favorites';
import './App.css';

const URL = 'http://localhost:3001/rickandmorty/login/';
function App() {
  const location = useLocation();
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const [characters, setCharacters] = useState([]);

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
   useEffect(() => {
   !access && navigate('/')}, [access])

   function logout() {
        setAccess(false);
        navigate('/');
   }
   
     
   function AddRandomCharacter() {
      const randomId = Math.floor(Math.random() * 40);
  
       axios(`http://localhost:3001/rickandmorty/character/${randomId}`).then(({ data }) => {
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


  const onSearch = async (id) => {
    try {
      const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
      if (data.name) {
        let exist = characters.find((ch) => ch.id === data.id);
        if (exist) {
          alert("This character already exists in this multiverse");
        } else {
          setCharacters((oldChars) => [...oldChars, data]);
        }
      }
    } catch (error){
        alert('¡That character is not in this universe.Try again!');
      }
  }

  function onClose(id) {
    setCharacters((oldChars) => {
      return oldChars.filter((ch) => ch.id !== id);
    });
  }
  
  
  
  const isLoginPage = location.pathname === '/';
  return (
    <div className='App'>
      {!isLoginPage && <NavBar logout={logout} onSearch={onSearch} AddRandomCharacter={AddRandomCharacter} />}
      <Routes>
        <Route path='/' element={<Form login={login}/>}/>
        <Route path='/about' element={<About />} />
        <Route path='/favorites' element={<Favorites onClose={onClose} />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/home' element={<Cards onClose={onClose} characters={characters} />}
        />
        <Route path='*' element={<Error />} />
      </Routes>
     </div>
  );
}

export default App;