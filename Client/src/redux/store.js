import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools} from "redux-devtools-extension"
import rootReducer from './reducer';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)) // esta línea sirva para que podamos hacer peticiones a una Api/servidor
);

export default store;