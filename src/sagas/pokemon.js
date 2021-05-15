/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { call, put, takeLatest, all } from 'redux-saga/effects';
import pokemonActions, { Types } from '@Actions/pokemon';
import {
  getAllPokemon,
  getSinglePokemon,
  getSinglePokemonRegion,
  getSinglePokemonHabitat,
  getSinglePokemonEvolution,
} from '@Services/pokemon';
import normalizer from '@src/utils/normalizer';

export function* getAllPokemonRequest(action) {
  try {
    const { offset, limit } = action;
    const getAllPokemonResponse = yield call(getAllPokemon, offset, limit);
    // yield put(pokemonActions.getAllPokemonSuccess({ data: getAllPokemonResponse.data }));
    const getSinglePokemonsResponse = yield all(
      getAllPokemonResponse.data.results.map((item) => call(getSinglePokemon, item.name)),
    );
    // const getSinglePokemonsRegionResponse = yield all(
    //   getAllPokemonResponse.data.results.map((item) => call(getSinglePokemonRegion, item.name)),
    // );
    const getSinglePokemonsHabitatResponse = yield all(
      getAllPokemonResponse.data.results.map((item, index) => call(getSinglePokemonHabitat, index + 1)),
    );
    // console.log(getSinglePokemonsRegionResponse, 'getSinglePokemonsRegionResponse');
    // console.log(getSinglePokemonsHabitatResponse, 'getSinglePokemonsHabitatResponse');
    const singlePokemonArrayResponse = getSinglePokemonsResponse.map((pokemon) => pokemon.data);
    const singlePokemonHabitatArrayResponse = getSinglePokemonsHabitatResponse.map((pokemon) => pokemon.data);
    const finalResponse = getAllPokemonResponse.data.results.map((pokemon, index) => ({
      ...pokemon,
      ...singlePokemonHabitatArrayResponse[index],
      ...singlePokemonArrayResponse[index],
    }));
    const final = finalResponse.map((res) => {
      const childType = res.types.map((child) => {
        return child.type.name;
      });
      return { ...res, types: childType };
    });
    console.log(final, 'a');
    yield put(pokemonActions.getAllPokemonSuccess({ data: { results: final } }));
  } catch (error) {
    yield put(pokemonActions.getAllPokemonFailure());
  }
}
export function* getSinglePokemonRequest(action) {
  try {
    const { pokemonData } = action;
    const response = yield call(getSinglePokemon, pokemonData);
    yield put(pokemonActions.getSinglePokemonSuccess({ data: response.data }));
  } catch (error) {
    yield put(pokemonActions.getSinglePokemonFailure());
  }
}
export function* getSinglePokemonRegionRequest(action) {
  try {
    const { pokemonData } = action;
    const response = yield call(getSinglePokemonRegion, pokemonData);
    yield put(pokemonActions.getSinglePokemonRegionSuccess({ data: response.data }));
  } catch (error) {
    yield put(pokemonActions.getSinglePokemonRegionFailure());
  }
}
export function* getSinglePokemonHabitatRequest(action) {
  try {
    const { pokemonData } = action;
    const response = yield call(getSinglePokemonHabitat, pokemonData);
    yield put(pokemonActions.getSinglePokemonHabitatSuccess({ data: response.data }));
  } catch (error) {
    yield put(pokemonActions.getSinglePokemonHabitatFailure());
  }
}
export function* getSinglePokemonEvolutionRequest(action) {
  try {
    const { pokemonId } = action;
    const response = yield call(getSinglePokemonEvolution, pokemonId);
    yield put(pokemonActions.getSinglePokemonEvolutionSuccess({ data: response.data }));
  } catch (error) {
    yield put(pokemonActions.getSinglePokemonEvolutionFailure());
  }
}

function* pokemonWatcher() {
  yield takeLatest(Types.GET_ALL_POKEMON_REQUEST, getAllPokemonRequest);
  yield takeLatest(Types.GET_SINGLE_POKEMON_REQUEST, getSinglePokemonRequest);
  yield takeLatest(Types.GET_SINGLE_POKEMON_REGION_REQUEST, getSinglePokemonRegionRequest);
  yield takeLatest(Types.GET_SINGLE_POKEMON_HABITAT_REQUEST, getSinglePokemonHabitatRequest);
  yield takeLatest(Types.GET_SINGLE_POKEMON_EVOLUTION_REQUEST, getSinglePokemonEvolutionRequest);
  //   yield takeLatest(Types.LOGOUT_REQUEST, logoutRequest);
}

export default pokemonWatcher;
