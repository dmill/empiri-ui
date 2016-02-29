import React, { Component } from 'react'
import store from '../redux/store'
import auth0 from '../auth0/auth0'
import IconElement from '../elements/icon_element'

export default class ImageUploadComponent extends Component {
  handleChange(e) {
    let formData = new FormData()
    formData.append('photo', e.target.files[0])

    $.ajax({
      url: 'http://localhost:4000/users/' + store.getState().currentUser.id + '/photos',
      data: formData,
      type: 'POST',
      processData: false,
      contentType: false
    }).done(() => auth0.fetchUserData())
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
