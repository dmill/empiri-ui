import React, { Component } from "react";

class UserProfileView extends Component {

  constructor(props) {
    super(props)
    const store = this.props.store
    this.state = { profile: store.getState().currentUser.profile }
    store.subscribe(() => this.setState({ profile: store.getState().currentUser.profile }))
  }

  render() {
    const profile = this.state.profile
    if(!profile) {
      return <div>no user</div>
    } else {
      return (
        <div>
          <h2>{profile.name}</h2>
          <h6>{profile.headline}</h6>
          <img src={profile.picture} />
          <p>{profile.summary}</p>
        </div>
      )
    }
  }

}

export default UserProfileView;
