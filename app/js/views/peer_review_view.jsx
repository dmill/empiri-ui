import React, { Component } from 'react'
import store from '../redux/store'
import { Link } from 'react-router'
import TabsComponent from '../components/tabs_component'

export default class PeerReviewView extends Component {
  render() {
    return (
      <div id="peer-review-view" className="container">
        <h1>New Peer Review</h1>
        <TabsComponent routeParams={this.props.routeParams} tabs={this.props.route.tabs} />
      </div>
    )
  }
}
