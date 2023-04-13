import Card from "../Card/Card";
import { connect } from 'react-redux'
import { removeFav } from "../../redux/actions";
import './Favorites.css';

const Favorites = ({ myFavorites, removeFav, onClose}) => {
  function closeFav(id){
    onClose(id)
    removeFav(id)
  }
    return (
        <div className="container" >
            {
                myFavorites?.map(fav => {
                    return (
                        <Card
                            key={fav.id}
                            id={fav.id}
                            name={fav.name}
                            species={fav.species}
                            gender={fav.gender}
                            image={fav.image}
                            onClose={() => closeFav(fav.id)}
                        />
                    )
                })
            }
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