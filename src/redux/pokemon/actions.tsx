import PokemonActionTypes from "./actionTypes";

export const fetchPokemon = (payload: string) => ({
  type: PokemonActionTypes.FETCH,
  payload
})

export const fetchPokemonDetails = (payload: string) => ({
  type: PokemonActionTypes.FETCH_DETAILS,
  payload
})