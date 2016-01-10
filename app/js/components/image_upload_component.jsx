import React, { Component } from 'react'
import IconElement from '../elements/icon_element'

export default class ImageUploadComponent extends Component {
  handleChange(e) {
    e.target.files[0]
  }

  render() {
    return (
      <div className="image-upload-component">
        <label>
          <IconElement iconName="add_a_photo" iconType="material" />
          {this.props.img}
          <input type="file" onChange={this.handleChange.bind(this)} />
        </label>
      </div>
    )
  }
}
