import React, { Component } from 'react'
import store from '../redux/store'
import PublicationSectionsComponent from '../components/publication_sections_component'
import { newPublication } from '../redux/actions'
import { Slide0, Slide1, Slide2, Slide3, Slide5 } from '../components/publication_slides'
import IconElement from '../elements/icon_element'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class NewPublicationView extends Component {
  componentWillMount() {
    this.state = { currentSlide: 0, direction: 'left', publicationId: null, changeSlides: () => null }
  }

  componentDidMount() {
    store.dispatch(newPublication())
  }

  showNextSlide() {
    this.setState({ changeSlides: () => {
      this.setState({ currentSlide: this.state.currentSlide + 1, direction: 'left', changeSlides: () => null })
    }})
  }

  showPrevSlide() {
    this.setState({ changeSlides: () => {
      this.setState({ currentSlide: this.state.currentSlide - 1, direction: 'right', changeSlides: () => null })
    }})
  }

  renderControls() {
    const prev = this.state.currentSlide == 0 ? null : <IconElement
      onClick={this.showPrevSlide.bind(this)}
      iconType="fontawesome"
      iconName="arrow-circle-left" />
    const next = this.state.currentSlide == 5 ? null : <IconElement
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
        {() => {
          switch (this.state.currentSlide) {
            case 0:
              return <Slide0 key={0} changeSlides={this.state.changeSlides.bind(this)} />
            case 1:
              return <Slide1 key={1} changeSlides={this.state.changeSlides.bind(this)} />
            case 2:
              return <Slide2 key={2} changeSlides={this.state.changeSlides.bind(this)} />
            case 3:
              return <Slide3 key={3} changeSlides={this.state.changeSlides.bind(this)} />
            case 4:
              return <PublicationSectionsComponent key={4} changeSlides={this.state.changeSlides.bind(this)} />
            case 5:
              return <Slide5 key={5} history={this.props.history} changeSlides={this.state.changeSlides.bind(this)} />
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
