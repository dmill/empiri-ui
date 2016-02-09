import React, { Component } from 'react'
import store from '../redux/store'
import { setCurrentUser } from '../redux/actions'
import { Link } from 'react-router'
import EditableImageComponent from '../components/editable_image_component'

export default class UserProfileView extends Component {
  componentWillMount() {
    this.state = { currentUser: store.getState().currentUser }
    store.subscribe(() => setCurrentUser(store.getState().currentUser))
  }

  render() {
    const currentUser = this.state.currentUser
    if(!currentUser) {
      return <div>no user</div>
    } else {
      return (
        <div id="user-profile-view">
          <div className="sidebar six columns">
            <EditableImageComponent className="profile-picture" src={currentUser.photo_url} />
            <h5>{currentUser.first_name} {currentUser.last_name}</h5>
            <h6>{currentUser.title}</h6>
            <p>{currentUser.organization}</p>
          </div>
          <div className="four columns">
            <Link to="/profile/edit"><button>Edit Profile</button></Link>
          </div>
        </div>
      )
    }
  }
}
