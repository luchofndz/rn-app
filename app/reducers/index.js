import { combineReducers } from 'redux';
import { userReducers } from './userReducer';

const appReducer = combineReducers({
  user: userReducers
});

const initialState = appReducer({}, {});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = initialState;
  }

  return appReducer(state, action);
};

export { rootReducer };