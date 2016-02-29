import React, { Component } from 'react'
import SlideshowComponent from '../components/slideshow_component'
import store from '../redux/store'
import AddableAuthorComponent from '../components/addable_author_component'
import PublicationSectionsComponent from '../components/publication_sections_component'
import { updatePublication, deleteAuthor } from '../redux/actions'
import IconElement from '../elements/icon_element'
import { Slide1, Slide2, Slide3, Slide5 } from '../components/publication_slides'

export default class PublicationEditView extends Component {
  componentDidMount() {
    const publicationId = this.props.routeParams.publicationId
    $.get(`http://localhost:4000/publications/${publicationId}`).done(({ publication }) => {
      this.unsubscribe = store.subscribe(() => this.setState(store.getState().publication))
      store.dispatch(updatePublication(publication))
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    return (
      <SlideshowComponent slides={[
        <Slide1 key={1} />,
        <Slide2 key={2} />,
        <Slide3 key={3} />,
        <PublicationSectionsComponent key={4} />,
        <Slide5 history={this.props.history} key={5} />
      ]} />
    )
  }
}

