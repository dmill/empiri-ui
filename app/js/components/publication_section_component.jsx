import React, { Component } from 'react'
import IconElement from '../elements/icon_element'
import InputElement from '../elements/input_element'
import ImageUploadComponent from './image_upload_component'
import store from '../redux/store'
import { addSection, deleteSection, addFigure } from '../redux/actions'
import FigureComponent from '../components/figure_component'

export default class PublicationSection extends Component {
  componentWillMount() {
    this.state = {
      title: this.props.title,
      body: this.props.body,
      figures: this.props.figures
    }
  }

  deleteSection() {
    const publicationId = store.getState().publication.get('id')
    const sectionId = this.props.id
    $.ajax({
      type: 'DELETE',
      url: `http://localhost:4000/publications/${publicationId}/sections/${sectionId}`,
      contentType: 'application/json'
    }).done(() => store.dispatch(deleteSection(sectionId)))
  }

  addFigure(e) {
    const publicationId = store.getState().publication.get('id')
    const sectionId = this.props.id
    let formData = new FormData()
    formData.append('photo', e.target.files[0])

    $.ajax({
      url: `http://localhost:4000/publications/${publicationId}/sections/${sectionId}/figures`,
      data: formData,
      type: 'POST',
      processData: false,
      contentType: false
    }).done(({ figure }) => store.dispatch(addFigure(figure)))
  }

  saveSection() {
    if (this.state.title === '' || this.state.body === '') {
      return
    }

    const publicationId = store.getState().publication.get('id')
    const sectionId = this.props.id
    $.ajax({
      type: 'PATCH',
      url: `http://localhost:4000/publications/${publicationId}/sections/${sectionId}`,
      data: JSON.stringify({ section: this.state }),
      contentType: 'application/json'
    })
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div className="publication-paper-section-component">
        <label>
          Section title
          <input type="text" name="title" value={this.state.title} onChange={this.onChange.bind(this)} />
        </label>
        <label>
          Section Body
          <textarea name="body" value={this.state.body} onChange={this.onChange.bind(this)} />
        </label>
        <button><ImageUploadComponent onChange={this.addFigure.bind(this)} /> add figure</button>
        {this.state.figures.map(figure => {
          <FigureComponent title={figure.get('title')} />
        })}
        <button onClick={this.saveSection.bind(this)}>save this section</button>
        <button onClick={this.deleteSection.bind(this)}>delete this section</button>
      </div>
    )
  }
}
