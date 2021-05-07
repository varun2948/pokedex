/* eslint-disable no-console */
import { call, put, takeLatest, all } from 'redux-saga/effects';
import pokemonActions, { Types } from '@Actions/pokemon';
import { getAllPokemon, getSinglePokemon } from '@Services/pokemon';

export function* getAllPokemonRequest(action) {
  try {
    const { offset, limit } = action;
    const getAllPokemonResponse = yield call(getAllPokemon, offset, limit);
    yield put(pokemonActions.getAllPokemonSuccess({ data: getAllPokemonResponse.data }));
    const getSinglePokemonsResponse = yield all(
      getAllPokemonResponse.data.results.map((item) => call(getSinglePokemon, item.name)),
    );
    const singlePokemonArrayResponse = getSinglePokemonsResponse.map((pokemon) => pokemon.data.results);
    console.log(singlePokemonArrayResponse, 'featurePost Promise');
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

function* pokemonWatcher() {
  yield takeLatest(Types.GET_ALL_POKEMON_REQUEST, getAllPokemonRequest);
  yield takeLatest(Types.GET_SINGLE_POKEMON_REQUEST, getSinglePokemonRequest);
  //   yield takeLatest(Types.LOGOUT_REQUEST, logoutRequest);
}

export default pokemonWatcher;
