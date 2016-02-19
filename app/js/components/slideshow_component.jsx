import React, { Component } from 'react'
import IconElement from '../elements/icon_element'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import store from '../redux/store'
import { updatePublication } from '../redux/actions'

export default class SlideShowComponent extends Component {
  componentWillMount() {
    this.state = { currentSlide: 0, direction: 'left', publicationId: null, slideIsValid: false }
  }

  displayErrorMessage() {
    this.errorMessage.innerText = 'Please enter valid information'
  }

  showNextSlide() {
    if(this.state.slideIsValid) {
      this.setState({ currentSlide: this.state.currentSlide + 1, direction: 'left', slideIsValid: false })
      this.errorMessage.innerText = ''
    } else {
      this.displayErrorMessage()
    }
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

  validateSlide() {
    this.setState({ slideIsValid: true })
  }

  renderSlide() {
    return (
      <ReactCSSTransitionGroup transitionName={"slide-" + this.state.direction} transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
        {React.cloneElement(this.props.slides[this.state.currentSlide], { validateSlide: this.validateSlide.bind(this) })}
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
