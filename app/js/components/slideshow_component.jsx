import React, { Component } from 'react'
import IconElement from '../elements/icon_element'

export default class SlideShowComponent extends Component {
  componentWillMount() {
    this.state = { currentSlide: 0 }
  }

  showNextSlide() {
    this.setState({ currentSlide: this.state.currentSlide + 1 })
  }

  showPrevSlide() {
    this.setState({ currentSlide: this.state.currentSlide - 1 })
  }

  renderControls() {
    const prev = this.state.currentSlide == 0 ? null : <IconElement
      onClick={this.showPrevSlide.bind(this)}
      iconType="fontawesome"
      iconName="arrow-circle-left" />
    const next = this.state.currentSlide == this.props.route.slides.length - 1 ? null : <IconElement
      onClick={this.showNextSlide.bind(this)}
      iconType="fontawesome"
      iconName="arrow-circle-right" />
    return (
      <div className="controls">
        {prev}
        {next}
      </div>
    )
  }

  render() {
    return (
      <div className="slideshow component">
        <ReactCSSTransitionGroup transitionName="slide-left" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {this.props.route.slides[this.state.currentSlide]}
        </ReactCSSTransitionGroup>
        {this.renderControls()}
      </div>
    )
  }
}
