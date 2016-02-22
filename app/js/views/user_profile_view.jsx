import React, { Component } from 'react'
import store from '../redux/store'
import { Link } from 'react-router'
import EditableImageComponent from '../components/editable_image_component'
import PublicationsListComponent from '../components/publications_list_component'

export default class UserProfileView extends Component {
  componentWillMount() {
    this.state = { currentUser: store.getState().currentUser }
    store.subscribe(() => {
      this.setState({ currentUser: store.getState().currentUser })})
  }

  render() {
    const currentUser = this.state.currentUser
    if(!currentUser) {
      return <div>no user</div>
    } else {
      return (
        <div id="user-profile-view" className="container">
          <div className="sidebar three columns">
            <EditableImageComponent className="profile-picture" src={currentUser.photo_url} />
            <h5>{currentUser.first_name} {currentUser.last_name}</h5>
            <h6>{currentUser.title}</h6>
            <p>{currentUser.organization}</p>
            <Link to="/profile/edit"><button>Edit Profile</button></Link>
          </div>
          <div className="nine columns">
            <h1>Your Publications</h1>
            <PublicationsListComponent publications={this.state.currentUser._embedded.publications} />
            <Link to="/publications/new"><button>Write a new publication</button></Link>
          </div>
        </div>
      )
    }
  }
}
