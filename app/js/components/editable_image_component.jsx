import React from 'react'
import ImageUploadComponent from './image_upload_component'

const EditableImageComponent = () => {
  return (
    <div className="editable-image-component">
      <ImageUploadComponent img={<img src={this.props.src} />}/>
    </div>
  )
}

export default EditableImageComponent
