import React, { Component } from 'react'
import Immutable from 'immutable'
import store from '../redux/store'
import { addSection, updatePublication } from '../redux/actions'
import { Link } from 'react-router'
import PublicationSection from '../components/publication_section_component'
import ajax from '../lib/ajax'

const defaultSection = Immutable.fromJS({
  title: '',
  body: ''
})

export default class PublicationSectionsComponent extends Component {
  componentWillMount() {
    this.state = { sections: store.getState().publication.getIn(['_embedded', 'sections']) }
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({ sections: store.getState().publication.getIn(['_embedded', 'sections']) })
    })
    if (this.state.sections.size === 0) {
      this.addSection()
    }
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  componentWillReceiveProps(nextProps) {
    nextProps.changeSlides()
  }

  addSection() {
    const publicationId = store.getState().publication.get('id')
    ajax.request({
      type: 'POST',
      url: `${ajax.getDomain()}/publications/${publicationId}/sections`,
      contentType: 'application/json',
      data: JSON.stringify({ section: defaultSection }),
      success: ({ section }) => store.dispatch(addSection(section)),
    })
  }

  render() {
    return (
      <div id="new-publication-slide" className="container">
        <h1>Add Content to Your Publication</h1>
        {this.state.sections.map((section) => {
          return (<PublicationSection
            key={section.get('id')}
            position={section.get('position')}
            id={section.get('id')}
            title={section.get('title')}
            body={section.get('body')}
            figures={section.get('figures')} />
        )})}
        <button onClick={this.addSection.bind(this)}>+ Section</button>
      </div>
    )
  }
}
