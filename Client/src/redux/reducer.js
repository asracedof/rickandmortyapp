import { ADD_FAV, REMOVE_FAV,FILTER, ORDER } from "./actions-types"; //! agregue FILTER
const initialState = {
    myFavorites:[],
    allCharactersFav:[] //! agregue
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case ADD_FAV:
            return { 
                ...state, 
                myFavorites: payload, 
                allCharacters: payload };
        

        case REMOVE_FAV:
                return { 
                    ...state, 
                    myFavorites: payload,
                    allCharactersFav: payload 
                 };

        case FILTER: //! agregue case completo
        const allCharactersFiltered = state.allCharactersFav.filter(character => character.gender === payload)
            return {
                ...state,
                myFavorites: 
                    payload === 'allCharacters'
                    ? [...state.allCharactersFav]
                    : allCharactersFiltered
            }
        
        case ORDER: //! agregue case completo
        const allCharactersFavCopy = [...state.allCharactersFav]
        return {
            ...state,
            myFavorites:
                payload === 'A'
                ? allCharactersFavCopy.sort((a, b) => a.id - b.id)
                : allCharactersFavCopy.sort((a, b) => b.id - a.id)
        }
    
        default:
            return {...state}; //! lo tenia asi {state}
    }
    
}
export default reducer;