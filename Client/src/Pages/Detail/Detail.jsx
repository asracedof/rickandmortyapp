import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import './Detail.css'; 
// const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
// const API_KEY = "5ddc052ed9b8.fedf3a772f7edb9b0e76";

export default function Detail( ) {
  const {id}= useParams()
  const [character, setCharacter]=useState({})

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/detail/${id}`)
    .then(response => response.data)
    .then((data) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert('No hay personajes con ese ID');
        }
    });
    return setCharacter({});
  }, [id]);

  return (
    <div className='detail-container'> 
      <h2 className="card-name">{character.name}</h2>
      <img className="detailImage" src={character?.image} alt={character?.name}/>
      <div className="card-container">
        <div className="infoContainer">
          <div className="card-info-container">
            <span className="card-info">Status: {character.status}</span>
            <span className="card-info">Species: {character.species}</span>
            <span className="card-info">Gender: {character.gender}</span>
            </div>
        </div>
    </div>
  </div>
  )
}