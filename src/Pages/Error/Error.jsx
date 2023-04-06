import React from 'react';
import './Error.css';

export default function Error() {
  return (
    <div className='error-container'>
      <img src='https://rickandmortyapi.com/api/character/avatar/19.jpeg' alt='Rick Sanchez' />
      <h1>Error 404: Portal not found</h1>
      <p>Looks like Rick took this portal to another dimension. Try another path!</p>
    </div>
  );
}



