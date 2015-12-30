import React, { Component } from 'react'
import IconElement from './icon_element'
import store from '../redux/store'
import { expandContribution } from '../redux/actions'

export default class ContributionExpandedElement extends Component {
  handleClick(e) {
    store.dispatch(expandContribution(null))
    e.stopPropagation()
  }

  render() {
    return (
      <div className="contribution-expanded-element">
        <h1>title</h1>
        <span className="close" onClick={this.handleClick}>
          <IconElement iconType="material" iconName="cancel" />
        </span>
        <p>This is the body of the text. Hello, hello hello. what? This is the body of the text. Hello, hello hello. what? This is the body of the text. Hello, hello hello. what? This is the body of the text. Hello, hello hello. what? This is the body of the text. Hello, hello hello. what?</p>
        <h2>sub title</h2>
        <p>This is the body of the text. Hello, hello hello. what? This is the body of the text. Hello, hello hello. what? This is the body of the text. Hello, hello hello. what? This is the body of the text. Hello, hello hello. what? This is the body of the text. Hello, hello hello. what?</p>
      </div>
    )
  }
}
