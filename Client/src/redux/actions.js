import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions-types"; //! agregue FILTER , ORDER

export function addFav(character){
    return {
        type: ADD_FAV,
        payload: character,
    };
}

export function removeFav(id){
    return {
        type: REMOVE_FAV,
        payload: id,
    };
}

export const filterCards=(gender) =>{ //! agregue
    return { type:FILTER, payload: gender}
}

export const orderCards=(order) =>{ //! agregue
    return { type:ORDER, payload: order}
}