import React, { Component } from 'react'
import store from '../redux/store'
import AddableAuthorComponent from '../components/addable_author_component'
import PublicationSectionsComponent from '../components/publication_sections_component'
import { updatePublication, deleteAuthor } from '../redux/actions'
import IconElement from '../elements/icon_element'
import { Slide1, Slide2, Slide3, Slide5 } from '../components/publication_slides'
import ajax from '../lib/ajax'
import NewPublicationView from './new_publication_view'

export default class PublicationEditView extends Component {
  componentDidMount() {
    const publicationId = this.props.routeParams.publicationId
    ajax.request({
      type: 'GET',
      url: `${ajax.getDomain()}/publications/${publicationId}`,
      success:({ publication }) => {
        this.unsubscribe = store.subscribe(() => this.setState(store.getState().publication))
        store.dispatch(updatePublication(publication))
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    return (
      <NewPublicationView />
    )
  }
}

