import React, { Component } from 'react'

export class SlideComponent1 extends Component {
  render() {
    return (
      <div className="slide component">
        <h1>Welcome to your new publication!</h1>
        <h3>What will you call it?</h3>
        <label>
          Publication Title
          <input type="text" />
        </label>
      </div>
    )
  }
}

export class SlideComponent2 extends Component {
  render() {
    return (
      <div className="slide component">
        <h1>What is your paper about?</h1>
        <label>
          Abstract
          <textarea type="text" />
        </label>
      </div>
    )
  }
}

export class SlideComponent3 extends Component {
  render() {
    return (
      <div className="slide component">
        <h1>Who helped you?</h1>
        <label>
          Authors
          <textarea type="text" />
        </label>
      </div>
    )
  }
}
