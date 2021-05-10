import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  getAllPokemonRequest: ['offset', 'limit'],
  getAllPokemonSuccess: ['payload'],
  getAllPokemonFailure: null,

  getSinglePokemonRequest: ['pokemonName'],
  getSinglePokemonSuccess: ['payload'],
  getSinglePokemonFailure: null,

  getSinglePokemonRegionRequest: ['pokemonName'],
  getSinglePokemonRegionSuccess: ['payload'],
  getSinglePokemonRegionFailure: null,

  getSinglePokemonHabitatRequest: ['pokemonName'],
  getSinglePokemonHabitatSuccess: ['payload'],
  getSinglePokemonHabitatFailure: null,
});

export default Creators;
