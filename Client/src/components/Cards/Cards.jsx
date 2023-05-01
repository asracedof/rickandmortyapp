import Card from '../Card/Card';
import { useOutletContext } from "react-router-dom";
import CharacterControl from "./CharacterControl"
import cardsStyles from "./Cards.module.css";

export default function Cards() {
   const [ characters, onClose, onSearch, onClear]  = useOutletContext();
   return (
   <div className={cardsStyles.cardsContainer}>
      <CharacterControl onSearch={onSearch} onClear={onClear}/>
      <div className={cardsStyles.cards}> 
         {
            characters.map((character,index) =>
              <Card
               key={index}
               id ={character.id}
               name={character.name}
               status={character.status}
               species={character.species}
               gender={character.gender}
               image={character.image}
               origin={character.origin.name}
               onClose={() => onClose(character.id)}/>
             )
         }
      </div>
   </div>
   );
}
