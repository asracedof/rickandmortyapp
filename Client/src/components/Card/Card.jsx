import style from "./Card.module.css"
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav,removeFav } from "../../redux/actions";
import { useState, useEffect } from "react";

function Card(props) {
   const {id, name, gender, status, image, onClose, addFav, removeFav, myFavorites} 
   = props
   const [isFav, setIsFav]= useState(false)

   function handleFavorite(){
      if (isFav){
         setIsFav(false)
         removeFav(id)
      } else {
         setIsFav(true)
         addFav(props)
      }
   }
   
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.container} >
      <div className={style.buttons} >
         { isFav ? (
         <button onClick={handleFavorite}className={style.favButton}>❤️</button>
         ) : (
            <button onClick={handleFavorite}className={style.favButton}>🤍</button>
         )
      }
         <button onClick={()=>onClose(id)}className={style.closeButton}>X</button>
         </div>
         <Link to={`/detail/${id}`} >
         <img src={image} alt={name} />
         </Link>
         <div className={style.infoContainer}> 
         <h2 className={style.title}>{name}</h2>
         <div className={style.infoCard}> 
         <span>Status: {status}</span>
         <span>Gender: {gender}</span>
         </div>
         </div>
        
      </div>
   );
}

function mapStateToProp(state){
   return{
      myFavorites: state.myFavorites
   }
}
function mapDispatchToProp(dispatch){
   return{
      addFav: (ch) => dispatch(addFav(ch)),
      removeFav: (id) => dispatch(removeFav(id)),
   }
}

export default connect(mapStateToProp, mapDispatchToProp)(Card)