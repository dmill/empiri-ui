import React, { Component } from 'react'
import store from '../redux/store'
import { updatePublication } from '../redux/actions'
import { Link } from 'react-router'
import PublicationSection from '../components/publication_section_component'

const defaultSection = {
  title: '',
  body: '',
  index: 0
}

export default class PublicationSectionsComponent extends Component {
  componentWillMount() {
    this.state = { sections: [Object.assign({}, defaultSection)] }
    store.dispatch(updatePublication({ sections: this.state.sections }))
    store.subscribe(() => this.setState({ sections: store.getState().publicationInProgress.sections }))
  }

  handleClick() {
    let sections = this.state.sections
    sections = this.state.sections.concat([Object.assign({}, defaultSection, { index: this.state.sections.length })])
    this.setState({ sections })
  }

  onChange() {
    store.dispatch(updatePublication({ sections: this.state.sections }))
  }

  deleteSection() {
    let sections = [].concat(this.state.sections)
    sections.pop()
    this.setState({ sections })
  }

  renderDeleteButton() {
    if (this.state.sections.length > 1) {
      return <button onClick={this.deleteSection.bind(this)}>Delete Last Section</button>
    }
  }

  render() {
    return (
      <div id="new-publication-slide" className="container">
        <h1>Add Content to Your Publication</h1>
        {this.state.sections.map((section, i) => <PublicationSection key={i} onChange={this.onChange.bind(this)} title={section.title} body={section.body} />)}
        <button onClick={this.handleClick.bind(this)}>+ Section</button>
        {this.renderDeleteButton()}
      </div>
    )
  }
}
