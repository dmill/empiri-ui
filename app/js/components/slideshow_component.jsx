import React, { Component } from 'react'
import IconElement from '../elements/icon_element'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class SlideShowComponent extends Component {
  componentWillMount() {
    this.state = { currentSlide: 0, direction: 'left', publicationId: null }
  }

  onNextSlide() {
    if(publicationId) {
      $.post('http://localhost:4000/publications/' + publicationId,)
    } else {
      $.post('http://localhost:4000/publications/' + publicationId,)
    }

  }

  showNextSlide() {
    this.setState({ currentSlide: this.state.currentSlide + 1, direction: 'left' })
  }

  showPrevSlide() {
    this.setState({ currentSlide: this.state.currentSlide - 1, direction: 'right' })
  }

  renderControls() {
    const prev = this.state.currentSlide == 0 ? null : <IconElement
      onClick={this.showPrevSlide.bind(this)}
      iconType="fontawesome"
      iconName="arrow-circle-left" />
    const next = this.state.currentSlide == this.props.slides.length - 1 ? null : <IconElement
      onClick={this.showNextSlide.bind(this)}
      iconType="fontawesome"
      iconName="arrow-circle-right" />
    return (
      <div className="controls">
        <span className="prev">{prev}</span>
        <span className="next">{next}</span>
      </div>
    )
  }

  renderSlide() {
    return (
      <ReactCSSTransitionGroup transitionName={"slide-" + this.state.direction} transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
        {this.props.slides[this.state.currentSlide]}
      </ReactCSSTransitionGroup>
    )
  }

  render() {
    return (
      <div className="slideshow component container">
        <div className="slides-container">
          {this.renderSlide()}
        </div>
        {this.renderControls()}
      </div>
    )
  }
}
