import Card from '../Card/Card';
import cardsStyles from "./Cards.module.css";

export default function Cards({ characters, onClose }) {
   return (
   <div className={cardsStyles.cardsContainer}>
      {
         characters.map(({id, name, status, species, gender, origin, image})=>{
            return (
               <Card
               key={id}
               id ={id}
               name={name}
               status={status}
               species={species}
               gender={gender}
               image={image}
               origin={origin.name}
               onClose={onClose}
               />
               
            )
         })
      }
   </div>
   );
}
