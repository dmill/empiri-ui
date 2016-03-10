import React, { Component } from 'react'
import IconElement from '../elements/icon_element'
import { Link } from 'react-router'

export default class ReviewsListComponent extends Component {
  renderType(review) {
    switch (review.rating) {
      case -1:
        return <div className="rating-badge red">rejection</div>
      case 0:
        return <div className="rating-badge gold">revision request</div>
      case 1:
        return <div className="rating-badge green">endorsement</div>
    }
  }

  renderEditButton(review) {
    if (this.props.editable) {
      return <Link to={`publications/${review.publication_id}/reviews/${review.id}/edit`} state={review}><button>edit</button></Link>
    }
  }

  renderMessage() {
    if (this.props.editable) {
      return <div>You don&#39;t have any reviews yet.  Write one!</div>
    } else {
      return <div>No reviews yet.</div>
    }
  }

  renderReviews() {
    if (this.props.reviews.length) {
      return (
        <div>
          {this.props.reviews.map((review, i) => {
            return (
              <div className={`publication`} key={i}>
                {this.renderEditButton(review)}
                <IconElement iconType="material" iconName="rate_review" />
                <Link to={`publications/${review.publication_id}/reviews`} className="title clear-fix">{review.title}</Link>
                {this.renderType(review)}
              </div>
            )
          })}
        </div>
      )
    } else {
      return this.renderMessage()
    }
  }

  render() {
    return (
      <div className="publications-list-component">
        {this.renderReviews()}
      </div>
    )
  }
}
