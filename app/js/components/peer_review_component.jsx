import React, { Component } from 'react'
import store from '../redux/store'
import { updatePeerReview } from '../redux/actions'
import AvatarComponent from './avatar_component'
import IconElement from '../elements/icon_element'

export default class PeerReviewComponent extends Component {
  componentWillMount() {
    this.state = { value: store.getState().peerReview }
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
    return (
      <div id="peer-review-component">
        <AvatarComponent id={1} name="Andrew Wong" imgSrc="https://media.licdn.com/mpr/mprx/0_Pk1lNqFD-Pw7YbiGv8drphE2BboaYBiGz8b0-TeDt-D7YFGaNQ5x1P6DrqT14v7iMzwr05dSRqUfj1Mfpc9SyhkTYqUmj1QGMc9tB3luvzmGcLgYzQ8pcvxgOTTYN1A1rNtgr18LMzF" />
        <IconElement iconName="compare_arrows" iconType="material" />
        <AvatarComponent id={1} name="Doug Mill" imgSrc="https://media.licdn.com/media/p/3/005/014/1f0/055fa26.jpg" />
        <br />Peer Review by Andrew Wong for Doug Mill
        <textarea onChange={this.handleChange.bind(this)} value={this.state.value} />
        <button onClick={this.handleClick.bind(this)} type="submit">Submit Review</button>
      </div>
    )
  }
}
