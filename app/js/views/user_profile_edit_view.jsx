import React, { Component } from 'react'
import store from '../redux/store'
import ajax from '../lib/ajax'

export default class UserProfileEditView extends Component {
  componentWillMount() {
    this.state = store.getState().currentUser
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    const userId = store.getState().currentUser.id
    ajax.request({
      type: 'PATCH',
      contentType: 'application/json',
      url: `${ajax.getDomain()}/users/${this.state.id}`,
      data: JSON.stringify({ user: this.state }),
      success: () => this.props.history.push(`/users/${userId}`)
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
