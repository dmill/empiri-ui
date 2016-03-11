import React, { Component } from 'react'
import IconElement from '../elements/icon_element'
import { updateFigure } from '../redux/actions'
import store from '../redux/store'
import ajax from '../lib/ajax'

export default class FigureComponent extends Component {
  componentWillMount() {
    this.state = { editingTitle: false, editingCaption: false }
  }

  editTitle() {
    this.setState({ editingTitle: true })
  }

  editCaption() {
    this.setState({ editingCaption: true })
  }

  saveTitle(e) {
    const publicationId = store.getState().publication.get('id')
    const sectionId = this.props.figure.get('section_id')
    const figureId = this.props.figure.get('id')
    const data = { figure: { title: e.target.value } }
    ajax.request({
      type: 'PATCH',
      url: `${ajax.getDomain()}/publications/${publicationId}/sections/${sectionId}/figures/${figureId}`,
      data: JSON.stringify(data),
      contentType: 'application/json',
      success: ({ figure }) => {
        this.setState({ editingTitle: false })
        store.dispatch(updateFigure(figure))
      }
    })
  }

  saveCaption(e) {
    const publicationId = store.getState().publication.get('id')
    const sectionId = this.props.figure.get('section_id')
    const figureId = this.props.figure.get('id')
    const data = { figure: { caption: e.target.value } }
    ajax.request({
      type: 'PATCH',
      url: `${ajax.getDomain()}/publications/${publicationId}/sections/${sectionId}/figures/${figureId}`,
      data: JSON.stringify(data),
      contentType: 'application/json',
      success: ({ figure }) => {
        this.setState({ editingCaption: false })
        store.dispatch(updateFigure(figure))
      }
    })
  }

  renderCaption() {
    const caption = this.props.figure.get('caption') ? this.props.figure.get('caption') : "Figure Caption"
    if (this.state.editingCaption) {
      return (
        <div className="caption">
          <input type="text" onBlur={this.saveCaption.bind(this)} defaultValue={caption} />
        </div>
      )
    } else {
      return (
        <div className="caption">
          <input className="disabled" type="text" defaultValue={caption} onClick={this.editCaption.bind(this)} />
          <IconElement iconType="material" iconName="mode_edit" onClick={this.editCaption.bind(this)} />
        </div>
      )
    }
  }

  renderTitle() {
    const title = this.props.figure.get('title') ? this.props.figure.get('title') : "Figure Title"
    if (this.state.editingTitle) {
      return (
        <div className="title">
          <input type="text" onBlur={this.saveTitle.bind(this)} defaultValue={title} />
        </div>
      )
    } else {
      return (
        <div className="title">
          <input className="disabled" type="text" defaultValue={title} onClick={this.editTitle.bind(this)} />
          <IconElement iconType="material" iconName="mode_edit" onClick={this.editTitle.bind(this)} />
        </div>
      )
    }
  }

  render() {
    return (
      <div className="figure component">
        {<img src={this.props.figure.get('photo_url')} />}
        {this.renderTitle()}
        {this.renderCaption()}
      </div>
    )
  }
}
