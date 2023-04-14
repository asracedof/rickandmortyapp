import { ADD_FAV, REMOVE_FAV,FILTER, ORDER } from "./actions-types"; //! agregue FILTER
const initialState = {
    data:[],
    myFavorites:[],
    allCharactersFav:[] //! agregue
}

export default function rootReducer(state=initialState,{type,payload}){
    switch (type) {

        case ADD_FAV:
            return{
                ...state,
                myFavorites: [...state.allCharactersFav,payload], //! modifique
                allCharactersFav: [...state.allCharactersFav,payload] //!agregue
            };

        case REMOVE_FAV:
            const newFav=state.myFavorites.filter((ch)=>ch.id !== payload)
            return{
                ...state,
                myFavorites: newFav,
            };

        case FILTER: //! agregue case completo
            const allCharactersFiltered = state.allCharactersFav.filter((ch)=>ch.gender === payload)
            return{
                ...state,
                myFavorites: payload === "AllCharacters" ? [...state.allCharactersFav] : allCharactersFiltered
            };
        
        case ORDER: //! agregue case completo
        const allCharactersFavCopy = [...state.allCharactersFav]
        return {
            ...state,
            myFavorites: payload === "A" ? allCharactersFavCopy.sort((a,b)=> a.id - b.id) : allCharactersFavCopy.sort((a,b)=> b.id - a.id)
        };
    
        default:
            return {...state}; //! lo tenia asi {state}
    }
    
}