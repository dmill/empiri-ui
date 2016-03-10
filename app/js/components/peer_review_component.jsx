import React, { Component } from 'react'
import store from '../redux/store'
import { updatePublication } from '../redux/actions'
import AvatarComponent from './avatar_component'
import IconElement from '../elements/icon_element'
import ajax from '../lib/ajax'

export default class PeerReviewComponent extends Component {
  componentWillMount() {
    this.state = Object.assign(this.props.existingReview || { title: '', body: '', rating: null },
                               {publication: null})
  }

  componentDidMount() {
    if(!this.state.publication) { this.getPublication() }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  setRating(e) {
    this.setState({ rating: e.target.value })
  }


  saveReview(e) {
    if(this.props.existingReview) {
      this.updateReview(e)
    }
    else {
      this.createReview(e)
    }
  }

  updateReview(e) {
    e.preventDefault()
    const publicationId = this.state.publication.get('id')
    ajax.request({
      type: 'PATCH',
      url: `${ajax.getDomain()}/publications/${publicationId}/reviews/${this.state.id}`,
      data: JSON.stringify({ review: this.state }),
      contentType: 'application/json',
      success: ({ review }) => {
        this.props.history.push(`/publications/${review.publication_id}/reviews`)
      }
    })
  }

  createReview(e) {
    e.preventDefault()
    const publicationId = this.state.publication.get('id')
    ajax.request({
      type: 'POST',
      url: `${ajax.getDomain()}/publications/${publicationId}/reviews`,
      data: JSON.stringify({ review: this.state }),
      contentType: 'application/json',
      success: ({ review }) => this.props.history.push(`/publications/${review.publication_id}/reviews`)
    })
  }

  renderRating(rating) {
    if (rating == this.state.rating) {
      return "checked"
    }
  }

  getPublication() {
    const publicationId = this.props.routeParams.publicationId
    this.unsubscribe = store.subscribe(() => this.setState({ publication: store.getState().publication }))
    if(store.getState().publication.title) {
      this.setState({publication: store.getState().publication})
    }
    else {
      ajax.request({
        type: 'GET',
        url: `${ajax.getDomain()}/publications/${publicationId}`,
        success: ({ publication }) => {
          store.dispatch(updatePublication(publication))
          this.setState({publication: publication})
        }
    })
  }
  }

  render() {
    const currentUser = store.getState().currentUser
    const currentUserFullName = `${currentUser.first_name} ${currentUser.last_name}`
    const author = this.state.publication ? this.state.publication.getIn(['_embedded', 'users']).get(0) : null
    const authorFullName = author ? `${author.get('first_name')} ${author.get('last_name')}` : ""
    const authorImg = author ? `${author.get('photo_url')}` : ""

    return (
      <div id="peer-review-component">
        <div>Peer Review by {currentUserFullName} for {authorFullName}</div>
        <AvatarComponent id={1} name={currentUserFullName} imgSrc={currentUser.photo_url} />
        <IconElement iconName="compare_arrows" iconType="material" />
        <AvatarComponent id={1} name={authorFullName} imgSrc={authorImg} />
        <div className="content">
          <label>
            Review Title
            <input type="text" name="title" onChange={this.handleChange.bind(this)} value={this.state.title} />
          </label>
          <label>
            Review Body
            <textarea name="body" onChange={this.handleChange.bind(this)} value={this.state.body} />
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
