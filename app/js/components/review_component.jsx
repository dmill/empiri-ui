import React, { Component } from 'react'
import IconElement from '../elements/icon_element'

export default class ReviewComponent extends Component {
  renderIcon() {
    switch (this.props.review.get('rating')) {
      case -1:
        return (
          <div>
            <IconElement iconType="material" iconName="thumb_down" />
            <h3>Rejected</h3>
          </div>
        )
      case 0:
        return (
          <div>
            <IconElement iconType="material" iconName="announcement" />
            <h3>Needs Revision</h3>
          </div>
        )
      case 1:
        return (
          <div>
            <IconElement iconType="material" iconName="thumb_up" />
            <h3>Endorsed</h3>
          </div>
        )
      default:
        return console.error('Invalid rating in review component')
    }
  }

  render() {
    return (
      <div className="review component">
        {this.renderIcon()}
        <img src={this.props.review.getIn(['_embedded', 'user', 'photo_url'])} />
        <h1>{this.props.review.get('title')}</h1>
        <p>{this.props.review.get('body')}</p>
      </div>
    )
  }
}
