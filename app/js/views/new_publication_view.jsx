import React, { Component } from 'react'
import store from '../redux/store'
import { Link } from 'react-router'
import ContributionListElement from '../elements/contribution_list_element'
import ContributionExpandedElement from '../elements/contribution_expanded_element'
import IconElement from '../elements/icon_element'
import ReviewPaperSection from '../components/review_paper_section'

const NewAuthor = () => {
  return (
    <div className="new-author">
      <div>
        <label>
          First Name
          <input type="text" />
        </label>
      </div>
      <div>
        <label>
          Last Name
          <input type="text" />
        </label>
      </div>
      <div>
        <label>
          Email
          <input type="text" />
        </label>
      </div>
    </div>
  )
}

export default class NewPublicationView extends Component {
  componentWillMount() {
    const currentUser = store.getState().currentUser
    this.state = { authors: [{
      first_name: currentUser.first_name,
      last_name: currentUser.last_name,
      email: currentUser.email
    }] }
  }

  handleClick() {
    let sections = this.state.sections
    sections = this.state.sections.concat([<ReviewPaperSection />])
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

  renderAuthors() {
    return this.state.authors.map((author, i) => <h6 key={i}>{author.first_name} {author.last_name} {author.email}</h6>)
  }

  render() {
    return (
      <div id="new-publication-view" className="container">
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

  render() {
    return (
      <div id="new-publication-view" className="container">
        <h1>Write a new publication</h1>
        <label>
          <h3>Publication Title</h3>
          <input type="text" />
        </label>
        <label>
          <h3>Abstract</h3>
          <textarea type="text" />
        </label>
      </div>
    )
  }
}
