import React, { Component } from 'react'
import store from '../redux/store'

export default class UserProfileView extends Component {
  componentWillMount() {
    this.state = { profile: store.getState().currentUser.profile }
    store.subscribe(() => this.setState({ profile: store.getState().currentUser.profile }))
  }

  render() {
    return(
      <form>
        <label>
          First Name
          <input type="text" />
        </label>
        <label>
          Last Name
          <input type="text" />
        </label>
        <label>
          Email
          <input type="text" />
        </label>
        <label>
          Title
          <input type="text" />
        </label>
        <label>
          Organization
          <input type="text" />
        </label>
      </form>
    )
  }
}
