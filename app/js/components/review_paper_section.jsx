import React, { Component } from 'react'
import IconElement from '../elements/icon_element'
import InputElement from '../elements/input_element'

const RemovableInput = ({ value, onClick, onChange }) => {
  return (
    <div className="removable-input">
      <input type="text" value={value} onChange={onChange} />
      <IconElement onClick={onClick} iconName="cancel" iconType="material" />
    </div>
  )
}

export default class ReviewPaperSection extends Component {
  componentWillMount() {
    this.state = { references: [] }
  }

  addReference() {
    let references = this.state.references
    if (references.filter((reference) => reference == '').length) {
      return
    }
    references = references.concat([''])
    this.setState({ references })
  }

  updateReference(key, e) {
    let references = [].concat(this.state.references)
    references[key] = e.target.value
    this.setState({ references })
  }

  deleteReference(e) {
    const references = this.state.references.filter((reference) => reference !== e.target.previousElementSibling.value)
    this.setState({ references })
  }

  renderReferences() {
    return this.state.references.map((reference, i) => <RemovableInput value={reference} key={i} onClick={this.deleteReference.bind(this)} onChange={this.updateReference.bind(this, i)} />)
  }

  render() {
    return (
      <div className="review-paper-section-component">
        <label>
          Section title
          <input type="text" />
        </label>
        <label>
          Section Body
          <textarea />
        </label>
        <button onClick={this.addReference.bind(this)}>+ Add a reference</button>
        <div>
          {this.renderReferences()}
        </div>
      </div>
    )
  }
}
