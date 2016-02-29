import React, { Component } from 'react'
import SlideshowComponent from '../components/slideshow_component'
import store from '../redux/store'
import PublicationSectionsComponent from '../components/publication_sections_component'
import { newPublication } from '../redux/actions'
import { Slide0, Slide1, Slide2, Slide3, Slide5 } from '../components/publication_slides'

export default class NewPublicationView extends Component {
  componentDidMount() {
    store.dispatch(newPublication())
  }

  render() {
    return (
      <SlideshowComponent slides={[
        <Slide0 key={0} />,
        <Slide1 key={1} />,
        <Slide2 key={2} />,
        <Slide3 key={3} />,
        <PublicationSectionsComponent key={4} />,
        <Slide5 history={this.props.history} key={5} />
      ]} />
    )
  }
}
