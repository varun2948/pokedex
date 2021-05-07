import { all } from 'redux-saga/effects';
import loginWatcher from './login';
import registerWatcher from './register';
import pokemonWatcher from './pokemon';

function* rootSaga() {
  yield all([loginWatcher(), registerWatcher(), pokemonWatcher()]);
}

export default rootSaga;
