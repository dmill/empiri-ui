import React, { Component } from 'react'
import store from '../redux/store'
import { Link } from 'react-router'
import PublicationSection from '../components/publication_section_component'

export default class NewPublicationSlide extends Component {
  componentWillMount() {
    this.state = { sections: [<PublicationSection />] }
  }

  handleClick() {
    let sections = this.state.sections
    sections = this.state.sections.concat([<PublicationSection />])
    this.setState({ sections })
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
        <h1>Write a New Publication</h1>
        <label>
          <h4>Review paper title</h4>
          <input type="text" />
        </label>
        {this.state.sections.map((section, i) => <div key={i}>{section}</div>)}
        <button onClick={this.handleClick.bind(this)}>+ Section</button>
        {this.renderDeleteButton()}
      </div>
    )
  }
}
