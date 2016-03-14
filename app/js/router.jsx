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
import PublicationEditView from './views/publication_edit_view'
import PeerReviewsView from './views/peer_reviews_view'
import LandingPage from './views/landing_page'
import Faq from './views/faq'

function gaPv(nextState) {
  const pathname = nextState.location.pathname
  const userId = store.getState().currentUser.id
  ga('set', 'userId', userId ? userId : 'noUser')
  ga('set', 'page', pathname)
  ga('send', 'pageview')
}

export function startRouter(App, lock, requireLogin) {
  render((
    <Router history={browserHistory}>
      <Route path="/" component={App} lock={lock}>
        <IndexRoute component={LandingPage} lock={lock} onEnter={gaPv} />
        <Route path="/faq" component={Faq} onEnter={gaPv} />
        <Route path="/browse" component={BrowseView} onEnter={gaPv} />
        <Route path="/user/edit" onEnter={requireLogin} component={UserProfileEditView} />
        <Route path="/users/:userId" component={UserProfileView} onEnter={gaPv} />
        <Route path="/publications/new" onEnter={requireLogin} component={NewPublicationView} />
        <Route path="/publications/:publicationId/reviews/new" onEnter={requireLogin} component={PeerReviewView} />
        <Route path="/publications/:publicationId/reviews/:reviewId/edit" component={PeerReviewView} onEnter={gaPv} />
        <Route path="/publications/:publicationId/reviews" component={PeerReviewsView} onEnter={gaPv} />
        <Route path="/publications/:publicationId/edit" onEnter={requireLogin} component={PublicationEditView} />
        <Route path="/publications/:publicationId" component={PublicationView} onEnter={gaPv} />
      </Route>
      <Route path="/pricing" component={PricingPage} />
      <Route path="/membership" component={MembershipForm} />
    </Router>
  ), document.getElementById('root'))
}
