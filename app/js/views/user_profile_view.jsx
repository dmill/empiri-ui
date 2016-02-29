import React, { Component } from 'react'
import store from '../redux/store'
import { Link } from 'react-router'
import EditableImageComponent from '../components/editable_image_component'
import PublicationsListComponent from '../components/publications_list_component'
import auth0 from '../auth0/auth0'

export default class UserProfileView extends Component {
  componentWillMount() {
    this.state = { photo_url: '', first_name: '', last_name: '', title: '', organization: '', _embedded: { publications: [] } }
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState().currentUser))
    $.get(`http://localhost:4000/users/${this.props.routeParams.userId}`).done(({ user }) => {
      this.setState(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  uploadImage(e) {
    let formData = new FormData()
    const userId = store.getState().currentUser.id
    formData.append('photo', e.target.files[0])

    $.ajax({
      url: `http://localhost:4000/users/${userId}/photos`,
      data: formData,
      type: 'POST',
      processData: false,
      contentType: false
    }).done(() => auth0.fetchUserData())
  }

  render() {
    return (
      <div id="user-profile-view" className="container">
        <div className="sidebar three columns">
          <EditableImageComponent className="profile-picture" onChange={this.uploadImage} src={this.state.photo_url} />
          <h5>{this.state.first_name} {this.state.last_name}</h5>
          <h6>{this.state.title}</h6>
          <p>{this.state.organization}</p>
          <Link to="/profile/edit"><button>Edit Profile</button></Link>
        </div>
        <div className="nine columns">
          <h1>Your Publications</h1>
          <PublicationsListComponent publications={this.state._embedded.publications} />
          <Link to="/publications/new"><button className="new-publication">Write a new publication</button></Link>
        </div>
      </div>
    )
  }
}
