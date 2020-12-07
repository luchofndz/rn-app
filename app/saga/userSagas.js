import { call, put, takeLatest, all } from 'redux-saga/effects';
import Api from '../api';
import * as types from '../actions/types/userActionTypes';
import * as userActions from '../actions/userActions';

// Get rates for logged user
function* getuserDataSagas(action) {
  try {
    console.log("In saga");
    const response = yield call(Api.User.getUserData, action.value);
    if (response) {
      console.log("response", response);
      yield put(userActions.setUserData(response));
    }
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
