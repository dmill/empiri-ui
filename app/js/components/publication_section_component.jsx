import React, { Component } from 'react'
import IconElement from '../elements/icon_element'
import InputElement from '../elements/input_element'
import ImageUploadComponent from './image_upload_component'

export default class PublicationSection extends Component {
  render() {
    return (
      <div className="publication-paper-section-component">
        <label>
          Section title
          <input type="text" value={this.props.title} onChange={this.props.onChange} />
        </label>
        <label>
          Section Body
          <textarea value={this.props.body} />
        </label>
        <ImageUploadComponent />
      </div>
    )
  }
}
