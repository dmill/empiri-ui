import React, { Component } from 'react'
import ReviewComponent from '../components/review_component'
import Immutable from 'immutable'
import ajax from '../lib/ajax'

export default class PeerReviewsView extends Component {
  componentWillMount() {
    this.state = { reviews: [] }
  }
  componentDidMount() {
    const publicationId = this.props.routeParams.publicationId
    ajax.request({
      type: 'GET',
      url: `${ajax.getDomain()}/publications/${publicationId}/reviews`,
      success: ({ reviews }) => this.setState({ reviews: Immutable.fromJS(reviews) })
    })
  }

  render() {
    return (
      <div id="peer-reviews-view" className="container">
        {this.state.reviews.map((review) => <ReviewComponent key={review.get('id')} review={review} />)}
      </div>
    )
  }
}
