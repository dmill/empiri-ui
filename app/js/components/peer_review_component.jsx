import React, { Component } from 'react'
import store from '../redux/store'
import AvatarComponent from './avatar_component'
import IconElement from '../elements/icon_element'

export default class PeerReviewComponent extends Component {
  componentWillMount() {
    this.state = { title: '', body: '', rating: null }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  setRating(e) {
    this.setState({ rating: e.target.value })
  }

  saveReview(e) {
    e.preventDefault()
    const publicationId = store.getState().publication.get('id')
    $.ajax({
      type: 'POST',
      url: `http://localhost:4000/publications/${publicationId}/reviews`,
      data: JSON.stringify({ review: this.state }),
      contentType: 'application/json'
    }).done(({ review }) => this.props.history.push(`/publications/${review.publication_id}`))
  }

  renderRating(rating) {
    if (rating == this.state.rating) {
      return "checked"
    }
  }

  render() {
    const currentUser = store.getState().currentUser
    const currentUserFullName = `${currentUser.first_name} ${currentUser.last_name}`
    const author = store.getState().publication.getIn(['_embedded', 'authors']).get(0)
    const authorFullName = `${author.get('first_name')} ${author.get('last_name')}`

    return (
      <div id="peer-review-component">
        <AvatarComponent id={1} name={currentUserFullName} imgSrc={currentUser.photo_url} />
        <IconElement iconName="compare_arrows" iconType="material" />
        <AvatarComponent id={1} name={authorFullName} imgSrc={`${author.get('photo_url')}`} />
        <div>Peer Review by {currentUserFullName} for {authorFullName}</div>
        <div className="rating">
          <h2>Review Rating</h2>
          <label className={this.renderRating(-1)}><input onClick={this.setRating.bind(this)} type="radio" name="review" value="-1" />Reject</label>
          <label className={this.renderRating(0)}><input onClick={this.setRating.bind(this)} type="radio" name="review" value="0" />Needs Revision</label>
          <label className={this.renderRating(1)}><input onClick={this.setRating.bind(this)} type="radio" name="review" value="1" />Endorse</label>
        </div>
        <label>
          Review Title
          <input type="text" name="title" onChange={this.handleChange.bind(this)} value={this.state.title} />
        </label>
        <label>
          Review Body
          <textarea name="body" onChange={this.handleChange.bind(this)} value={this.state.body} />
        </label>
        <button onClick={this.saveReview.bind(this)} type="submit">Submit Review</button>
      </div>
    )
  }
}
