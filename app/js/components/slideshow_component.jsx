import React, { Component } from 'react'
import IconElement from '../elements/icon_element'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import store from '../redux/store'
import { updatePublication } from '../redux/actions'

export default class SlideShowComponent extends Component {
  componentWillMount() {
    this.state = { currentSlide: 0, direction: 'left', publicationId: null }
  }

  onSlideChange() {
    const publicationId = store.getState().publicationInProgress.id
    if(this.state.currentSlide == 0) {
      return { done: (callback) => {callback()} }
    } else if(publicationId) {
      return $.ajax({
        type: 'PATCH',
        url: 'http://localhost:4000/publications/' + publicationId,
        contentType: 'application/json',
        data: JSON.stringify({ publication: store.getState().publicationInProgress})
      })
    } else {
      return $.ajax({
        type: 'POST',
        url:'http://localhost:4000/publications/',
        data: JSON.stringify({ publication: store.getState().publicationInProgress }),
        contentType: 'application/json'
      }).done((response) => store.dispatch(updatePublication({ id: response.data.id })))
    }
  }

  showNextSlide() {
    this.onSlideChange().done(() => {
      this.setState({ currentSlide: this.state.currentSlide + 1, direction: 'left' })
    })
  }

  showPrevSlide() {
    this.onSlideChange().done(() => {
      this.setState({ currentSlide: this.state.currentSlide - 1, direction: 'right' })
    })
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
