import React, { Component } from 'react'
import store from '../redux/store'
import { Link } from 'react-router'
import { updatePublication } from '../redux/actions'
import TabsComponent from '../components/tabs_component'
import ajax from '../lib/ajax'

export default class PeerReviewView extends Component {
  componentDidMount() {
    const publicationId = this.props.routeParams.publicationId
    ajax.request({
      type: 'GET',
      url: `${ajax.getDomain()}/publications/${publicationId}`,
      contentType: 'application/json',
      success: ({ publication }) => store.dispatch(updatePublication(publication))
    })
  }

  render() {
    return (
      <div id="peer-review-view" className="container">
        <h1>New Peer Review</h1>
        <TabsComponent history={this.props.history} routeParams={this.props.routeParams} />
      </div>
    )
  }
}

