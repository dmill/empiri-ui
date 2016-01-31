import React, { Component } from 'react'

export default class NewHypothesisView extends Component {
  render() {
    return (
      <div id="new-hypothesis-view">
        <h1>Create a new Hypothesis</h1>
        <label>
          Title
          <input type="text" />
        </label>
        <label>
          Synopsis
          <textarea type="text" />
        </label>
      </div>
    )
  }
}
