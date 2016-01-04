import React, { Component } from 'react'
import store from '../redux/store'
import { Link } from 'react-router'

export default class UserProfileView extends Component {
  componentWillMount() {
    this.state = { profile: store.getState().currentUser.profile }
    store.subscribe(() => this.setState({ profile: store.getState().currentUser.profile }))
  }

  render() {
    const profile = this.state.profile
    if(!profile) {
      return <div>no user</div>
    } else {
      return (
        <div id="user-profile-view">
          <div className="sidebar six columns">
            <img src={profile.picture} />
            <h5>{profile.name}</h5>
            <h6>{profile.headline}</h6>
            <p>{profile.summary}</p>
          </div>
          <div className="four columns">
            <Link to="/user/edit"><button>Edit Profile</button></Link>
          </div>
        </div>
      )
    }
  }
}
