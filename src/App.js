import React, {useState} from 'react';
import './App.css';
import axios from "axios";
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/NavBar.jsx';
import {Routes, Route} from "react-router-dom";
import About from './Pages/About/About';
import Detail from './Pages/Detail/Detail';
import Login from './Pages/Login/Login';
import Error from './Pages/Error/Error';

function App() {
   const [characters, setCharacters] = useState([])

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            let exist = characters.find((ch)=>ch.id===data.id)
            if (exist){
               alert("Ya se agrego")
            } else {
               setCharacters((oldChars) => [...oldChars, data]);
            }
         } else {
            alert('¡No hay personajes con este ID!');
         } 
      });
   }

   function onClose(id) {
      setCharacters((oldChars) => {
         return oldChars.filter((ch)=> ch.id !==id)
      });
   }

   return (
      <div className='App'>
         <NavBar onSearch={onSearch} />
            <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/detail/:id' element={<Detail/>}></Route>
            <Route path='/home' element={<Cards onClose={onClose} characters={characters} />}></Route>
            <Route path='*' element={<Error />}></Route>
         </Routes>
      </div>
   );
}

export default App;

