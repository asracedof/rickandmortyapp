import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET_FILTERS, SHOW_NOTIFICATION } from "./actions-types"; //! agregue FILTER
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
                allCharactersFav: payload };
        

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
                    payload === 'AllCharacters'
                    ? [...state.allCharactersFav]
                    : allCharactersFiltered
            }
        
        case ORDER: //! agregue case completo
        const allCharactersFavCopy = [...state.myFavorites]
        const newOrder = allCharactersFavCopy .sort((a, b) => {
            if (a.id > b.id) {
              return "ASC" === payload ? 1 : -1;
            }
            if (a.id < b.id) {
              return "DESC" === payload ? 1 : -1;
            }
            return 0;
          });
          return {
            ...state,
            myFavorites: newOrder,
          };
        
        case RESET_FILTERS:
        return {
          ...state,
          myFavorites: [...state.allCharactersFav],
        };
    
        default:
            return {...state}; //! lo tenia asi {state}
    }
    
}
export default reducer;