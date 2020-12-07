export function getState(state) {
  return state['user'];
}

export const getUserDataRedux = (state) => getState(state).get('userData');
export const getUserImageRedux = (state) => getState(state).get('userImage');