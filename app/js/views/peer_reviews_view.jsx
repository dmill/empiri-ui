import React, { Component } from 'react'
import ReviewComponent from '../components/review_component'
import Immutable from 'immutable'
import ajax from '../lib/ajax'
import { Link } from 'react-router'

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

  renderReviews() {
    const publicationId = this.props.routeParams.publicationId
    if (this.state.reviews.size) {
      return this.state.reviews.map((review) => <ReviewComponent key={review.get('id')} review={review} />)
    } else {
      return <div className="no-reviews">No reviews yet! <Link to={`/publications/${publicationId}/reviews/new`}>Leave one!</Link></div>
    }
  }

  render() {
    return (
      <div id="peer-reviews-view" className="container">
        {this.renderReviews()}
      </div>
    )
  }
}
