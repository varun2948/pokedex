import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  getAllPokemonRequest: ['offset', 'limit'],
  getAllPokemonSuccess: ['payload'],
  getAllPokemonFailure: null,

  getSinglePokemonRequest: ['pokemonName'],
  getSinglePokemonSuccess: ['payload'],
  getSinglePokemonFailure: null,
});

export default Creators;
