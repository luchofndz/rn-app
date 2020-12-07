import { combineReducers } from 'redux';
import { userReducers } from './userReducer';
import { REHYDRATE } from 'redux-persist/lib/constants'; 

const appReducer = combineReducers({
  user: userReducers
});

const initialState = appReducer({}, {});

const rootReducer = (state=initialState, action) => {
  // if (action.type === 'LOGOUT') {
  //   state = initialState;
  // }
  switch(action.type) {
    case REHYDRATE:
      // return { ...state, persistedState: action.payload };
      return { ...state };
    break;
  }

  return appReducer(state, action);
};

export { rootReducer };