import style from '../stylesheets/application.scss' //compiles via babel
import React, { Component } from 'react'
import auth0 from './auth0/auth0'
import store from './redux/store'
import NavBarView from './views/nav_bar_view'
import { startRouter } from './router'

const lock = auth0.authenticate()

const App = ({ children, history, route }) => {
  return (
    <div id="layout">
      <NavBarView lock={route.lock} history={history} />
      {children}
    </div>
  )
}

function requireLogin() {
  if (!store.getState().currentUser.id) {
    lock.showSignup({
      icon: 'https://s3-us-west-1.amazonaws.com/www.empiri.co/images/symbol.png',
      socialBigButtons: true,
      authParams: {
        scope: 'openid email given_name family_name picture'
      }
    })
  }
}

startRouter(App, lock, requireLogin)
