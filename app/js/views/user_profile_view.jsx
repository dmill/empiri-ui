import React, { Component } from 'react'
import store from '../redux/store'

export default class UserProfileView extends Component {
  constructor(props) {
    super(props)
    this.state = { profile: store.getState().currentUser.profile }
    store.subscribe(() => this.setState({ profile: store.getState().currentUser.profile }))
  }

  render() {
    const profile = this.state.profile
    if(!profile) {
      return <div>no user</div>
    } else {
      return (
        <div id="user-profile-view" className="sidebar four columns">
          <img src={profile.picture} />
          <h2>{profile.name}</h2>
          <h6>{profile.headline}</h6>
          <p>{profile.summary}</p>
        </div>
      )
    }
  }
}
