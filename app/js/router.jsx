import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import store from './redux/store'
import BrowseView from './views/browse_view'
import UserProfileView from './views/user_profile_view'
import PublicationView from './views/publication_view'
import UserProfileEditView from './views/user_profile_edit_view'
import PeerReviewView from './views/peer_review_view'
import NewPublicationView from './views/new_publication_view'
import PeerReviewComponent from './components/peer_review_component'
import PricingPage from './views/pricing_page'
import MembershipForm from './views/membership_form'
import SlideshowComponent from './components/slideshow_component'
import PublicationEditView from './views/publication_edit_view'

function requireLogIn(nextState, replaceState) {
  if (!store.getState().currentUser) {
    replaceState({ nextPathname: nextState.location.pathname }, '/browse')
  }
}

export function startRouter(App, lock) {
  render((
    <Router history={browserHistory}>
      <Route path="/" component={App} lock={lock}>
        <IndexRoute component={BrowseView} />
        <Route path="/user/edit" onEnter={requireLogIn} component={UserProfileEditView} />
        <Route path="/users/:userId" component={UserProfileView} />
        <Route path="/publications/new" component={NewPublicationView} />
        <Route path="/publications/:publicationId" component={PublicationView} />
        <Route path="/browse" component={BrowseView} />
        <Route path="/publications/:publicationId/reviews/new" component={PeerReviewView} />
        <Route path="/publications/:publicationId/edit" component={PublicationEditView} />
      </Route>
      <Route path="/pricing" component={PricingPage} />
      <Route path="/membership" component={MembershipForm} />
    </Router>
  ), document.getElementById('root'))
}
