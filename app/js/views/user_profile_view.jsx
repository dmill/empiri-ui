import React, { Component } from 'react'
import store from '../redux/store'
import { Link } from 'react-router'
import EditableImageComponent from '../components/editable_image_component'
import PublicationsListComponent from '../components/publications_list_component'
import ReviewsListComponent from '../components/reviews_list_component'
import auth0 from '../auth0/auth0'
import ajax from '../lib/ajax'

export default class UserProfileView extends Component {
  componentWillMount() {
    this.state = { photo_url: '', first_name: '', last_name: '', title: '', organization: '', _embedded: { publications: [], reviews: [] } }
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState().currentUser))
    ajax.request({
      type: 'GET',
      url: `${ajax.getDomain()}/users/${this.props.routeParams.userId}`,
      success: ({ user }) => this.setState(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  uploadImage(e) {
    let formData = new FormData()
    const userId = store.getState().currentUser.id
    formData.append('photo', e.target.files[0])

    ajax.request({
      url: `${ajax.getDomain()}/users/${userId}/photos`,
      data: formData,
      type: 'POST',
      processData: false,
      file: true,
      success: () => auth0.fetchUserData()
    })
  }

  renderTitle(type) {
    if (this.props.routeParams.userId == store.getState().currentUser.id) {
      return <h1>Your {type}</h1>
    } else {
      return <h1>{this.state.first_name}&#39;s {type}</h1>
    }
  }

  renderEditButton() {
    if (this.props.routeParams.userId == store.getState().currentUser.id) {
      return <Link to="/user/edit"><button>Edit Profile</button></Link>
    }
  }

  renderPublishButton() {
    if (this.props.routeParams.userId == store.getState().currentUser.id) {
      return <Link to="/publications/new"><button className="new-publication">Write a new publication</button></Link>
    }
  }

  isEditable() {
    if (this.props.routeParams.userId == store.getState().currentUser.id) {
      return true
    } else {
      return false
    }
  }

  render() {
    return (
      <div id="user-profile-view" className="container">
        <div className="sidebar three columns">
          <EditableImageComponent isEditable={this.isEditable.bind(this)()} className="profile-picture" onChange={this.uploadImage} src={this.state.photo_url} />
          <h5>{this.state.first_name} {this.state.last_name}</h5>
          <h6>{this.state.title}</h6>
          <p>{this.state.organization}</p>
          {this.renderEditButton()}
        </div>
        <div className="nine columns">
          {this.renderTitle("Publications")}
          <PublicationsListComponent editable={this.isEditable.bind(this)()} publications={this.state._embedded.publications} />
          {this.renderPublishButton()}
          {this.renderTitle("Reviews")}
          <ReviewsListComponent editable={this.isEditable.bind(this)()} reviews={this.state._embedded.reviews} />
        </div>
      </div>
    )
  }
}
