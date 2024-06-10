export interface Pokemon {
  id: number;
  name: string;
}

export interface FetchPokemonsAction {
  type: 'FETCH_POKEMONS';
  payload: Pokemon[];
}

export interface FetchPokemonDetailsAction {
  type: 'FETCH_POKEMON_DETAILS';
  payload: Pokemon;
}

export type PokemonActions = FetchPokemonsAction | FetchPokemonDetailsAction;
