import React, { Component } from 'react'
import SlideshowComponent from '../components/slideshow_component'
import store from '../redux/store'
import AddableInputsComponent from '../components/addable_inputs_component'
import PublicationSectionsComponent from '../components/publication_sections_component'
import { updatePublication } from '../redux/actions'

let currentUser = store.getState().currentUser
store.subscribe(() => currentUser = store.getState().currentUser)

export default class NewPublicationView extends Component {
  updateStore(e) {
    let payload = {}
    payload[e.target.name] = e.target.value
    store.dispatch(updatePublication(payload))
  }

  publishPublication() {
    store.dispatch(updatePublication({ published: true }))
  }

  render() {
    return (
      <SlideshowComponent slides={[<Slide0 key={0} />, <Slide1 onChange={this.updateStore.bind(this)} key={1} />, <Slide2 onChange={this.updateStore.bind(this)} key={2} />, <Slide3 onChange={this.updateStore.bind(this)} key={3} />, <Slide4 onChange={this.updateStore.bind(this)} key={4} />, <Slide5 onClick={this.publishPublication.bind(this)} key={5} />]} />
    )
  }
}

const Slide0 = () => {
  return (
    <div>
      <h1>Welcome to Empiri&rsquo;s Publishing System</h1>
      <h3>Here you can publish your work safely</h3>
      <p>More instructions on how it works and its benefits</p>
    </div>
  )
}

const Slide1 = ({ onChange }) => {
  return (
    <div className="slide component">
      <h1>Welcome to your new publication!</h1>
      <h3>What will you call it?</h3>
      <label>
        Publication Title
        <input type="text" name="title" onChange={onChange} />
      </label>
    </div>
  )
}

const Slide2 = ({ onChange }) => {
  return (
    <div className="slide component">
      <h2>What is your paper about?</h2>
      <label>
        Abstract
        <textarea type="text" name="abstract" onChange={onChange} />
      </label>
    </div>
  )
}

const defaultItem = {
  first_name: '',
  last_name: '',
  title: '',
  email: ''
}

const Slide3 = ({ onChange }) => {
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

const Slide4 = () => <PublicationSectionsComponent />

const Slide5 = ({ onClick }) => {
  return (
    <div className="slide component">
      <h2>Almost Finished!</h2>
      <button>Save For Later</button>
      <button onClick={onClick}>Publish Now!</button>
    </div>
  )
}
