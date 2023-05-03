import React, {useState } from 'react';
import styles from "./Character.module.css";

let randomId
export default function CharacterControl (props){
    const [characterId, setCharacterId] = useState();
   
    const handleInputChange = (event) => {
        setCharacterId(event.target.value);
     }
  
     const generateRandomId = () => { 
        const num = Math.floor(Math.random() * 826);
        randomId = num;
        setCharacterId(num);
     }
  
     const sendRandomId = () => {
        generateRandomId();
        props.onSearch(randomId);
     }
  
  
     return (
        <div className={styles.cardsControl}>
           <input type='search' name='search' id='search' placeholder="Required ID" onChange={handleInputChange}/>
           <button className={styles.buttonC} onClick={() => props.onSearch(characterId)} >Add</button>
           <button className={styles.buttonC} onClick={() => sendRandomId()} >Random</button>
           <button className={styles.buttonC} onClick={() => props.onClear() }>Clear</button>
        </div>
     );
}








// function AddRandomCharacter() {
//     const randomId = Math.floor(Math.random() * 40);

//      axios(`http://localhost:3001/rickandmorty/character/${randomId}`).then(({ data }) => {
//        if (data.name) {
//           let exist = characters.find((ch) => ch.id === data.id);
//           if (exist) {
//             alert("This character already exists in this multiverse");
//           } else {
//             setCharacters((oldChars) => [...oldChars, data]);
//           }
//         } else {
//           alert('¡That character is not in this universe.Try again!');
//         }
//       });
// }