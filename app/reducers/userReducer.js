import { Map } from 'immutable';
import * as t from '../actions/types/userActionTypes';

const initialState = Map({
  userData: null
});

const userReducers = function(state = initialState, action) {
  switch (action.type) {

    case t.SET_USER_DATA:
      return state.set('userData', action.value);

    default:
      return state;
  }
};

export { userReducers };
