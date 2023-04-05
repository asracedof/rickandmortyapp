import style from "./Card.module.css"
import { Link } from "react-router-dom";
export default function Card({id, name, status, species, gender, origin, image, onClose}) {
   return (
      <div className={style.container} >
         <button onClick={()=>onClose(id)}className={style.closeButton}>X</button>
         <Link to={`/detail/${id}`} >
         <img src={image} alt={name} />
         </Link>
         <div className={style.infoContainer}> 
         <h2 className={style.title}>{name}</h2>
         <span>Status: {status}</span>
         <span>Species: {species}</span>
         <span>Gender: {gender}</span>
         <span>{origin}</span>
         </div>
        
      </div>
   );
}
