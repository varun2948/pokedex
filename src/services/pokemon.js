import { api } from './index';

const getAllPokemon = (offset, limit) => api.get(`/pokemon?offset=${offset}&limit=${limit}/`);
const getSinglePokemon = (pokemonName) => api.get(`/pokemon/${pokemonName}`);

export { getAllPokemon, getSinglePokemon };
