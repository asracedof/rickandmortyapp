import Card from "../Card/Card";
import { connect, useDispatch} from 'react-redux'
import { filterFavCards,  resetFilters, removeFav , orderFavCards} from "../../redux/actions";
import { useState } from "react";
import './Favorites.css';

const Favorites = ({ myFavorites, removeFav, onClose}) => {
    
    function closeFav(id){
        onClose(id)
        removeFav(id)
    }
    
    const dispatch = useDispatch(); 
  
    const [orderSelect, setOrderSelect] = useState(false)
    const [filterSelect, setFilterSelect] = useState(false)

  const handleOrder = (event) => {
     event.preventDefault();
     const {value} = event.target;
     setOrderSelect(value);
     dispatch(orderFavCards(value));
  }

    const handleFilter = (event) => {
        event.preventDefault();
        const {value} = event.target;
        setFilterSelect(value)
        dispatch(filterFavCards(value));
    }
    const handleResetFilters= (event) => {
        dispatch(resetFilters());
        setFilterSelect("AllCharacters");
        setOrderSelect("DEFAULT");
    }

    return (

  <div className="containerFavs">
    <div className="rowFilter">
    <select className="filters" onChange={handleOrder} name="order" value={orderSelect}>
    <option value="DEFAULT" disabled>
            Select Order
          </option>
        <option value="ASC">Ascending</option>
        <option value="DESC">Descending</option>
    </select>

    <select className="filters" onChange={handleFilter} name="filter" value={filterSelect}>
    <option value="DEFAULT" disabled>Select Filter</option>
    <option value="AllCharacters">AllCharacters</option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
    <option value="Genderless">Genderless</option>
    <option value="unknown">Unknown</option> 
    </select>

    <button className="reset" onClick={handleResetFilters}>Reset</button>
        </div>
        <div className="favs" >
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
            {myFavorites.length === 0 && <h2 className="notFound">No favorites yet in this multiverse</h2>}
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