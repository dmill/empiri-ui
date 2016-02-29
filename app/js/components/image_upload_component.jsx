import React, { Component } from 'react'
import IconElement from '../elements/icon_element'

const ImageUploadComponent = ({ img, onChange }) => {
  return (
    <div className="image-upload-component">
      <label>
        <IconElement iconName="add_a_photo" iconType="material" />
        {img}
        <input type="file" onChange={onChange} />
      </label>
    </div>
  )
}

export default ImageUploadComponent
