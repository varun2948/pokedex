import { createReducer } from 'reduxsauce';
import { Types } from '@Actions/pokemon';

const initialState = {
  pokemon_data: [],
  evolutionData: {},
};

const getAllPokemonSuccess = (state, action) => {
  const { results } = action.payload.data;
  const addingIndexToPokemonData = results.map((pokemon, index) => ({ id: index + 1, ...pokemon }));
  return { ...state, pokemon_data: { data: addingIndexToPokemonData } };
};
const getSinglePokemonEvolutionSuccess = (state, action) => {
  return { ...state, evolutionData: action.payload.data };
};
const pokemonReducer = createReducer(initialState, {
  [Types.GET_ALL_POKEMON_SUCCESS]: getAllPokemonSuccess,
  [Types.GET_SINGLE_POKEMON_EVOLUTION_SUCCESS]: getSinglePokemonEvolutionSuccess,
});

export default pokemonReducer;
