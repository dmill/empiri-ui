import { AUTH0_CLIENT_ID, AUTH0_DOMAIN } from './auth0/auth0-variables'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import store from './redux/store'
import { setCurrentUser, setIdToken } from './redux/actions'
import UserProfileView from './views/user_profile_view'
import Home from './auth0/home'

function setAuthorizationHeader() {
  if (localStorage.getItem('userToken')) {
    $.ajaxSetup({
      'beforeSend': (xhr) => {
        xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('userToken'))
      }
    })
  }
}

function getIdToken() {
  let idToken = localStorage.getItem('userToken')
  if (!idToken && authHash) {
    if (authHash.id_token) {
      idToken = authHash.id_token
      localStorage.setItem('userToken', authHash.id_token)
    }
    if (authHash.error) {
      console.error('Error signing in', authHash)
    }
  }
  return idToken
}

function dispatchCurrentUser(err, profile, idToken) {
  if (err) {
    console.error('Error loading the Profile', err)
    alert('Error loading the Profile')
  }
  store.dispatch(setCurrentUser(profile))
  store.dispatch(setIdToken(idToken))
}

const App = ({idToken, lock, store}) => {
  if (idToken) {
    return <UserProfileView store={store} />
  } else {
    return <Home lock={lock} />
  }
}

setAuthorizationHeader()
const lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN)
const authHash = lock.parseHash(window.location.hash)
const idToken = getIdToken()
lock.getProfile(idToken, (err, profile) => dispatchCurrentUser(err, profile, idToken))
ReactDOM.render(<App idToken={idToken} lock={lock} store={store} />, document.getElementById('root'))
