import React, { Component } from 'react'
import IconElement from '../elements/icon_element'
import ButtonElement from '../elements/button_element'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import store from '../redux/store'
import { updatePublication } from '../redux/actions'

export default class SlideShowComponent extends Component {
  componentWillMount() {
    this.state = { currentSlide: 0, direction: 'left', publicationId: null }
  }

  showNextSlide() {
    this.setState({ currentSlide: this.state.currentSlide + 1, direction: 'left' })
  }

  showPrevSlide() {
    this.setState({ currentSlide: this.state.currentSlide - 1, direction: 'right' })
  }

  nextButton() {
    switch(this.state.currentSlide) {
      case 0:
        return  <button onClick={this.showNextSlide.bind(this)} className="initiate-publication-button">
                  "Get Started"
                </button>
      case (this.props.slides.length - 1):
        return null
      default:
        return <IconElement
                onClick={this.showNextSlide.bind(this)}
                iconType="fontawesome"
                iconName="arrow-circle-right"
               />
    }
  }

  prevButton() {
    return this.state.currentSlide == 0 ? null : <IconElement
                                                  onClick={this.showPrevSlide.bind(this)}
                                                  iconType="fontawesome"
                                                  iconName="arrow-circle-left"
                                                  />
  }

  renderControls() {
    return (
      <div className="controls">
        <span className="prev">{this.prevButton()}</span>
        <span className="next">{this.nextButton()}</span>
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
        <div ref={(ref) => { this.errorMessage = ref }.bind(this)}></div>
      </div>
    )
  }
}
