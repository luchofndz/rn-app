import { fork, all } from 'redux-saga/effects';
import user from './userSagas';

export default function* startForman() {
  yield all([fork(user)]);
}