import { combineReducers } from 'redux';
import pokemonReducer from './pokemon/reducer';

const rootReducer = combineReducers({pokemonReducer});

export default rootReducer;