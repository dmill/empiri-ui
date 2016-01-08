import React, { Component } from 'react'
import store from '../redux/store'
import { Link } from 'react-router'
import TabsComponent from '../components/tabs_component'

export default class PeerReviewView extends Component {
  render() {
    return (
      <div id="peer-review-view">
        <h1>New Peer Review</h1>
        <TabsComponent tabs={this.props.route.tabs} />
        <h1>Other Reviews</h1>
      </div>
    )
  }
}