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
  handleClick() {
    let sections = this.state.sections
    sections = this.state.sections.concat([Object.assign({}, defaultSection, { index: this.state.sections.length })])
    this.setState({ sections })
  }

  deleteSection() {
    let sections = [].concat(this.state.sections)
    sections.pop()
    this.setState({ sections })
  }

  renderDeleteButton() {
    if (this.props.sections.length > 1) {
      return <button onClick={this.deleteSection.bind(this)}>Delete Last Section</button>
    }
  }

  render() {
    return (
      <div id="new-publication-slide" className="container">
        <h1>Add Content to Your Publication</h1>
        {this.props.sections.map((section, i) => <PublicationSection key={i} position={i} title={section.title} body={section.body} />)}
        <button onClick={this.handleClick.bind(this)}>+ Section</button>
        {this.renderDeleteButton()}
      </div>
    )
  }
}
