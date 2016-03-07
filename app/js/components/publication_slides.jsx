import React, { Component } from 'react'
import store from '../redux/store'
import AddableAuthorComponent from '../components/addable_author_component'
import PublicationSectionsComponent from '../components/publication_sections_component'
import { updatePublication, deleteAuthor } from '../redux/actions'
import IconElement from '../elements/icon_element'
import { Link } from 'react-router'
import ajax from '../lib/ajax'

export class Slide0 extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to Empiri&#39;s Publishing System</h1>
        <h3>Here you can publish your work safely</h3>
        <p>More instructions on how it works and its benefits</p>
      </div>
    )
  }
}

export class Slide1 extends Component {
  componentWillMount() {
    this.state = { title: store.getState().publication.get('title') }
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState({ title: store.getState().publication.get('title') }))
  }

  componentWillUnmount() {
    this.unsubscribe()
    const publicationId = store.getState().publication.get('id')
    if (publicationId) {
      ajax.request({
        type: 'PATCH',
        url: `${ajax.getDomain()}/publications/${publicationId}`,
        data: JSON.stringify({ publication: { title: this.state.title }}),
        contentType: 'application/json',
        success: ({ publication }) => store.dispatch(updatePublication({ id: publication.id, title: this.state.title }))
      })
    } else {
      ajax.request({
        type: 'POST',
        url: `${ajax.getDomain()}/publications/`,
        data: JSON.stringify({ publication: { title: this.state.title }}),
        contentType: 'application/json',
        success: ({ publication }) => store.dispatch(updatePublication({ id: publication.id, title: this.state.title }))
      })
    }
  }

  onChange(e) {
    this.setState({ title: e.target.value })
  }

  render() {
    return (
      <div className="slide component">
        <h1>Welcome to your new publication!</h1>
        <h3>What will you call it?</h3>
        <label>
          Publication Title
          <input type="text" name="title" value={this.state.title} onChange={this.onChange.bind(this)} />
        </label>
      </div>
    )
  }
}

export class Slide2 extends Component {
  componentWillMount() {
    this.state = { abstract: store.getState().publication.get('abstract') }
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState({ abstract: store.getState().publication.get('abstract' ) }))
  }

  componentWillUnmount() {
    this.unsubscribe()
    const publication = store.getState().publication
    ajax.request({
      type: 'PATCH',
      url: `${ajax.getDomain()}/publications/${publication.get('id')}`,
      data: JSON.stringify({ publication: { abstract: this.state.abstract }}),
      contentType: 'application/json',
      success: ({ publication }) => store.dispatch(updatePublication({ abstract: publication.abstract }))
    })
  }

  onChange(e) {
    this.setState({ abstract: e.target.value })
  }

  render() {
    return (
      <div className="slide component">
        <h2>What is your paper about?</h2>
        <label>
          Abstract
          <textarea type="text" name="abstract" value={this.state.abstract} onChange={this.onChange.bind(this)} />
        </label>
      </div>
    )
  }
}

export class Slide3 extends Component {
  componentWillMount() {
    this.state = { authors: store.getState().publication.getIn(['_embedded', 'authors']) }
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState({ authors: store.getState().publication.getIn(['_embedded', 'authors']) }))
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
          {this.state.authors.map((author) => <SavedAuthor author={author} key={author.get('id')} />)}
          <AddableAuthorComponent />
        </label>
      </div>
    )
  }
}

class SavedAuthor extends Component {
  deleteAuthor() {
    const publicationId = store.getState().publication.get('id')
    const authorId = this.props.author.get('id')
    ajax.request({
      type: 'DELETE',
      url: `${ajax.getDomain()}/publications/${publicationId}/authors/${authorId}`,
      contentType: 'application/json',
      success: () => store.dispatch(deleteAuthor(authorId))
    })
  }

  render() {
    return(
      <div>
        {this.props.author.get('first_name')} {this.props.author.get('last_name')}, {this.props.author.get('title')} {this.props.author.get('email')}
        <IconElement iconType="fontawesome" iconName="close" onClick={this.deleteAuthor.bind(this)} />
      </div>
    )
  }
}

export class Slide5 extends Component {
  publishPublication() {
    const publicationId = store.getState().publication.get('id')
    ajax.request({
      type: 'PATCH',
      url: `${ajax.getDomain()}/publications/${publicationId}`,
      data: JSON.stringify({ publication: { published: true } }),
      contentType: 'application/json',
      success: () => {
        store.dispatch(updatePublication({ published: true }))
        this.props.history.push(`/publications/${publicationId}`)
      }
    })
  }

  render() {
    return (
      <div className="slide component">
        <h2>Almost Finished!</h2>
        <Link to={`/users/${store.getState().currentUser.id}`}><button>Save For Later</button></Link>
        <button onClick={this.publishPublication.bind(this)}>Publish Now!</button>
      </div>
    )
  }
}
