import React, { Component } from 'react'
import IconElement from '../elements/icon_element'
import InputElement from '../elements/input_element'
import ImageUploadComponent from './image_upload_component'
import store from '../redux/store'
import { addSection } from '../redux/actions'

export default class PublicationSection extends Component {
  componentWillMount() {
    this.state = {
      title: this.props.title,
      body: this.props.body,
      position: this.props.position
    }
  }

  deleteSection() {
    const publicationId = store.getState().publicationInProgress.id
    const sectionId = this.state.position
    $.ajax({
      type: 'DELETE',
      url: `http://localhost:4000/publications/${publicationId}/sections/${sectionId}`,
      contentType: 'application/json'
    }).done(() => this.props.deleteSection(this.state.position))
  }

  saveSection() {
    const publicationId = store.getState().publicationInProgress.id
    $.ajax({
      type: 'POST',
      url: `http://localhost:4000/publications/${publicationId}/sections`,
      data: JSON.stringify({ section: this.state }),
      contentType: 'application/json'
    }).done(({ section }) => {
      store.dispatch(addSection(section))
    })
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div className="publication-paper-section-component">
        <label>
          Section title
          <input type="text" name="title" value={this.state.title} onChange={this.onChange.bind(this)} />
        </label>
        <label>
          Section Body
          <textarea name="body" value={this.state.body} onChange={this.onChange.bind(this)} />
        </label>
        <ImageUploadComponent />
        <button onClick={this.saveSection.bind(this)}>save this section</button>
        <button onClick={this.deleteSection.bind(this)}>delete this section</button>
      </div>
    )
  }
}
