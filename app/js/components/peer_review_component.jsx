import React, { Component } from 'react'
import store from '../redux/store'
import { updateReview, newReview } from '../redux/actions'
import AvatarComponent from './avatar_component'
import IconElement from '../elements/icon_element'
import ajax from '../lib/ajax'

export default class PeerReviewComponent extends Component {
  componentWillMount() {
    store.dispatch(newReview())
    this.state = { review: store.getState().peerReview }
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState({ review: store.getState().peerReview }))
    this.getReview()
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  handleChange(e) {
    const newState = this.state.review.set(e.target.name, e.target.value)
    this.setState({ review : newState })
  }

  setRating(e) {
    const newState = this.state.review.set('rating', e.target.value)
    this.setState({ review : newState })
  }


  saveReview(e) {
    if(this.props.existingReview) {
      this.updateReview(e)
    }
    else {
      this.createReview(e)
    }
  }

  getReview() {
    const publicationId = this.props.routeParams.publicationId
    ajax.request({
      type: 'GET',
      url: `${ajax.getDomain()}/publications/${publicationId}/reviews`,
      success: ({ reviews }) => {
        const review = reviews.filter((review) => review.id == this.props.routeParams.reviewId)[0]
        store.dispatch(updateReview(review))
      }
    })
  }

  updateReview(e) {
    e.preventDefault()
    const publicationId = this.props.routeParams.publicationId
    ajax.request({
      type: 'PATCH',
      url: `${ajax.getDomain()}/publications/${publicationId}/reviews/${this.state.review.get('id')}`,
      data: JSON.stringify({ review: this.state.review }),
      contentType: 'application/json',
      success: ({ review }) => {
        this.props.history.push(`/publications/${review.publication_id}/reviews`)
      }
    })
  }

  createReview(e) {
    e.preventDefault()
    const publicationId = this.props.routeParams.publicationId
    ajax.request({
      type: 'POST',
      url: `${ajax.getDomain()}/publications/${publicationId}/reviews`,
      data: JSON.stringify({ review: this.state.review }),
      contentType: 'application/json',
      success: ({ review }) => this.props.history.push(`/publications/${review.publication_id}/reviews`)
    })
  }

  renderRating(rating) {
    if (rating == this.state.review.get('rating')) {
      return "checked"
    }
  }

  render() {
    const currentUser = store.getState().currentUser
    const currentUserFullName = `${currentUser.first_name} ${currentUser.last_name}`
    const author = this.state.review.getIn(['_embedded', 'author'])
    const authorFullName = `${author.get('first_name')} ${author.get('last_name')}`
    const authorImg = `${author.get('photo_url')}`

    return (
      <div id="peer-review-component">
        <div>Peer Review by {currentUserFullName} for {authorFullName}</div>
        <AvatarComponent id={1} name={currentUserFullName} imgSrc={currentUser.photo_url} />
        <IconElement iconName="compare_arrows" iconType="material" />
        <AvatarComponent id={1} name={authorFullName} imgSrc={authorImg} />
        <div className="content">
          <label>
            Review Title
            <input type="text" name="title" onChange={this.handleChange.bind(this)} value={this.state.review.get('title')} />
          </label>
          <label>
            Review Body
            <textarea name="body" onChange={this.handleChange.bind(this)} value={this.state.review.get('body')} />
          </label>
          <div className="review-title">Review Rating:</div>
          <div className="rating clear-fix">
            <label className={this.renderRating(-1)}><input onClick={this.setRating.bind(this)} type="radio" name="review" value="-1" />Reject</label>
            <label className={this.renderRating(0)}><input onClick={this.setRating.bind(this)} type="radio" name="review" value="0" />Needs Revision</label>
            <label className={this.renderRating(1)}><input onClick={this.setRating.bind(this)} type="radio" name="review" value="1" />Endorse</label>
          </div>
          <button className="submit" onClick={this.saveReview.bind(this)} type="submit">Submit Review</button>
        </div>
      </div>
    )
  }
}
