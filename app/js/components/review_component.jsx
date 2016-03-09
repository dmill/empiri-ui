import React, { Component } from 'react'
import IconElement from '../elements/icon_element'
import AuthorMetadataElement from '../elements/author_metadata_element'

export default class ReviewComponent extends Component {
  renderBadge() {
    switch (this.props.review.get('rating')) {
      case -1:
        return (
          <div className="rating-badge red">
            <IconElement iconType="material" iconName="thumb_down" />
            <div className="text">Rejected</div>
          </div>
        )
      case 0:
        return (
          <div className="rating-badge gold">
            <IconElement iconType="material" iconName="announcement" />
            <div className="text">Needs Revision</div>
          </div>
        )
      case 1:
        return (
          <div className="rating-badge green">
            <IconElement iconType="material" iconName="thumb_up" />
            <div className="text">Endorsed</div>
          </div>
        )
      default:
        return console.error('Invalid rating in review component')
    }
  }

  render() {
    const author = this.props.review.getIn(['_embedded', 'user'])
    return (
      <div className="review component">
        {this.renderBadge()}
        <AuthorMetadataElement author={author} />
        <h1 className="title">{this.props.review.get('title')}</h1>
        <p>{this.props.review.get('body')}</p>
      </div>
    )
  }
}
