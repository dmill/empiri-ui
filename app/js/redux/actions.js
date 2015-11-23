export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const SET_ID_TOKEN = 'SET_ID_TOKEN';

export function setCurrentUser(auth0Profile) {
  return { type: SET_CURRENT_USER, payload: auth0Profile };
}

export function setIdToken(idToken) {
  return { type: SET_ID_TOKEN, payload: idToken };
}
