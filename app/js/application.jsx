import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'
import { createHistory, useBasename } from 'history'
import BrowseView from './views/browse_view'
import store from './redux/store'
import Home from './auth0/home'
import UserProfileView from './views/user_profile_view'
import NavBarView from './views/nav_bar_view'
import HomeView from './views/home_view'
import HypothesisView from './views/hypothesis_view'
import SignInView from './auth0/home'
import UserProfileEditView from './views/user_profile_edit_view'
import style from '../stylesheets/application.scss'
import Auth0 from './auth0/auth0'


class App extends Component {
  componentWillMount() {
    this.state = { idToken: store.getState().currentUser.idToken }
    store.subscribe(() => this.setState({ idToken: store.getState().currentUser.idToken }))
  }

  render() {
    return (
      <div id="layout">
        <NavBarView lock={this.props.route.lock} />
        <div className="container">
          <div className="row">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

class AppRouter {
  start() {
    const history = useBasename(createHistory)({ basename: '/' })
    render((
      <Router history={history}>
        <Route path="/" component={App} lock={lock}>
          <IndexRoute component={HomeView} />
          <Route path="/browse" component={BrowseView} />
          <Route path="/user" component={UserProfileView} />
          <Route path="/hypothesis" component={HypothesisView} />
          <Route path="/user/edit" component={UserProfileEditView} />
        </Route>
      </Router>
    ), document.getElementById('root'))
  }
}

const lock = new Auth0().authenticate()
new AppRouter().start(lock)
