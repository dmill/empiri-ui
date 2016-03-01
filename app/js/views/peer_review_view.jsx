import React, { Component } from 'react'
import store from '../redux/store'
import { Link } from 'react-router'
import { updatePublication } from '../redux/actions'
import TabsComponent from '../components/tabs_component'

export default class PeerReviewView extends Component {
  componentDidMount() {
    const publicationId = this.props.routeParams.publicationId
    $.ajax({
      type: 'GET',
      url: `http://localhost:4000/publications/${publicationId}`,
      contentType: 'application/json',
    }).done(({ publication }) => store.dispatch(updatePublication(publication)))
  }
  render() {
    return (
      <div id="peer-review-view" className="container">
        <h1>New Peer Review</h1>
        <TabsComponent routeParams={this.props.routeParams} />
      </div>
    )
  }
}

