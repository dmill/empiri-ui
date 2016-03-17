import React, { Component } from 'react'
import IconElement from '../elements/icon_element'

function renderInput(isEditable, onChange) {
  if (isEditable) {
    return <input type="file" onChange={onChange} />
  }
}

const ImageUploadComponent = ({ img, onChange, isEditable, type }) => {
  return (
    <div className="image-upload-component">
      <label className={`${isEditable} ${type}`}>
        <IconElement iconName="add_a_photo" iconType="material" />
        {() => {
          if (img) {
            return img
          } else {
            return "Add Figure"
          }
        }()}
        {renderInput(isEditable, onChange)}
      </label>
    </div>
  )
}

export default ImageUploadComponent
