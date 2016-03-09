import React, { Component } from 'react'
import IconElement from '../elements/icon_element'
import { Link } from 'react-router'

export default class ReviewsListComponent extends Component {
  renderType(review) {
    switch (review.rating) {
      case -1:
        return <div className="status red">rejection</div>
      case 0:
        return <div className="status gold">revision request</div>
      case 1:
        return <div className="status green">endorsement</div>
    }
  }

  renderEditButton(review) {
    if (this.props.editable) {
      return <Link to={`publications/${review.publication_id}/reviews/${review.id}/edit`}><button>edit</button></Link>
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
                <IconElement iconType="material" iconName="public" />
                <Link to={`publications/${review.publication_id}/reviews`} className="title clear-fix">{review.title}</Link>
                {this.renderType(section)}
              </div>
            )
          })}
        </div>
      )
    } else {
      return <div>You don&#39;t have any reviews yet.  Write one!</div>
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
