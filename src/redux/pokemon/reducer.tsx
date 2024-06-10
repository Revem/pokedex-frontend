import PokemonActionTypes from "./actionTypes";

const initialState = {
  currentPokemons: null,
};

const pokemonReducer = (state = initialState, action: {type: string; payload: string}) => {
  switch (action.type) {
    case PokemonActionTypes.FETCH:
      return action.payload;
    case PokemonActionTypes.FETCH_DETAILS:
      return {...state, pokemon: action.payload}
    default:
      return state;
  }
};

export default pokemonReducer;