import React, { useState } from 'react';
import './App.css';
import axios from "axios";
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer'; // Importa el componente de Footer
import { Routes, Route, useLocation } from "react-router-dom";
import About from './Pages/About/About';
import Detail from './Pages/Detail/Detail';
import Login from './Pages/Login/Login';
import Error from './Pages/Error/Error';

function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
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
      {!isLoginPage && <NavBar onSearch={onSearch} />}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route
          path='/home'
          element={<Cards onClose={onClose} characters={characters} />}
        />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer /> 
    </div>
  );
}

export default App;


