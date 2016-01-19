import style from '../stylesheets/application.scss' //compiles via babel
import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'
import { createHistory, useBasename } from 'history'
import auth0 from './auth0/auth0'
import BrowseView from './views/browse_view'
import UserProfileView from './views/user_profile_view'
import NavBarView from './views/nav_bar_view'
import HomeView from './views/home_view'
import HypothesisView from './views/hypothesis_view'
import UserProfileEditView from './views/user_profile_edit_view'
import store from './redux/store'
import { setCurrentUser } from './redux/actions'
import PeerReviewView from './views/peer_review_view'
import NewReviewPaperView from './views/new_review_paper_view'

import PeerReviewComponent from './components/peer_review_component'
import ImageUploadComponent from './components/image_upload_component'
import NewHypothesisView from './views/new_hypothesis_view'

class App extends Component {
  componentWillMount() {
    this.state = { currentUser: store.getState().currentUser }
    store.subscribe(() => this.setState({ currentUser: store.getState().currentUser }))
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

function requireLogIn(nextState, replaceState) {
  if (!store.getState().currentUser) {
    replaceState({ nextPathname: nextState.location.pathname }, '/browse')
  }
}

const tabs = [
  { name: 'Your Review',
    body: <PeerReviewComponent />
  },
  {
    name: 'TIPR: transcription initiation pattern recognition on a genome scale',
    body: 'genome shit'
  }
]

function startRouter(lock) {
  const history = useBasename(createHistory)({ basename: '/' })
  render((
    <Router history={history}>
      <Route path="/" component={App} lock={lock}>
        <IndexRoute component={BrowseView} />
        <Route path="/profile" component={UserProfileView} />
        <Route path="/hypothesis" component={HypothesisView} />
        <Route path="/review/new" component={PeerReviewView} tabs={tabs} />
        <Route path="/review-papers/new" component={NewReviewPaperView} />
        <Route path="/profile/edit" onEnter={requireLogIn} component={UserProfileEditView} />
        <Route path="/hypotheses/new" onEnter={requireLogIn} component={NewHypothesisView} />
      </Route>
    </Router>
  ), document.getElementById('root'))
}

const lock = auth0.authenticate()
startRouter(lock)
