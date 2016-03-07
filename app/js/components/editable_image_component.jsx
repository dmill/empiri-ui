import React from 'react'
import ImageUploadComponent from './image_upload_component'

const EditableImageComponent = ({ src, onChange, isEditable }) => {
  return (
    <div className={`editable-image-component ${isEditable}`}>
      <ImageUploadComponent isEditable={isEditable} onChange={onChange} img={<img src={src} />} />
    </div>
  )
}

export default EditableImageComponent
