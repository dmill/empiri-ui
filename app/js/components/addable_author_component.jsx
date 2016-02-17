import React, { Component } from 'react'
import IconElement from '../elements/icon_element'
import store from '../redux/store'
import { addAuthor } from '../redux/actions'

export default class AddableAuthorComponent extends Component {
  componentWillMount() {
    this.state = { first_name: '', last_name: '', email: '', title: '', organization: '' }
  }

  addAuthor() {
    const publicationId = store.getState().publicationInProgress.id
    $.ajax({
      type: 'POST',
      url: `http://localhost:4000/publications/${publicationId}/authors`,
      data: JSON.stringify({ author: this.state }),
      contentType: 'application/json'
    }).done(() => {
      store.dispatch(addAuthor(this.state))
      this.setState({ first_name: '', last_name: '', email: '', title: '', organization: '' })
    })
  }

  updateAuthor(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div className="addable-author-component">
        <div className="addable-author-element">
          <label className="first-name">
            First Name
            <input type="text" name="first_name" value={this.state.first_name} onChange={this.updateAuthor.bind(this)} />
          </label>
          <label className="last-name">
            Last Name
            <input type="text" name="last_name" value={this.state.last_name} onChange={this.updateAuthor.bind(this)} />
          </label>
          <label className="title">
            Title
            <input type="text" name="title" value={this.state.title} onChange={this.updateAuthor.bind(this)} />
          </label>
          <label className="organization">
            Organization
            <input type="text" name="organization" value={this.state.organization} onChange={this.updateAuthor.bind(this)} />
          </label>
          <label className="email">
            email
            <input type="text" name="email" value={this.state.email} onChange={this.updateAuthor.bind(this)} />
          </label>
        </div>
        <IconElement onClick={this.addAuthor.bind(this)} iconType="fontawesome" iconName="plus-circle" />
      </div>
    )
  }
}
