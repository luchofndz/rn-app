import * as type from './types/userActionTypes';

// Saga
export const getUserData = value => ({
  type: type.GET_USER_DATA,
  value,
});

// Redux
export const setUserData = value => ({
  type: type.SET_USER_DATA,
  value,
});

export const setUserImage = value => ({
  type: type.SET_USER_IMAGE,
  value,
});