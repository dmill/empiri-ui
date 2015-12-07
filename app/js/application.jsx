import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'
import { createHistory, useBasename } from 'history'
import BrowseView from './views/browse_view'
import store from './redux/store'
import Home from './auth0/home'
import UserProfileView from './views/user_profile_view'
import NavBarView from './views/nav_bar_view'
import HypothesisView from './views/hypothesis_view'
import style from '../stylesheets/application.scss'

class App extends Component {
  componentWillMount() {
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
      return <Home />
    }
  }
}

const history = useBasename(createHistory)({
  basename: '/'
})

render((
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={BrowseView} />
      <Route path="/user" component={UserProfileView} />
      <Route path="/hypothesis" component={HypothesisView} />
    </Route>
  </Router>
), document.getElementById('root'))
