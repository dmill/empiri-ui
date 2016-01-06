import { AUTH0_CLIENT_ID, AUTH0_DOMAIN } from './auth0-variables'
import store from '../redux/store'
import { setProfile, setIdToken } from '../redux/actions'

export default class Auth0 {
  authenticate() {
    const lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN)
    const idToken = this.getIdToken(lock.parseHash(window.location.hash))
    this.setAuthHeader(idToken)
    return lock
  }

  setAuthHeader(idToken) {
    $.ajaxSetup({
      headers: { 'Authorization': 'Bearer ' + idToken }
    })
  }

  getIdToken(authHash) {
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
}
