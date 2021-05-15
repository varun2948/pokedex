import { createReducer } from 'reduxsauce';
import { Types } from '@Actions/pokemon';

const initialState = {
  pokemon_data: [],
  evolutionData: {},
  isLoading: false,
};

const getAllPokemonSuccess = (state, action) => {
  const { results } = action.payload.data;
  const addingIndexToPokemonData = results.map((pokemon, index) => ({ id: index + 1, ...pokemon }));
  return { ...state, pokemon_data: { data: addingIndexToPokemonData }, isLoading: false };
};
const getSinglePokemonEvolutionSuccess = (state, action) => {
  return { ...state, evolutionData: action.payload.data, isLoading: false };
};
const getAllPokemonRequest = (state) => {
  return { ...state, isLoading: true };
};
const getSinglePokemonEvolutionRequest = (state) => {
  return { ...state, isLoading: true };
};
const pokemonReducer = createReducer(initialState, {
  [Types.GET_ALL_POKEMON_REQUEST]: getAllPokemonRequest,
  [Types.GET_ALL_POKEMON_SUCCESS]: getAllPokemonSuccess,
  [Types.GET_SINGLE_POKEMON_EVOLUTION_REQUEST]: getSinglePokemonEvolutionRequest,
  [Types.GET_SINGLE_POKEMON_EVOLUTION_SUCCESS]: getSinglePokemonEvolutionSuccess,
});

export default pokemonReducer;
