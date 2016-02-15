import React from 'react'
import ImageUploadComponent from './image_upload_component'

const EditableImageComponent = ({ src }) => {
  return (
    <div className="editable-image-component">
      <ImageUploadComponent img={<img src={src} />} />
    </div>
  )
}

export default EditableImageComponent
