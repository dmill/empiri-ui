import React, { Component } from 'react'
import SlideshowComponent from '../components/slideshow_component'
import store from '../redux/store'
import PublicationSectionsComponent from '../components/publication_sections_component'
import { newPublication, updatePublication } from '../redux/actions'
import { Slide0, Slide1, Slide2, Slide3, Slide5 } from '../components/publication_slides'
import IconElement from '../elements/icon_element'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { browserHistory } from 'react-router'

export default class NewPublicationView extends Component {
  componentWillMount() {
    this.state = { currentSlide: 0, direction: 'left', publicationId: null, errorMessage: null }
  }

  componentDidMount() {
    store.dispatch(newPublication())
  }

  showNextSlide() {
    this.setState({ currentSlide: this.state.currentSlide + 1, direction: 'left', errorMessage: null })
  }

  showPrevSlide() {
    this.setState({ currentSlide: this.state.currentSlide - 1, direction: 'right', errorMessage: null })
  }

  renderControls() {
    const prev = this.state.currentSlide == 0 ? null : <IconElement
      onClick={this.showPrevSlide.bind(this)}
      iconType="fontawesome"
      iconName="arrow-circle-left" />
    const next = this.state.currentSlide == 4 ? null : <IconElement
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

  errorSlide1() {
    const direction = this.state.direction === 'left' ? 'right' : 'left'
    this.setState({ currentSlide: 1, direction, errorMessage: 'Please enter a publication title' })
  }

  errorSlide2() {
    const direction = this.state.direction === 'left' ? 'right' : 'left'
    this.setState({ currentSlide: 2, direction, errorMessage: 'Please enter an abstract' })
  }

  errorSlide3() {
    const direction = this.state.direction === 'left' ? 'right' : 'left'
    this.setState({ currentSlide: 3, direction, errorMessage: 'Please enter a valid email' })
  }

  errorSlide4() {
    const direction = this.state.direction === 'left' ? 'right' : 'left'
    this.setState({ currentSlide: 4, direction, errorMessage: 'Please enter a section title' })
  }

  renderSlide() {
    return (
      <ReactCSSTransitionGroup transitionName={"slide-" + this.state.direction} transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
        {() => {
          switch (this.state.currentSlide) {
            case 0:
              return <Slide0 key={0} />
            case 1:
              return <Slide1 key={1} onError={this.errorSlide1.bind(this)} errorMessage={this.state.errorMessage}  />
            case 2:
              return <Slide2 key={2} onError={this.errorSlide2.bind(this)} errorMessage={this.state.errorMessage} />
            case 3:
              return <Slide3 key={3} onError={this.errorSlide3.bind(this)} errorMessage={this.state.errorMessage} />
            case 4:
              return <PublicationSectionsComponent onError={this.errorSlide4.bind(this)} errorMessage={this.state.errorMessage} key={4} />
            case 5:
              return <Slide5 history={this.props.history} key={5} />
            default:
              return console.error("Invalid slide state in NewPublicationView")
          }
        }()}
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
