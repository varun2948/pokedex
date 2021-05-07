import { createReducer } from 'reduxsauce';
import { Types } from '@Actions/pokemon';

const initialState = {
  pokemon_data: [],
};

const getAllPokemonSuccess = (state, action) => {
  const { results, count } = action.payload.data;
  const addingIndexToPokemonData = results.map((pokemon, index) => ({ id: index + 1, ...pokemon }));
  return { ...state, pokemon_data: { data: addingIndexToPokemonData, count } };
};

const pokemonReducer = createReducer(initialState, {
  [Types.GET_ALL_POKEMON_SUCCESS]: getAllPokemonSuccess,
});

export default pokemonReducer;
