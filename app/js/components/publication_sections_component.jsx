import React, { Component } from 'react'
import store from '../redux/store'
import { addSection, updatePublication } from '../redux/actions'
import { Link } from 'react-router'
import PublicationSection from '../components/publication_section_component'

const defaultSection = {
  title: '',
  body: '',
  position: 0
}

export default class PublicationSectionsComponent extends Component {
  componentWillMount() {
    this.state = { sections: [defaultSection].concat(this.props.sections) }
  }

  handleClick() {
    let sections = this.state.sections
    sections = this.state.sections.concat(Object.assign({}, defaultSection, { position: this.state.sections.length }))
    this.setState({ sections })
  }

  deleteSection(position) {
    let sections = [].concat(this.state.sections)
    sections.splice(position, 1)
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
        {this.state.sections.map((section, i) => <PublicationSection key={i} position={i} title={section.title} body={section.body} deleteSection={this.deleteSection.bind(this)} />)}
        <button onClick={this.handleClick.bind(this)}>+ Section</button>
        {this.renderDeleteButton()}
      </div>
    )
  }
}
