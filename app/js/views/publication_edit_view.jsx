import React, { Component } from 'react'
import SlideshowComponent from '../components/slideshow_component'
import store from '../redux/store'
import AddableAuthorComponent from '../components/addable_author_component'
import PublicationSectionsComponent from '../components/publication_sections_component'
import { updatePublication, deleteAuthor } from '../redux/actions'
import IconElement from '../elements/icon_element'

function updateStore(name, value) {
  const payload = { [name]: value }
  store.dispatch(updatePublication(payload))
}

export default class PublicationEditView extends Component {
  componentWillMount() {
    this.state = { title: '', abstract: '' }
    const publicationId = this.props.routeParams.publicationId
    $.get(`http://localhost:4000/publications/${publicationId}`).done(({ publication }) => {
      this.unsubscribe = store.subscribe(() => this.setState(store.getState().publicationInProgress))
      store.dispatch(updatePublication(publication))
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  publishPublication() {
    store.dispatch(updatePublication({ published: true }))
  }

  render() {
    return (
      <SlideshowComponent slides={[
        <Slide1 title={this.state.title} key={1} />,
        <Slide2 abstract={this.state.abstract} key={2} />,
        <Slide3 key={3} />,
        <Slide4 key={4} />,
        <Slide5 history={this.props.history} key={5} />
      ]} />
    )
  }
}

class Slide1 extends Component {
  componentWillUnmount() {
    const publication = store.getState().publicationInProgress
    $.ajax({
      type: 'PATCH',
      url: `http://localhost:4000/publications/${publication.id}`,
      data: JSON.stringify({ publication: { title: publication.title }}),
      contentType: 'application/json'
    })
  }

  onChange(e) {
    updateStore(e.target.name, e.target.value)
  }

  render() {
    return (
      <div className="slide component">
        <h1>Welcome back to your publication!</h1>
        <h3>Are you changing it&rsquo;s title?</h3>
        <label>
          Publication Title
          <input type="text" name="title" value={this.props.title} onChange={this.onChange} />
        </label>
      </div>
    )
  }
}

class Slide2 extends Component {
  componentWillUnmount() {
    const publication = store.getState().publicationInProgress
    $.ajax({
      type: 'PATCH',
      url: `http://localhost:4000/publications/${publication.id}`,
      data: JSON.stringify({ publication: { abstract: publication.abstract }}),
      contentType: 'application/json'
    })
  }

  onChange(e) {
    updateStore(e.target.name, e.target.value)
  }

  render() {
    return (
      <div className="slide component">
        <h2>Need to update the abstract?</h2>
        <label>
          Abstract
          <textarea type="text" name="abstract" value={this.props.abstract} onChange={this.onChange.bind(this)} />
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
    this.state = { authors: store.getState().publicationInProgress._embedded.authors }
    this.unsubscribe = store.subscribe(() => this.setState({ authors: store.getState().publicationInProgress._embedded.authors }))
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

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
          {this.state.authors.map((author, i) => <SavedAuthor author={author} index={i} key={i} />)}
          <AddableAuthorComponent />
        </label>
      </div>
    )
  }
}

const Slide4 = () => <PublicationSectionsComponent />

class Slide5 extends Component {
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
