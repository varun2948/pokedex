import { api } from './index';

const getAllPokemon = (offset, limit) => api.get(`/pokemon?offset=${offset}&limit=${limit}/`);
const getSinglePokemon = (pokemonName) => api.get(`/pokemon/${pokemonName}`);
const getSinglePokemonRegion = (pokemonName) => api.get(`/region/${pokemonName}`);
const getSinglePokemonHabitat = (pokemonName) => api.get(`/pokemon-species/${pokemonName}`);
const getSinglePokemonEvolution = (pokemonId) => api.get(`/evolution-chain/${pokemonId}`);

export { getAllPokemon, getSinglePokemon, getSinglePokemonRegion, getSinglePokemonHabitat, getSinglePokemonEvolution };
