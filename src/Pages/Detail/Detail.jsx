import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";

const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
const API_KEY = "5ddc052ed9b8.fedf3a772f7edb9b0e76";

export default function Detail() {
    const {id}= useParams()
    const [character, setCharacter]=useState({})
 
    useEffect(() => {
   axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
      if (data.name) {
         setCharacter(data);
      } else {
         window.alert('No hay personajes con ese ID');
      }
   });
   return setCharacter({});
   }, [id]);

  return (
    <div>
      <h1>Detail</h1>
         <img src={character.image} alt={character.name}/>  
         <h2>{character.name}</h2>
         <h2>{character.status}</h2>
         <h2>{character.species}</h2>
         <h2>{character.gender}</h2>
         <h2>{character.origin?.name}</h2>

    </div>
  )
}
