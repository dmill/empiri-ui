import React, { Component } from 'react'
import store from '../redux/store'
import { Link } from 'react-router'
import { updatePublication } from '../redux/actions'
import TabsComponent from '../components/tabs_component'
import ajax from '../lib/ajax'

export default class PeerReviewEditView extends Component {
  componentWillMount() {
    this.state = {existingReview: this.props.location.state}
  }

  render() {
    return (
      <div id="peer-review-view" className="container">
        <h1>Edit Peer Review</h1>
        <TabsComponent history={this.props.history} routeParams={this.props.routeParams} existingReview={this.state.existingReview}/>
      </div>
    )
  }
}


