import { AUTH0_CLIENT_ID, AUTH0_DOMAIN } from './auth0/auth0-variables'
import React, { Component } from 'react'
import { render } from 'react-dom'
import store from './redux/store'
import { setProfile, setIdToken } from './redux/actions'
import UserProfileView from './views/user_profile_view'
import NavBarView from './views/nav_bar_view'
import Home from './auth0/home'
import style from '../stylesheets/application.scss'
import HypothesisView from './views/hypothesis_view'
import BrowseView from './views/browse_view'
import { Router, Route, IndexRoute, Link } from 'react-router'
import { createHistory, useBasename } from 'history'

const history = useBasename(createHistory)({
  basename: '/'
})

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

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { idToken: store.getState().currentUser.idToken }
    store.subscribe(() => this.setState({ idToken: store.getState().currentUser.idToken }))
  }

  render() {
    if (this.state.idToken) {
      return (
        <div id="layout">
          <NavBarView />
          <div className="container">
            <div className="row">
              {this.props.children}
            </div>
          </div>
        </div>
      )
    } else {
      return <Home lock={this.props.lock} />
    }
  }
}

const lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN)
const idToken = getIdToken(lock.parseHash(window.location.hash))
lock.getProfile(idToken, (err, profile) => dispatchCurrentUser(err, idToken, profile))
setAuthorizationHeader(idToken)
render((
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={BrowseView} />
      <Route path="/user" component={UserProfileView} />
      <Route path="/hypothesis" component={HypothesisView} />
    </Route>
  </Router>
), document.getElementById('root'))
