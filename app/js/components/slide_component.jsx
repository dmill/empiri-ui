import React, { Component } from 'react'
import store from '../redux/store'
import AddableInputsComponent from './addable_inputs_component'

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
        <h2>What is your paper about?</h2>
        <label>
          Abstract
          <textarea type="text" />
        </label>
      </div>
    )
  }
}

const defaultItem = {
  first_name: '',
  last_name: '',
  title: '',
  email: ''
  }

export class SlideComponent3 extends Component {
  render() {
    const currentUser = store.getState().currentUser
    return (
      <div className="slide component">
        <h2>Who helped you?</h2>
        <label>
          First Author:
          <h6>{currentUser.first_name} {currentUser.last_name}</h6>
        </label>
        <label>
          Contributing Authors
          <AddableInputsComponent defaultItem={defaultItem} />
        </label>
      </div>
    )
  }
}
