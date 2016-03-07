import React, { Component } from 'react'
import IconElement from '../elements/icon_element'

function renderInput(isEditable, onChange) {
  if (isEditable) {
    return <input type="file" onChange={onChange} />
  }
}

const ImageUploadComponent = ({ img, onChange, isEditable }) => {
  return (
    <div className="image-upload-component">
      <label className={`${isEditable}`}>
        <IconElement iconName="add_a_photo" iconType="material" />
        {img}
        {renderInput(isEditable, onChange)}
      </label>
    </div>
  )
}

export default ImageUploadComponent
