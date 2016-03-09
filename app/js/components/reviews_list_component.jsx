import React, { Component } from 'react'
import IconElement from '../elements/icon_element'
import { Link } from 'react-router'

export default class ReviewsListComponent extends Component {
  renderIcon() {
    return <IconElement iconType="material" iconName="public" />
  }

  renderClassName() {
    return "published"
  }

  renderStatus() {
    return <div className="status">submitted</div>
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
              <div className={`publication ${this.renderClassName()}`} key={i}>
                {this.renderEditButton(review)}
                {this.renderIcon()}
                <Link to={`publications/${review.publication_id}/reviews`} className="title clear-fix">{review.title}</Link>
                {this.renderStatus()}
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
