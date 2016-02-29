import React, { Component } from 'react'
import IconElement from '../elements/icon_element'

export default class FigureComponent extends Component {
  componentWillMount() {
    this.state = { editingTitle: false, editingCaption: false }
  }

  editTitle() {
    this.setState({ editingTitle: true })
  }

  saveTitle(e) {
    debugger
    store.dispatch(updateFigureTitle(this.props.id, e.target.value))
  }

  renderTitle() {
    if (this.state.editingTitle) {
      return (
        <div className="title">
          <input type="text" />
          <IconElement onClick={this.saveTitle.bind(this)} iconType="material" iconName="save" />
        </div>
      )
    } else {
      return (
        <div className="title">
          <div>{this.props.title}</div>
          <IconElement iconType="material" iconName="mode_edit" />
        </div>
      )
    }
  }

  render() {
    return (
      <div className="figure component">
        {<img src={this.props.photo_url} />}
        <IconElement iconType="material" onClick={this.editTitle.bind(this)} iconName="mode_edit" />
        <IconElement iconType="material" iconName="mode_edit" />
      </div>
    )
  }
}
