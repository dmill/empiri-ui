import style from '../stylesheets/application.scss' //compiles via babel
import React, { Component } from 'react'
import auth0 from './auth0/auth0'
import store from './redux/store'
import NavBarView from './views/nav_bar_view'
import startRouter from './router'

const App = () => {
  return (
    <div id="layout">
      <NavBarView lock={this.props.route.lock} history={this.props.history} />
      {this.props.children}
    </div>
  )
}

const lock = auth0.authenticate()
startRouter(App, lock)
