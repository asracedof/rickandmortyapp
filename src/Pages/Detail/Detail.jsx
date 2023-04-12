import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import './Detail.css'; 
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
        window.alert('¡That character is not in this universe.Try again!');
      }
    });
    return setCharacter({});
  }, [id]);

  return (
    <div className='detail-container'> 
      <img className="detailImage" src={character.image} alt={character.name}/>
      <div className="card-container">
        <div className="infoContainer">
          <h2 className="card-name">{character.name}</h2>
          <div className="card-info-container">
            <span className="card-info">Status: {character.status}</span>
            <span className="card-info">Species: {character.species}</span>
            <span className="card-info">Gender: {character.gender}</span>
            <span className="card-info">Origin: {character.origin?.name}</span>
          </div>
        </div>
    </div>
  </div>
  )
}