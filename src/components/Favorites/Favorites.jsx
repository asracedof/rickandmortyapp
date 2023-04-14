import Card from "../Card/Card";
import { connect, useDispatch } from 'react-redux'
import { filterCards, removeFav , orderCards} from "../../redux/actions";
import { useState } from "react";
import './Favorites.css';

const Favorites = ({ myFavorites, removeFav, onClose}) => {

  function closeFav(id){
    onClose(id)
    removeFav(id)
  }

  const dispatch = useDispatch(); 
  const [aux, setAux]=useState(false);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(true);
  }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value));
    }

    return (

  <div className="filter">
    <select onChange={handleOrder}>
        <option value="A">Ascending</option>
        <option value="B">Descending</option>
    </select>

    <select onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
        <option value="AllCharacters">AllCharacters</option>
    </select>
        <div className="container" >
            {
                myFavorites?.map(fav => {
                    return (
                        <Card
                            key={fav.id}
                            id={fav.id}
                            name={fav.name}
                            status={fav.status}
                            species={fav.species}
                            gender={fav.gender}
                            image={fav.image}
                            onClose={() => closeFav(fav.id)}
                        />
                    )
                })
            }
        </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}
const mapDispatch = (d) => {
  return {
      removeFav: (id) => d(removeFav(id)) 
  }
}
export default connect( mapStateToProps, mapDispatch )(Favorites);