import React, { Component } from 'react'
import ImageUploadComponent from './image_upload_component'

export default class EditableImageComponent extends Component {
  render() {
    return (
      <div className="editable-image-component">
        <ImageUploadComponent img={<img src={this.props.src} />}/>
      </div>
    )
  }
}
