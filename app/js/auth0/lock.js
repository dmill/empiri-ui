import { AUTH0_CLIENT_ID, AUTH0_DOMAIN } from './auth0-variables'
import store from '../redux/store'
import { setProfile, setIdToken } from '../redux/actions'

function getIdToken(authHash) {
  let idToken = localStorage.getItem('userToken')
  if (!idToken && authHash) {
    if (authHash.id_token) {
      idToken = authHash.id_token
      localStorage.setItem('userToken', idToken)
    }
    if (authHash.error) {
      console.error('Error signing in', authHash)
    }
  }
  return idToken
}

function setAuthorizationHeader(idToken) {
  if (!idToken) {
    console.error("No idToken to set in Authorization Header.")
  }
  $.ajaxSetup({
    beforeSend: (xhr) => { xhr.setRequestHeader('Authorization', 'Bearer ' + idToken) }
  })
}

function dispatchCurrentUser(err, idToken, profile) {
  if (err) {
    console.error('userToken expired, please sign in again')
    localStorage.removeItem('userToken')
  } else {
    store.dispatch(setProfile(profile))
    store.dispatch(setIdToken(idToken))
  }
}

const lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN)
const idToken = getIdToken(lock.parseHash(window.location.hash))
lock.getProfile(idToken, (err, profile) => dispatchCurrentUser(err, idToken, profile))
setAuthorizationHeader(idToken)

export default lock
