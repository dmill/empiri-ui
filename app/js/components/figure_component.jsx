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
    const data = { figure: { title: e.target.previousElementSibling.value } }
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
    const data = { figure: { caption: e.target.previousElementSibling.value } }
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
    if (this.state.editingCaption) {
      return (
        <div className="caption">
          <input type="text" />
          <IconElement onClick={this.saveCaption.bind(this)} iconType="material" iconName="check_circle" />
        </div>
      )
    } else {
      const caption = this.props.figure.get('caption') ? this.props.figure.get('caption') : "Figure Caption"
      return (
        <div className="caption">
          <input className="disabled" type="text" value={caption} />
          <IconElement iconType="material" onClick={this.editCaption.bind(this)} iconName="mode_edit" />
        </div>
      )
    }
  }

  renderTitle() {
    if (this.state.editingTitle) {
      return (
        <div className="title">
          <input type="text" />
          <IconElement onClick={this.saveTitle.bind(this)} iconType="material" iconName="check_circle" />
        </div>
      )
    } else {
      const title = this.props.figure.get('title') ? this.props.figure.get('title') : "Figure Title"
      return (
        <div className="title">
          <input className="disabled" type="text" value={title} />
          <IconElement iconType="material" onClick={this.editTitle.bind(this)} iconName="mode_edit" />
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
