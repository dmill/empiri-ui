import React, { Component } from 'react'
import IconElement from '../elements/icon_element'
import InputElement from '../elements/input_element'
import ImageUploadComponent from './image_upload_component'
import store from '../redux/store'
import { addSection, deleteSection, addFigure } from '../redux/actions'
import FigureComponent from '../components/figure_component'
import ajax from '../lib/ajax'

export default class PublicationSection extends Component {
  componentWillMount() {
    this.state = {
      title: this.props.title,
      body: this.props.body,
      figures: this.props.figures
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      title: nextProps.title,
      body: nextProps.body,
      figures: nextProps.figures
    })
  }

  deleteSection() {
    const publicationId = store.getState().publication.get('id')
    const sectionId = this.props.id
    ajax.request({
      type: 'DELETE',
      url: `${ajax.getDomain()}/publications/${publicationId}/sections/${sectionId}`,
      contentType: 'application/json',
      success: () => store.dispatch(deleteSection(sectionId))
    })
  }

  addFigure(e) {
    const publicationId = store.getState().publication.get('id')
    const sectionId = this.props.id
    let formData = new FormData()
    formData.append('photo', e.target.files[0])

    ajax.request({
      url: `${ajax.getDomain()}/publications/${publicationId}/sections/${sectionId}/photos`,
      data: formData,
      type: 'POST',
      file: true,
      contentType: false,
      success: ({ figure }) => store.dispatch(addFigure(figure))
    })
  }

  saveSection() {
    if (this.state.title === '' || this.state.body === '') {
      return
    }

    const publicationId = store.getState().publication.get('id')
    const sectionId = this.props.id
    ajax.request({
      type: 'PATCH',
      url: `${ajax.getDomain()}/publications/${publicationId}/sections/${sectionId}`,
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
        <button><ImageUploadComponent isEditable={true} onChange={this.addFigure.bind(this)} /></button>
        <div className="figures clear-fix">
          {this.state.figures.map(figure => {
            return <FigureComponent key={figure.get('id')} figure={figure} />
          })}
        </div>
        <button onClick={this.saveSection.bind(this)}>save this section</button>
        <button onClick={this.deleteSection.bind(this)}>delete this section</button>
      </div>
    )
  }
}
