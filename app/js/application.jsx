import { AUTH0_CLIENT_ID, AUTH0_DOMAIN } from './auth0/auth0-variables'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import store from './redux/store'
import { setProfile, setIdToken } from './redux/actions'
import UserProfileView from './views/user_profile_view'
import Home from './auth0/home'

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
    console.error('Error loading the Profile', err)
    alert('Error loading the Profile')
  }
  store.dispatch(setProfile(profile))
  store.dispatch(setIdToken(idToken))
}

const App = ({idToken, lock, store}) => {
  if (idToken) {
    return <UserProfileView store={store} />
  } else {
    return <Home lock={lock} />
  }
}

const lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN)
const idToken = getIdToken(lock.parseHash(window.location.hash))
lock.getProfile(idToken, (err, profile) => dispatchCurrentUser(err, idToken, profile))
setAuthorizationHeader(idToken)
ReactDOM.render(<App idToken={idToken} lock={lock} store={store} />, document.getElementById('root'))
