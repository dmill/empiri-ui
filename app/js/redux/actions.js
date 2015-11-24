export const SET_PROFILE = 'SET_PROFILE';
export const SET_ID_TOKEN = 'SET_ID_TOKEN';

export function setProfile(auth0Profile) {
  return { type: SET_PROFILE, payload: auth0Profile };
}

export function setIdToken(idToken) {
  return { type: SET_ID_TOKEN, payload: idToken };
}
