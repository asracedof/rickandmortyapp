import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET_FILTERS, SHOW_NOTIFICATION } from "./actions-types";
import axios from "axios";

export const addFav = (character) => {
        const endpoint = 'http://localhost:3001/rickandmorty/fav';
        return async (dispatch) => {
         try{
            const {data} = await axios.post(endpoint, character)
            if(!data.length) throw Error('No favorites yet in this multiverse');
                 return dispatch({
                 type: ADD_FAV,
                 payload: data,
              });
           } catch (error) {
            console.log (error.message)
           }
        };
     };


     export const removeFav = (id) => {
        const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
        return async (dispatch) => {
         try {
            const { data } = await axios.delete(endpoint);

            return dispatch({
                type: REMOVE_FAV,
                payload: data,
            });
        } catch (error) {
            console.log(error.message);
        };
    };
}

export const filterFavCards=(gender) =>{ //! agregue
    return { type:FILTER, payload: gender}
}

export const orderFavCards=(order) =>{ //! agregue
    return { type:ORDER, payload: order}
}

export const resetFilters=() =>{ //! agregue
    return { type:RESET_FILTERS}
}

export const showNotificacion=(notification) =>{ //! agregue
    return {
        type: SHOW_NOTIFICATION,
        payload: notification
      };
    }