import React, { Component } from 'react'
import SlideshowComponent from '../components/slideshow_component'
import store from '../redux/store'
import AddableAuthorComponent from '../components/addable_author_component'
import PublicationSectionsComponent from '../components/publication_sections_component'
import { updatePublication, deleteAuthor } from '../redux/actions'
import IconElement from '../elements/icon_element'

let currentUser = store.getState().currentUser
store.subscribe(() => currentUser = store.getState().currentUser)

export default class NewPublicationView extends Component {
  updateStore(name, value) {
    let payload = {}
    payload[name] = value
    store.dispatch(updatePublication(payload))
  }

  publishPublication() {
    store.dispatch(updatePublication({ published: true }))
  }

  render() {
    return (
      <SlideshowComponent slides={[<Slide0 key={0} />, <Slide1 updateStore={this.updateStore.bind(this)} key={1} />, <Slide2 updateStore={this.updateStore.bind(this)} key={2} />, <Slide3 updateStore={this.updateStore.bind(this)} onChange={this.updateStore.bind(this)} key={3} />, <Slide4 updateStore={this.updateStore.bind(this)} onChange={this.updateStore.bind(this)} key={4} />, <Slide5 history={this.props.history} key={5} />]} />
    )
  }
}

class Slide0 extends Component {
  componentWillMount() {
    this.props.validateSlide()
  }

  render() {
    return (
      <div>
        <h1>Welcome to Empiri&rsquo;s Publishing System</h1>
        <h3>Here you can publish your work safely</h3>
        <p>More instructions on how it works and its benefits</p>
      </div>
    )
  }
}

class Slide1 extends Component {
  componentWillUnmount() {
    $.ajax({
      type: 'POST',
      url: 'http://localhost:4000/publications/',
      data: JSON.stringify({ publication: { title: store.getState().publicationInProgress.title }}),
      contentType: 'application/json'
    }).done(({ publication }) => store.dispatch(updatePublication({ id: publication.id })))
  }

  onChange(e) {
    if(e.target.value.length > 20) {
      this.props.validateSlide()
      this.props.updateStore(e.target.name, e.target.value)
    }
  }

  render() {
    return (
      <div className="slide component">
        <h1>Welcome to your new publication!</h1>
        <h3>What will you call it?</h3>
        <label>
          Publication Title
          <input type="text" name="title" onChange={this.onChange.bind(this)} />
        </label>
      </div>
    )
  }
}

class Slide2 extends Component {
  componentWillUnmount() {
    $.ajax({
      type: 'PATCH',
      url:'http://localhost:4000/publications/' + store.getState().publicationInProgress.id,
      data: JSON.stringify({ publication: { abstract: store.getState().publicationInProgress.abstract }}),
      contentType: 'application/json'
    })
  }

  onChange(e) {
    if(e.target.value.length > 20) {
      this.props.validateSlide()
      this.props.updateStore(e.target.name, e.target.value)
    }
  }

  render() {
    return (
      <div className="slide component">
        <h2>What is your paper about?</h2>
        <label>
          Abstract
          <textarea type="text" name="abstract" onChange={this.onChange.bind(this)} />
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

class SavedAuthor extends Component {
  deleteAuthor() {
    store.dispatch(deleteAuthor(this.props.author.email))
  }

  render() {
    return(
      <div>
        {this.props.author.first_name} {this.props.author.last_name}, {this.props.author.title} {this.props.author.email}
        <IconElement iconType="fontawesome" iconName="close" onClick={this.deleteAuthor.bind(this)} />
      </div>
    )
  }
}

class Slide3 extends Component {
  componentWillMount() {
    this.props.validateSlide()
    this.state = { authors: store.getState().publicationInProgress.authors }
    store.subscribe(() => this.setState({ authors: store.getState().publicationInProgress.authors }))
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
          {this.state.authors.map((author, i) => <SavedAuthor author={author} index={i} key={i} />)}
          <AddableAuthorComponent />
        </label>
      </div>
    )
  }
}

const Slide4 = ({ validateSlide }) => <PublicationSectionsComponent validateSlide={validateSlide} />

class Slide5 extends Component {
  componentWillMount() {
    this.props.validateSlide()
  }

  publishPublication() {
    const publicationId = store.getState().publicationInProgress.id
    $.ajax({
      type: 'PATCH',
      url: `http://localhost:4000/publications/${publicationId}`,
      data: JSON.stringify({ publication: { published: true } }),
      contentType: 'application/json',
    }).done(() => {
      store.dispatch(updatePublication({ published: true }))
      this.props.history.push(`/publications/${publicationId}`)
    })
  }

  render() {
    return (
      <div className="slide component">
        <h2>Almost Finished!</h2>
        <button>Save For Later</button>
        <button onClick={this.publishPublication.bind(this)}>Publish Now!</button>
      </div>
    )
  }
}
