import React, { Component } from 'react'
import store from '../redux/store'

export default class UserProfileEditView extends Component {
  componentWillMount() {
    const currentUser = store.getState().currentUser.metadata
    this.state = {
      title: currentUser.title,
      organization: currentUser.organization,
      first_name: currentUser.first_name,
      last_name: currentUser.last_name,
      email: currentUser.email,
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    const user = store.getState().currentUser
    $.ajax({
      type: 'PATCH',
      contentType: 'application/json',
      url: 'http://localhost:4000/users/' + store.getState().currentUser.metadata.id,
      data: JSON.stringify({ user: this.state }),
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          First Name
          <input name="first_name" onChange={this.handleChange.bind(this)} type="text" value={this.state.first_name} />
        </label>
        <label>
          Last Name
          <input name="last_name" onChange={this.handleChange.bind(this)} type="text" value={this.state.last_name} />
        </label>
        <label>
          Email
          <input name="email" onChange={this.handleChange.bind(this)} type="text" value={this.state.email} />
        </label>
        <label>
          Title
          <input name="title" onChange={this.handleChange.bind(this)} type="text" value={this.state.title} />
        </label>
        <label>
          Organization
          <input name="organization" onChange={this.handleChange.bind(this)} type="text" value={this.state.organization} />
        </label>
        <button type="submit">save</button>
      </form>
    )
  }
}