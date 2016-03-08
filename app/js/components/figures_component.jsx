import React, { Component } from 'react'
import FigureComponent from './figure_component'

export default class FiguresComponent extends Component {
  render() {
    return (
      <div className="figures component row">
        {this.props.figures.map((figure) => {
          return (
            <div className="figure" key={figure.get('id')}>
              <img src={figure.get('thumbnail_photo_url')} />
              <div className="text-container">
                <div className="title">{figure.get('title')}</div>
                <div className="caption">{figure.get('caption')}</div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}
