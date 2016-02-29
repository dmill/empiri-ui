import React from 'react'
import ImageUploadComponent from './image_upload_component'

const EditableImageComponent = ({ src, onChange }) => {
  return (
    <div className="editable-image-component">
      <ImageUploadComponent onChange={onChange} img={<img src={src} />} />
    </div>
  )
}

export default EditableImageComponent
