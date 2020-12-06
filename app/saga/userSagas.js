import { call, put, takeLatest, all } from 'redux-saga/effects';
import Api from '../api';
import * as types from '../actions/types/userActionTypes';

// Get rates for logged user
function* getuserDataSagas(action) {
  try {
    console.log("In saga");
    const response = yield call(Api.User.getUserData, action.value);
    console.log("response", response);
  } catch (err) {
    console.log(err);
  }
}
// Watcher for getRatesSagas
function* getuserDataWatcher() {
  yield takeLatest(types.GET_USER_DATA, getuserDataSagas);
}


export default function* sagas() {
  yield all([getuserDataWatcher()]);
}
