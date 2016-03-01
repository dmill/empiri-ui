import React, { Component } from 'react'
import store from '../redux/store'
import { updatePeerReview } from '../redux/actions'
import AvatarComponent from './avatar_component'
import IconElement from '../elements/icon_element'

export default class PeerReviewComponent extends Component {
  componentWillMount() {
    this.state = store.getState().peerReview
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState({ value: store.getState().peerReview }))
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  handleChange(e) {
    store.dispatch(updatePeerReview(e.target.value))
  }

  handleClick(e) {
    e.preventDefault()
  }

  render() {
    const currentUser = store.getState().currentUser
    const author = store.getState().publication.getIn(['_embedded', 'authors']).get(0)
    return (
      <div id="peer-review-component">
        <AvatarComponent id={1} name="Andrew Wong" imgSrc={currentUser.photo_url} />
        <IconElement iconName="compare_arrows" iconType="material" />
        <AvatarComponent id={1} name="Doug Mill" imgSrc={`${author.get('first_name')} ${author.get('last_name')}`} />
        <br />Peer Review by Andrew Wong for Doug Mill
        <textarea onChange={this.handleChange.bind(this)} value={this.state.value} />
        <button onClick={this.handleClick.bind(this)} type="submit">Submit Review</button>
      </div>
    )
  }
}
