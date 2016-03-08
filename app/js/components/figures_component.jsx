import React, { Component } from 'react'
import FigureComponent from './figure_component'

export default class FiguresComponent extends Component {
  render() {
    return (
      <div className="figures component row">
        {this.props.figures.map((figure) => {
          return (
            <div className="figure four columns" key={figure.get('id')}>
              <img src={figure.get('photo_url')} />
              <h5>{figure.get('title')}</h5>
              <h6>{figure.get('caption')}</h6>
            </div>
          )
        })}
      </div>
    )
  }
}
