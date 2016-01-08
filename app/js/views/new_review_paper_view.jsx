import React, { Component } from 'react'
import store from '../redux/store'
import { Link } from 'react-router'
import ContributionListElement from '../elements/contribution_list_element'
import ContributionExpandedElement from '../elements/contribution_expanded_element'
import IconElement from '../elements/icon_element'
import ReviewPaperSection from '../components/review_paper_section'

export default class NewReviewPaperView extends Component {
  componentWillMount() {
    this.state = { sections: [<ReviewPaperSection />] }
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

  render() {
    return (
      <div id="new-review-paper-view">
        <h1>Add a new review paper</h1>
        <label>
          <h4>Review paper title</h4>
          <input type="text" />
        </label>
        {this.state.sections.map((section) => section)}
        <button onClick={this.handleClick.bind(this)}>+ Section</button>
        {this.renderDeleteButton()}
      </div>
    )
  }
}
