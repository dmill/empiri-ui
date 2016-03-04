import { AUTH0_CLIENT_ID, AUTH0_DOMAIN } from './auth0-variables'
import store from '../redux/store'
import { setCurrentUser, logout } from '../redux/actions'

class Auth0 {
  authenticate() {
    const lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN)
    const idToken = this.getIdToken(lock.parseHash(window.location.hash))
    this.setAuthHeader(idToken)
    if (idToken) {
      this.fetchUserData()
    }
    return lock
  }

  fetchUserData() {
    $.ajax({
      contentType: 'application/json',
      url: 'http://localhost:4000/users/login',
      type: 'GET',
    }).done(({ user }) => store.dispatch(setCurrentUser(user)))
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

  logout() {
    localStorage.removeItem('userToken')
    $.ajaxSettings({ headers: {} })
    store.dispatch(logout())
  }

  setAuthHeader(idToken) {
    $.ajaxSettings({ headers: { 'Authorization': 'Bearer ' + idToken } })
  }
}

const auth0 = new Auth0()
export default auth0
