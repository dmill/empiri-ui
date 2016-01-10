import React, { Component } from 'react'
import IconElement from '../elements/icon_element'

export default class PhotoUploadComponent extends Component {
  handleChange(e) {
    e.target.files[0]
  }

  render() {
    return (
      <div className="photo-upload-component">
        <label>
          <IconElement iconName="add_a_photo" iconType="material" />
          <input type="file" onChange={this.handleChange.bind(this)} />
        </label>
      </div>
    )
  }
}
