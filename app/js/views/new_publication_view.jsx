import React, { Component } from 'react'
import SlideshowComponent from '../components/slideshow_component'
import store from '../redux/store'
import AddableAuthorComponent from '../components/addable_author_component'
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

class Slide1 extends Component {
  componentWillUnmount() {
    $.ajax({
      type: 'POST',
      url:'http://localhost:4000/publications/',
      data: JSON.stringify({ publication: { title: store.getState().publicationInProgress.title }}),
      contentType: 'application/json'
    }).done(({ publication }) => store.dispatch(updatePublication({ id: publication.id })))
  }

  render() {
    return (
      <div className="slide component">
        <h1>Welcome to your new publication!</h1>
        <h3>What will you call it?</h3>
        <label>
          Publication Title
          <input type="text" name="title" onChange={this.props.onChange} />
        </label>
      </div>
    )
  }
}

class Slide2 extends Component {
  componentWillUnMount() {
    $.ajax({
      type: 'PATCH',
      url:'http://localhost:4000/publications/' + store.getState().publicationInProgress.id,
      data: JSON.stringify({ publication: { abstract: store.getState().publicationInProgress.abstract }}),
      contentType: 'application/json'
    })
  }

  render() {
    return (
      <div className="slide component">
        <h2>What is your paper about?</h2>
        <label>
          Abstract
          <textarea type="text" name="abstract" onChange={this.props.onChange} />
        </label>
      </div>
    )
  }
}

const defaultAuthor = {
  first_name: '',
  last_name: '',
  title: '',
  email: '',
  organization: ''
}

const SavedAuthor = ({ author }) => <div>{author.first_name} {author.last_name}, {author.title} {author.email}</div>

class Slide3 extends Component {
  componentWillMount() {
    this.state = { authors: [] }
    store.dispatch(updatePublication({ authors: this.state.authors }))
    store.subscribe(() => this.setState({ authors: store.getState().publicationInProgress.authors }))
  }

  addAuthor() {
    let authors = this.state.authors
    authors = authors.concat([Object.assign({}, this.props.defaultAuthor)])
  }

  updateAuthor(e) {
    let authors = [].concat(this.state.authors)
    authors[authors.length - 1][e.target.name] = e.target.value
    store.dispatch(updatePublication({ authors: authors }))
  }

  deleteAuthor(e) {
    const authors = this.state.authors.filter((author) => author !== e.target.previousElementSibling.value)
    store.dispatch(updatePublication({ authors: authors }))
  }

  render() {
    return (
      <div className="slide component">
        <h2>Who helped you?</h2>
        <label>
          First Author:
          <h6>{currentUser.first_name} {currentUser.last_name}</h6>
        </label>
        <label>
          Contributing Authors
          {this.state.authors.map((author, i) => <SavedAuthor author={author} key={i} />)}
          <AddableAuthorComponent />
        </label>
      </div>
    )
  }
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
